// Buyer-side guides for /guides/{slug}/.
//
// These exist because they are the questions buyers actually type, and because
// the answers draw on contract mechanics from real closings rather than on
// general advice. Where a guide overlaps an existing blog post, the guide is the
// practitioner version and links to the post for the broader background.

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
		shortAnswer: 'Most Austin builders require your agent to be registered on your first visit to their sales office. If you walked in alone and signed the guest book, many builders will refuse to pay a buyer agent commission on that community afterwards, which means you either proceed unrepresented or pay an agent yourself. It is sometimes recoverable if you have not yet signed a contract and you raise it immediately, and it is not recoverable at all at some builders.',
		sections: [
			{
				heading: 'What actually happened when you signed the guest book',
				body: [
					'The guest book is not a courtesy. It is the builder registering you as a buyer who arrived without representation, which means they do not owe a buyer agent commission on your purchase. Some builders treat that as permanent for that community. Others apply a window of thirty or ninety days. A few will waive it if your agent calls before you sign anything.',
					'The policy is set by the builder, not by law and not by the MLS, so it varies. What does not vary is that nobody in the sales office is going to volunteer that you have just given something up.',
				],
			},
			{
				heading: 'What it costs you',
				body: [
					'The commission itself is the smaller part. On new construction the builder pays it out of a marketing budget, and buyers who arrive unrepresented do not get a discount for it. The sales price does not drop because you came alone.',
					'The larger cost is that you now negotiate against a professional with no one on your side, on a contract written entirely by the builder\'s attorneys, with addenda that condition your incentive on dates you have not read yet. The builder\'s sales agent is pleasant, knowledgeable, and paid by the builder.',
				],
			},
			{
				heading: 'What to try, in order',
				body: [
					'Move quickly. Every one of these gets harder the further into the process you go, and all of them are impossible after you sign a contract.',
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
					'Do not assume that going unrepresented earns you a better price. It does not. It removes the person whose job is to read the addenda and catch the deadline that voids your incentive.',
				],
			},
		],
		faqs: [
			{
				question: 'Can I add a realtor after visiting a builder alone?',
				answer: 'Sometimes, and it depends entirely on the builder\'s policy and how far you have gone. If you have only toured and have not signed a contract, an agent calling the sales manager immediately is worth trying. If you have signed anything, including a reservation or a registration card, most builders will not allow it. The single deciding factor is speed, so make the call today rather than after the weekend.',
			},
			{
				question: 'Do I save money by not using a buyer agent on new construction?',
				answer: 'No. The builder does not reduce the sales price for an unrepresented buyer, because the commission comes from a marketing budget rather than from your price. What you save is nothing and what you give up is representation during the contract, the inspection, the orientation walkthrough and the closing. At most builders those are the four points where money is actually won or lost.',
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
		slug: 'builder-contract-red-flags',
		title: 'Builder Contract Red Flags in Austin',
		subtitle: 'The clauses that cost buyers real money, from actual closings',
		shortAnswer: 'A builder contract is written by the builder\'s attorneys and is not the standard Texas promulgated contract most buyers expect. The clauses that cost the most are the incentive deadline extendable only at the builder\'s discretion, a late-closing penalty of a percentage of the sales price plus a daily charge, a waiver of visible defects not recorded on the orientation walkthrough list, a prohibition on escrow holdbacks, and a special district disclosed as a monthly dollar figure rather than a tax rate.',
		sections: [
			{
				heading: 'The incentive deadline that nobody calendars',
				body: [
					'Builder addenda routinely condition the entire incentive package on closing on or before a stated date, extendable only at the builder\'s sole discretion. That date does not move because your lender is slow, because the appraisal came back late, or because the builder finished the house two weeks behind schedule.',
					'In a Lennar transaction I closed, the Affiliated Business Addendum carried exactly this structure. The date in that addendum was the single most important number in the contract and it appeared nowhere in the marketing.',
				],
			},
			{
				heading: 'The late-closing penalty stacked on top',
				body: [
					'Separately from losing the incentive, Texas builder addenda often add a penalty for closing past month end. In the same transaction, the Texas addendum added two percent of the sales price plus a per-day charge on late funds. On a $332,000 home, that two percent was roughly $6,640, on top of losing the incentive.',
					'So a closing that slips by a few days can cost the incentive and a five-figure penalty simultaneously. Both are avoidable and neither is negotiable after signing.',
				],
			},
			{
				heading: 'The mortgage contingency that expires silently',
				body: [
					'The financing contingency frequently expires on or near the same date as the incentive, and nothing happens to mark it. No notice arrives. You simply move from protected to unprotected, and your earnest money changes character.',
					'Calendar it yourself on the day you sign. Nobody in the transaction is incentivised to remind you.',
				],
			},
			{
				heading: 'The orientation walkthrough waiver',
				body: [
					'Several builders include a clause meaning that any visible defect not written on the New Home Orientation List is waived, and separately that no escrow holdbacks are permitted. Read together, those two make the orientation walkthrough the only leverage you have over workmanship after closing.',
					'Buyers routinely treat the orientation as a friendly tour where someone shows you the breaker panel. It is the deadline for every cosmetic and visible defect claim you will ever make. Bring an inspector, bring painter\'s tape, and write everything down, including things you are told will be handled anyway.',
				],
			},
			{
				heading: 'The concession that cancels the bonus',
				body: [
					'Watch the closing disclosure carefully where both a broker bonus and a buyer-side concession appear. In one transaction the bonus was listed, the concession was listed, and the total gross compensation line was unchanged from before either existed, which meant the two cancelled.',
					'That may be entirely deliberate and disclosed, and it may be an error. Either way the question to ask is simple: the total line did not move, so what changed and when.',
				],
			},
			{
				heading: 'The special district disclosed as a monthly fee',
				body: [
					'A PID or MUD is a tax obligation that can lien and foreclose. Some builders disclose it as a flat monthly figure in a way that reads like an HOA dues line. At one Pflugerville community it was carried as roughly $231 a month as a CDD figure.',
					'Ask specifically whether the community carries a MUD, a PID, or both, get the current combined rate for your exact phase, and ask for the district\'s remaining debt schedule.',
				],
			},
		],
		faqs: [
			{
				question: 'Is a builder contract the same as a normal Texas home contract?',
				answer: 'No. Most resale transactions in Texas use a promulgated contract form with standard buyer protections. Builders use their own contracts, written by their attorneys, with addenda that modify them further. The differences are not cosmetic: inspection rights, remedies for defects, the consequences of a delayed closing and the conditions on your incentive are all different, and all of them are written in the builder\'s favour.',
			},
			{
				question: 'Can I negotiate the builder contract terms?',
				answer: 'The body of the contract, very rarely. Builders will not redline their standard form for one buyer. What is negotiable is what sits in the addenda for your specific deal: the closing date, the incentive amount, what is included, and occasionally the penalty structure if you raise it before signing. The realistic goal is not to change the contract, it is to understand what it commits you to before you sign it.',
			},
			{
				question: 'Do I need a real estate attorney for a builder contract in Texas?',
				answer: 'Texas does not require one, and most new-construction transactions close without one. An experienced buyer agent will catch the deadline and disclosure issues on this page. If the purchase is unusually large, involves a custom build, or you are uneasy about a specific clause, an attorney review is inexpensive relative to the risk. It is not a substitute for representation during the build and the orientation.',
			},
		],
		related: [
			{ label: 'Builder incentives, and what each is worth', href: '/incentives/' },
			{ label: 'MUD and PID taxes explained', href: '/blog/austin-mud-pid-explained/' },
		],
		contentUpdated: '2026-09-23',
	},
	{
		slug: 'new-construction-inspection-austin',
		title: 'Do You Need an Inspection on a New Construction Home?',
		subtitle: 'Yes. Here is when, how many, and why the orientation matters most',
		shortAnswer: 'Yes, and ideally three times: a pre-drywall inspection while the framing, plumbing and wiring are still visible, a full inspection before closing, and a warranty inspection before the one-year builder warranty expires. A new home is built fast by rotating subcontractors and the city inspection checks code compliance, not workmanship. At several builders, visible defects not written on the orientation walkthrough list are contractually waived.',
		sections: [
			{
				heading: 'Why a new home needs inspecting at all',
				body: [
					'The municipal inspection confirms the house meets code. It does not confirm the work was done well, that the insulation was installed without gaps, or that the HVAC was balanced. Those are workmanship questions and nobody is contractually obliged to check them on your behalf.',
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
					'At several builders, the contract means any visible defect not written on the New Home Orientation List is waived, and no escrow holdbacks are permitted. That combination makes the orientation list the only leverage you have over cosmetic and visible workmanship after you close.',
					'Treat it as a documentation exercise, not a tour. Bring your inspector if you can, bring tape, take photographs, and write down everything, including items the builder representative assures you will be handled regardless. If it is not on the list, the contract may say it does not exist.',
				],
			},
			{
				heading: 'What happens when the builder does not respond',
				body: [
					'It is common for an inspection report delivered before closing to go unanswered. In one transaction, a report with six minor items received no response at all. Because that builder\'s contract permitted no escrow holdback, there was no mechanism to withhold funds until the items were addressed.',
					'That is exactly why the orientation list matters more than the inspection report at those builders. The report is your information. The orientation list is the contractual record.',
				],
			},
		],
		faqs: [
			{
				question: 'How much does a new construction inspection cost in Austin?',
				answer: 'A pre-drywall inspection and a full pre-closing inspection typically run a few hundred dollars each in the Austin market, and a warranty inspection is similar. Against a purchase in the hundreds of thousands and a contract that may waive anything you failed to document, it is among the cheapest risk reduction available in the transaction.',
			},
			{
				question: 'Will the builder let me bring my own inspector?',
				answer: 'Almost always yes, and a builder who resists is telling you something useful. Some require scheduling through the construction manager or limit site access for insurance reasons, which is reasonable. Arrange the pre-drywall timing early, because the window between rough-in completion and sheetrock is short and nobody will hold the schedule for you.',
			},
			{
				question: 'What is the difference between the orientation walkthrough and an inspection?',
				answer: 'The orientation is run by the builder and is where you formally record visible defects on their list. The inspection is run by a professional you hire and covers systems, structure and workmanship that a walkthrough will not surface. They serve different purposes and the orientation is the one with contractual consequences, because at several builders anything visible and unlisted is waived.',
			},
		],
		related: [
			{ label: 'How new construction homes are built', href: '/blog/how-new-construction-homes-are-built/' },
			{ label: 'Builder contract red flags', href: '/guides/builder-contract-red-flags/' },
		],
		contentUpdated: '2026-09-23',
	},
	{
		slug: 'builder-financing-vs-outside-lender',
		title: 'Builder Lender or Your Own? How to Actually Decide',
		subtitle: 'The incentive is tied to their lender. That does not settle it.',
		shortAnswer: 'Most Austin builders tie their largest incentives to their in-house mortgage and title companies, so using an outside lender usually forfeits the headline incentive. You are legally free to use any lender. The decision should come from comparing complete loan estimates side by side on all-in cost including fees, not on the advertised rate, because the tied loan often carries a higher fee load that offsets part of the buydown.',
		sections: [
			{
				heading: 'Why the incentive is tied',
				body: [
					'Builders own or partner with a mortgage company and a title company, and the incentive is how they route volume to them. This is disclosed to you in an Affiliated Business Arrangement disclosure, which is a real document you should read rather than initial.',
					'The arrangement is legal and common. It is also the reason the builder\'s quoted rate is not comparable to anything you were pre-approved for elsewhere.',
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
					'Find that out early. Discovering it at contract means losing the incentive and sometimes the home, because by then the closing date in the addendum is already running.',
				],
			},
		],
		faqs: [
			{
				question: 'Can a builder require me to use their lender in Texas?',
				answer: 'They cannot require it as a condition of selling you the home, and a disclosed affiliated business arrangement must state that you are free to shop. What they can do is condition their incentive on using it, which is legal and near-universal. In practice that makes it a financial decision rather than a legal one.',
			},
			{
				question: 'Is a 2-1 buydown the same as a permanent rate buydown?',
				answer: 'No, and the difference is large. A 2-1 buydown lowers your rate by two points in year one and one point in year two, then it reverts to the note rate for the remaining term. A permanent buydown lowers the note rate itself for the life of the loan. They are marketed in similar language and are worth very different amounts, so ask which one is on the table and get it in writing.',
			},
			{
				question: 'What if I get a better rate elsewhere after I am under contract?',
				answer: 'You can generally still switch lenders, but you will likely lose the builder incentive that was conditioned on their lender, and you need to be certain the new lender can close by the date in the addendum. That date is usually extendable only at the builder\'s discretion, and missing it can trigger a penalty on top of losing the incentive. Run the numbers on the whole package rather than the rate alone.',
			},
		],
		related: [
			{ label: 'What each builder incentive is worth', href: '/incentives/' },
			{ label: 'Builder contract red flags', href: '/guides/builder-contract-red-flags/' },
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
					'A build running six months or more means your rate is exposed for the whole period on a house you are already contractually committed to buy. That makes the rate lock terms part of the price rather than paperwork. Ask what extended locks are available, whether a float-down exists, whether it is automatic or must be requested, and who pays for it.',
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
				answer: 'Commonly six to twelve months depending on the builder, the plan and where the community sits in its buildout, and schedules slip. Treat the estimate as an estimate, plan your rate lock around the pessimistic case, and read what the contract says about builder delay before assuming the date in the sales brochure is a commitment.',
			},
		],
		related: [
			{ label: 'Which upgrades actually return money', href: '/blog/new-construction-upgrades-highest-roi/' },
			{ label: 'Builder incentives, and what each is worth', href: '/incentives/' },
		],
		contentUpdated: '2026-09-23',
	},
	{
		slug: 'new-home-warranty-explained',
		title: 'What a New Home Warranty Actually Covers',
		subtitle: 'One, two, ten years. Only one of those numbers matters most.',
		shortAnswer: 'Most Texas builder warranties run on a one, two and ten year structure: one year on workmanship and materials, two years on the mechanical systems such as plumbing, electrical and HVAC distribution, and ten years on major structural elements. The one-year deadline is the one that matters most, because it covers everything you will actually notice, and it expires without notice.',
		sections: [
			{
				heading: 'The three periods',
				body: [],
				list: [
					'Year one covers workmanship and materials: drywall cracks, paint, trim, doors that stick, tile, grout, hardware, and most of what you will actually notice living in the house.',
					'Years one and two cover the mechanical systems, meaning plumbing, electrical and HVAC distribution. Note that the appliances themselves are usually covered by the manufacturer, not the builder.',
					'Years one through ten cover major structural elements, and the definition is narrower than buyers expect. It generally means load-bearing failure, not a cracked slab corner or a settling issue.',
				],
			},
			{
				heading: 'Why the one-year date is the one to calendar',
				body: [
					'Almost everything a homeowner notices in a new build falls in the year-one workmanship bucket, and a new house moves as it settles through its first seasons. Texas soil makes that more pronounced than in many markets.',
					'The warranty does not remind you it is ending. Book an independent warranty inspection at around month ten or eleven, submit everything in writing before the date, and keep the submission record. An item reported the week after expiry is generally not covered regardless of when it first appeared.',
				],
			},
			{
				heading: 'What is usually excluded',
				body: [],
				list: [
					'Normal settling and hairline cracking within stated tolerances, and those tolerances are defined in the warranty document rather than by what looks reasonable to you.',
					'Anything caused by homeowner maintenance failures, including drainage and landscaping changes that affect the foundation.',
					'Appliances, which run on manufacturer warranties with their own registration requirements and dates.',
					'Consequential damage in many cases, meaning the warranty may repair the leaking pipe but not the flooring the leak ruined.',
				],
			},
			{
				heading: 'How to make a claim that gets handled',
				body: [
					'Submit in writing through the builder\'s stated process, not by text to the construction manager you have been dealing with. Keep dated photographs. Reference the specific warranty provision where you can.',
					'If the item was recorded on your orientation walkthrough list, reference that too. At builders where unlisted visible defects are waived, a documented orientation item is a materially stronger claim.',
				],
			},
		],
		faqs: [
			{
				question: 'What does a 10-year structural warranty actually cover?',
				answer: 'Usually only major load-bearing failure, defined narrowly in the warranty document. It is not a ten-year guarantee that nothing will crack. Buyers often read the ten-year figure as broad long-term protection when in practice the one-year workmanship period is the one that covers nearly everything they will encounter.',
			},
			{
				question: 'Is a builder warranty transferable if I sell?',
				answer: 'The structural portion usually transfers to a subsequent owner for the remainder of its term, and the shorter workmanship and systems coverage typically does not survive the original period anyway. Confirm the specific terms in your warranty document, because it is a genuine selling point within the first years and worth stating accurately in the listing.',
			},
			{
				question: 'What should I do before my one-year warranty expires?',
				answer: 'Book an independent warranty inspection at around month ten or eleven, walk the house yourself with the list from your orientation, and submit everything in writing before the expiry date with dated photographs. The deadline is enforced, it passes without any notice from the builder, and items reported afterwards are generally declined no matter when they first appeared.',
			},
		],
		related: [
			{ label: 'Do you need an inspection on a new build?', href: '/guides/new-construction-inspection-austin/' },
			{ label: 'New construction mistakes in Austin', href: '/blog/new-construction-mistakes-austin/' },
		],
		contentUpdated: '2026-09-23',
	},
];

export function findGuide(slug: string) {
	return GUIDES.find((g) => g.slug === slug);
}
