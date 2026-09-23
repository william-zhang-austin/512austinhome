// The deals cluster: /deals/.
//
// This is the commercial-intent end of the site and it is the angle that matches
// what William actually does — he negotiates builder incentives, and the one
// search that has demonstrably produced a closed deal on this domain was a buyer
// looking for an agent who specialises in exactly that.
//
// COMPLIANCE AND HONESTY RULES FOR THIS FILE:
//  - No contract interpretation. Business practice and process only.
//  - No specific current prices or offers. Those live in current-offers.ts with
//    a verified-on date, and every page here carries the standing disclosure
//    that incentives change at any moment.
//  - Never claim inventory we cannot see. These pages explain where deals come
//    from and how to recognise one; the current list comes from a conversation.

export interface DealPage {
	slug: string;
	title: string;
	subtitle: string;
	/** Citable block. Answers the query on its own. */
	shortAnswer: string;
	/** Where the discount actually comes from for this kind of deal. */
	whereItComesFrom: string[];
	/** How to tell a real deal from a marketed one. */
	howToSpot: string[];
	/** The catch specific to this deal type. Every one has one. */
	watchFor: string[];
	faqs: { question: string; answer: string }[];
	contentUpdated: string;
}

/** The honest framing that heads the whole cluster. */
export const DEALS_PREMISE =
	'A real deal on Austin new construction is almost never a lower sticker price. It is a builder under pressure on one specific home, paying you through a rate buydown, closing cost contribution or design allowance because a recorded price cut would lower the comparable sales for every other home they still have to sell. That pressure is predictable: it builds on completed homes that have been standing, and it peaks at quarter end and at the calendar year end.';

