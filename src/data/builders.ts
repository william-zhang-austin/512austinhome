// Builder data for /builders/{slug}/ and /incentives/{slug}/.
//
// EDITORIAL RULE FOR THIS FILE: everything here is written from the buyer's side
// of the table. Where William has actually closed or negotiated with a builder,
// say so plainly and name the mechanics. Where he has not, say that too. A page
// that only lists strengths is an advertisement, and neither buyers nor language
// models have any use for one.
//
// Client-identifying detail never goes in this file. Contract mechanics from a
// real closing do — the clause numbers and the dollar consequences are the whole
// point, and they are not specific to any one buyer.

export interface Builder {
	slug: string;
	name: string;
	/** Rough Austin-metro new-home price band. Keep vague enough to stay true for a year. */
	priceRange: string;
	/** Where they sit in the market: entry-level, move-up, luxury, or a mix. */
	segment: string;
	/** Citable summary. 60-90 words, factual, no sales language. */
	shortAnswer: string;
	/** Honest strengths. */
	strengths: string[];
	/** Honest watch-outs. Must be real. */
	watchOuts: string[];
	/** How they actually negotiate, from working with them. */
	negotiating: string[];
	/**
	 * Clause-level contract mechanics observed in real transactions.
	 * This is the section a competitor cannot copy from public marketing.
	 */
	contractNotes?: string[];
	/** In-house lender, title, or insurance arms that affect incentive structure. */
	affiliates?: string;
	/** Typical incentive shapes seen from this builder. Not current offers. */
	incentiveStyle: string;
	/** Slugs from INCENTIVE_TYPES that this builder actually uses. */
	incentiveTypes: string[];
	/** True where William has personally closed or actively negotiated with them. */
	firstHand: boolean;
	faqs: { question: string; answer: string }[];
	contentUpdated: string;
}

