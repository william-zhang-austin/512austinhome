// City-vs-city comparisons for /compare/{a}-vs-{b}/.
//
// Comparison queries are disproportionately well served by a page that actually
// commits to an answer. "It depends on your priorities" is true and useless; the
// verdict field has to say who should pick which, by name.
//
// The factual columns are pulled from CITIES at build time so a comparison can
// never drift out of sync with the city page it compares.

export interface Comparison {
	slug: string;
	/** City slugs, in the order they appear in the URL. */
	a: string;
	b: string;
	/** The citable summary. Must contain an actual answer, not a hedge. */
	shortAnswer: string;
	/** Who should choose the first city. */
	chooseA: string[];
	/** Who should choose the second. */
	chooseB: string[];
	/** The thing buyers get wrong about this specific comparison. */
	watchFor: string;
	contentUpdated: string;
}

export const COMPARISONS: Comparison[] = [
	{
		slug: 'round-rock-vs-cedar-park',
		a: 'round-rock',
		b: 'cedar-park',
		shortAnswer: 'Round Rock and Cedar Park are the two established north Austin suburbs and the choice usually comes down to employer and school district rather than lifestyle. Cedar Park sits on the US-183A corridor and is zoned mainly to Leander ISD, which puts it closer to Apple and the northwest tech campuses. Round Rock sits on I-35 with Round Rock ISD and is closer to Dell. Both are mature suburbs with resale stock rather than large new-construction inventory, and both price above the outer value suburbs.',
		chooseA: [
			'You work at Dell, or anywhere along the I-35 corridor north of Austin.',
			'You want Round Rock ISD specifically, which is large, established and consistently well regarded.',
			'You want slightly more square footage per dollar than Cedar Park for comparable housing stock.',
			'You value being closer to the I-35 spine for travel south into Austin or north to Georgetown.',
		],
		chooseB: [
			'You work at Apple on Parmer Lane or anywhere on the northwest corridor, where the US-183A toll road is a genuinely faster commute than I-35.',
			'You want Leander ISD, which is the stronger draw for many relocating families.',
			'You prefer the Hill Country side of the metro, with more terrain and tree cover.',
			'You want access to Leander\'s new-construction inventory one exit north without living in it.',
		],
		watchFor: 'Buyers compare these two on price per square foot and miss that they sit on different highways. The commute difference between US-183A and I-35 to the same job can be twenty minutes each way, and I-35 through central Austin is under multi-year reconstruction. Pick the corridor that matches the campus first, then compare houses inside it.',
		contentUpdated: '2026-09-23',
	},
	{
		slug: 'georgetown-vs-leander',
		a: 'georgetown',
		b: 'leander',
		shortAnswer: 'Georgetown and Leander are both large new-construction markets north of Austin, and the real difference is the highway and the school district. Georgetown sits on I-35 in Williamson County with Georgetown ISD and Liberty Hill ISD, and offers a genuine historic downtown. Leander sits on the US-183A toll corridor with Leander ISD, and is closer to the northwest tech campuses. Both carry MUD or PID taxes in most new communities. Leander generally commutes better to Apple; Georgetown generally offers more house per dollar.',
		chooseA: [
			'You want more square footage for the money and are willing to be further north.',
			'You want a real town center rather than a retail corridor, which Georgetown genuinely has and Leander does not.',
			'You are oriented toward Samsung Taylor or the northeast corridor rather than northwest Austin.',
			'You want the widest choice of master-planned communities and builders in one city.',
		],
		chooseB: [
			'You work at Apple or on the northwest corridor; US-183A is materially faster than I-35.',
			'You want Leander ISD, which is a primary draw for relocating families.',
			'You want to stay closer to Cedar Park amenities and the Lakeline area without paying Cedar Park prices.',
			'You want Hill Country terrain rather than the flatter land north on I-35.',
		],
		watchFor: 'Both cities have addresses that are not in the school district their name implies. Georgetown-area lots can land in Liberty Hill, Leander, Jarrell or Round Rock ISD, and Leander addresses can sit in Round Rock ISD. Verify the district for the exact address before you decide, not the city, and get the combined MUD and PID rate for the specific phase in writing.',
		contentUpdated: '2026-09-23',
	},
	{
		slug: 'pflugerville-vs-hutto',
		a: 'pflugerville',
		b: 'hutto',
		shortAnswer: 'Pflugerville and Hutto are the two value suburbs on the northeast side, and the trade is ten to fifteen minutes of commute against roughly fifty to seventy thousand dollars of purchase price. Pflugerville sits closer in at the TX-130 and TX-45 interchange, which gives it the best access in the metro to Samsung, Tesla and Dell simultaneously. Hutto is further out on TX-130 with lower prices and Hutto ISD. Both carry MUD taxes in most new communities.',
		chooseA: [
			'You work at Samsung, Tesla or Dell. The TX-130 and TX-45 interchange reaches all three without crossing I-35.',
			'You want a shorter commute and more retail and services already in place.',
			'You want the widest builder selection in the value band, from entry-level through the mid $700s.',
			'You expect to resell within a few years; Pflugerville is the more liquid of the two.',
		],
		chooseB: [
			'Price per square foot is your binding constraint and you can absorb the extra drive.',
			'You want a newer, smaller-town feel and are comfortable that retail is still arriving.',
			'You are buying more house than Pflugerville allows at your budget and the commute is off-peak or hybrid.',
			'You are oriented toward Samsung Taylor specifically, which is closer from Hutto than from Pflugerville.',
		],
		watchFor: 'The commute gap between these two is smaller off-peak and much larger at rush hour, so a buyer who tours on a Saturday systematically underestimates it. Drive TX-130 at 8am before committing to Hutto. Also compare the effective tax rate rather than the price: a Hutto home in a newer MUD can carry a higher rate than a Pflugerville home in a mature one, which narrows the monthly gap considerably.',
		contentUpdated: '2026-09-23',
	},
	{
		slug: 'leander-vs-cedar-park',
		a: 'leander',
		b: 'cedar-park',
		shortAnswer: 'Leander and Cedar Park are adjacent on the US-183A corridor and share Leander ISD, so the comparison is almost entirely new construction versus established resale. Cedar Park is built out, with mature trees, existing amenities and mostly resale inventory at higher prices. Leander is where the new construction is, with lower entry prices, newer schools and less tree cover. Same district, same highway, different stage of life.',
		chooseA: [
			'You want new construction and builder incentives, which Cedar Park has very little of.',
			'Your budget does not reach Cedar Park resale pricing for the square footage you need.',
			'You want the newest school facilities in the district.',
			'You want a larger lot than the equivalent Cedar Park budget allows.',
		],
		chooseB: [
			'You want mature trees, established neighborhoods and amenities that already exist rather than are planned.',
			'You want the shorter commute; Cedar Park is meaningfully closer to Apple and the northwest campuses.',
			'You would rather buy resale with a known tax history than a new build with a first-year assessment surprise.',
			'You want to avoid MUD and PID taxes, which are far more common in Leander\'s new communities.',
		],
		watchFor: 'This is the comparison where the tax difference is largest and least visible. A Cedar Park resale in an established neighborhood can carry an effective rate well below a Leander new build in a young MUD, which can erase the price advantage on a monthly basis. Compare the all-in monthly payment, not the purchase price, and ask for the specific MUD rate and its remaining debt schedule.',
		contentUpdated: '2026-09-23',
	},
	{
		slug: 'manor-vs-pflugerville',
		a: 'manor',
		b: 'pflugerville',
		shortAnswer: 'Manor and Pflugerville are both northeast-side options with good access to Tesla and Samsung, and the difference is price against school district and services. Manor is the lowest entry point into new construction on this side of the metro, zoned to Manor ISD, with retail and services still catching up to the housing. Pflugerville costs more, is zoned to Pflugerville ISD, and is substantially more built out. For a Tesla commute the drive times are close; the resale outlook is not.',
		chooseA: [
			'Entry price is the binding constraint and you want new construction rather than older resale.',
			'You work at Tesla Gigafactory; Manor is one of the closest options to Del Valle.',
			'You are buying to hold and are comfortable that the area is still developing around you.',
			'You want the largest lot and square footage available at the lowest price in the metro.',
		],
		chooseB: [
			'School district matters to you. Pflugerville ISD is the stronger of the two and the gap is real.',
			'You want retail, healthcare and services that already exist rather than are announced.',
			'You expect to resell inside five years; Pflugerville is considerably more liquid.',
			'You want access to Samsung, Tesla and Dell from one interchange rather than optimising for one.',
		],
		watchFor: 'Manor is where the gap between price and effective monthly cost is widest, because the newest communities carry the heaviest MUD and PID load. A Manor home that looks fifty thousand dollars cheaper can close much of that gap once the special district is in the escrow. Run the effective rate for the specific phase, and look at what is actually scheduled to be built on the land around you before assuming the area fills in.',
		contentUpdated: '2026-09-23',
	},
	{
		slug: 'georgetown-vs-round-rock',
		a: 'georgetown',
		b: 'round-rock',
		shortAnswer: 'Georgetown and Round Rock both sit on I-35 north of Austin, and the comparison is mostly about how far north you are willing to live. Round Rock is closer in, more built out, zoned to Round Rock ISD, and dominated by resale. Georgetown is further north with far more new construction, a genuine historic downtown, and Georgetown or Liberty Hill ISD. Georgetown buys more house; Round Rock buys a shorter commute and a more established market.',
		chooseA: [
			'You want new construction and builder incentives, which Georgetown has in volume and Round Rock does not.',
			'You want more square footage and lot for the money.',
			'You want a real downtown square rather than suburban retail.',
			'You are oriented toward Samsung Taylor rather than central Austin.',
		],
		chooseB: [
			'Your commute is to Dell or into Austin and the extra fifteen to twenty miles each way matters.',
			'You want Round Rock ISD, which is larger and more established than Georgetown ISD.',
			'You prefer established neighborhoods with mature trees and known tax history over a new build.',
			'You want a more liquid resale market with less builder inventory competing against you.',
		],
		watchFor: 'The I-35 Capital Express reconstruction through central Austin affects this comparison more than any other, because both cities depend on that corridor and the disruption runs for years. If your commute crosses central Austin, drive it before deciding, and weigh SH-130 tolls as a recurring monthly cost rather than an occasional bypass.',
		contentUpdated: '2026-09-23',
	},
];

export function findComparison(slug: string) {
	return COMPARISONS.find((c) => c.slug === slug);
}
