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
	/** Optional hand-written meta description (<=150 chars). Falls back to shortAnswer. */
	metaDescription?: string;
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
			{ label: 'Builder rate buydowns explained', href: '/deals/rate-buydowns/' },
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

// ─────────────────────────────────────────────────────────────────────────────
// Added 2026-09-23 after the compliance pass removed the two contract guides.
// These four are the differentiated ones: what a buyer's agent actually does,
// how builders actually negotiate, new build versus resale, and buying from
// overseas — which is a large share of William's real book and something the
// new-construction specialists competing for these terms cannot write at all.
// All four stay inside an agent's lane: business practice and process, never
// the meaning or effect of a document.
// ─────────────────────────────────────────────────────────────────────────────

GUIDES.push(
	{
		slug: 'buying-austin-new-construction-from-overseas',
		title: 'Buying Austin New Construction From Overseas',
		subtitle: 'What is different when you are buying before you land',
		shortAnswer: 'You can buy a new construction home in Austin without being physically present, and a large share of my clients do. The three things that decide whether it goes well are financing (buyers without US credit history need a different loan product, and the builder\'s in-house lender may not offer one, which usually means losing the incentive), someone on the ground who will walk the actual lot and street on camera rather than resending builder photos, and understanding that Texas property taxes are the trade for no state income tax.',
		sections: [
			{
				heading: 'Sort the financing before you fall for a house',
				body: [
					'This is the step that derails the most overseas purchases, and it derails them late. Buyers without US credit history or a US income record do not qualify for the same loan products, and the builder\'s in-house lender frequently has no foreign national program at all.',
					'That matters more here than it would elsewhere, because the builder\'s largest incentive is usually tied to using their lender. If they cannot do your loan, the incentive goes with it, and you find that out at the worst possible moment.',
					'Get the financing path confirmed in writing before you are emotionally committed to a specific home. If you are paying cash, get the proof-of-funds documentation sorted early too, because funds held overseas take longer to document than buyers expect.',
				],
			},
			{
				heading: 'What a real remote tour looks like',
				body: [
					'Builder photography sells the model home and tells you almost nothing about the house you would actually own. A useful remote tour is someone standing on your specific lot with a phone, on a live call or recording as you direct it.',
				],
				list: [
					'The lot itself, its slope, and what backs onto it. A retention pond, a transmission line, or a road two streets over will not appear in any listing.',
					'What is scheduled to be built on the empty land around you, and how many phases the community still has to go.',
					'The street at school pickup time and in the evening, not at 11am on a Tuesday.',
					'The drive from the house to the campus you will actually commute to, at rush hour.',
					'The finished home rather than the model, because the model is the best-case version with every upgrade installed.',
				],
			},
			{
				heading: 'The property tax trade, stated plainly',
				body: [
					'Texas has no state income tax, and the trade is a property tax rate that runs well above two percent in most new-construction suburbs once a MUD or PID is included. On a $600,000 home that can be $1,200 to $1,400 a month before principal and interest.',
					'Buyers arriving from places with low property taxes routinely budget from the wrong number and are genuinely shocked at the escrow figure. Work out the effective rate for the specific address before you set a price ceiling.',
					'There is a second trap specific to new construction: the first-year tax bill is often assessed on unimproved land, which produces a low first bill and a much larger second one. Budget from the finished improved value plus any special district.',
				],
			},
			{
				heading: 'Practical things that are easy to underestimate',
				body: [],
				list: [
					'Time zones. A builder who only responds during Central business hours is a real constraint when you are fifteen hours ahead, and it is worth having someone local who can act inside that window.',
					'Notarisation and signing from abroad adds time. Raise it early with the title company rather than the week of closing.',
					'Wiring funds internationally takes longer than domestic and is the most targeted step in the whole transaction for fraud. Confirm wire instructions by phone using a number you looked up yourself, never a number in an email.',
					'Insurance quotes vary more than buyers expect across the metro, particularly in the Hill Country, and they are worth getting before you commit to a budget.',
				],
			},
			{
				heading: 'Why I do a lot of this',
				body: [
					'A large share of my clients are relocating, many of them Mandarin-speaking and buying from California, Taiwan or mainland China. I work in English and Mandarin, and I am used to being the person who physically attends the inspection and the builder orientation when the buyer is on another continent.',
					'On new construction the builder pays my fee in most cases, disclosed in writing before we tour, so having someone on the ground usually costs the buyer nothing.',
				],
			},
		],
		faqs: [
			{
				question: 'Can a foreign national buy a house in Texas?',
				answer: 'Yes. There is no citizenship or residency requirement to own residential property in Texas. The practical constraints are financing and documentation rather than eligibility: without US credit history you will be looking at a different loan product with different down payment expectations, and proving funds held overseas takes longer than a domestic buyer would expect. Sort both before you shop.',
			},
			{
				question: 'Do I need to be in Austin to close on a home?',
				answer: 'Usually not. Remote closings are common and many builders now run them online. Signing from abroad adds steps, so raise it with the title company early rather than the week of closing. What you do want covered locally is the inspection and the builder orientation walkthrough, because those are the two points where having someone physically present is worth the most.',
			},
			{
				question: 'How much are property taxes in Austin compared to no state income tax?',
				answer: 'Effective rates in most new-construction suburbs run above two percent once a MUD or PID is included, which on a $600,000 home is roughly $1,200 to $1,400 a month before principal and interest. Whether the trade favours you depends entirely on your income and how long you stay. Run it as a monthly all-in number for the specific address rather than comparing headline tax rates between states.',
			},
		],
		related: [
			{ label: 'Where to live near the major Austin employers', href: '/tech-employers/' },
			{ label: 'Austin property taxes', href: '/blog/austin-property-tax-guide-2026/' },
		],
		contentUpdated: '2026-09-23',
	},
	{
		slug: 'how-to-negotiate-with-an-austin-builder',
		title: 'How to Negotiate With an Austin Builder',
		subtitle: 'What actually moves, what never does, and when to ask',
		shortAnswer: 'Builders rarely move on the base price, because a recorded price cut lowers the comparable sales for every unsold home in the community. What moves is the package: rate buydowns, closing cost contributions, design center allowances and lot premiums on a specific home. The leverage comes from timing and from the individual house, not from the community, and it is strongest on a completed home that has been standing near a quarter or year end.',
		sections: [
			{
				heading: 'Negotiate the package, not the price',
				body: [
					'This is the single most useful thing to understand about builder negotiation. Builders protect the sales price because it becomes a public comparable that affects every other home they have to sell in that community, and it affects your resale too.',
					'So a builder who will not take $15,000 off the price will often find $15,000 in a buydown, closing cost contribution and design allowance. The money is the same to you and it is not the same to them.',
				],
			},
			{
				heading: 'Timing is the cheapest leverage you will ever get',
				body: [
					'Builders manage to closing counts. A home that closes inside the quarter is worth materially more to them than one that closes a week later at a slightly higher price, and the calendar year end is stronger still.',
					'If your timeline is flexible by even two or three weeks, aligning it to a builder\'s quarter end costs you nothing and is worth more than most of what you could say in the sales office.',
				],
			},
			{
				heading: 'Ask about the specific house, not the community',
				body: [
					'The advertised program is marketing and it applies to everyone. What is negotiable is what sits on top of it for one address.',
				],
				list: [
					'Ask which completed homes have been standing longest. Sales offices will generally tell you, and that list is where the concessions live.',
					'Ask what the builder can add on this specific home beyond the advertised program. The posted offer applies to everyone; what sits on top of it for one address is the actual negotiation.',
					'Ask for the lot premium separately, and what the same plan costs on an interior lot.',
					'Ask whether the buydown is permanent or temporary. They are advertised in nearly the same words and are worth very different amounts.',
					'Ask for a design center allowance rather than a price cut if you are buying a to-be-built. It is the concession builders approve most readily.',
				],
			},
			{
				heading: 'Talk to the right person',
				body: [
					'The agent in the model home is pleasant, knowledgeable, and has limited discretion. Most of what is actually negotiable requires the sales manager, and that is a different conversation that usually happens through your agent rather than across the desk.',
					'It is also worth remembering that everything you tell the on-site agent about your budget, your timeline and how much you love the house is information held by the other side of the negotiation. They are paid by the builder and they represent the builder.',
				],
			},
			{
				heading: 'What almost never moves',
				body: [],
				list: [
					'The base price on a to-be-built home in a community that is selling well.',
					'Option pricing at the design center, which is a published price list.',
					'Anything at a builder whose whole model is transparent fixed pricing.',
					'Structural changes at builders who run a tightly standardised process. Decide early there, because later is genuinely difficult.',
				],
			},
			{
				heading: 'Register your agent before the first visit',
				body: [
					'Most builders require your agent to be registered on your first visit to their sales office. Walking in alone and signing the guest book can cost you the ability to bring in a buyer\'s agent at that community, at some builders permanently.',
					'It costs nothing to text your agent the builder and community name before you go, and on new construction the builder pays the fee in most cases, disclosed to you in writing before you tour.',
				],
			},
		],
		faqs: [
			{
				question: 'Do Austin builders negotiate on price?',
				answer: 'Rarely on the base price, and the reason is worth knowing: a recorded price cut becomes a comparable sale that lowers the value of every unsold home in the community, including yours later. Builders would much rather pay you the same money through a rate buydown, closing cost contribution or design allowance, none of which shows up in the sales price. Negotiate the package and you will usually do better than pushing on the price.',
			},
			{
				question: 'When is the best time to buy a new construction home in Austin?',
				answer: 'Near the end of a quarter, and near the end of the calendar year most of all, because builders manage to closing counts. The second-best signal is any completed home that has been standing unsold for several months, since carrying cost is what funds a concession. If your move-in timing has any flexibility, that flexibility is the cheapest negotiating leverage available to you.',
			},
		],
		related: [
			{ label: 'What each builder incentive is worth', href: '/incentives/' },
			{ label: 'Austin builders, reviewed', href: '/builders/' },
		],
		contentUpdated: '2026-09-23',
	},
	{
		slug: 'new-build-vs-resale-austin',
		title: 'New Build or Resale in Austin?',
		subtitle: 'The comparison most buyers run on price, which is the wrong number',
		shortAnswer: 'A new build gets you current layouts, a builder warranty, lower maintenance for several years and access to incentives a private seller cannot match. A resale gets you mature trees, established neighborhoods, a known tax history, usually a larger lot for the money, and no builder still selling competing homes down the street. In Austin the deciding number is usually the effective tax rate, because a new build in a young MUD can cost more per month than a more expensive resale that is not in one.',
		sections: [
			{
				heading: 'Why the price comparison misleads here',
				body: [
					'Most new construction in the Austin metro sits in a Municipal Utility District or Public Improvement District, and most established neighborhoods do not. That difference can be half a percent to a full percent of the home value every year.',
					'The practical effect is that a Leander new build can carry a higher monthly payment than a more expensive Cedar Park resale one exit south. Buyers who compare purchase prices systematically get this backwards. Compare the all-in monthly figure including taxes and any special district.',
				],
			},
			{
				heading: 'What the new build genuinely wins on',
				body: [],
				list: [
					'Incentives. A builder can buy your rate down; a private seller cannot, and that is often worth more than any price negotiation on a resale.',
					'Maintenance. Roof, HVAC, water heater and appliances are new, which removes the three or four expenses that hit resale buyers hardest in the first years.',
					'A builder warranty period, which a resale does not come with.',
					'Current layouts and energy performance, which is a real monthly number in an Austin summer rather than a brochure point.',
					'You are the first owner, so there is no deferred maintenance someone else chose not to do.',
				],
			},
			{
				heading: 'What the resale genuinely wins on',
				body: [],
				list: [
					'Mature trees and established landscaping, which matter more in this climate than buyers from cooler places expect.',
					'A known tax history rather than a first-year estimate on unimproved land.',
					'Usually a larger lot for the same money, and neighborhoods that are already finished rather than under construction.',
					'Often no MUD or PID, which is frequently the largest single monthly difference between the two.',
					'No builder down the street selling brand-new competing homes with an incentive package attached when you go to sell.',
				],
			},
			{
				heading: 'The resale-competition point is underrated',
				body: [
					'While a builder is still selling homes in your subdivision, your resale competes against a brand-new house plus whatever incentive the builder is offering that month. That caps what you can get, and it lasts until the community finishes building out.',
					'It matters much less if you plan to stay past buildout, and a great deal if you might move in three years. Ask how many phases remain before you assume a new build is the safer asset.',
				],
			},
			{
				heading: 'How I would decide it',
				body: [
					'If your constraint is the monthly payment and you plan to stay past the community buildout, the new build usually wins, because the buydown is real money a private seller cannot match.',
					'If your constraint is the house itself, the lot, or the neighborhood being finished, and especially if you might sell within a few years, the resale usually wins.',
					'Either way, run both as an all-in monthly number for two specific addresses rather than as a general question. The general question has no answer.',
				],
			},
		],
		faqs: [
			{
				question: 'Is new construction more expensive than resale in Austin?',
				answer: 'Per square foot, usually yes, but that is not the number that decides it. Most new communities carry a MUD or PID that adds meaningfully to the effective tax rate, while most established neighborhoods do not, so the monthly gap is often wider than the price gap. Against that, builders can buy your rate down and a private seller cannot. Compare two specific addresses on all-in monthly cost.',
			},
			{
				question: 'Do new construction homes hold their value in Austin?',
				answer: 'They appreciate, but the early years are held back by the builder still selling new homes in the same subdivision with incentives attached, which is what your resale competes against. That effect fades once the community finishes building out. If you might sell within a few years, ask how many phases remain before you buy; if you are staying past buildout, it matters much less.',
			},
			{
				question: 'Is it cheaper to buy a spec home or a resale?',
				answer: 'A standing spec home is where the largest builder concessions are, particularly near a quarter end, so on an effective basis it can beat a resale even at a higher list price. The offsetting factors are the special district on the tax bill and the resale competition while the community builds out. It is genuinely a two-address comparison rather than a rule.',
			},
		],
		related: [
			{ label: 'MUD and PID taxes explained', href: '/blog/austin-mud-pid-explained/' },
			{ label: 'Compare Austin suburbs', href: '/compare/' },
		],
		contentUpdated: '2026-09-23',
	},
	{
		slug: 'buyer-agent-new-construction',
		metaDescription: "Do you need your own agent to buy new construction in Austin? What a buyer's agent does at the builder, and why it starts on your first visit.",
		title: 'Do You Need an Agent to Buy New Construction?',
		subtitle: 'The builder pays the fee. Here is what you get for it.',
		shortAnswer: 'You do not need one, and going without does not lower your price, because the builder pays the buyer agent fee out of a marketing budget rather than adding it to your sales price. What you give up is someone on your side during the negotiation, the inspection and the orientation walkthrough. Most builders also require your agent to be registered on your first visit, so the decision is usually made before you realise you are making it.',
		sections: [
			{
				heading: 'Going alone does not get you a discount',
				body: [
					'This is the most common misunderstanding about new construction, and builders do nothing to correct it. The buyer agent fee comes out of the builder\'s marketing budget. It is not added to your price, and it is not subtracted when you arrive unrepresented.',
					'So the choice is not "pay for an agent or save the money". It is "use the representation the builder is already paying for, or decline it".',
				],
			},
			{
				heading: 'Whose side the sales office is on',
				body: [
					'The agent in the model home works for the builder. They can be genuinely helpful and knowledgeable, and they still represent the other side of your transaction.',
					'Everything you tell them about your budget, your timeline, your rate approval and how much your family loves the house is information in the hands of the party you are negotiating against. That is not a criticism of them. It is their job.',
				],
			},
			{
				heading: 'What the work actually is',
				body: [],
				list: [
					'Knowing which homes have been standing longest and what the builder has already reduced, which changes what is realistic to ask for.',
					'Knowing what each builder has been willing to do recently on a comparable home, which is not published anywhere and is the difference between a reasonable ask and a wasted one.',
					'Pricing the builder\'s tied loan against an outside lender on all-in cost rather than the advertised rate.',
					'Getting the effective tax rate for the specific phase, including any MUD or PID, before you set your budget.',
					'Being at the inspection and the orientation walkthrough, and making sure everything you want addressed is documented rather than mentioned.',
					'Telling you when a question is a lawyer\'s question rather than an agent\'s, and that you should have a real estate attorney look at your paperwork before you sign it.',
				],
			},
			{
				heading: 'The registration rule decides this for most people',
				body: [
					'Most Austin builders require your agent to be registered on your first visit to the sales office. If you tour alone and sign the guest book, many builders will not pay a buyer agent commission on that community afterwards, and some treat it as permanent.',
					'That means the decision is usually made on a Saturday morning by someone who did not know they were making it. It costs nothing to text an agent the builder and community name before you go.',
				],
			},
			{
				heading: 'What an agent is not',
				body: [
					'I am a licensed Texas real estate agent, not an attorney. I do not interpret builder contracts, addenda or warranty terms, and anyone in my position who offers to is doing something they should not. Those questions go to a real estate attorney.',
					'What I do is represent you on price, terms, timing and process, and tell you plainly when something belongs in front of a lawyer.',
				],
			},
		],
		faqs: [
			{
				question: 'Do I save money buying new construction without a realtor?',
				answer: 'No. The builder does not reduce the price for an unrepresented buyer, because the buyer agent fee comes from a marketing budget rather than from your sales price. You pay the same and receive less. If you would rather not use an agent that is a legitimate choice, but it should be made knowing that the savings are not real.',
			},
			{
				question: 'Does the builder pay the buyer agent commission in Texas?',
				answer: 'On new construction, most builders do, and it is typically paid from their marketing budget. It is not universal and it is not guaranteed, so it should be disclosed to you in writing before you tour. The part that catches people out is registration: most builders require your agent to be present or registered on your very first visit.',
			},
			{
				question: 'Can I use my own agent at any Austin builder?',
				answer: 'At almost all of them, provided your agent is registered on your first visit. That registration requirement is nearly universal in this market and is enforced literally, so the practical answer is yes if you plan ahead and frequently no if you toured alone first. Text your agent the builder and community name before you go.',
			},
		],
		related: [
			{ label: 'You visited a builder without an agent. Now what?', href: '/guides/registered-with-builder-already/' },
			{ label: 'How to negotiate with an Austin builder', href: '/guides/how-to-negotiate-with-an-austin-builder/' },
		],
		contentUpdated: '2026-09-23',
	},
);

