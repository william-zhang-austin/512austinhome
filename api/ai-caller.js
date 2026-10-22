// AI outbound caller: new FUB leads -> ElevenLabs "Outbound Caller (Ashley)" phone call (cron, GET /api/ai-caller/).
//
// FUB is the state store, so William can see everything in the CRM:
//   tag "AI Call Queued"            in the queue
//   custom field customAICallState  JSON {attempts, next, conv, rule}
//   end tags                        "AI Call - Booked" / "- Reached" / "- No Answer" / "- Do Not Call" / "- Wrong Number"
// Every run: (1) queue brand-new leads whose source matches RULES, (2) read finished calls and write a FUB
// note + tags, (3) place calls that are due, inside CALL_HOURS. Retries follow the rule's preset.
//
// Safety: unless AI_CALLER_LIVE === 'true', only numbers in AI_CALLER_TEST_NUMBERS are queued or called.
// ?dry=1 plans everything and writes nothing.
//
// Env (Vercel, Sensitive): FUB_API_KEY, ELEVENLABS_API_KEY, CRON_SECRET,
//   AI_CALLER_LIVE ('true' to call real leads), AI_CALLER_TEST_NUMBERS (comma list, e.g. +15127663188).

const AGENT_ID = 'agent_9501m5gqbrrhfsdb4gz5hz70qy41';
const PHONE_NUMBER_ID = 'phnum_01jx8vps6ne9bbtw7tn1ch639b'; // (737) 263-1080
const TZ = 'America/Chicago';
const QUEUE_TAG = 'AI Call Queued';
const MAX_CALLS_PER_RUN = 3;
const NEW_LEAD_WINDOW_MIN = 60; // only auto-queue leads created in the last hour

// Hours after the first call for each retry. Katherine's presets: Light 2/3d, Standard 3/7d, Persistent 5/14d.
const PRESETS = {
	light: [0, 24],
	standard: [0, 3, 24, 72],
	persistent: [0, 3, 24, 72, 168],
};

