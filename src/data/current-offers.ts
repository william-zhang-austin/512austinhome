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
export const OFFERS_AS_OF = '2026-10-14';

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
	/** ISO date the builder says the offer (or its contract window) ends. Past this, the
	 * row drops off every page at the next build. */
	endsOn?: string;
}

/**
 * Sourced 2026-09-23 and refreshed 2026-10-04 and 2026-10-14 from builder emails sent directly to William's agent
 * address. Only buyer-facing terms are recorded.
 *
 * DELIBERATELY EXCLUDED, AND DO NOT ADD THEM: agent commission rates, BTSA
 * (bonus to selling agent), realtor bonuses and co-op splits. Several of the
 * source emails led with those; they are compensation between the builder and
 * the brokerage, they are not a buyer benefit, and they do not belong on a
 * public page.
 */
const ALL_OFFERS: CurrentOffer[] = [
	{
		builderSlug: 'lennar',
		headline: '5 percent toward closing costs, with an owner\'s title policy included.',
		detail: 'On eligible homes. Lennar states that incentives are subject to change and vary by home, and that its offers may require using its designated lender or closing agent. Ask me which homes qualify.',
		source: 'Email from a Lennar Austin new home consultant',
		verifiedOn: '2026-10-02',
	},
	{
		builderSlug: 'pulte-homes',
		headline: 'Rates as low as 3.99 percent (5.362 percent APR) on a 7/6 ARM, fixed for the first seven years.',
		detail: 'Through Pulte Mortgage. Their published example assumes a 780 FICO, a primary residence and 20 percent down, with all incentives applied toward closing costs; the rate adjusts every six months from year eight. Pulte states the rate was effective 9/17/2026, that loans must be locked and closed by 12/31/2026, and that it is offered first come first served. An ARM is not the right product for everyone — ask me to price it against a fixed rate before you decide.',
		source: 'Pulte Homes Central Texas email',
		verifiedOn: '2026-09-18',
	},
	{
		builderSlug: 'toll-brothers',
		headline: '4.99 percent (5.76 percent APR) FHA 30-year fixed rate with as little as 3.5 percent down on select quick move-in homes.',
		detail: 'Through Toll Brothers Mortgage Company, for buyers who sign on a select quick move-in home on or after 9/4/2026 and close by 10/30/2026. Toll\'s published example assumes a $509,224 price and a 660 minimum credit score; limited availability and subject to change. Toll is also running a National Sales Event for deposits 10/3 to 10/18 with savings that vary by home.',
		source: 'Toll Brothers emails, 10/3 and 10/13/2026',
		verifiedOn: '2026-10-13',
		endsOn: '2026-10-30',
	},
	{
		builderSlug: 'perry-homes',
		headline: 'Year End Sales Event: choose up to $50,000 in flex cash or a 5.49 percent rate (6.278 percent APR, 30-year fixed), plus a move-in package.',
		detail: 'On qualifying inventory homes, which must close by 12/31/2026. Perry has also cut prices on inventory homes near Georgetown.',
		communities: ['Parmer Ranch, Georgetown', 'Parkside on the River, Georgetown'],
		source: 'Email from a Perry Homes Austin new home sales counselor',
		verifiedOn: '2026-10-03',
	},
	{
		builderSlug: 'highland-homes',
		headline: 'Up to $60,000 in flex cash plus a 1-0 rate buydown on to-be-built homes, or a 4.99 percent first-year rate on quick move-in homes.',
		detail: 'To-be-built: contracts from 10/8 to 10/31/2026 that can close by 5/31/2027; flex cash goes to design options or closing costs. Quick move-in: 4.99 percent in year one, then 5.99 percent fixed for years 2 to 30 (6.032 percent APR, conventional), on homes that can close by 12/4/2026; an FHA/VA rate is also offered, so ask me for that number. Both require financing through Highland HomeLoans, funds are limited, and they cannot be combined with other offers.',
		source: 'Highland Homes email, 10/14/2026',
		verifiedOn: '2026-10-14',
		endsOn: '2026-10-31',
	},
	{
		builderSlug: 'dr-horton',
		headline: 'Red Tag Event, 10/9 to 11/1/2026: special pricing on select homes, plus up to $10,000 in closing costs with DHI Mortgage.',
		detail: 'Contracts during the event must close by 12/27/2026; first come, first served. The closing cost credit cannot exceed 2 percent of the final sales price and requires DHI Mortgage. Incentives vary by community and home.',
		source: 'D.R. Horton Austin Division email',
		verifiedOn: '2026-10-02',
		endsOn: '2026-11-01',
	},
	{
		builderSlug: 'meritage-homes',
		headline: 'Below-market rates and up to $10,000 in closing costs on select quick move-in homes, contracts through 10/15/2026.',
		detail: 'Requires financing through MTH Mortgage and using Carefree Title. The closing cost credit cannot exceed 3 percent of the base price. Meritage does not publish a single rate; ask me for the number on a specific home.',
		source: 'Meritage Homes email',
		verifiedOn: '2026-10-01',
		endsOn: '2026-10-15',
	},
	{
		builderSlug: 'coventry-homes',
		headline: 'National Sales Event extended through 10/18/2026: savings on select quick move-in homes.',
		detail: 'Applies to select inventory homes with contracts from 9/3 to 10/18/2026. Savings vary by home; in Coventry\'s own examples they ranged from $8,000 to $80,000.',
		source: 'Coventry Homes email',
		verifiedOn: '2026-10-01',
		endsOn: '2026-10-18',
	},
	{
		builderSlug: 'brohn-homes',
		headline: 'Up to 6 percent flex cash on qualifying homes, usable for a promotional rate as low as 4.5 percent (6.480 percent APR, FHA 5/1 ARM).',
		detail: 'Flex cash can buy down the rate when you finance with Brohn\'s preferred lender, CMG Financial. Brohn\'s "hot homes" get an extra 3 percent flex cash toward closing costs. At Cross Creek (Cedar Park), the final homes get the choice of up to 6 percent flex cash or a reduced rate. The 4.5 percent rate is an adjustable-rate loan fixed for five years: ask me to price it against a fixed rate before you decide.',
		source: 'Brohn Homes Austin email (10/8/2026) and a Brohn sales executive (10/10/2026)',
		verifiedOn: '2026-10-10',
	},
];

/** Live offers only: anything whose end date has passed drops off at build time. */
const today = new Date().toISOString().slice(0, 10);
export const CURRENT_OFFERS: CurrentOffer[] = ALL_OFFERS.filter((o) => !o.endsOn || o.endsOn >= today);

export function offersForBuilder(builderSlug: string) {
	return CURRENT_OFFERS.filter((o) => o.builderSlug === builderSlug);
}

/** How stale the sheet is, in days. Null when no date has been set. */
export function offersAgeInDays(today = new Date()): number | null {
	if (!OFFERS_AS_OF) return null;
	const then = new Date(`${OFFERS_AS_OF}T12:00:00Z`);
	return Math.floor((today.getTime() - then.getTime()) / 86_400_000);
}