export const DEAL_PAGES: DealPage[] = [
	{
		slug: 'quick-move-in',
		title: 'Quick Move-In Deals in Austin',
		subtitle: 'Where the largest builder concessions actually sit',
		shortAnswer: 'Quick move-in homes are already built or nearly finished, and they carry the largest concessions in Austin new construction. A completed unsold home is capital the builder cannot recycle, it costs them carrying cost every month, and it counts against the community\'s absorption rate. That pressure is what funds the incentive, and it grows the longer the house stands. The trade is that you take the finishes and the lot someone else chose.',
		whereItComesFrom: [
			'Carrying cost. Every month a finished home sits, the builder pays for it, and that number is what makes a concession cheaper than continuing to wait.',
			'Absorption targets. A standing home counts against how fast the community is selling, which is a number the builder reports upward.',
			'Quarter and year end. Builders manage to closing counts, so a home that can close inside the period is worth more to them than a slightly higher price next month.',
			'A plan that is not selling. Builders discount plans, not just houses, and a plan they have overbuilt gets attention before an individual home does.',
		],
		howToSpot: [
			'Ask the sales office which completed homes have been standing longest. They will usually tell you, and that list is the whole conversation.',
			'Ask what the home has already been reduced by and when. A home reduced twice is under more pressure than one reduced once.',
			'Ask what the builder is prepared to add on this specific home beyond the advertised program. The posted offer applies to everyone; what sits on top of it for one address is where the negotiation is.',
			'Compare the all-in monthly payment against a to-be-built of the same plan. The concession is frequently worth more than the finishes you would have picked.',
		],
		watchFor: [
			'You take the finishes as they are. Decide whether that actually matters to you before paying a premium to choose them yourself.',
			'The lot was chosen by the builder, not by you. Walk it, and look at what backs onto it and what is scheduled to be built nearby.',
			'A large concession on a home that has stood a long time is sometimes telling you something about the lot rather than about the builder\'s balance sheet.',
			'Quick move-in usually means the incentive is tied to closing fast. Make sure your financing can genuinely move at that speed before you commit to it.',
		],
		faqs: [
			{
				question: 'Are quick move-in homes cheaper in Austin?',
				answer: 'Usually yes on an effective basis, though often not on the list price. The discount arrives as a rate buydown or closing cost contribution rather than a price cut, because builders protect the sales price to avoid lowering the comparables for every unsold home in the community. Compare the all-in monthly payment rather than the sticker and quick move-in frequently wins.',
			},
			{
				question: 'How long does a new home sit before a builder discounts it?',
				answer: 'There is no fixed rule, but pressure builds steadily and jumps near a quarter end. A home that has been complete and unsold for several months is a materially different conversation from one finished last week. Asking which homes have been standing longest is the single most useful question you can put to a sales office.',
			},
			{
				question: 'Can I still negotiate on a quick move-in home?',
				answer: 'Yes, and it is where negotiation actually works. The advertised program applies to everyone; what is negotiable is what sits on top of it for one address. That conversation usually needs the sales manager rather than the agent in the model home, and it generally goes better through your agent than across the desk.',
			},
		],
		contentUpdated: '2026-09-23',
	},
	{
		slug: 'price-reductions',
		title: 'Austin New Home Price Reductions',
		subtitle: 'The rarest concession, and why you should ask for it anyway',
		shortAnswer: 'A straight price reduction is the rarest builder concession in Austin, because a recorded cut becomes a comparable sale that lowers the value of every unsold home in the community. Builders will almost always pay you the same money through a buydown or closing cost credit instead. It is still worth asking for, because per dollar it is the cleanest thing you can get: it lowers your loan, your monthly payment and your property tax basis, and it keeps working after you refinance.',
		whereItComesFrom: [
			'A home that has stood long past the point where incentives stopped moving it.',
			'The end of a community\'s buildout, when the builder wants out rather than wanting to protect comparables they no longer have.',
			'A plan the builder has overbuilt and needs to clear.',
			'Year end, where a closed sale in the current year can be worth more than a higher price in the next one.',
		],
		howToSpot: [
			'Ask directly what the home has been reduced by and on what dates. The pattern tells you more than the current number.',
			'Ask how many homes the builder still has to sell in the community. Fewer remaining means less reason to protect the comparable.',
			'Ask whether the reduction is a published price change or an unadvertised concession. They are worth different amounts to you at resale.',
		],
		watchFor: [
			'A price cut lowers the comparables for your own home too, not just the builder\'s. That cuts both ways and is worth understanding before you push hard for one.',
			'A buydown is often worth more than an equivalent price cut if you keep the loan past roughly five years. Run both as a monthly number over your realistic holding period.',
			'A deep reduction on one home in an otherwise healthy community is worth understanding rather than celebrating. Ask why that one.',
		],
		faqs: [
			{
				question: 'Do Austin builders reduce prices?',
				answer: 'Rarely, and for a reason that affects you too: a recorded price cut becomes a comparable sale that lowers the value of every unsold home in the community, including yours when you sell. Builders would much rather pay the same money through a rate buydown or closing cost contribution, neither of which shows up in the sales price. Ask for the cut, expect the package.',
			},
			{
				question: 'Is a price reduction better than a rate buydown?',
				answer: 'It depends on how long you keep the loan. A price cut lowers your loan balance, your payment and your property tax basis, and it survives a refinance. A permanent buydown usually beats it if you hold the mortgage beyond roughly five years, because the monthly saving compounds. Run both as a total cost over your realistic holding period instead of taking the larger headline number.',
			},
		],
		contentUpdated: '2026-09-23',
	},
	{
		slug: 'best-time-to-buy',
		title: 'The Best Time to Buy New Construction in Austin',
		subtitle: 'Timing is the cheapest leverage you will ever have',
		shortAnswer: 'The end of a quarter, and the end of the calendar year most of all. Builders manage to closing counts, so a home that closes inside the period is worth materially more to them than one closing a week later at a slightly higher price. If your move-in timing is flexible by even two or three weeks, aligning it to a builder\'s quarter end costs you nothing and is worth more than almost anything you could say in the sales office.',
		whereItComesFrom: [
			'Closing counts are reported, and a sale that lands inside the period counts. One that lands three days later does not.',
			'Year end compounds it: a closed home in the current year is worth more to a builder than a marginally higher price in the next.',
			'Slower months mean standing inventory accumulates, which is the other half of the same pressure.',
			'A community approaching the end of its buildout has less reason to protect its comparables.',
		],
		howToSpot: [
			'Ask when the builder\'s quarter actually ends. It is not always the calendar quarter, and the answer is free.',
			'Ask which homes can physically close inside that window. That list is much shorter than the inventory list and is where the concessions concentrate.',
			'Start the conversation two to three weeks before the deadline, not on the last day. By the final week the homes that could close are already spoken for.',
		],
		watchFor: [
			'A deadline-driven incentive is tied to closing by a specific date. Confirm your lender can hit it comfortably rather than exactly, because builders hold that date firmly.',
			'Do not let the calendar push you into the wrong house. The discount on a home you did not want is not a discount.',
			'Rates move independently of builder calendars. A great concession in a bad rate month can still be worse than a normal concession in a good one.',
		],
		faqs: [
			{
				question: 'When do Austin builders offer the biggest incentives?',
				answer: 'At the end of a quarter, and at the calendar year end most of all, because builders manage to closing counts and a sale inside the period is worth more to them than a higher price outside it. The second reliable signal is any completed home that has been standing unsold for several months, since carrying cost is what funds a concession.',
			},
			{
				question: 'Is it better to buy new construction in winter?',
				answer: 'December is genuinely strong because it combines year end with a slow selling season, so both sources of pressure line up. The caveat is that inventory able to close by 31 December is limited and gets spoken for, so the conversation needs to start in November rather than the week of Christmas.',
			},
			{
				question: 'Should I wait for prices to drop in Austin?',
				answer: 'Timing the market is a different bet from timing a builder, and only the second one is reliably in your control. Waiting for a general price drop means carrying rate risk and missing the quarter-end pressure that is available every three months. If your timeline is flexible, use it on the builder calendar rather than on a forecast.',
			},
		],
		contentUpdated: '2026-09-23',
	},
];

export function findDealPage(slug: string) {
	return DEAL_PAGES.find((d) => d.slug === slug);
}
