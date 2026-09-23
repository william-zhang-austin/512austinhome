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
export const OFFERS_AS_OF = '';

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
 * Currently empty. Nothing is published here that has not been confirmed, and
 * an empty sheet is the honest state until William supplies the current one.
 * The pages render a "contact me for this week's offer" state when a builder
 * has no row, which is the conversion path anyway.
 */
export const CURRENT_OFFERS: CurrentOffer[] = [];

export function offersForBuilder(builderSlug: string) {
	return CURRENT_OFFERS.filter((o) => o.builderSlug === builderSlug);
}

/** How stale the sheet is, in days. Null when no date has been set. */
export function offersAgeInDays(today = new Date()): number | null {
	if (!OFFERS_AS_OF) return null;
	const then = new Date(`${OFFERS_AS_OF}T12:00:00Z`);
	return Math.floor((today.getTime() - then.getTime()) / 86_400_000);
}
