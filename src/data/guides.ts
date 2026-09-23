// Buyer-side guides for /guides/{slug}/.
//
// These exist because they are the questions buyers actually type, and because
// the answers draw on working these transactions rather than on general advice.
//
// COMPLIANCE: William is a licensed Texas real estate agent, not an attorney.
// Nothing here interprets a contract, an addendum, a clause or a warranty term.
// That is the practice of law and it belongs to a real estate attorney. These
// guides cover process and builder business practice, and they say plainly where
// the answer is an attorney's rather than an agent's.

export interface GuideSection {
	heading: string;
	body: string[];
	/** Optional bulleted list rendered after the body paragraphs. */
	list?: string[];
}

export interface Guide {
	slug: string;
	title: string;
	/** Shown as the page subtitle. */
	subtitle: string;
	/** The citable block. 60-90 words, answers the query on its own. */
	shortAnswer: string;
	sections: GuideSection[];
	faqs: { question: string; answer: string }[];
	/** Related blog posts already on the site. */
	related?: { label: string; href: string }[];
	contentUpdated: string;
}

export const GUIDES: Guide[] = [
	{
		slug: 'registered-with-builder-already',
		title: 'You Visited a Builder Without an Agent. Now What?',
		subtitle: 'The registration rule, what it actually costs you, and whether it can be fixed',
		shortAnswer: 'Most Austin builders require your agent to be registered on your first visit to their sales office. If you walked in alone and signed the guest book, many builders will refuse to pay a buyer agent commission on that community afterwards, which means you either proceed unrepresented or pay an agent yourself. It is sometimes recoverable if you have not yet signed anything and you raise it immediately, and it is not recoverable at all at some builders.',
		sections: [
			{
				heading: 'What actually happened when you signed the guest book',
				body: [
					'The guest book is not a courtesy. It is the builder registering you as a buyer who arrived without representation, which means they do not owe a buyer agent commission on your purchase. Some builders treat that as permanent for that community. Others apply a window of thirty or ninety days. A few will reconsider if your agent calls before you sign anything.',
					'The policy is set by the builder, not by law and not by the MLS, so it varies. What does not vary is that nobody in the sales office is going to volunteer that you have just given something up.',
				],
			},
			{
				heading: 'What it costs you',
				body: [
					'The commission itself is the smaller part. On new construction the builder pays it out of a marketing budget, and buyers who arrive unrepresented do not get a discount for it. The sales price does not drop because you came alone.',
					'The larger cost is that you now negotiate against a professional with no one on your side. The builder\'s sales agent is pleasant, knowledgeable, and paid by the builder. You also lose the person whose job is to push for a better incentive package and to tell you to have an attorney look at the paperwork before you sign it.',
				],
			},
			{
				heading: 'What to try, in order',
				body: [
					'Move quickly. Every one of these gets harder the further into the process you go, and none of them work once you have signed.',
				],
				list: [
					'Have an agent call the sales manager, not the on-site agent. The sales manager has discretion the on-site agent does not.',
					'If you only toured and gave no contact information, you may not have been registered at all. Ask what is on file before assuming the worst.',
					'If the builder applies a time window rather than a permanent bar, find out the date and work to it.',
					'If this community is barred, ask which of that builder\'s other communities are not. The registration is usually per community.',
					'Consider a different builder. There are two dozen active in the metro and the one you happened to visit first is rarely the only fit.',
				],
			},
			{
				heading: 'What not to do',
				body: [
					'Do not have an agent claim they were with you when they were not. Builders check, the sales office keeps records, and it puts the agent\'s licence at risk for a commission.',
					'Do not assume that going unrepresented earns you a better price. It does not. It removes the person whose job is to push for a better package, keep the deadlines from slipping, and tell you when something belongs in front of an attorney.',
				],
			},
		],
		faqs: [
			{
				question: 'Can I add a realtor after visiting a builder alone?',
				answer: 'Sometimes, and it depends entirely on the builder\'s policy and how far you have gone. If you have only toured and have not signed anything, an agent calling the sales manager immediately is worth trying. If you have signed anything, including a reservation or a registration card, most builders will not allow it. The single deciding factor is speed, so make the call today rather than after the weekend.',
			},
			{
				question: 'Do I save money by not using a buyer agent on new construction?',
				answer: 'No. The builder does not reduce the sales price for an unrepresented buyer, because the commission comes from a marketing budget rather than from your price. What you save is nothing and what you give up is representation through the negotiation, the inspection, the orientation walkthrough and the closing. At most builders those are the four points where money is actually won or lost.',
			},
			{
				question: 'How long does builder registration last?',
				answer: 'It varies by builder. Some treat the first visit as permanently determining representation for that community, some apply a thirty or ninety day window, and a few have no formal policy at all. Because there is no standard, the only reliable answer comes from asking that specific builder\'s sales manager about that specific community.',
			},
		],
		related: [
			{ label: 'New construction mistakes in Austin', href: '/blog/new-construction-mistakes-austin/' },
			{ label: 'Austin builders, reviewed', href: '/builders/' },
		],
		contentUpdated: '2026-09-23',
	},
	{
		slug: 'new-construction-inspection-austin',
		title: 'Do You Need an Inspection on a New Construction Home?',
		subtitle: 'Yes. Here is when, how many, and why the orientation matters most',
		shortAnswer: 'Yes, and ideally three times: a pre-drywall inspection while the framing, plumbing and wiring are still visible, a full inspection before closing, and a warranty inspection before the one-year builder warranty expires. A new home is built fast by rotating subcontractors, and the city inspection checks code compliance rather than workmanship. The builder orientation walkthrough is also the point at which you formally record anything you want addressed, so treat it as documentation rather than a tour.',
		sections: [
			{
				heading: 'Why a new home needs inspecting at all',
				body: [
					'The municipal inspection confirms the house meets code. It does not confirm the work was done well, that the insulation was installed without gaps, or that the HVAC was balanced. Those are workmanship questions, and nobody is checking them on your behalf unless you hire someone.',
					'Production homes are built quickly by subcontractor crews who rotate between sites. That is not a scandal, it is the model, and it makes independent verification worth more here than on a resale where problems have had years to reveal themselves.',
				],
			},
			{
				heading: 'The three inspections worth paying for',
				body: [],
				list: [
					'Pre-drywall, once framing, plumbing, electrical and HVAC rough-ins are complete and before insulation and sheetrock go up. This is the only chance to see the parts of the house that matter most, and the cheapest point at which anything found can be fixed.',
					'Full inspection before closing, covering everything a resale inspection would plus the finish work, appliance operation, grading and drainage.',
					'Warranty inspection at around month ten or eleven, before the one-year builder warranty expires. Settling, cracking and HVAC issues surface in the first year, and the deadline to report them is real.',
				],
			},
			{
				heading: 'The orientation walkthrough is the part that matters most',
				body: [
					'The orientation walkthrough is where the builder formally records the items you want addressed. In practice, what does not make that list is much harder to get attention on later, so it is worth far more of your time than buyers usually give it.',
					'Treat it as a documentation exercise, not a tour. Bring your inspector if you can, bring tape, take photographs, and write down everything, including items the builder representative assures you will be handled regardless. For what your specific paperwork says about defects and remedies, ask a real estate attorney — that is a legal question, not an agent\'s.',
				],
			},
			{
				heading: 'What happens when the builder does not respond',
				body: [
					'It is common for an inspection report delivered before closing to go unanswered. In one transaction, a report with six minor items received no response at all, and there was no practical way to hold anything back until they were addressed.',
					'That is exactly why the orientation list matters so much. The report is your information; the orientation list is what the builder has on record. Get your items onto both.',
				],
			},
		],
		faqs: [
			{
				question: 'How much does a new construction inspection cost in Austin?',
				answer: 'A pre-drywall inspection and a full pre-closing inspection typically run a few hundred dollars each in the Austin market, and a warranty inspection is similar. Against a purchase in the hundreds of thousands, and given how much harder undocumented items are to resolve later, it is among the cheapest risk reduction available in the transaction.',
			},
			{
				question: 'Will the builder let me bring my own inspector?',
				answer: 'Almost always yes, and a builder who resists is telling you something useful. Some require scheduling through the construction manager or limit site access for insurance reasons, which is reasonable. Arrange the pre-drywall timing early, because the window between rough-in completion and sheetrock is short and nobody will hold the schedule for you.',
			},
			{
				question: 'What is the difference between the orientation walkthrough and an inspection?',
				answer: 'The orientation is run by the builder and is where you formally record visible defects on their list. The inspection is run by a professional you hire and covers systems, structure and workmanship that a walkthrough will not surface. They serve different purposes, and you want both. What your paperwork says about defects you did not record is a question for a real estate attorney.',
			},
		],
		related: [
			{ label: 'How new construction homes are built', href: '/blog/how-new-construction-homes-are-built/' },
		],
		contentUpdated: '2026-09-23',
	},
	{
		slug: 'builder-financing-vs-outside-lender',
		title: 'Builder Lender or Your Own? How to Actually Decide',
		subtitle: 'The incentive is tied to their lender. That does not settle it.',
		shortAnswer: 'Most Austin builders tie their largest incentives to their in-house mortgage and title companies, so using an outside lender usually forfeits the headline incentive. You can use any lender you want. The decision should come from comparing complete loan estimates side by side on all-in cost including fees, not on the advertised rate, because the tied loan often carries a higher fee load that offsets part of the buydown.',
		sections: [
			{
				heading: 'Why the incentive is tied',
				body: [
					'Builders own or partner with a mortgage company and a title company, and the incentive is how they route volume to them. This is disclosed to you in an Affiliated Business Arrangement disclosure, which is a real document you should read rather than initial.',
					'The arrangement is common across the industry. It is also the reason the builder\'s quoted rate is not comparable to anything you were pre-approved for elsewhere.',
				],
			},
			{
				heading: 'How to run the comparison properly',
				body: [
					'Get a full Loan Estimate from the builder lender and from at least one outside lender on the same day, for the same loan amount, product and lock period. Then compare four things.',
				],
				list: [
					'The total cash to close, not the rate.',
					'The monthly payment including mortgage insurance, taxes and insurance escrows.',
					'Lender fees, origination, discount points and any processing or underwriting charges, which is where a tied loan commonly recovers part of its buydown.',
					'The rate itself, and specifically whether the buydown is permanent or a temporary 2-1 that steps up after the first years.',
				],
			},
			{
				heading: 'When the builder lender genuinely wins',
				body: [
					'Often, particularly at the volume builders. A large permanent buydown funded by the builder is real money that an outside lender cannot match, because the outside lender has no incentive budget. On entry-level inventory, the tied loan frequently wins outright.',
					'The point is not that the builder lender is a trap. The point is that you should know by how much it wins, because that number is also your leverage on everything else in the deal.',
				],
			},
			{
				heading: 'When to use your own lender anyway',
				body: [
					'If your situation is unusual, the tied lender may simply not have a product for you. Foreign national borrowers without US credit history, self-employed buyers with complex returns, and buyers using specialised loan programs often find the builder lender cannot do the loan at all.',
					'Find that out early. Discovering it once you are committed means losing the incentive and sometimes the home, because by then the clock on your closing date is already running.',
				],
			},
		],
		faqs: [
			{
				question: 'Can a builder require me to use their lender in Texas?',
				answer: 'In practice, builders condition their incentive on using their lender rather than requiring it outright, and that is near-universal across the industry. So for most buyers it is a financial decision: price the tied loan against an outside quote on all-in cost and see how much the incentive is actually worth. If you want to know what the paperwork obligates you to, ask a real estate attorney.',
			},
			{
				question: 'Is a 2-1 buydown the same as a permanent rate buydown?',
				answer: 'No, and the difference is large. A 2-1 buydown lowers your rate by two points in year one and one point in year two, then it reverts to the note rate for the remaining term. A permanent buydown lowers the note rate itself for the life of the loan. They are marketed in similar language and are worth very different amounts, so ask which one is on the table and get it in writing.',
			},
			{
				question: 'What if I get a better rate elsewhere after I have committed?',
				answer: 'You can generally still switch, but you will likely lose the builder incentive that was tied to their lender, and you need to be certain the new lender can close by your scheduled date. Builders hold that date firmly. Run the numbers on the whole package rather than the rate alone, and if you want to know where switching leaves you on the paperwork, ask a real estate attorney.',
			},
		],
		related: [
			{ label: 'What each builder incentive is worth', href: '/incentives/' },
		],
		contentUpdated: '2026-09-23',
	},
	{
		slug: 'spec-home-vs-build-to-order',
		title: 'Spec Home or Build to Order?',
		subtitle: 'One gets you a better deal. The other gets you the house you wanted.',
		shortAnswer: 'A spec or quick move-in home is already built or nearly finished, so it carries the larger incentive, a known price and a short timeline, but you take the finishes someone else chose. A build to order lets you pick the lot, plan and finishes, and costs more because the design center is where builder margin lives. In the Austin market the biggest concessions are almost always on standing inventory, particularly near a quarter end.',
		sections: [
			{
				heading: 'Why specs carry the bigger incentive',
				body: [
					'A completed unsold home is capital the builder cannot recycle. Every month it stands it costs them carrying cost and it counts against the community\'s absorption rate. That pressure is what funds the concession, and it grows the longer the house sits.',
					'A to-be-built home has none of that pressure. You are paying them to start work, so there is nothing for them to be anxious about and correspondingly little to negotiate.',
				],
			},
			{
				heading: 'What you actually give up on a spec',
				body: [
					'The finishes, the lot, and sometimes the floor plan. Builders specify spec homes to broad taste, which usually means safe and slightly generic. Whether that matters depends on how much you were going to change anyway.',
					'What you do not give up is quality. A spec is built to the same standard as a to-be-built in the same community by the same crews.',
				],
			},
			{
				heading: 'When build to order is worth the premium',
				body: [
					'When you need something structural that no standing home has: a specific plan, a particular lot orientation, an extended room, a casita, a third bay. Structural items cannot be added later at sensible cost, and that is the real argument for building.',
					'It is much weaker when the difference is finishes. Flooring, counters and fixtures carry builder margin and can usually be done after closing for less. Paying design-center pricing for cosmetics you could change in year two is the most common way buyers overspend.',
				],
			},
			{
				heading: 'The timing risk on a build',
				body: [
					'A build running six months or more means your rate is exposed for the whole period on a house you are already committed to buy. That makes the rate lock terms part of the price rather than paperwork. Ask what extended locks are available, whether a float-down exists, whether it is automatic or must be requested, and who pays for it.',
					'Also ask what happens if the builder is late. The penalties for a buyer closing late are usually spelled out in detail. The remedies when the builder is late are usually not.',
				],
			},
		],
		faqs: [
			{
				question: 'Are quick move-in homes cheaper in Austin?',
				answer: 'Usually yes on an effective basis, because they carry the larger incentive rather than a lower list price. A standing home that has been complete for several months is where the biggest concessions in this market are, and the effect strengthens near a quarter or year end when builders manage to closing counts. Ask the sales office which homes have been standing longest; they will generally tell you.',
			},
			{
				question: 'Can I still choose finishes on a spec home?',
				answer: 'Generally not, because they are already installed. Occasionally a home that is under construction but unsold can still take selections if it has not reached that stage, which is the best of both cases: partial choice with some of the inventory pressure. Ask the sales office which homes are started but not yet drywalled.',
			},
			{
				question: 'How long does a build to order take in Austin?',
				answer: 'Commonly six to twelve months depending on the builder, the plan and where the community sits in its buildout, and schedules slip. Treat the estimate as an estimate and plan your rate lock around the pessimistic case rather than the brochure date. If you want to know where you stand if the builder runs late, that is a question for a real estate attorney.',
			},
		],
		related: [
			{ label: 'Which upgrades actually return money', href: '/blog/new-construction-upgrades-highest-roi/' },
			{ label: 'Builder incentives, and what each is worth', href: '/incentives/' },
		],
		contentUpdated: '2026-09-23',
	},
];

export function findGuide(slug: string) {
	return GUIDES.find((g) => g.slug === slug);
}