// First match wins (Katherine calls these lead flow rules). interest = what the agent says they asked about.
const RULES = [
	{ name: 'builder-incentives', source: /Builder Incentives/i, interest: 'the Austin builder incentives list', preset: 'standard' },
	{ name: 'home-value', source: /What's Happening in Austin|home value|valuation/i, interest: 'what your home is worth', preset: 'standard' },
	{ name: 'facebook', source: /facebook|meta|instagram/i, interest: 'homes in Austin', preset: 'standard' },
	{ name: 'website', source: /512austinhome/i, interest: 'homes in Austin', preset: 'light' },
];
const NEVER_SOURCES = /Phone - Ashley/i; // they already talked to Ashley

// Per-day calling hours, Central Time, [startHour, endHour). Sunday = 0.
const CALL_HOURS = { 0: [12, 18], 1: [9, 20], 2: [9, 20], 3: [9, 20], 4: [9, 20], 5: [9, 19], 6: [10, 18] };

const END_TAGS = {
	booked: 'AI Call - Booked',
	interested_no_booking: 'AI Call - Reached',
	not_interested: 'AI Call - Reached',
	do_not_call: 'AI Call - Do Not Call',
	wrong_number: 'AI Call - Wrong Number',
};
const NOT_REACHED = new Set(['voicemail', 'no_conversation', '']);

const fubAuth = () => 'Basic ' + Buffer.from(process.env.FUB_API_KEY + ':').toString('base64');

async function fub(path, opts = {}) {
	const r = await fetch('https://api.followupboss.com/v1' + path, {
		...opts,
		headers: { 'Content-Type': 'application/json', Authorization: fubAuth(), 'X-System': '512austinhome', ...(opts.headers || {}) },
	});
	if (!r.ok) throw new Error(`FUB ${r.status} ${path}: ${(await r.text()).slice(0, 300)}`);
	return r.json();
}

async function el(path, opts = {}) {
	const r = await fetch('https://api.elevenlabs.io' + path, {
		...opts,
		headers: { 'Content-Type': 'application/json', 'xi-api-key': process.env.ELEVENLABS_API_KEY, ...(opts.headers || {}) },
	});
	if (!r.ok) throw new Error(`ElevenLabs ${r.status} ${path}: ${(await r.text()).slice(0, 300)}`);
	return r.json();
}

function e164(raw = '') {
	const d = String(raw).replace(/\D/g, '').replace(/^1(?=\d{10}$)/, '');
	return d.length === 10 ? '+1' + d : '';
}

function bestPhone(p) {
	const phones = p.phones || [];
	const pick = phones.find((x) => x.type === 'mobile' && x.status !== 'Not Valid') || phones.find((x) => x.status !== 'Not Valid');
	return pick ? e164(pick.value) : '';
}

function readState(p) {
	try {
		return JSON.parse(p.customAICallState || '{}');
	} catch {
		return {};
	}
}

// Central Time parts for a Date.
function ct(d) {
	const f = new Intl.DateTimeFormat('en-US', { timeZone: TZ, weekday: 'short', hour: 'numeric', hourCycle: 'h23' }).formatToParts(d);
	const wd = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(f.find((x) => x.type === 'weekday').value);
	return { wd, hour: Number(f.find((x) => x.type === 'hour').value) };
}

function inHours(d) {
	const { wd, hour } = ct(d);
	const [a, b] = CALL_HOURS[wd];
	return hour >= a && hour < b;
}

// Push a time forward (in 15-minute steps) to the next moment inside CALL_HOURS.
function nextOpen(d) {
	const t = new Date(d);
	for (let i = 0; i < 4 * 24 * 8 && !inHours(t); i++) t.setMinutes(t.getMinutes() + 15);
	return t;
}

function allowed(phone) {
	if (process.env.AI_CALLER_LIVE === 'true') return true;
	const test = (process.env.AI_CALLER_TEST_NUMBERS || '').split(',').map((s) => e164(s.trim())).filter(Boolean);
	return test.includes(phone);
}

const matchRule = (p) => (NEVER_SOURCES.test(p.source || '') ? null : RULES.find((r) => r.source.test(p.source || '')) || null);

async function setPerson(id, tags, state, dry) {
	if (dry) return;
	await fub(`/people/${id}`, { method: 'PUT', body: JSON.stringify({ tags, customAICallState: state ? JSON.stringify(state) : '' }) });
}

async function note(personId, subject, body, dry) {
	if (dry) return;
	await fub('/notes', { method: 'POST', body: JSON.stringify({ personId, subject, body }) });
}

// (1) Queue brand-new leads.
async function intake(log, dry) {
	const { people = [] } = await fub('/people?sort=-created&limit=25&fields=allFields');
	const cutoff = Date.now() - NEW_LEAD_WINDOW_MIN * 60e3;
	for (const p of people) {
		if (new Date(p.created).getTime() < cutoff) break;
		if ((p.tags || []).some((t) => t.startsWith('AI Call'))) continue;
		const rule = matchRule(p);
		const phone = bestPhone(p);
		if (!rule || !phone) continue;
		if (!allowed(phone)) {
			log.push(`skip ${p.id} ${p.name}: not live and not a test number`);
			continue;
		}
		const state = { attempts: 0, next: nextOpen(new Date()).toISOString(), rule: rule.name };
		await setPerson(p.id, [...(p.tags || []), QUEUE_TAG], state, dry);
		log.push(`queued ${p.id} ${p.name} (${p.source}) rule=${rule.name}`);
	}
}

function summarize(conv) {
	const dc = conv.analysis?.data_collection_results || {};
	const v = (k) => String(dc[k]?.value ?? '').trim();
	let outcome = v('outcome').toLowerCase();
	const tools = (conv.transcript || []).flatMap((t) => (t.tool_calls || []).map((c) => c.tool_name));
	if (tools.some((n) => /^book_meeting/.test(n))) outcome = 'booked';
	const lines = [
		`Outcome: ${outcome || 'unknown'} (${conv.metadata?.call_duration_secs ?? 0}s call)`,
		v('summary') && `Summary: ${v('summary')}`,
		['intent', 'area', 'timeline', 'budget', 'preapproved', 'email', 'callback_time'].map((k) => v(k) && `${k}: ${v(k)}`).filter(Boolean).join(' | '),
		`Transcript: https://elevenlabs.io/app/agents/history/${conv.conversation_id}`,
	].filter(Boolean);
	return { outcome, body: lines.join('\n') };
}

// (2) Close out finished calls, (3) place due calls.
async function work(log, dry) {
	const { people = [] } = await fub(`/people?tags=${encodeURIComponent(QUEUE_TAG)}&limit=100&fields=allFields`);
	let placed = 0;
	for (const p of people) {
		const st = readState(p);
		const rule = RULES.find((r) => r.name === st.rule) || RULES[RULES.length - 1];
		const plan = PRESETS[rule.preset];
		const otherTags = (p.tags || []).filter((t) => t !== QUEUE_TAG);

		if (st.conv) {
			const conv = await el(`/v1/convai/conversations/${st.conv}`);
			if (['initiated', 'in-progress', 'processing'].includes(conv.status)) continue;
			const { outcome, body } = summarize(conv);
			await note(p.id, `AI call ${st.attempts}/${plan.length}: ${outcome || conv.status}`, body, dry);
			if (END_TAGS[outcome]) {
				await setPerson(p.id, [...otherTags, END_TAGS[outcome]], { ...st, conv: null, done: outcome }, dry);
				log.push(`done ${p.id} ${p.name}: ${outcome}`);
				continue;
			}
			// Delay before the next try: 24h for "call me later", else the gap to the preset's next offset.
			const notReached = NOT_REACHED.has(outcome) || conv.status === 'failed';
			const delayHours =
				outcome === 'callback_later' ? 24 : notReached && st.attempts < plan.length ? plan[st.attempts] - plan[st.attempts - 1] : undefined;
			if (delayHours === undefined) {
				await setPerson(p.id, [...otherTags, 'AI Call - No Answer'], { ...st, conv: null, done: 'no_answer' }, dry);
				log.push(`done ${p.id} ${p.name}: out of tries (${outcome})`);
				continue;
			}
			const next = nextOpen(new Date(Date.now() + delayHours * 3600e3));
			Object.assign(st, { conv: null, next: next.toISOString() });
			await setPerson(p.id, p.tags, st, dry);
			log.push(`retry ${p.id} ${p.name} at ${next.toISOString()} (${outcome})`);
			continue;
		}

		const phone = bestPhone(p);
		if (!phone || !allowed(phone)) {
			log.push(`hold ${p.id} ${p.name}: ${phone ? 'not live and not a test number' : 'no valid phone'}`);
			continue;
		}
		if (new Date(st.next || 0) > new Date() || !inHours(new Date()) || placed >= MAX_CALLS_PER_RUN) continue;

		placed++;
		if (dry) {
			log.push(`would call ${p.id} ${p.name} ${phone} (try ${(st.attempts || 0) + 1}/${plan.length})`);
			continue;
		}
		const r = await el('/v1/convai/twilio/outbound-call', {
			method: 'POST',
			body: JSON.stringify({
				agent_id: AGENT_ID,
				agent_phone_number_id: PHONE_NUMBER_ID,
				to_number: phone,
				conversation_initiation_client_data: {
					dynamic_variables: { lead_first_name: p.firstName || 'there', lead_interest: rule.interest, lead_source: p.source || 'our website' },
				},
			}),
		});
		Object.assign(st, { attempts: (st.attempts || 0) + 1, conv: r.conversation_id, last: new Date().toISOString() });
		await setPerson(p.id, p.tags, st, false);
		log.push(`called ${p.id} ${p.name} ${phone} conv=${r.conversation_id}`);
	}
}

export default async function handler(req, res) {
	const auth = req.headers.authorization || '';
	if (!process.env.CRON_SECRET || auth !== `Bearer ${process.env.CRON_SECRET}`) return res.status(401).json({ error: 'unauthorized' });
	for (const k of ['FUB_API_KEY', 'ELEVENLABS_API_KEY']) if (!process.env[k]) return res.status(500).json({ error: `${k} not set` });
	const dry = String(req.query?.dry || '') === '1';
	const log = [];
	try {
		await intake(log, dry);
		await work(log, dry);
		return res.status(200).json({ ok: true, dry, live: process.env.AI_CALLER_LIVE === 'true', log });
	} catch (e) {
		console.error('ai-caller', e);
		return res.status(500).json({ error: String(e.message || e), log });
	}
}

export const _test = { nextOpen, inHours, matchRule, summarize, e164 };
