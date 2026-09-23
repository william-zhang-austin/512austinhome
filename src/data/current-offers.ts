// CURRENT builder incentive offers.
//
// ─────────────────────────────────────────────────────────────────────────────
// THIS IS THE ONLY FILE ON THE SITE THAT GOES STALE ON PURPOSE.
//
// Every offer carries the date it was verified and where it came from. The
// pages show that date prominently and tell the reader to contact William for
// the current number, because builder incentives change without notice and a
// figure that was true last month sends a buyer into a sales office expecting
// something that no longer exists.
//
// TO UPDATE: edit OFFERS_AS_OF to today, then add, change or delete rows below.
// Delete anything you cannot re-verify — an empty list is honest and the page
// handles it. Do not leave a row in place hoping it still holds.
//
// Rule: never record an offer you have not confirmed yourself with the builder
// rep or seen in writing from the builder. `source` is how you remember which.
// ─────────────────────────────────────────────────────────────────────────────

/** The date the whole sheet was last reviewed. Shown on every incentives page. */
export const OFFERS_AS_OF = '2026-09-23';

export interface CurrentOffer {
	/** Must match a slug in BUILDERS. */
	builderSlug: string;
	/** One line, as the builder states it. "Up to $20,000 toward closing costs." */
	headline: string;
	/** Optional extra conditions worth stating. Keep it short. */
	detail?: string;
	/** Specific communities this applies to, if it is not metro-wide. */
	communities?: string[];
	/** Where this came from: a rep's name, an email, or a builder URL. */
	source: string;
	/** ISO date this specific offer was confirmed. */
	verifiedOn: string;
}

/**
 * Sourced 2026-09-23 from builder emails sent directly to William's agent
 * address. Only buyer-facing terms are recorded.
 *
 * DELIBERATELY EXCLUDED, AND DO NOT ADD THEM: agent commission rates, BTSA
 * (bonus to selling agent), realtor bonuses and co-op splits. Several of the
 * source emails led with those; they are compensation between the builder and
 * the brokerage, they are not a buyer benefit, and they do not belong on a
 * public page.
 */
export const CURRENT_OFFERS: CurrentOffer[] = [
	{
		builderSlug: 'lennar',
		headline: 'Up to $40,000 in price reductions on select homes closing before the end of October.',
		detail: 'Applies to selected move-in ready inventory across Central Texas rather than to every home. Lennar also quotes FHA fixed rates as low as 4.25 percent in select communities and an FHA ARM as low as 3.375 percent, both through Lennar Mortgage. Lennar states that offers and seller contributions may require using their designated lender or closing agent and are subject to change or substitution without notice.',
		source: 'Email from a Lennar Austin Division new home consultant',
		verifiedOn: '2026-09-22',
	},
	{
		builderSlug: 'pulte-homes',
		headline: 'Rates as low as 3.99 percent (5.362 percent APR) on a 7/6 ARM, fixed for the first seven years.',
		detail: 'Through Pulte Mortgage. Their published example assumes a 780 FICO, a primary residence and 20 percent down, with all incentives applied toward closing costs; the rate adjusts every six months from year eight. Pulte states the rate was effective 9/17/2026, that loans must be locked and closed by 12/31/2026, and that it is offered first come first served. An ARM is not the right product for everyone — ask me to price it against a fixed rate before you decide.',
		source: 'Pulte Homes Central Texas email',
		verifiedOn: '2026-09-18',
	},
	{
		builderSlug: 'taylor-morrison',
		headline: 'Semi-Annual Sale, running two weeks only.',
		detail: 'Taylor Morrison runs this event twice a year and the savings vary by community and by home, with no single published figure. Separately they have released new pricing from the low $300s at Village Grove in Dripping Springs and at Sunfield in Buda. Ask me what it actually amounts to on a specific home.',
		communities: ['Village Grove, Dripping Springs', 'Sunfield, Buda'],
		source: 'Taylor Morrison Austin emails',
		verifiedOn: '2026-09-19',
	},
];

export function offersForBuilder(builderSlug: string) {
	return CURRENT_OFFERS.filter((o) => o.builderSlug === builderSlug);
}

/** How stale the sheet is, in days. Null when no date has been set. */
export function offersAgeInDays(today = new Date()): number | null {
	if (!OFFERS_AS_OF) return null;
	const then = new Date(`${OFFERS_AS_OF}T12:00:00Z`);
	return Math.floor((today.getTime() - then.getTime()) / 86_400_000);
}
