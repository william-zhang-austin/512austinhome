// Incentive education content for /incentives/.
//
// EDITORIAL RULE: this site does not publish a table of "current offers".
// Builder incentives change monthly, sometimes weekly, and a stale number on a
// public page is worse than no number — it misleads a buyer and it makes every
// other figure on the site less trustworthy. What belongs here is the part that
// does not go stale: what each incentive type is, how to value it, and which
// ones are worth less than they look. Current offers go out individually,
// because that is the only way they can be accurate.

export interface IncentiveType {
	slug: string;
	name: string;
	/** What it actually is, in plain words. */
	what: string;
	/** How to work out what it is worth to you specifically. */
	worth: string;
	/** The catch. Every one of these has a catch. */
	catch: string;
	/** Rough magnitude seen in the Austin market. Ranges, never a current number. */
	typical: string;
}

export const INCENTIVE_TYPES: IncentiveType[] = [
	{
		slug: 'rate-buydown',
		name: 'Rate buydown',
		what: 'The builder pays points to the lender to lower your mortgage rate, either permanently for the life of the loan or temporarily for the first one to three years. A permanent buydown is the more valuable of the two and builders do not always make the distinction clear.',
		worth: 'Work it out as a monthly payment difference multiplied by how long you actually expect to keep the loan, not by thirty years. A permanent buydown of a point or more on a mid-priced Austin home is usually worth more than an equivalent price reduction if you keep the mortgage past about five years. If you expect to refinance or move sooner, it is worth considerably less.',
		catch: 'Almost always tied to the builder\'s in-house lender, and often to their title company as well. The tied loan may carry a higher fee load that eats part of the benefit, so get a full loan estimate from the builder lender and from an outside lender and compare the all-in cost, not the rate.',
		typical: 'The largest single incentive in the Austin market. On entry-level inventory, buydowns taking the rate into the low fours or below have been common.',
	},
	{
		slug: 'closing-cost-credit',
		name: 'Closing cost credit',
		what: 'The builder contributes a fixed dollar amount toward your closing costs and prepaid items — title, escrow, the first year of insurance, tax reserves, and loan fees.',
		worth: 'Dollar for dollar, and immediately. Unlike a buydown it does not depend on how long you keep the loan. The constraint is that it can only be applied to actual closing costs, so a credit larger than your closing costs is partly wasted unless it can be redirected to a buydown.',
		catch: 'There is a cap on how much a seller can contribute depending on your loan type and down payment, and a credit above that cap is simply lost. Also frequently tied to the in-house lender.',
		typical: 'Commonly quoted in the several-thousand to five-figure range on a mid-priced Austin home, and higher on standing inventory.',
	},
	{
		slug: 'price-reduction',
		name: 'Price reduction',
		what: 'A straight cut to the purchase price. The rarest of the four, because it is the one that shows up in the public record.',
		worth: 'It lowers your loan, your monthly payment, and your property tax basis, and it is the only incentive that keeps working after you refinance. Per dollar it is the cleanest thing you can get.',
		catch: 'Builders resist it hardest, and for a reason that matters to you too: a recorded price cut becomes a comparable sale for every other home in the community, including yours when you sell. Builders protect the price and pay you in other ways to avoid that. This is genuinely a case where the builder\'s interest and yours partly align.',
		typical: 'Mostly seen on standing inventory that has aged past a few months, and near quarter or year end.',
	},
	{
		slug: 'design-center-allowance',
		name: 'Design center allowance',
		what: 'A credit to spend at the builder\'s design studio on finishes, fixtures, and sometimes structural options.',
		worth: 'Worth full value only if you were going to spend it anyway. Builder design-center pricing carries a substantial margin, so a $10,000 allowance does not buy $10,000 of work at contractor prices — it buys whatever the builder charges $10,000 for. Structural items are the exception and are worth taking here, because they cannot be added later at any sensible price.',
		catch: 'It is spend-or-lose, it can only be used at their studio, and it tends to encourage spending past the allowance. Some builders offer a design-center minimum and an allowance in the same breath, which is not the same as a discount.',
		typical: 'The default concession from move-up and semi-custom builders who will not move on price.',
	},
	{
		slug: 'broker-bonus',
		name: 'Broker bonus',
		what: 'An additional payment the builder offers the buyer\'s agent on a specific home, usually one they want moved. It is advertised to agents, not to buyers.',
		worth: 'Potentially a great deal to you, because it can often be redirected to you as a closing-cost concession. But only if you know it exists and ask.',
		catch: 'You will not be told unless you ask. Watch the closing disclosure: a broker bonus and a buyer-side concession can appear on the same statement in a way that cancels out, leaving the total compensation line unchanged. If the numbers do not add up, ask what changed and when.',
		typical: 'Posted on aged standing inventory, often a flat four-figure amount.',
	},
	{
		slug: 'extended-rate-lock',
		name: 'Extended rate lock or float-down',
		what: 'On a to-be-built home with a long construction timeline, the builder\'s lender locks your rate further out than a standard lock, sometimes with a one-time float-down if rates fall before closing.',
		worth: 'On a build running six months or more this can be worth more than any cash concession, because the alternative is carrying the rate risk yourself on a house you are already committed to buy.',
		catch: 'Extended locks cost money, and somebody pays. Ask explicitly whether the lock is free, built into the price, or charged at closing, and whether the float-down is automatic or has to be requested inside a window.',
		typical: 'Standard part of the package from semi-custom and luxury builders on long builds. Rarely offered on inventory homes.',
	},
];