export const BUILDERS: Builder[] = [
	{
		slug: 'lennar',
		name: 'Lennar',
		priceRange: '$280K-$550K',
		segment: 'High-volume entry-level and first move-up',
		firstHand: true,
		affiliates: 'Lennar Mortgage and Lennar Title. Most Lennar incentives are conditioned on using both.',
		shortAnswer: 'Lennar is one of the highest-volume builders in the Austin metro and sits mainly in the entry-level and first move-up bands, roughly $280,000 to $550,000. Their model is "Everything\'s Included", so most features come standard rather than through a design center. Incentives are usually large but tied to Lennar Mortgage and Lennar Title, and are structured as rate buydowns and closing-cost credits rather than price reductions.',
		strengths: [
			'Everything\'s Included pricing means far fewer design-center surprises than a build-to-order builder. What you see in the model is close to what you get.',
			'High inventory volume across the metro, which means real choice and real leverage in a slow month.',
			'Among the most aggressive rate buydowns in the market. I have closed a Lennar deal with the rate bought down to 4.25 percent on an FHA loan with the seller covering all closing costs.',
			'Fast, predictable build and closing process on spec homes.',
			'Willing to move on quick move-in inventory that has sat, particularly at a quarter or month end.',
		],
		watchOuts: [
			'The headline incentive almost always requires financing through Lennar Mortgage and closing through Lennar Title. Price the loan against an outside lender anyway; the buydown often still wins, but you should know by how much.',
			'Because pricing is bundled, there is less room to negotiate the base price itself. The money is in the incentive package, not the sticker.',
			'Lot premiums are real and are quoted separately from the "included" pricing.',
			'Their addenda put hard dates on the incentives, and missing one is expensive. See the contract notes.',
			'Finish-level is appropriate to the price point. Do not expect a move-up builder\'s trim, cabinetry, or sound isolation.',
		],
		negotiating: [
			'Negotiate the incentive package, not the price. On a completed spec that has been standing, the closing-cost credit and the buydown are where the movement is.',
			'Ask what the broker bonus is on the specific home. Builders post these on inventory they want gone, and it is information you are entitled to know about because it can be redirected.',
			'Quarter end and month end are genuinely different from mid-month. Lennar manages to closing counts.',
			'Get the buydown quoted as a permanent rate on the specific loan product, not as "up to" language in a flyer.',
			'Register your agent before the first visit. Lennar\'s on-site agents work for Lennar.',
		],
		contractNotes: [
			'The Affiliated Business Addendum conditions the incentive on closing on or before a stated date, and extension is at Lennar\'s sole discretion. That date is the single most important number in the contract, and it does not move because your lender is slow.',
			'The Texas addendum adds a penalty for closing past month end — in a deal I closed it was 2 percent of the sales price plus a per-day charge on late funds. On a $332,000 home that 2 percent was roughly $6,640.',
			'The mortgage contingency can expire on the same date as the incentive, and it expires silently. Calendar it yourself; nobody will remind you.',
			'Section 21 of the Lennar contract means any visible defect not written on the New Home Orientation List is waived, and no escrow holdbacks are permitted. The walkthrough list is the only leverage you get, so the orientation is not a formality.',
			'A buyer-side concession can be written into the closing disclosure in a way that cancels out a broker bonus. Read the "total gross compensation including bonus and concessions" line and ask what changed if it does not add up.',
			'Many Lennar communities in the metro sit in a MUD or PID. Lennar discloses the PID as a monthly CDD figure, which is easy to read past — at one Pflugerville community it was roughly $231 a month on top of taxes, and a PID can lien and foreclose.',
		],
		incentiveStyle: 'Large rate buydowns and closing-cost credits, conditioned on Lennar Mortgage and Lennar Title. Occasional broker bonuses on standing inventory. Rarely a base-price cut.',
		incentiveTypes: ['rate-buydown', 'closing-cost-credit', 'broker-bonus'],
		faqs: [
			{
				question: 'Does Lennar negotiate on price in Austin?',
				answer: 'Rarely on the base price, because the Everything\'s Included model bundles features into it. The negotiation is almost entirely in the incentive package: the size of the rate buydown, closing-cost credits, and what they will do on a specific standing spec home. On inventory that has been sitting, that package can be worth $15,000 to $30,000 on a mid-priced home.',
			},
			{
				question: 'Do I have to use Lennar Mortgage to get the incentive?',
				answer: 'In most cases yes — the headline incentive is tied to Lennar Mortgage and usually Lennar Title through an Affiliated Business Addendum. You are free to use an outside lender, but you will typically lose the incentive. Run both quotes. The buydown often still comes out ahead, but you should see the number rather than assume it.',
			},
			{
				question: 'What is the biggest mistake buyers make with Lennar?',
				answer: 'Treating the New Home Orientation walkthrough as a formality. The contract waives visible defects that are not written on that list and does not permit escrow holdbacks, so the list is the only leverage you have after closing. The second biggest is missing the incentive deadline in the Affiliated Business Addendum, which is extendable only at Lennar\'s discretion.',
			},
		],
		contentUpdated: '2026-09-23',
	},
	{
		slug: 'meritage-homes',
		name: 'Meritage Homes',
		priceRange: '$300K-$600K',
		segment: 'Entry-level and move-up, energy-efficiency focused',
		firstHand: true,
		affiliates: 'Meritage Homes Mortgage. Incentives are typically tied to it.',
		shortAnswer: 'Meritage Homes builds across the Austin metro in roughly the $300,000 to $600,000 range and differentiates on energy efficiency, with spray-foam insulation and high HERS ratings as standard rather than upgrades. They are one of the more active builders in the northern and eastern suburbs. Incentives are usually structured as rate buydowns through Meritage Homes Mortgage, and quick move-in inventory is where the largest concessions appear.',
		strengths: [
			'Energy packages are genuinely standard, not an upsell. Spray foam and a low HERS rating show up in the utility bill, which matters in an Austin August.',
			'Consistent floor plans across communities, which makes it easy to compare the same plan in two suburbs and price the location rather than the house.',
			'Strong presence in the value suburbs, so there is real selection at the entry-level end.',
			'Quick move-in inventory is often where the best incentive sits.',
		],
		watchOuts: [
			'Design-center options are more limited than a build-to-order move-up builder. Decide early whether you are buying the plan as-is.',
			'Incentives are tied to the in-house lender in most cases.',
			'Several of their most active Austin-area communities carry MUD taxes that push the effective rate well above 2 percent.',
			'Lot sizes in the value communities are tight. Look at the plat, not the rendering.',
		],
		negotiating: [
			'Ask which specs have been standing longest. Meritage moves on aged inventory before it moves on a to-be-built.',
			'Builder incentive deadlines here are frequently quarter-driven. A deal that will not happen in March can happen on March 30.',
			'Get the HERS rating in writing for the specific home, not the community average.',
			'Ask whether the advertised buydown is permanent or a temporary 2-1, and price both.',
		],
		incentiveStyle: 'Rate buydowns through the in-house lender, closing-cost credits, and periodic price cuts on standing quick move-in homes.',
		incentiveTypes: ['rate-buydown', 'closing-cost-credit', 'price-reduction'],
		faqs: [
			{
				question: 'Are Meritage homes actually more energy efficient?',
				answer: 'Yes, and it is one of the few builder claims that is straightforwardly checkable. Ask for the HERS index for the specific home. A lower number is better, and Meritage typically rates well below the code-built baseline because spray-foam insulation and a tighter envelope are standard rather than optional. On an Austin cooling season that is a real monthly number, not a marketing point.',
			},
			{
				question: 'Which Austin suburbs does Meritage build in?',
				answer: 'They are most active in the northern and eastern value suburbs — Pflugerville, Hutto, Manor, Georgetown, and Leander. That footprint tracks the entry-level and first move-up buyer, and it is also where MUD taxes are most common, so budget from the effective rate rather than the county rate.',
			},
		],
		contentUpdated: '2026-09-23',
	},
	{
		slug: 'taylor-morrison',
		name: 'Taylor Morrison',
		priceRange: '$400K-$800K',
		segment: 'Move-up and semi-custom',
		firstHand: true,
		affiliates: 'Taylor Morrison Home Funding.',
		shortAnswer: 'Taylor Morrison builds in the move-up and semi-custom bands in Austin, roughly $400,000 to $800,000, with a real design center and meaningful structural options. They are active in larger master-planned communities in Pflugerville, Georgetown, and the north metro. Because so much of the price is in options, the design center is where budgets are won or lost, and design-center minimums are common.',
		strengths: [
			'Genuine structural options — extended rooms, additional bays, flexible layouts — rather than a finish-only menu.',
			'Design center quality is a step above the volume builders, and the base finish level is higher.',
			'Strong positions in well-amenitized master-planned communities.',
			'More willing than the volume builders to negotiate on a to-be-built if the timing works for them.',
		],
		watchOuts: [
			'Design-center minimums are common and can add tens of thousands over the advertised base. The advertised price is rarely the price anyone actually pays.',
			'Options are priced at a healthy margin. Some are far cheaper post-closing; some cannot be done later at any price. Know which is which before you sit down.',
			'Build timelines on a to-be-built are long enough that a rate lock becomes its own negotiation.',
			'Lot premiums in the desirable sections of a master plan are substantial.',
		],
		negotiating: [
			'Separate the three negotiations: base price, lot premium, and design-center allowance. Builders concede on different ones at different times, and bundling them costs you money.',
			'Ask for a design-center allowance rather than a price cut. It is often easier for them to approve and it is worth more to you if you were going to spend it anyway.',
			'Before the design appointment, price the option list against what a contractor would charge after closing. Structural items are worth paying for up front. Many finishes are not.',
			'On a long build, negotiate who absorbs a rate move. Extended locks and float-downs are part of the package, not a favour.',
		],
		incentiveStyle: 'Design-center allowances, closing-cost credits through the in-house lender, and extended rate locks on to-be-built homes.',
		incentiveTypes: ['design-center-allowance', 'closing-cost-credit', 'extended-rate-lock'],
		faqs: [
			{
				question: 'Are Taylor Morrison design center upgrades worth it?',
				answer: 'Structural ones usually are, because they cannot be added later or cost far more to retrofit — extended rooms, additional windows, wiring, plumbing rough-ins. Finish-level upgrades are usually not, because the builder margin on flooring, counters, and fixtures is high and a contractor will do the same work after closing for less. The exception is anything that is disruptive to live through.',
			},
			{
				question: 'What is a design center minimum?',
				answer: 'A contractual requirement to spend at least a set amount at the design center on a to-be-built home. It is common at Taylor Morrison and at other semi-custom builders, and it means the advertised base price is not achievable. Ask for the minimum in writing before you fall in love with a base price, and factor it into every comparison you make against a spec home.',
			},
		],
		contentUpdated: '2026-09-23',
	},
	{
		slug: 'coventry-homes',
		name: 'Coventry Homes',
		priceRange: '$400K-$750K',
		segment: 'Move-up, part of the"Homes by" family',
		firstHand: true,
		shortAnswer: 'Coventry Homes builds move-up product in the Austin metro, roughly $400,000 to $750,000, and is part of the same family as Plantation Homes and Village Builders. They are active in the larger Georgetown and north-metro master plans. Coventry sits between the volume builders and the semi-custom builders on both finish level and flexibility, and their incentives typically arrive as closing-cost credits rather than price cuts.',
		strengths: [
			'Higher standard finish than the volume builders at a similar price point.',
			'Good floor-plan variety, including plans that handle multi-generational living better than most.',
			'Well represented in the strongest Georgetown and Leander master plans.',
			'Responsive on warranty items relative to the high-volume builders.',
		],
		watchOuts: [
			'Less aggressive on incentives than the volume builders. The money here is in the finish, not the discount.',
			'Design-center pricing carries the usual builder margin.',
			'Community selection is narrower, so if you want a specific suburb they may simply not be there.',
		],
		negotiating: [
			'Focus on closing costs and the design-center allowance. Base price movement is limited.',
			'Ask about standing inventory specifically. A completed Coventry spec is a different negotiation from a to-be-built.',
			'Confirm the lot premium separately and ask what the same plan costs on an interior lot.',
		],
		incentiveStyle: 'Closing-cost credits and design-center allowances, occasionally a rate buydown through an affiliated lender.',
		incentiveTypes: ['closing-cost-credit', 'design-center-allowance'],
		faqs: [
			{
				question: 'How does Coventry compare to Lennar or D.R. Horton in Austin?',
				answer: 'Different segment. Coventry sits above the high-volume builders on standard finish, trim, and plan flexibility, and below them on incentive aggressiveness. If you are optimising for the largest concession, the volume builders will usually win. If you are optimising for what the house is like to live in at a similar monthly payment, Coventry is worth the comparison.',
			},
		],
		contentUpdated: '2026-09-23',
	},
	{
		slug: 'mi-homes',
		name: 'M/I Homes',
		priceRange: '$350K-$700K',
		segment: 'Entry-level through move-up',
		firstHand: true,
		shortAnswer: 'M/I Homes builds across the entry-level and move-up bands in the Austin metro, roughly $350,000 to $700,000, with a strong presence in the northern suburbs. They include a whole-home energy package as standard and have been among the more willing builders to cut price on standing inventory near year end, when closing counts matter to them.',
		strengths: [
			'Standard energy package rather than an upgrade tier.',
			'Genuinely negotiable on completed inventory, particularly in the last quarter.',
			'Good plan range within a single community, so it is often possible to stay in a community you like at a different price point.',
			'Whole-home warranty terms are competitive.',
		],
		watchOuts: [
			'Incentives skew toward homes that can close quickly, so a to-be-built will see much less.',
			'Design-center flexibility is narrower than the semi-custom builders.',
			'Several active communities carry MUD taxes.',
		],
		negotiating: [
			'Ask directly for the list of homes that can close by quarter end. That list is where the reductions live, and sales agents will usually share it.',
			'Year end is the strongest window. Reductions on homes that can close by December are a recurring pattern, not a one-off promotion.',
			'Price the standard energy package into the comparison against a builder who charges for it.',
		],
		incentiveStyle: 'Price reductions on standing inventory that can close inside the quarter, plus closing-cost credits and buydowns through the affiliated lender.',
		incentiveTypes: ['price-reduction', 'closing-cost-credit', 'rate-buydown'],
		faqs: [
			{
				question: 'When is the best time to buy an M/I home in Austin?',
				answer: 'Late in a quarter, and late in the calendar year most of all. M/I has consistently pushed reductions on homes that can close by December, because a closed home in the current year is worth more to them than a slightly higher price in the next one. If your timeline is flexible by even a few weeks, aligning it to their quarter end is the cheapest negotiation you will ever do.',
			},
		],
		contentUpdated: '2026-09-23',
	},
	{
		slug: 'chesmar-homes',
		name: 'Chesmar Homes',
		priceRange: '$400K-$750K',
		segment: 'Move-up, Texas-based',
		firstHand: false,
		shortAnswer: 'Chesmar Homes is a Texas-based builder working the move-up band in the Austin metro, roughly $400,000 to $750,000. They are active in Pflugerville, Georgetown, and the north metro. Being regional rather than national, they tend to be more flexible on individual requests than the publicly traded volume builders, but their incentive packages are correspondingly smaller and less standardised.',
		strengths: [
			'Texas-based, so plans and elevations are designed for this climate rather than adapted from a national catalogue.',
			'More flexible than the national builders on individual requests and change orders.',
			'Solid standard finish level for the price band.',
		],
		watchOuts: [
			'Smaller and less predictable incentive packages than the national builders.',
			'Fewer communities, so selection is limited if you are tied to a specific suburb.',
			'Because they are less standardised, get every agreed change in writing rather than relying on the conversation.',
		],
		negotiating: [
			'Flexibility is the lever here, not discount. Ask for the change you actually want rather than a generic price cut.',
			'Confirm what is standard versus optional in the specific community — it varies more between Chesmar communities than it does at a national builder.',
		],
		incentiveStyle: 'Modest closing-cost credits and occasional buydowns. More willing to accommodate a specific request than to cut the price.',
		incentiveTypes: ['closing-cost-credit', 'rate-buydown'],
		faqs: [
			{
				question: 'Is a regional builder like Chesmar better than a national builder?',
				answer: 'Neither is better in general, and the tradeoff is predictable. A regional builder is usually more flexible on the specific thing you want and less able to fund a large incentive. A national volume builder can buy your rate down aggressively and is far more rigid about anything outside its standard process. Decide which of those two you actually need before you compare the homes.',
			},
		],
		contentUpdated: '2026-09-23',
	},
	{
		slug: 'pulte-homes',
		name: 'Pulte Homes',
		priceRange: '$350K-$700K',
		segment: 'Entry-level through move-up, plus Del Webb 55+',
		firstHand: false,
		affiliates: 'Pulte Mortgage.',
		shortAnswer: 'Pulte Homes builds across the entry-level and move-up bands in the Austin metro and also operates the Del Webb 55-plus brand, most visibly at Sun City in Georgetown. Price range runs roughly $350,000 to $700,000 for Pulte-branded product. Their floor plans emphasise flexible living space, and incentives are typically routed through Pulte Mortgage as buydowns and closing-cost credits.',
		strengths: [
			'Flexible plan design, with genuinely useful optional configurations rather than cosmetic choices.',
			'Del Webb gives them the strongest 55-plus position in the metro at Sun City Texas.',
			'Consistent national process and warranty administration.',
			'Well represented across several price points inside the same suburb.',
		],
		watchOuts: [
			'Incentives are tied to Pulte Mortgage in most cases.',
			'Del Webb communities carry age restrictions and their own HOA and amenity dues, which are substantial and are part of the monthly cost.',
			'Lot premiums in the desirable sections are significant.',
		],
		negotiating: [
			'Price the Pulte Mortgage buydown against an outside lender before accepting the tied incentive.',
			'At Del Webb, get the full monthly picture: HOA, amenity dues, and any special district, not just the mortgage payment.',
			'Ask which plans they are trying to move. Builders discount plans, not just homes.',
		],
		incentiveStyle: 'Rate buydowns and closing-cost credits through Pulte Mortgage. Periodic incentives on standing inventory.',
		incentiveTypes: ['rate-buydown', 'closing-cost-credit'],
		faqs: [
			{
				question: 'Is Sun City Georgetown worth it for a 55-plus buyer?',
				answer: 'It is the most established active-adult community in the metro and the amenity base is real rather than promotional. The honest caution is the monthly number: the mortgage is only part of it once HOA and amenity dues are included, and resale in a large age-restricted community competes against a constant supply of new Del Webb inventory a few streets away. Budget from the all-in monthly figure and look at resale history in the specific section.',
			},
		],
		contentUpdated: '2026-09-23',
	},
	{
		slug: 'dr-horton',
		name: 'D.R. Horton',
		priceRange: '$250K-$450K',
		segment: 'Highest-volume entry-level',
		firstHand: false,
		affiliates: 'DHI Mortgage.',
		shortAnswer: 'D.R. Horton is the highest-volume homebuilder in the country and sits at the entry-level end of the Austin market, roughly $250,000 to $450,000, including the Express Homes brand at the lowest price points. They build mainly in the eastern and northern value suburbs. Incentives are large and are tied to DHI Mortgage, and the trade-off for the price is a basic finish level and tight lots.',
		strengths: [
			'The lowest genuine entry point into new construction in the metro.',
			'Very large incentive budgets, particularly rate buydowns through DHI Mortgage.',
			'High inventory turnover means quick move-in options are almost always available.',
			'Straightforward, fast process.',
		],
		watchOuts: [
			'Finish level is basic and the Express brand is more basic still. Walk a completed home, not a decorated model.',
			'Lots are small and homes sit close together. Check the plat for setbacks and whether your windows face a neighbour\'s wall.',
			'Incentives are tied to DHI Mortgage almost without exception.',
			'The value suburbs where they build most heavily are also where MUD and PID rates are highest.',
			'Resale competes directly against the builder still selling new homes in the same subdivision, which caps appreciation while the community is building out.',
		],
		negotiating: [
			'The buydown is the product. Compare the all-in monthly payment, not the price, because the tied financing is where the value sits.',
			'Ask how many phases are left to build. Buying in the last phase of a subdivision is materially better for resale than buying in the first.',
			'Inspect anyway. High volume and speed make a third-party inspection more valuable here, not less.',
		],
		incentiveStyle: 'Aggressive rate buydowns through DHI Mortgage, closing-cost credits, and frequent price adjustments on standing inventory.',
		incentiveTypes: ['rate-buydown', 'closing-cost-credit', 'price-reduction'],
		faqs: [
			{
				question: 'Is D.R. Horton a good builder for a first-time buyer in Austin?',
				answer: 'It is often the only way into new construction at the lowest price points, and the rate buydowns genuinely lower the monthly payment. The honest caveats are finish level, lot size, and resale timing: while the builder is still selling new homes in your subdivision, your resale competes with a brand-new house plus an incentive package. If you plan to stay past buildout, that matters much less.',
			},
			{
				question: 'What is the difference between D.R. Horton and Express Homes?',
				answer: 'Express Homes is D.R. Horton\'s value brand, positioned below the main D.R. Horton line. Expect a smaller plan set, a more basic finish specification, and tighter lots. The process and warranty administration are the same. If you are comparing an Express home to a main-line D.R. Horton home at a similar payment, walk both and look specifically at cabinetry, flooring, and window count.',
			},
		],
		contentUpdated: '2026-09-23',
	},
	{
		slug: 'highland-homes',
		name: 'Highland Homes',
		priceRange: '$400K-$900K',
		segment: 'Move-up and semi-custom, Texas-based',
		firstHand: false,
		shortAnswer: 'Highland Homes is a Texas-based builder in the move-up and semi-custom bands, roughly $400,000 to $900,000 in the Austin metro. They are known for above-average standard specification and for customer-satisfaction scores near the top of the industry. They build in the stronger master-planned communities in Georgetown, Leander, and the north metro, and their incentives are modest relative to the volume builders.',
		strengths: [
			'Standard specification is genuinely above the market at the price point, particularly trim and cabinetry.',
			'Consistently high customer-satisfaction and warranty-responsiveness scores.',
			'Real structural options on most plans.',
			'Strong positions in the better master plans.',
		],
		watchOuts: [
			'Incentives are smaller than the volume builders. You are paying for the house, not being paid to buy it.',
			'Design-center spend adds up quickly because the option list is long and good.',
			'Build timelines on to-be-built homes are longer than the volume builders.',
		],
		negotiating: [
			'Ask for a design-center allowance rather than a price reduction. It is the concession they are most likely to approve.',
			'Standing inventory is a different conversation from a to-be-built. Ask what is complete and unsold.',
			'On a long build, negotiate the rate lock terms explicitly.',
		],
		incentiveStyle: 'Design-center allowances and closing-cost credits. Price movement is limited.',
		incentiveTypes: ['design-center-allowance', 'closing-cost-credit'],
		faqs: [
			{
				question: 'Why is Highland Homes more expensive than other builders in the same community?',
				answer: 'Usually because the standard specification is higher, so you are comparing a base Highland home to a partly upgraded home from a volume builder. Price the comparison at equivalent finish rather than at base, and include the design-center spend needed to bring the cheaper home to the same level. Sometimes Highland wins that comparison outright, and sometimes it does not, but base-to-base is not a real comparison.',
			},
		],
		contentUpdated: '2026-09-23',
	},
	{
		slug: 'perry-homes',
		name: 'Perry Homes',
		priceRange: '$400K-$900K',
		segment: 'Move-up and semi-custom, Texas-based',
		firstHand: false,
		shortAnswer: 'Perry Homes is a long-established Texas builder working the move-up and semi-custom bands in Austin, roughly $400,000 to $900,000. They build in the larger master plans including Wolf Ranch in Georgetown. Perry is known for a distinctive plan library with high ceilings and formal spaces, and for being relatively inflexible on changes once a contract is signed.',
		strengths: [
			'Distinctive, well-regarded floor plans with generous ceiling heights and natural light.',
			'Long track record in Texas and a stable warranty organisation.',
			'Strong presence in the better Georgetown and north-metro master plans.',
		],
		watchOuts: [
			'Notably rigid about changes after contract. Decide before you sign, because afterwards is genuinely difficult.',
			'Plan library is distinctive, which is a strength if it suits you and a problem if you want something it does not offer.',
			'Incentives are modest compared to the volume builders.',
		],
		negotiating: [
			'Get everything settled before contract. This is the builder where "we will sort that out later" costs the most.',
			'Focus on closing costs and lot premium rather than base price.',
			'Ask about completed inventory, where there is more room than on a to-be-built.',
		],
		incentiveStyle: 'Closing-cost contributions, occasional buydowns. Base price rarely moves.',
		incentiveTypes: ['closing-cost-credit', 'rate-buydown'],
		faqs: [
			{
				question: 'Can you make changes to a Perry home after signing?',
				answer: 'Much less than at most builders. Perry runs a tightly standardised process and change orders after contract are difficult and expensive where they are possible at all. Treat the contract signing as the deadline for every structural and option decision, and walk a completed home of your exact plan beforehand if one is available anywhere in the metro.',
			},
		],
		contentUpdated: '2026-09-23',
	},
	{
		slug: 'david-weekley-homes',
		name: 'David Weekley Homes',
		priceRange: '$450K-$1M+',
		segment: 'Move-up and semi-custom, employee-owned',
		firstHand: true,
		shortAnswer: 'David Weekley Homes builds move-up and semi-custom homes in the Austin metro from roughly $450,000 to over $1 million, including model homes at Headwaters in Dripping Springs. They are employee-owned and consistently rate at the top of the industry for customer experience. Their design flexibility is among the best of the production builders, and their incentives are correspondingly modest.',
		strengths: [
			'Among the best customer-experience records of any production builder, and it shows in the warranty period rather than just the sales process.',
			'Real design flexibility, including structural changes that most production builders will not consider.',
			'High standard specification.',
			'Well positioned in the Hill Country communities west and southwest of Austin.',
		],
		watchOuts: [
			'Price per square foot is at the top of the production-builder range.',
			'Incentives are small. This is not the builder to approach looking for a large concession.',
			'Hill Country communities carry their own considerations: septic in some sections, longer commutes, and wildfire insurance pricing.',
		],
		negotiating: [
			'Negotiate the design allowance and the lot, not the price.',
			'In the Hill Country communities, price insurance before you commit. It is a larger variable out there than buyers expect.',
			'Ask what structural changes are genuinely available on the plan you want; the answer is more often yes here than elsewhere.',
		],
		incentiveStyle: 'Design-center allowances and closing-cost help. Price movement is rare.',
		incentiveTypes: ['design-center-allowance', 'closing-cost-credit'],
		faqs: [
			{
				question: 'Why is David Weekley more expensive per square foot?',
				answer: 'Higher standard specification, more design flexibility, and a service model that costs them more to run. Whether that is worth it depends on how much you value the build quality and the warranty experience over the size of the house. If your constraint is the monthly payment, a volume builder with a large buydown will get you more square feet. If your constraint is how the house is to live in and deal with afterwards, the comparison looks different.',
			},
		],
		contentUpdated: '2026-09-23',
	},
	{
		slug: 'toll-brothers',
		name: 'Toll Brothers',
		priceRange: '$600K-$1.5M+',
		segment: 'Luxury',
		firstHand: false,
		affiliates: 'Toll Brothers Mortgage.',
		shortAnswer: 'Toll Brothers is the luxury end of Austin production building, generally $600,000 and up and frequently well past $1 million. They build in the higher-end master plans and in the Hill Country communities west of Austin. Design customisation is extensive, the design studio is where most of the price is determined, and incentives usually arrive as design-studio allowances rather than price reductions.',
		strengths: [
			'The widest customisation range of any production builder in the market.',
			'High standard specification and genuinely premium finish options.',
			'Strong lot positions in the best sections of the communities they build in.',
		],
		watchOuts: [
			'The design studio can add several hundred thousand dollars. The base price is close to meaningless as a budget.',
			'Long build times, which makes rate-lock terms a material negotiation.',
			'At this price point resale is thinner and takes longer, so overbuilding for the neighbourhood is a real risk.',
		],
		negotiating: [
			'The design studio allowance is the negotiation. Ask for it in dollars and get it in the contract.',
			'On a long build, extended locks and float-downs matter more than a price concession.',
			'Look hard at the comparable resale market before overbuilding a lot. At this level the ceiling in a given community is real.',
		],
		incentiveStyle: 'Design studio allowances, closing-cost contributions, and financing incentives through Toll Brothers Mortgage on long builds.',
		incentiveTypes: ['design-center-allowance', 'closing-cost-credit', 'extended-rate-lock'],
		faqs: [
			{
				question: 'How much do Toll Brothers upgrades actually add?',
				answer: 'It is common for the design studio to add 20 to 40 percent over the base price, and more is entirely possible. Budget from a realistic all-in number before you start, because the studio process is designed to be enjoyable and incremental. Ask your agent to hold you to a number, and decide in advance which categories you are willing to exceed it on.',
			},
		],
		contentUpdated: '2026-09-23',
	},
	{
		slug: 'brohn-homes',
		name: 'Brohn Homes',
		priceRange: '$300K-$550K',
		segment: 'Entry-level and first move-up',
		firstHand: false,
		shortAnswer: 'Brohn Homes builds entry-level and first move-up homes in the Austin metro, roughly $300,000 to $550,000, and is part of Clayton Properties Group. They concentrate in the value suburbs east and north of Austin. Incentive packages are competitive with the other volume builders and are typically structured as buydowns and closing-cost credits on standing inventory.',
		strengths: [
			'Competitive pricing in the entry-level band with a slightly better standard finish than the lowest-cost national brands.',
			'Focused footprint in the value suburbs, so they know those submarkets well.',
			'Regular incentive activity on completed inventory.',
		],
		watchOuts: [
			'Smaller company footprint than the nationals means fewer communities to choose from.',
			'Their suburbs carry MUD and PID rates that materially change the monthly payment.',
			'Verify the warranty administration process, which is less standardised than a national builder.',
		],
		negotiating: [
			'Ask for the standing inventory list and what each home has already been reduced by.',
			'Confirm the special-district rate for the specific phase rather than the community.',
		],
		incentiveStyle: 'Rate buydowns and closing-cost credits, focused on completed homes.',
		incentiveTypes: ['rate-buydown', 'closing-cost-credit'],
		faqs: [
			{
				question: 'Who owns Brohn Homes?',
				answer: 'Brohn Homes is part of Clayton Properties Group, which is a Berkshire Hathaway company. In practice that means more financial backing behind the warranty than the company\'s local footprint would suggest, but the day-to-day process is still run regionally, so confirm how warranty requests are actually handled in your specific community.',
			},
		],
		contentUpdated: '2026-09-23',
	},
	{
		slug: 'kb-home',
		name: 'KB Home',
		priceRange: '$300K-$550K',
		segment: 'Entry-level and first move-up, built-to-order',
		firstHand: false,
		affiliates: 'KBHS Home Loans.',
		shortAnswer: 'KB Home builds entry-level and first move-up homes in the Austin metro, roughly $300,000 to $550,000, using a built-to-order model where buyers choose the plan, lot, and finishes rather than buying from standing inventory. They are active in the northern and eastern suburbs. The trade-off is more personalisation than a spec builder at this price, and a longer wait.',
		strengths: [
			'Built-to-order at an entry-level price, which is unusual — most personalisation at this level is not available at all.',
			'Energy-efficiency specification is above the entry-level average.',
			'Transparent option pricing compared to most design centers.',
		],
		watchOuts: [
			'Built-to-order means waiting, and a long wait at an entry-level budget exposes you to rate movement.',
			'Because you are choosing finishes, the final price drifts above the advertised base almost by design.',
			'Incentives are tied to the in-house lender in most cases.',
		],
		negotiating: [
			'Negotiate the studio allowance and the lot premium separately from the base.',
			'On a build with a long timeline, the rate lock terms are worth more than a small price concession. Ask what extended lock options exist before you sign.',
		],
		incentiveStyle: 'Closing-cost credits and rate buydowns through KBHS Home Loans, plus studio allowances.',
		incentiveTypes: ['closing-cost-credit', 'rate-buydown', 'design-center-allowance', 'extended-rate-lock'],
		faqs: [
			{
				question: 'Is KB Home built to order really different?',
				answer: 'Yes, and it is the main reason to consider them at this price band. You select the plan, the lot, and the finishes rather than choosing among finished homes. The cost is time and rate exposure: a build that takes months at an entry-level budget means your payment depends on where rates land, so treat the lock terms as part of the price rather than as paperwork.',
			},
		],
		contentUpdated: '2026-09-23',
	},
	{
		slug: 'ashton-woods',
		name: 'Ashton Woods',
		priceRange: '$350K-$700K',
		segment: 'Entry-level through move-up, design-led',
		firstHand: false,
		shortAnswer: 'Ashton Woods builds across the entry-level and move-up bands in the Austin metro, roughly $350,000 to $700,000, and differentiates on design. They run a curated design studio rather than an open-ended option list, and also operate the Starlight Homes brand at lower price points. They are active in Pflugerville, Hutto, and the north and east suburbs.',
		strengths: [
			'Design-led approach produces better-looking homes than most builders at the same price.',
			'Curated studio packages reduce decision fatigue and make the final price more predictable.',
			'Starlight Homes brand covers the lower price points with the same operational backbone.',
		],
		watchOuts: [
			'Curated packages mean less flexibility if you want something outside them.',
			'Starlight is a distinctly more basic product. Know which brand you are actually buying.',
			'Incentive levels vary a lot between communities.',
		],
		negotiating: [
			'Ask what the studio package costs against choosing items individually. Sometimes the package is genuinely cheaper and sometimes it is bundling things you do not want.',
			'Compare Ashton Woods and Starlight homes in person before assuming the cheaper brand is the same house.',
		],
		incentiveStyle: 'Closing-cost credits, studio allowances, and buydowns that vary by community.',
		incentiveTypes: ['closing-cost-credit', 'design-center-allowance', 'rate-buydown'],
		faqs: [
			{
				question: 'What is the difference between Ashton Woods and Starlight Homes?',
				answer: 'Starlight is Ashton Woods\' value brand, aimed at the entry-level buyer with a simpler specification and a smaller plan set. The operational backbone is shared, but the houses are not the same. If you are comparing prices between the two, walk a completed home of each rather than comparing the model homes, because the model is always the best-case version of either brand.',
			},
		],
		contentUpdated: '2026-09-23',
	},
	{
		slug: 'gfo-home',
		name: 'GFO Home',
		priceRange: '$350K-$650K',
		segment: 'Move-up, Texas-based',
		firstHand: true,
		shortAnswer: 'GFO Home is a Texas-based builder working the move-up band in the Austin metro, roughly $350,000 to $650,000, with communities in Pflugerville and the north and east suburbs. As a regional builder they tend to be more accommodating on individual requests than the national volume builders, while offering smaller and less standardised incentive packages.',
		strengths: [
			'Regional and accessible, with decision-makers closer to the transaction than at a national builder.',
			'More willing to accommodate a specific request.',
			'Competitive standard specification for the price band.',
		],
		watchOuts: [
			'Limited community count, so suburb choice is constrained.',
			'Incentive packages are smaller and vary more than a national builder\'s.',
			'Get agreed changes in writing rather than relying on a conversation, as with any smaller builder.',
		],
		negotiating: [
			'Ask for the specific accommodation you want rather than a generic discount. That is where a regional builder can actually say yes.',
			'Confirm what is standard in the specific community; it varies between their communities more than at a national builder.',
		],
		incentiveStyle: 'Modest closing-cost credits and occasional buydowns, negotiated case by case rather than posted.',
		incentiveTypes: ['closing-cost-credit', 'rate-buydown'],
		faqs: [
			{
				question: 'Should I consider a smaller builder like GFO in Austin?',
				answer: 'Yes, if what you want is flexibility rather than the largest possible incentive. A regional builder can often accommodate a change a national builder would refuse outright, and the person deciding is usually reachable. The trade-off is a smaller concession budget and a less standardised process, so put every agreement in writing and confirm the warranty process before you sign.',
			},
		],
		contentUpdated: '2026-09-23',
	},
];

