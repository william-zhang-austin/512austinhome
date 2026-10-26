// Site lead form -> Follow Up Boss (Vercel serverless function, POST /api/lead-fub/).
//
// Two forms post here:
//  - the builder-incentives slide-in (src/components/IncentivesCapture.astro)
//  - the home-search page (src/pages/home-search.astro), form: "home-search", with quiz answers
// Both send { name, email, phone, page, utm_*, website, sms_consent }. We validate, drop bots, and create a
// "Registration" event in FUB, which creates or updates the person and fires FUB's own
// new-lead alert and action plans.
//
// Env (Vercel, Sensitive): FUB_API_KEY (shared with api/tally-fub.js).

const FORMS = {
	incentives: { source: '512austinhome.com - Builder Incentives List', tags: ['Buyer Lead', 'New Construction', 'Incentives List'], medium: 'slide-in', campaign: 'builder-incentives-list', description: 'Builder incentives list signup' },
	'home-search': { source: '512austinhome.com - Home Search', tags: ['Buyer Lead', 'Home Search Form'], medium: 'home-search', campaign: 'home-search', description: 'Home search request' },
};
// Version of the consent wording (SMS_CONSENT in src/consts.ts) shown when the box was checked.
const CONSENT_VERSION = '2026-10-24';
const ALLOWED_ORIGINS = ['https://512austinhome.com', 'https://www.512austinhome.com'];

function splitName(full = '') {
	const parts = String(full).trim().split(/\s+/);
	return { firstName: parts.shift() || '', lastName: parts.join(' ') };
}

function clean(s, max = 200) {
	return String(s ?? '').trim().slice(0, max);
}

// Pull the builder or city out of the page path, for a tag William can filter on.
function pageTag(path = '') {
	const m = path.match(/^\/(builders|incentives|deals|new-construction|compare|guides)\/([^/]+)\//);
	return m ? `${m[1]}: ${m[2]}` : '';
}

export default async function handler(req, res) {
	if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });
	const origin = req.headers.origin || '';
	const isPreview = /\.vercel\.app$/.test(origin.replace(/^https?:\/\//, ''));
	if (origin && !ALLOWED_ORIGINS.includes(origin) && !isPreview) {
		return res.status(403).json({ error: 'bad origin' });
	}
	if (!process.env.FUB_API_KEY) return res.status(500).json({ error: 'FUB_API_KEY not set' });

	const b = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};

	// Honeypot: real people never see or fill "website". Pretend it worked.
	if (clean(b.website)) return res.status(200).json({ ok: true });

	const name = clean(b.name, 120);
	const email = clean(b.email, 200).toLowerCase();
	const digits = clean(b.phone, 40).replace(/\D/g, '').replace(/^1(?=\d{10}$)/, '');
	if (name.length < 2) return res.status(400).json({ error: 'name' });
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return res.status(400).json({ error: 'email' });
	if (digits.length !== 10) return res.status(400).json({ error: 'phone' });
	const phone = `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;

	const form = FORMS[clean(b.form, 40)] ? clean(b.form, 40) : 'incentives';
	const F = FORMS[form];
	const smsConsent = b.sms_consent === true;
	const page = clean(b.page, 300);
	const campaign = clean(b.utm_campaign, 100);
	const tags = [...F.tags, smsConsent ? 'SMS Consent' : 'No SMS Consent'];
	const pt = pageTag(page);
	if (pt) tags.push(pt);
	if (campaign) tags.push(campaign);

	const a = b.answers && typeof b.answers === 'object' ? b.answers : {};
	const answerLines = Object.entries(a).slice(0, 12).map(([k, v]) => `${clean(k, 40)}: ${clean(v, 100)}`);
	const message = [
		form === 'home-search' ? 'Submitted the home search form.' : 'Asked for the current Austin builder incentives list.',
		...answerLines,
		`Signed up on: https://512austinhome.com${page}`,
		`Came from: ${clean(b.utm_source, 100) || clean(b.referrer, 200) || 'direct / unknown'}`,
		smsConsent
			? `SMS/call consent: CHECKED (wording version ${CONSENT_VERSION}) at ${new Date().toISOString()}.`
			: 'SMS/call consent: NOT checked. Do not text; email or a direct reply only.',
		b.fbclid ? `fbclid: ${clean(b.fbclid, 300)}` : '',
		'Next: reach out within the day.',
	].filter(Boolean).join('\n');

	const event = {
		source: F.source,
		system: '512austinhome.com',
		type: 'Registration',
		message,
		description: F.description,
		pageUrl: `https://512austinhome.com${page}`,
		person: {
			...splitName(name),
			emails: [{ value: email }],
			phones: [{ value: phone, type: 'mobile' }],
			tags,
		},
		campaign: {
			source: clean(b.utm_source, 100) || 'website',
			medium: clean(b.utm_medium, 100) || F.medium,
			campaign: campaign || F.campaign,
		},
	};

	const r = await fetch('https://api.followupboss.com/v1/events', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Basic ' + Buffer.from(process.env.FUB_API_KEY + ':').toString('base64'),
			'X-System': '512austinhome', ...(process.env.FUB_SYSTEM_KEY ? { 'X-System-Key': process.env.FUB_SYSTEM_KEY } : {}),
		},
		body: JSON.stringify(event),
	});
	if (!r.ok) {
		console.error('FUB error', r.status, (await r.text()).slice(0, 500));
		return res.status(502).json({ error: 'FUB rejected the lead' });
	}
	return res.status(200).json({ ok: true });
}