export const INCENTIVE_FAQS = [
	{
		question: 'When are Austin builder incentives the biggest?',
		answer: 'At the end of a quarter, and at the end of the calendar year most of all. Builders manage to closing counts, and a home that closes inside the period is worth materially more to them than one that closes a week later at a slightly higher price. If your timeline is flexible by even two or three weeks, aligning it to a builder\'s quarter end is the cheapest negotiating leverage available to you. The second-best window is any home that has been standing completed for several months.',
	},
	{
		question: 'Can I negotiate builder incentives, or are they fixed?',
		answer: 'The advertised package is usually fixed, because it is a marketing program. What is negotiable is what sits on top of it for a specific home: an additional closing-cost contribution, a broker bonus redirected to you, a lot premium reduced, a design allowance added. That is a conversation about one address, not about the community, and it usually happens with the sales manager rather than the agent in the model home.',
	},
	{
		question: 'Do I lose the incentive if I use my own lender?',
		answer: 'In most cases yes, at least the headline portion of it. Builders tie their largest incentives to their affiliated mortgage and title companies. You can use any lender you want, and you should still get an outside quote — but compare the all-in cost including fees rather than the rate alone, because the tied buydown often does win, and you want to know by how much rather than assume either way.',
	},
	{
		question: 'Is a rate buydown better than a price cut?',
		answer: 'It depends entirely on how long you keep the loan. A permanent buydown usually beats an equivalent price reduction if you hold the mortgage beyond roughly five years, because the monthly saving compounds. A price cut wins if you expect to refinance or sell sooner, and it also lowers your property tax basis, which the buydown does not. Run both as a total cost over your realistic holding period rather than accepting the larger headline number.',
	},
	{
		question: 'Why do builders prefer incentives over lowering the price?',
		answer: 'Because a recorded price reduction becomes a comparable sale that drags down the value of every other home in the community, including the ones they have not sold yet. An incentive does not appear in the sales price. That is also why a price cut is worth fighting for when you can get one, and why you rarely can until a home has been standing for months.',
	},
	{
		question: 'What is the catch with a "free" upgrade package?',
		answer: 'It is priced at the builder\'s design-center margin rather than at what the work costs. A free upgrade package is real value if it contains things you wanted, and close to zero if it does not, because it is spend-or-lose and only usable at their studio. Structural items are the part worth taking, since they cannot be added later at a sensible price. Finish-level items are usually cheaper to do yourself after closing.',
	},
];
