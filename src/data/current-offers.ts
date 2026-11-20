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
export const OFFERS_AS_OF = '2026-11-20';

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
 * Sourced 2026-09-23 and refreshed 2026-10-04, 2026-10-14 and 2026-11-20 from builder emails sent directly to
 * William's agent address. Only buyer-facing terms are recorded. A rate is only published when the builder
 * gave its APR in writing.
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
		headline: '$8,000 to $10,000 in flex cash, plus closing-cost help and an owner\'s title policy, depending on the community.',
		detail: 'Lennar\'s Austin consultants quoted flex cash usable toward closing costs or a price reduction, 3.5 percent toward closing costs on some homes, appliances or blinds and a garage door opener included, and a $100 earnest money deposit on select homes. Lennar states its incentives are tied to using Lennar Mortgage and are subject to change, and the terms differ by community. Ask me which homes qualify and what applies to a specific one.',
		source: 'Emails from two Lennar Austin new home consultants, 11/13 and 11/19/2026',
		verifiedOn: '2026-11-19',
	},
	{
		builderSlug: 'pulte-homes',
		headline: 'Hometown Heroes: up to $2,000 toward options or closing costs for teachers, nurses, EMS, police, firefighters and military.',
		detail: 'On purchase agreements accepted in Pulte\'s Austin-area communities through 12/31/2026. Pulte lists active teachers, nurses, EMS, police, firefighters, veterans and active duty or retired military as eligible. One discount per home, not combined with other promotions, and unused credit cannot reduce the price. Pulte has also announced Black Friday pricing without published terms: ask me for the number on a specific home.',
		source: 'Pulte Homes Austin email, 11/11/2026',
		verifiedOn: '2026-11-11',
		endsOn: '2026-12-31',
	},
	{
		builderSlug: 'toll-brothers',
		headline: '5.49 percent (5.76 percent APR) 30-year fixed rate on select quick move-in homes.',
		detail: 'Through Toll Brothers Mortgage Company, for new buyers who sign on a select home on or after 10/8/2026 and close by 1/8/2027. Toll\'s example assumes a 740 credit score and at least 10 percent down; FHA and VA loans are not eligible, primary residences only, limited availability, and it cannot be combined with other offers.',
		source: 'Toll Brothers email, 11/19/2026',
		verifiedOn: '2026-11-19',
		endsOn: '2027-01-08',
	},
	{
		builderSlug: 'toll-brothers',
		headline: 'National Kitchen & Bath Event: savings on design finishes for deposits from 11/7 to 11/22/2026.',
		detail: 'On build-to-order, design-ready and quick move-in homes in participating communities. Toll does not publish a dollar amount; savings vary by community and home site, and the event cannot be combined with other offers.',
		source: 'Toll Brothers email, 11/19/2026',
		verifiedOn: '2026-11-19',
		endsOn: '2026-11-22',
	},
	{
		builderSlug: 'toll-brothers',
		headline: 'Jumbo 5/1 ARM with a 2/1 buydown: 4.625 percent in year one, 5.625 percent in year two, 6.625 percent in years 3 to 5 (7.33 percent APR).',
		detail: 'For loans from $650,000 to $2,000,000 on select quick move-in homes, signed 11/1 to 11/30/2026 and closed by 1/29/2027, through Toll Brothers Mortgage Company. Toll\'s example assumes a 740 credit score and 20 percent down; the rate adjusts every year after year five, up to a maximum of 11.625 percent. An ARM is not the right product for everyone, so ask me to price it against a fixed rate.',
		source: 'Toll Brothers email, 11/14/2026',
		verifiedOn: '2026-11-14',
		endsOn: '2026-11-30',
	},
	{
		builderSlug: 'perry-homes',
		headline: 'Flex cash on Perry inventory homes, usable to buy down the rate, lower the price or pay closing costs.',
		detail: 'The amount is set home by home on Perry\'s current inventory sheet, and Perry is pushing to close homes before the end of 2026. Ask me for the flex cash on a specific home.',
		source: 'Email from a Perry Homes Austin sales counselor, 11/14/2026',
		verifiedOn: '2026-11-14',
	},
	{
		builderSlug: 'highland-homes',
		headline: 'Up to $15,000 toward closing costs plus a 4.99 percent first-year rate (5.99 percent in years 2 to 30, 6.032 percent APR) on select inventory homes.',
		detail: 'Contracts from 11/5 to 11/29/2026 that close by 12/29/2026. Conventional 30-year fixed only, through Highland HomeLoans, and you must apply with them within 5 days of the contract. Highland\'s rate example assumes a 740 or higher credit score and 20 percent down. Funds are limited and the offer cannot be combined with other offers. Highland featured 6 Creeks in Kyle and Lariat.',
		source: 'Highland Homes emails, 11/11 and 11/16/2026',
		verifiedOn: '2026-11-16',
		endsOn: '2026-11-29',
	},
	{
		builderSlug: 'dr-horton',
		headline: 'Lower prices on select homes, up to $10,000 toward closing costs, and a 4.99 percent (6.031 percent APR) FHA 30-year fixed rate with DHI Mortgage.',
		detail: 'Contracts from 11/16 to 11/30/2026 that close by 12/31/2026, first come, first served. To get the advertised rate the buyer must pay a 3.5 percent discount point, which the builder\'s incentive can cover; VA and USDA versions are also offered. The closing cost help requires DHI Mortgage, varies by community, cannot be combined with other offers and cannot be used to cut the price. Primary residences only, and buyers who already registered with D.R. Horton may not qualify.',
		source: 'D.R. Horton Austin email, 11/16/2026',
		verifiedOn: '2026-11-16',
		endsOn: '2026-11-30',
	},
	{
		builderSlug: 'meritage-homes',
		headline: '4.25 percent (6.2 percent APR) 5/1 ARM, fixed for five years, plus up to $10,000 in closing costs on select quick move-in homes.',
		detail: 'Meritage extended its sales event in Austin to full-price contracts accepted 11/5 to 11/30/2026 that close by 12/31/2026. Requires an FHA, VA or conforming loan through MTH Mortgage and Carefree Title; the closing cost credit cannot exceed 3 percent of the base price, and it cannot be combined with other promotions. An ARM is not the right product for everyone, so ask me to price it against a fixed rate.',
		source: 'Meritage Homes email, 11/17/2026',
		verifiedOn: '2026-11-17',
		endsOn: '2026-11-30',
	},
	{
		builderSlug: 'coventry-homes',
		headline: 'Black Friday savings on select move-in ready homes, from $10,000 to $105,000 depending on the home.',
		detail: 'For contracts dated 11/2 to 11/30/2026 on select inventory homes in the Austin area. Coventry does not say how much of the savings is a price cut versus a credit, and the offer may not combine with other promotions. Ask me what the savings are on a specific home.',
		source: 'Coventry Homes email, 11/19/2026',
		verifiedOn: '2026-11-19',
		endsOn: '2026-11-30',
	},
	{
		builderSlug: 'brohn-homes',
		headline: 'Price cuts of up to $41,000 on select homes, plus 6 percent flex cash usable for a 4.5 percent (6.480 percent APR) FHA 5/1 ARM.',
		detail: 'The flex cash can buy down the rate when you finance with Brohn\'s preferred lender, CMG Financial, and Brohn\'s "hot homes" get an extra 3 percent flex cash toward closing costs. Brohn quoted the rate as of 10/1/2026, and it may change at lock. The 4.5 percent rate is an adjustable-rate loan fixed for five years: ask me to price it against a fixed rate before you decide.',
		source: 'Brohn Homes Austin email, 11/19/2026',
		verifiedOn: '2026-11-19',
	},
	{
		builderSlug: 'gfo-home',
		headline: '5.49 percent (6.949 percent APR) 7/6 ARM, fixed for the first seven years, on eligible quick move-in homes.',
		detail: 'Contracts accepted 11/5 to 11/30/2026 on eligible inventory homes that close by 12/30/2026, financing through a GFO preferred lender and using Capital Title. GFO\'s example assumes a 780 credit score and 10 percent down; after year seven the rate can adjust every six months. Not all homes qualify. An ARM is not the right product for everyone, so ask me to price it against a fixed rate.',
		source: 'GFO Home email, 11/18/2026',
		verifiedOn: '2026-11-18',
		endsOn: '2026-11-30',
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