/**
 * Match a free-text builder field from the community data to a builder record.
 *
 * The community `builder` field is prose and often lists several builders for
 * one master plan ("D.R. Horton, DRB Homes, M/I Homes, Chesmar"). It also spells
 * the same company differently in different rows ("MI Homes" vs "M/I Homes"),
 * so compare on letters only.
 */
export function matchBuilder(builderField: string) {
	const norm = (v: string) => v.toLowerCase().replace(/[^a-z]/g, '');
	const field = norm(builderField);
	// Longest name first, so "Toll Brothers" is not shadowed by a shorter match.
	return [...BUILDERS]
		.sort((a, b) => b.name.length - a.name.length)
		.find((b) => field.includes(norm(b.name.replace(/ homes$/i, ''))));
}

/**
 * Does this community's builder field mention this builder at all?
 *
 * Distinct from matchBuilder, which returns the single primary builder for a
 * community. A master plan listing "Highland Homes, Perry Homes, Coventry Homes"
 * has one primary for the community page's negotiating section, but belongs on
 * all three builder pages.
 */
export function builderMentioned(builderField: string, builder: Builder) {
	const norm = (v: string) => v.toLowerCase().replace(/[^a-z]/g, '');
	return norm(builderField).includes(norm(builder.name.replace(/ homes$/i, '')));
}

export function findBuilder(slug: string) {
	return BUILDERS.find((b) => b.slug === slug);
}

/** Builders William has personally closed or actively negotiated with. */
export function firstHandBuilders() {
	return BUILDERS.filter((b) => b.firstHand);
}
