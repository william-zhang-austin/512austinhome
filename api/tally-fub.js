// Tally webhook -> Follow Up Boss lead (Vercel serverless function, POST /api/tally-fub).
//
// Tally form xXeGvy (/home-value/) posts here on every completed submission. We verify the
// Tally signature, translate the answers, and create a "Seller Inquiry" event in FUB, which
// creates or updates the person and fires FUB's own new-lead alert and action plans.
//
// Env (Vercel, Sensitive): FUB_API_KEY, TALLY_SIGNING_SECRET.
import crypto from 'node:crypto';

const SOURCE = "YouTube - What's Happening in Austin";

function verify(req) {
	const secret = process.env.TALLY_SIGNING_SECRET;
	if (!secret) return true; // not configured yet: accept, but set it as soon as the webhook exists
	const sig = req.headers['tally-signature'];
	if (!sig) return false;
	const expected = crypto.createHmac('sha256', secret).update(JSON.stringify(req.body)).digest('base64');
	const a = Buffer.from(sig);
	const b = Buffer.from(expected);
	return a.length === b.length && crypto.timingSafeEqual(a, b);
}

// Flatten Tally fields to { label: value }, mapping choice ids to their text.
function answers(fields = []) {
	const out = {};
	for (const f of fields) {
		let v = f.value;
		if (Array.isArray(v) && Array.isArray(f.options)) {
			v = v.map((id) => (f.options.find((o) => o.id === id) || {}).text || id).join(', ');
		}
		if (f.label) out[f.label] = v ?? '';
	}
	return out;
}

function splitName(full = '') {
	const parts = full.trim().split(/\s+/);
	return { firstName: parts.shift() || '', lastName: parts.join(' ') };
}

function slug(s = '') {
	return String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export default async function handler(req, res) {
	if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });
	if (!verify(req)) return res.status(401).json({ error: 'bad signature' });
	if (!process.env.FUB_API_KEY) return res.status(500).json({ error: 'FUB_API_KEY not set' });

	const a = answers(req.body?.data?.fields);
	const timeline = a['When might you sell?'] || '';
	const reason = a["What's got you thinking about it?"] || '';
	const campaign = a.c || a.utm_campaign || '';
	const medium = a.utm_medium || '';
	const address = a.address || '';

	// "100 E Main St, Pflugerville, TX 78660" -> street + the parts we already have.
	const street = address.split(',')[0].trim();
	const tags = ['Seller Lead', 'WHA Seller Channel'];
	if (campaign) tags.push(campaign);
	if (timeline) tags.push(`Timeline: ${timeline}`);

	const mapsLink = a.lat && a.lng ? `https://www.google.com/maps?q=${a.lat},${a.lng}` : '';
	const message = [
		`Home valuation request: ${address}`,
		`When might you sell: ${timeline}`,
		`Why: ${reason}`,
		`Came from: ${campaign || 'unknown'} (${medium || 'unknown'})`,
		mapsLink && `Map: ${mapsLink}`,
		'Promised: price range + short comps video within 24 hours.',
	].filter(Boolean).join('\n');

	const event = {
		source: SOURCE,
		system: '512austinhome.com',
		type: 'Seller Inquiry',
		message,
		description: `Home value request (${timeline || 'no timeline'})`,
		person: {
			...splitName(a['Name']),
			emails: a['Email'] ? [{ value: a['Email'] }] : [],
			phones: a['Mobile number'] ? [{ value: a['Mobile number'] }] : [],
			tags,
		},
		property: {
			street,
			city: a.city || '',
			state: 'TX',
			code: a.zip || '',
		},
		campaign: { source: a.utm_source || 'youtube', medium, campaign: slug(campaign) },
	};

	const r = await fetch('https://api.followupboss.com/v1/events', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Basic ' + Buffer.from(process.env.FUB_API_KEY + ':').toString('base64'),
			'X-System': '512austinhome',
		},
		body: JSON.stringify(event),
	});
	const text = await r.text();
	if (!r.ok) {
		console.error('FUB error', r.status, text.slice(0, 500));
		return res.status(502).json({ error: 'FUB rejected the lead', status: r.status });
	}
	return res.status(200).json({ ok: true });
}