// Added 2026-10-05: the questions ChatGPT and Google AI Mode answer when someone
// asks who to contact before buying new construction in Austin.
GUIDES.push(
	{
		slug: 'is-a-buyers-agent-free-on-new-construction',
		title: 'Is a Buyer\'s Agent Free on New Construction in Austin?',
		subtitle: 'Who pays, where it is written down, and the cases where it is not free',
		shortAnswer: 'On most Austin new construction, yes. The builder pays the buyer agent\'s fee from its marketing budget, and the sales price is the same whether or not you bring an agent. Since August 2024 you sign a written buyer representation agreement before touring, and that agreement states the agent\'s fee and who pays it. It stops being free when you visit the builder alone first, or when a builder pays less than your agreement states.',
		sections: [
			{
				heading: 'Who actually pays',
				body: [
					'Builders budget for buyer agent fees the same way they budget for model homes and signs. It is a cost of selling houses, and it is already in their pricing whether you use it or not.',
					'That is the part most buyers miss. Walking into the sales office alone does not get you a discount. The builder simply keeps the money.',
				],
			},
			{
				heading: 'Where it is written down',
				body: [
					'Since the 2024 changes to how buyer agents are paid, Texas buyers sign a written buyer representation agreement before touring homes with an agent. The agreement states what the agent is paid and how.',
					'On new construction, the builder offers the fee in writing too, usually on its agent registration or broker participation terms. Ask to see both before your first visit, so you know the number on each side.',
				],
			},
			{
				heading: 'When it is not free',
				body: [],
				list: [
					'You toured the community alone and signed the guest book. Many builders then refuse to pay a buyer agent on that community, so representation would come out of your pocket or not at all.',
					'The builder pays less than your representation agreement states. The agreement says what happens to the difference. Read that clause before you sign, and ask the agent how they handle it.',
					'A small or custom builder that does not work with buyer agents at all. This is rare in the Austin master plans but common with one-off lot builders.',
				],
			},
			{
				heading: 'What you get for it',
				body: [
					'Someone on your side of the negotiation, which on new construction is mostly about the incentive package rather than the price. Someone who prices the builder\'s loan against an outside lender. Someone at the inspection and the walkthrough making sure problems are written down.',
					'The full list is in the guide on whether you need an agent at all.',
				],
			},
		],
		faqs: [
			{ question: 'Does using a buyer\'s agent raise the price of a new build?', answer: 'No. The builder pays the buyer agent fee from its marketing budget, and the price is the same with or without an agent. Buyers who arrive alone do not get the fee back as a discount.' },
			{ question: 'Do I have to sign a buyer agreement for new construction in Texas?', answer: 'Yes, if you want an agent to represent you. Since August 2024, buyers sign a written buyer representation agreement before touring, and it states what the agent is paid. On new construction the builder usually pays that fee.' },
			{ question: 'What if the builder pays less than my agreement says?', answer: 'Your buyer representation agreement says what happens to the difference. Read that clause before you sign it and ask your agent how they handle it. Have a real estate attorney review it if anything is unclear.' },
			{ question: 'Can I get the commission as a discount if I go alone?', answer: 'Almost never at the large Austin builders. The fee is a marketing budget item, and builders do not lower the price for unrepresented buyers. You give up representation without getting the money.' },
		],
		related: [
			{ label: 'Do you need an agent to buy new construction?', href: '/guides/buyer-agent-new-construction/' },
			{ label: 'Best realtor for new construction in Austin', href: '/best-realtor-new-construction-austin/' },
		],
		contentUpdated: '2026-10-05',
	},
	{
		slug: 'before-your-first-builder-visit',
		metaDescription: "Before you walk into an Austin builder's sales office: register your agent first, set your budget, and know what to ask on visit one.",
		title: 'Before Your First Builder Visit in Austin: A Checklist',
		subtitle: 'The registration rule, what to bring, and what not to say in the sales office',
		shortAnswer: 'Contact your buyer\'s agent before you set foot in a builder\'s sales office, because most Austin builders only pay a buyer agent who is registered on your first visit. Text your agent the builder and community name, write the agent\'s name on the registration card, bring a pre-approval but keep your maximum budget to yourself, and leave with the price sheet, the incentive deadline in writing and the tax rate for that phase. Do not put down a deposit on the first visit.',
		sections: [
			{
				heading: 'Why the first visit matters more than the rest',
				body: [
					'Most Austin builders decide on your first visit whether they will pay a buyer agent. If you sign the guest book alone, many will not pay one on that community afterwards, and some treat that as permanent.',
					'Nobody in the sales office is going to tell you this. The decision gets made on a Saturday morning by someone who did not know they were making it.',
				],
			},
			{
				heading: 'Before you go',
				body: [],
				list: [
					'Choose your agent and sign the buyer representation agreement.',
					'Text your agent the builder and the community name. Some builders want the agent with you in person on the first visit, others accept a call or an email ahead of time. Your agent will know which.',
					'Get pre-approved with an outside lender, so you can compare the builder\'s loan against a real number.',
					'Look up the community\'s MUD or PID status, so the tax rate does not surprise you.',
				],
			},
			{
				heading: 'In the sales office',
				body: [],
				list: [
					'Write your agent\'s name and brokerage on the registration card. Ask the sales agent to confirm in writing that your agent is registered.',
					'Talk about the homes, not your budget. Your maximum price and how much you love the house are negotiating information.',
					'Ask which homes are complete and unsold, and how long each has been standing.',
					'Ask for the current incentive in writing, with its deadline and whether it requires the builder\'s lender or title company.',
					'Ask for the effective tax rate for the exact phase, including MUD or PID.',
				],
			},
			{
				heading: 'What to leave with, and what to leave behind',
				body: [
					'Leave with the price sheet, the incentive terms and deadline in writing, the lot premium for any lot you liked, and the tax rate.',
					'Leave your checkbook behind. A reservation deposit on the first visit locks you into the builder\'s timeline before your agent has compared it to anything.',
				],
			},
		],
		faqs: [
			{ question: 'Do I need my realtor with me on my first visit to a builder?', answer: 'It depends on the builder. Many Austin builders require the agent in person on the first visit, and some accept registration by phone or email beforehand. Text your agent before you go and they will handle it either way.' },
			{ question: 'What happens if I sign the guest book without an agent?', answer: 'Many builders treat you as an unrepresented buyer for that community and will not pay a buyer agent afterwards. It is sometimes recoverable if you act immediately, before signing anything.' },
			{ question: 'Should I tell the builder my budget?', answer: 'Not your maximum. The builder\'s sales agent represents the builder, and your budget is negotiating information. Share your price range and let your agent handle the rest.' },
			{ question: 'Should I put a deposit down on the first visit?', answer: 'No. Get the price sheet, incentive terms and tax rate first, and let your agent compare them with other communities before you commit.' },
		],
		related: [
			{ label: 'You visited a builder without an agent. Now what?', href: '/guides/registered-with-builder-already/' },
			{ label: 'Questions to ask an Austin builder', href: '/guides/questions-to-ask-an-austin-builder/' },
		],
		contentUpdated: '2026-10-05',
	},
	{
		slug: 'questions-to-ask-an-austin-builder',
		title: 'Questions to Ask an Austin Home Builder',
		subtitle: 'The ones that change the price, the payment and the resale',
		shortAnswer: 'The questions that matter most at an Austin builder are about money and timing, not finishes: which homes have been standing longest and what they have been reduced by, whether the incentive requires the builder\'s lender or title company, what the effective tax rate is for that phase including MUD or PID, how many phases are left to build, what the lot premium is, and when the incentive deadline falls. Ask for every answer in writing.',
		sections: [
			{
				heading: 'Price and incentives',
				body: [],
				list: [
					'Which completed homes have been standing longest, and what has each already been reduced by?',
					'What is the current incentive, and what is its deadline?',
					'Does the incentive require your lender, your title company, or both?',
					'Can the incentive go to a rate buydown, closing costs or the design center, and is the split my choice?',
					'What is the lot premium on this lot, and is it negotiable?',
				],
			},
			{
				heading: 'The monthly payment',
				body: [],
				list: [
					'What is the effective tax rate for this phase, including any MUD or PID?',
					'Is the advertised rate a permanent buydown or a temporary one that steps up?',
					'What are the HOA dues, and what do they cover?',
				],
			},
			{
				heading: 'The build and the community',
				body: [],
				list: [
					'How many phases are left, and how many homes will be built after mine?',
					'What is planned on the empty land next to and behind this lot?',
					'What is the realistic completion date for a to-be-built home, and what happens if it slips?',
					'Can I bring a third-party inspector to the pre-drywall and final inspections?',
				],
			},
			{
				heading: 'Questions for an attorney, not the sales office',
				body: [
					'What the purchase agreement, addenda and warranty actually commit you to is a legal question. The builder\'s sales agent cannot answer it for you, and neither can your real estate agent. Have a real estate attorney review the paperwork before you sign.',
				],
			},
		],
		faqs: [
			{ question: 'What is the most important question to ask a builder?', answer: 'Which completed homes have been standing longest and what each has been reduced by. Aged inventory is where Austin builders have the most room to negotiate.' },
			{ question: 'Should I ask about MUD and PID taxes?', answer: 'Yes, for the exact phase you are buying in. MUD and PID can push the effective tax rate well above the county rate and change the monthly payment more than the interest rate does.' },
			{ question: 'Can I bring my own inspector to a new build?', answer: 'Most Austin builders allow a third-party inspector at pre-drywall and final. Ask before you sign and get the answer in writing.' },
		],
		related: [
			{ label: 'Before your first builder visit: checklist', href: '/guides/before-your-first-builder-visit/' },
			{ label: 'How to negotiate with an Austin builder', href: '/guides/how-to-negotiate-with-an-austin-builder/' },
		],
		contentUpdated: '2026-10-05',
	},
	{
		slug: 'lennar-vs-dr-horton-austin',
		metaDescription: 'Lennar vs D.R. Horton in Austin: how the two biggest entry-level builders compare on price, included features, incentives and locations.',
		title: 'Lennar vs D.R. Horton in Austin',
		subtitle: 'Two entry-level volume builders, compared from the buyer\'s side',
		shortAnswer: 'Lennar and D.R. Horton are the two highest-volume entry-level builders in the Austin metro. D.R. Horton reaches lower prices, roughly $250,000 to $450,000, with a more basic finish and tighter lots. Lennar runs roughly $280,000 to $550,000 with its "Everything\'s Included" features. Both put most of their incentive money into rate buydowns tied to their own lenders, so compare the all-in monthly payment, not the price.',
		sections: [
			{
				heading: 'At a glance',
				body: [],
				list: [
					'Price range: D.R. Horton roughly $250K to $450K, including the Express brand at the bottom. Lennar roughly $280K to $550K.',
					'Finishes: Lennar includes most features as standard. D.R. Horton is more basic, and Express more basic still.',
					'Lots: D.R. Horton lots are typically small and homes sit close together. Check the plat for setbacks.',
					'Financing: Lennar incentives usually require Lennar Mortgage and Lennar Title. D.R. Horton incentives are tied to DHI Mortgage almost without exception.',
					'Where they build: both concentrate in the north and east value suburbs, where MUD and PID rates run highest.',
				],
			},
			{
				heading: 'Where Lennar wins',
				body: [
					'Fewer design center surprises, because what you see in the model is close to what you get. Lennar\'s buydowns are among the most aggressive in the market. I have closed a Lennar purchase with the rate bought down to 4.25 percent on an FHA loan and the builder covering the closing costs.',
				],
			},
			{
				heading: 'Where D.R. Horton wins',
				body: [
					'The lowest real entry point into new construction in the metro, and quick move-in inventory almost always available. If the payment is the constraint, D.R. Horton is often where the numbers work.',
				],
			},
			{
				heading: 'How to choose',
				body: [
					'Get the incentive from each builder in writing on a specific home, then compare the all-in monthly payment including taxes, HOA and the bought-down rate. Price the tied loan against an outside lender either way.',
					'Walk a completed home at each, not just the decorated model. And ask how many phases are left, because buying near the end of a build-out is better for resale.',
				],
			},
		],
		faqs: [
			{ question: 'Is Lennar or D.R. Horton cheaper in Austin?', answer: 'D.R. Horton usually has the lower entry price, roughly $250,000 to $450,000 against Lennar\'s $280,000 to $550,000. Compare the monthly payment after incentives, though, because both builders put most of their money into rate buydowns.' },
			{ question: 'Do I have to use Lennar Mortgage or DHI Mortgage?', answer: 'Not to buy the home, but usually to get the headline incentive. Price the builder\'s loan against an outside lender before you decide. The buydown often still wins, and you should know by how much.' },
			{ question: 'Which has better quality, Lennar or D.R. Horton?', answer: 'Lennar\'s standard features are more complete, and D.R. Horton\'s finish is more basic. Both are high-volume builders, so hire a third-party inspector at pre-drywall and final either way.' },
		],
		related: [
			{ label: 'Lennar: buyer-side review', href: '/builders/lennar/' },
			{ label: 'D.R. Horton: buyer-side review', href: '/builders/dr-horton/' },
			{ label: 'Lennar current incentives', href: '/incentives/lennar/' },
			{ label: 'D.R. Horton current incentives', href: '/incentives/dr-horton/' },
		],
		contentUpdated: '2026-10-05',
	},
	{
		slug: 'perry-homes-vs-highland-homes-austin',
		title: 'Perry Homes vs Highland Homes in Austin',
		subtitle: 'Two Texas move-up builders, compared from the buyer\'s side',
		shortAnswer: 'Perry Homes and Highland Homes are both Texas-based move-up builders in the Austin metro, roughly $400,000 to $900,000, often in the same master plans in Georgetown and Leander. Highland is known for above-average standard features and strong warranty scores. Perry is known for distinctive floor plans with high ceilings, and for being rigid about changes once you commit. Both negotiate mostly through closing costs and allowances rather than base price.',
		sections: [
			{
				heading: 'At a glance',
				body: [],
				list: [
					'Price range: both roughly $400K to $900K in the Austin metro.',
					'Standard features: Highland\'s are above the market at the price point, particularly trim and cabinetry. Perry\'s strength is the plan library itself.',
					'Changes: Perry is notably rigid once you are committed. Highland offers real structural options on most plans.',
					'Build time: Highland\'s to-be-built timelines run longer than the volume builders.',
					'Where they build: both have strong positions in the better north-metro master plans, including Georgetown and Leander.',
				],
			},
			{
				heading: 'Where Highland wins',
				body: [
					'More house as standard and a strong warranty track record. Highland is usually the better fit if you want to customize the plan, as long as you watch the design center spend, because the option list is long and good.',
				],
			},
			{
				heading: 'Where Perry wins',
				body: [
					'Floor plans with generous ceiling heights and natural light that many buyers fall for on sight. Perry suits buyers who find a plan they love and do not need to change it.',
				],
			},
			{
				heading: 'How to choose',
				body: [
					'Settle every change before you commit at Perry, because later is genuinely difficult. At Highland, ask for a design center allowance, which is the concession they approve most readily.',
					'Both builders run year-end events with larger incentives than usual. Check the current offers before you decide, because the gap between them changes month to month.',
				],
			},
		],
		faqs: [
			{ question: 'Is Perry Homes or Highland Homes better quality?', answer: 'Highland is known for above-average standard features and strong customer-satisfaction and warranty scores. Perry is known for its floor plans. Walk a completed home from each and hire a third-party inspector either way.' },
			{ question: 'Which is more flexible on changes?', answer: 'Highland offers real structural options on most plans. Perry is notably rigid once you are committed, so settle every change before you sign.' },
			{ question: 'Do Perry and Highland offer incentives?', answer: 'Both lean on closing-cost credits and allowances rather than price cuts, and both run year-end events. Check the current incentive pages for the latest terms in writing.' },
		],
		related: [
			{ label: 'Perry Homes: buyer-side review', href: '/builders/perry-homes/' },
			{ label: 'Highland Homes: buyer-side review', href: '/builders/highland-homes/' },
			{ label: 'Perry Homes current incentives', href: '/incentives/perry-homes/' },
			{ label: 'Highland Homes current incentives', href: '/incentives/highland-homes/' },
		],
		contentUpdated: '2026-10-05',
	},
);
