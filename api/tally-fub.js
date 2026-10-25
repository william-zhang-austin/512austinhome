// Tally webhook -> Follow Up Boss lead (Vercel serverless function, POST /api/tally-fub).
//
// Two Tally forms post here on every completed submission (both webhooks share one signing secret):
//  - xXeGvy: 512austinhome.com /home-value/ -> "Seller Inquiry"
//  - VpLZDv: austinfangchan.com Chinese buy/sell form -> buyer "Registration" / seller "Seller Inquiry"
// We verify the Tally signature, translate the answers, and create an event in FUB, which
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

function homeValueEvent(fields) {
	const a = answers(fields);
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
	return event;
}

// austinfangchan.com (VpLZDv). Question labels there are placeholders, so read answers by
// Tally question id (field key "question_<id>"); hidden fields (source, page, utm_*) by name.
const ZH = {
	intent: 'eNzzye', buyWhen: 'WeqqQN', budget: 'ajzzkB', preapproval: '61PP4k', sellWhen: '7JEEjZ',
	value: 'b2zzgL', house: 'A699aD', address: 'BLee6Q', other: 'k0zzgR',
	first: 'v0zzg0', last: 'KPGGO8', phone: 'LEOOVv', email: 'p0zz5J', wechat: '1bRROp',
};
const ZH_WHEN = { '1到3个月': '0-3 months', '3到6个月': '3-6 months', '6到9个月': '6-9 months', '9到12个月': '9-12 months', '12个月以上': '12+ months' };
const ZH_PRICE = { '35万美元以下': 'Under $350K', '35万到50万': '$350K-$500K', '50万到75万': '$500K-$750K', '75万到100万': '$750K-$1M', '100万到150万': '$1M-$1.5M', '150万到200万': '$1.5M-$2M', '200万以上': '$2M+' };
const ZH_LOAN = { '已经拿到了': 'Pre-approved', '还没有，但已经跟贷款人聊过': 'Talked to a lender', '还没有，请帮我推荐靠谱的贷款人': 'Needs a lender referral', '全现金购买': 'Cash' };

function zhLeadEvent(fields = []) {
	const byId = {};
	const named = answers(fields);
	for (const f of fields) {
		const id = String(f.key || '').replace(/^question_/, '').split('_')[0];
		let v = f.value;
		if (Array.isArray(v) && Array.isArray(f.options)) v = v.map((x) => (f.options.find((o) => o.id === x) || {}).text || x).join(', ');
		if (id) byId[id] = v ?? '';
	}
	const get = (k) => String(byId[ZH[k]] ?? '').trim();
	const intent = get('intent');
	const buying = intent === '我想买房' || intent.startsWith('两个都要');
	const selling = intent === '我想卖房' || intent.startsWith('两个都要');
	const en = (map, v) => map[v] || v;
	const buyWhen = en(ZH_WHEN, get('buyWhen'));
	const sellWhen = en(ZH_WHEN, get('sellWhen'));
	const budget = en(ZH_PRICE, get('budget'));
	const loan = en(ZH_LOAN, get('preapproval'));
	const value = en(ZH_PRICE, get('value'));
	const wechat = get('wechat');
	const address = get('address');
	const page = named.page || '';

	const tags = ['奥斯汀房产网', 'Mandarin'];
	if (buying) tags.push('Buyer Lead');
	if (selling) tags.push('Seller Lead');
	if (buyWhen) tags.push(`Buy timeline: ${buyWhen}`);
	if (sellWhen) tags.push(`Sell timeline: ${sellWhen}`);
	if (budget) tags.push(`Budget: ${budget}`);
	if (loan === 'Needs a lender referral') tags.push('Needs Lender');
	if (wechat) tags.push('Has WeChat');
	if (named.utm_campaign) tags.push(named.utm_campaign);

	const message = [
		`austinfangchan.com form (Chinese): ${intent || 'no answer'}`,
		wechat && `WeChat ID: ${wechat}  <- add on WeChat first`,
		buying && `Buy: ${buyWhen || '?'} | budget ${budget || '?'} | ${loan || 'loan status ?'}`,
		selling && `Sell: ${sellWhen || '?'} | owner's value guess ${value || '?'} | ${address || 'no address'}`,
		get('house') && `About the house: ${get('house')}`,
		get('other') && `Question: ${get('other')}`,
		`Page: https://austinfangchan.com${page}`,
		`Came from: ${named.utm_source || named.source || 'austinfangchan'}${named.utm_medium ? ` (${named.utm_medium})` : ''}`,
		'Consent: form says submitting agrees to calls, texts and email from William (STOP to opt out). Lead reads Chinese.',
		'Next: reach out within one business day (the thank-you page promises it).',
	].filter(Boolean).join('\n');

	const street = address.split(',')[0].trim();
	return {
		source: 'austinfangchan.com',
		system: 'austinfangchan.com',
		type: selling ? 'Seller Inquiry' : buying ? 'Registration' : 'General Inquiry',
		message,
		description: `Chinese site lead: ${[buying && 'buy', selling && 'sell'].filter(Boolean).join(' + ') || 'other question'}`,
		pageUrl: `https://austinfangchan.com${page}`,
		person: {
			firstName: get('first'),
			lastName: get('last'),
			emails: get('email') ? [{ value: get('email') }] : [],
			phones: get('phone') ? [{ value: get('phone'), type: 'mobile' }] : [],
			tags,
		},
		...(selling && street ? { property: { street, state: 'TX' } } : {}),
		campaign: { source: named.utm_source || 'austinfangchan', medium: named.utm_medium || 'lead-form', campaign: named.utm_campaign || 'zh-buy-sell-form' },
	};
}

export default async function handler(req, res) {
	if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });
	if (!verify(req)) return res.status(401).json({ error: 'bad signature' });
	if (!process.env.FUB_API_KEY) return res.status(500).json({ error: 'FUB_API_KEY not set' });

	const data = req.body?.data || {};
	const event = data.formId === 'VpLZDv' ? zhLeadEvent(data.fields) : homeValueEvent(data.fields);

	const r = await fetch('https://api.followupboss.com/v1/events', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Basic ' + Buffer.from(process.env.FUB_API_KEY + ':').toString('base64'),
			'X-System': '512austinhome', ...(process.env.FUB_SYSTEM_KEY ? { 'X-System-Key': process.env.FUB_SYSTEM_KEY } : {}),
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
