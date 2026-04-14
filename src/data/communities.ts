// New construction community data.
// Update this file whenever builder pricing, incentives, or inventory changes.
// Images are referenced by absolute URL (hosted on builder CDNs). If a builder
// CDN breaks the link, update the heroImage field.

export interface Community {
	slug: string;
	name: string;
	builder: string;
	city: 'Pflugerville' | 'Leander';
	cityUrl: string;
	address?: string;
	priceFrom: number;
	priceTo?: number;
	sqftMin: number;
	sqftMax: number;
	bedsMin: number;
	bedsMax: number;
	bathsMin: number;
	bathsMax: number;
	garage?: string;
	schoolDistrict: string;
	hoa?: string;
	mud?: boolean;
	amenities: string[];
	homeTypes: string[];
	heroImage?: string;
	gallery?: string[];
	tagline: string;
	summary: string;
	highlights: string[];
	watchOuts: string[];
	incentives?: string;
	relatedBlogSlug?: string;
	updatedDate: string;
}

export const COMMUNITIES: Community[] = [
	// ---------- PFLUGERVILLE ----------
	{
		slug: 'lisso-pflugerville',
		name: 'Lisso',
		builder: 'Taylor Morrison',
		city: 'Pflugerville',
		cityUrl: '/neighborhoods/pflugerville',
		priceFrom: 375990,
		priceTo: 557000,
		sqftMin: 1700,
		sqftMax: 2612,
		bedsMin: 3,
		bedsMax: 5,
		bathsMin: 2,
		bathsMax: 3,
		garage: '2-car',
		schoolDistrict: 'Pflugerville ISD',
		hoa: '$40–$46 / month',
		mud: true,
		amenities: ['Community pool', 'Pickleball courts', 'Soccer field', 'Playground', 'Amenity center'],
		homeTypes: ['Single family'],
		tagline: 'The pick for tech workers — ~15 minutes to Apple, Samsung, Dell, Tesla.',
		summary:
			'Lisso is one of the most convenient new construction communities in the north Austin metro for tech workers. It sits in central Pflugerville with fast toll-road access to Apple, Samsung, Dell, and Tesla — plus a Costco and H-E-B five minutes away. The Lavaca floor plan (5 bed, downstairs master) is the flagship; the Colorado is the value play at 2,172 sqft. I toured both and wrote a full breakdown on the blog.',
		highlights: [
			'Downstairs master option (Lavaca) — rare at this price point',
			'Central Pflugerville with Toll 130 / Toll 45 access',
			'Five minutes to Costco and H-E-B',
			'Full amenity package for under $50/month HOA',
			'Vaulted foyers and quartz countertops standard',
		],
		watchOuts: [
			'Pflugerville ISD — solid, but not top-ranked like Leander ISD',
			'Lot orientation matters — west-facing homes take heavy afternoon sun',
			'Pick your lot before falling in love with a floor plan',
		],
		incentives: 'Rate buydowns on quick-move-in homes (~4.99% historically). Confirm current offers before your visit — these change monthly.',
		relatedBlogSlug: 'lisso-pflugerville-new-homes',
		updatedDate: '2026-04-13',
	},
	{
		slug: 'grove-at-blackhawk',
		name: 'The Grove at Blackhawk',
		builder: 'Chesmar Homes',
		city: 'Pflugerville',
		cityUrl: '/neighborhoods/pflugerville',
		address: '19501 Helens Catch Dr, Pflugerville, TX 78660',
		priceFrom: 469990,
		priceTo: 749190,
		sqftMin: 1931,
		sqftMax: 3033,
		bedsMin: 3,
		bedsMax: 5,
		bathsMin: 2,
		bathsMax: 4,
		garage: '2–3 car',
		schoolDistrict: 'Pflugerville ISD',
		amenities: ['Lagoon pool', '8-lane Olympic pool', 'Clubhouse', 'Miles of hiking/biking trails', 'Parks'],
		homeTypes: ['Single family', '1 and 2 story'],
		heroImage: 'https://nhs-dynamic-secure.akamaized.net/Images/Homes/ChesmarHomes/92363412-250411.jpg?maxwidth=2880&maxheight=900&format=jpg&progressive=true',
		gallery: [
			'https://nhs-dynamic-secure.akamaized.net/Images/Homes/ChesmarHomes/96931423-250709.jpg?maxwidth=1920&maxheight=1080&format=jpg&progressive=true',
			'https://nhs-dynamic-secure.akamaized.net/Images/Homes/ChesmarHomes/96931426-250709.jpg?maxwidth=1920&maxheight=1080&format=jpg&progressive=true',
		],
		tagline: 'The newest section of Pflugerville\'s original master-planned community.',
		summary:
			'The Grove is the newest phase of Blackhawk, Pflugerville\'s flagship master-planned community. If you\'ve already decided you want Blackhawk\'s amenities — and they\'re genuinely excellent, anchored by an 8-lane Olympic pool and a lagoon pool — this is the only way to get them in a new build. Chesmar is a Texas-focused builder with 16 floor plans here, ranging from 1,931 to 3,033 sqft, and the community sits minutes from Tesla, Dell, and Samsung.',
		highlights: [
			'Access to full Blackhawk amenity package (pools, trails, clubhouse)',
			'16 floor plans — widest selection in the area',
			'Minutes from Tesla Gigafactory, Dell, and Samsung Taylor',
			'Both 1- and 2-story options',
			'Recently reduced pricing on select inventory',
		],
		watchOuts: [
			'Chesmar is less well-known than Lennar or DR Horton — ask about warranty terms',
			'Larger homes approach $750K — this is mid-market, not entry-level',
			'Blackhawk HOA fees on top of community amenity fees — ask for the full breakdown',
		],
		updatedDate: '2026-04-13',
	},
	{
		slug: 'trails-at-carmel',
		name: 'The Trails at Carmel',
		builder: 'Ashton Woods',
		city: 'Pflugerville',
		cityUrl: '/neighborhoods/pflugerville',
		address: '17621 Carmel Rancho Avenue, Pflugerville, TX 78660',
		priceFrom: 350000,
		priceTo: 705000,
		sqftMin: 1512,
		sqftMax: 4007,
		bedsMin: 3,
		bedsMax: 5,
		bathsMin: 2,
		bathsMax: 5,
		schoolDistrict: 'Pflugerville ISD (Weiss HS)',
		amenities: ['Future community pool', 'Future playscape'],
		homeTypes: ['Single family'],
		heroImage: 'https://awh.widen.net/content/hwfmf8abzc/jpeg/AUS_LC70_Avalon_FAM1.jpg?w=1920&h=1080&crop=yes&quality=80',
		tagline: 'The widest price range in Pflugerville — $350K to $700K under one builder.',
		summary:
			'Carmel is a newer Ashton Woods community in east Pflugerville that covers the widest price band in the area — you can get a 1,512 sqft starter for $350K or a 4,000 sqft family home for $700K, all in the same neighborhood. The community is still early (models coming in late spring, amenities on the way), which means pricing is more flexible than established sections. Weiss High School zoning is a selling point for families.',
		highlights: [
			'Widest price range in Pflugerville — $350K to $705K',
			'Ashton Woods has strong design credibility and a quality reputation',
			'Weiss HS zoning — one of Pflugerville ISD\'s better high schools',
			'Early-phase community means better lot selection and price flexibility',
			'40s, 50s, 60s, and 70s home collections under one roof',
		],
		watchOuts: [
			'Amenities are still "coming soon" — ask for a construction timeline',
			'Early sections may have active construction for 1–2 years',
			'Ashton Woods base-level finishes are modest — budget for design center upgrades',
		],
		updatedDate: '2026-04-13',
	},
	{
		slug: 'meadowlark-preserve',
		name: 'Meadowlark Preserve',
		builder: 'Lennar',
		city: 'Pflugerville',
		cityUrl: '/neighborhoods/pflugerville',
		priceFrom: 290999,
		priceTo: 450000,
		sqftMin: 1312,
		sqftMax: 2955,
		bedsMin: 3,
		bedsMax: 5,
		bathsMin: 2,
		bathsMax: 5,
		garage: '2-car',
		schoolDistrict: 'Pflugerville ISD',
		amenities: ['Trails', 'Lake', 'Amenity center', 'Community pool', 'Playground'],
		homeTypes: ['Single family — alley and front-load'],
		tagline: 'The most affordable new construction in Pflugerville — from the $290s.',
		summary:
			'Meadowlark Preserve is a 98-acre master-planned community in east Pflugerville and is currently the entry-level price point for new construction in the entire Austin metro that isn\'t in Kyle or Hutto. Lennar is running both the Lonestar and Claremont collections here, and with 375 homes planned at buildout plus 25 acres of parks and open space, this is a real neighborhood — not a subdivision. Three miles from the 3.8M sqft Amazon fulfillment center, which is already a hiring anchor for the area.',
		highlights: [
			'Starting in the high $290s — rare for new construction in Pflugerville',
			'Lennar "Everything\'s Included" pricing — fewer surprises at the design center',
			'25 acres of parks and open space in a 98-acre community',
			'Both alley and front-load home layouts',
			'Three miles from Amazon fulfillment center (1,000+ jobs)',
		],
		watchOuts: [
			'Homes under 1,500 sqft — these are compact starter homes, not family sizes',
			'Community is in active build-out — expect construction traffic for 1–2 years',
			'Lennar\'s "Everything\'s Included" means fewer customization options',
		],
		updatedDate: '2026-04-13',
	},

	// ---------- LEANDER ----------
	{
		slug: 'horizon-lake',
		name: 'Horizon Lake',
		builder: 'Pulte Homes',
		city: 'Leander',
		cityUrl: '/neighborhoods/cedar-park',
		priceFrom: 465000,
		priceTo: 580000,
		sqftMin: 2073,
		sqftMax: 2726,
		bedsMin: 4,
		bedsMax: 5,
		bathsMin: 3,
		bathsMax: 4,
		garage: '2-car',
		schoolDistrict: 'Leander ISD',
		amenities: ['Community amenities TBD'],
		homeTypes: ['Single family — 2 story'],
		tagline: 'The most affordable way into Leander ISD — starting at $465K.',
		summary:
			'Horizon Lake is the community I keep coming back to for buyers who want Leander ISD without spending $600K+. Pulte is running two flagship floor plans here: the Nelson (4-bed, 2,073 sqft, from $465K) and the more popular Riverdale (5-bed, 2,726 sqft, from $535K). Standard features punch above the price point — engineered tile throughout, 12-foot beam ceiling in the Nelson living room, 20-foot vaulted ceiling in the Riverdale. I toured both and wrote the full breakdown on the blog.',
		highlights: [
			'Leander ISD — top-ranked district in the Austin metro',
			'Engineered tile flooring standard (premium feature at this price)',
			'Second-story balcony on the Nelson — a rare resale differentiator',
			'20-foot vaulted ceiling in the Riverdale\'s living room',
			'~6 months from contract to move-in on new starts',
		],
		watchOuts: [
			'Both floor plans put the master upstairs',
			'Nelson has no master tub — walk-in shower only',
			'35–45 minutes to downtown Austin in traffic',
		],
		incentives: 'Rate buydowns historically as low as 4.99% on inventory. Always ask what\'s current.',
		relatedBlogSlug: 'horizon-lake-leander-new-homes',
		updatedDate: '2026-04-13',
	},
	{
		slug: 'travisso',
		name: 'Travisso',
		builder: 'Toll Brothers & Taylor Morrison',
		city: 'Leander',
		cityUrl: '/neighborhoods/cedar-park',
		priceFrom: 599587,
		priceTo: 2062000,
		sqftMin: 2679,
		sqftMax: 6021,
		bedsMin: 3,
		bedsMax: 5,
		bathsMin: 2,
		bathsMax: 6,
		schoolDistrict: 'Leander ISD',
		amenities: [
			'Resort-style pool and splash pad',
			'9,200 sqft Palazzo Clubhouse',
			'Fitness center',
			'Tennis courts',
			'Pickleball courts',
			'Bocce ball courts',
			'Yoga studio',
			'Hiking/biking trails',
			'Fire pit',
			'Children\'s playground',
		],
		homeTypes: ['Single family — luxury'],
		heroImage: 'https://cdn.tollbrothers.com/communities/masters/687/images-resized/Travisso_Palazzo-Clubhouse_2_CC_RET_RGB_1920.jpg',
		tagline: 'Hill Country views + the best amenity package in Leander.',
		summary:
			'Travisso is the luxury master-planned community in Leander and one of the few places in the north metro where you get real Hill Country views without crossing into Lakeway pricing. The amenity package is serious — the 9,200 sqft Palazzo Clubhouse, resort pool, and a separate Forum amenity with sport courts, yoga studio, and bocce. Both Toll Brothers and Taylor Morrison build here across five collections (Capri, Siena, Naples, Florence, Verona), which lets you size into the community from $599K all the way to $2M+.',
		highlights: [
			'Unparalleled Texas Hill Country views from most homesites',
			'Two builders across five collections — broad price and design range',
			'9,200 sqft clubhouse is the best amenity package in Leander',
			'First-floor primary bedrooms on most models',
			'Leander ISD — top-ranked district in the metro',
		],
		watchOuts: [
			'Starting price is $599K — this is luxury, not entry-level',
			'15 quick-move-in homes currently range $731K to $2M',
			'Further from downtown Austin than entry-level Leander communities',
			'HOA likely significant given the amenity package — confirm before signing',
		],
		incentives: 'Both builders currently offering reduced-rate financing on quick-move-in homes. Confirm terms before registering.',
		updatedDate: '2026-04-13',
	},
	{
		slug: 'wildspring',
		name: 'Wildspring',
		builder: 'Toll Brothers',
		city: 'Leander',
		cityUrl: '/neighborhoods/cedar-park',
		priceFrom: 529995,
		sqftMin: 2089,
		sqftMax: 3899,
		bedsMin: 3,
		bedsMax: 6,
		bathsMin: 2,
		bathsMax: 5,
		schoolDistrict: 'Leander ISD (Tarvin ES, Stiles MS, Rouse HS)',
		amenities: ['Resort-style pool', 'Playground', 'Pavilion'],
		homeTypes: ['Single family'],
		heroImage: 'https://cdn.tollbrothers.com/communities/masters/946/images-resized/Hidden-Creeks-at-Lakewood-Park_Koa_Kitchen_2_1920.jpg',
		gallery: [
			'https://cdn.tollbrothers.com/communities/masters/946/images-resized/8128_TX_CLUBHOUSE_SITE_1-NoBullets_1920.jpg',
		],
		tagline: 'Toll Brothers build quality at the lower end of Leander pricing.',
		summary:
			'Wildspring is Toll Brothers\' more accessible Leander community — you get Toll\'s design and build quality starting at $530K, which is about $70K less than their Travisso entry point. 12 home designs across the Arbor and Grove collections, ranging up to nearly 3,900 sqft. First-floor primary bedrooms on most designs, open-concept great rooms, and large luxury kitchens with islands. Zoned to Rouse High School, one of Leander ISD\'s stronger high schools.',
		highlights: [
			'Toll Brothers quality at a lower entry price than Travisso',
			'12 home designs across two collections — strong selection',
			'First-floor primary bedrooms on most plans',
			'Rouse HS zoning — strong Leander ISD high school',
			'Up to 3,899 sqft for larger families',
		],
		watchOuts: [
			'Base finishes at Toll Brothers are often modest — design center upgrades add up quickly',
			'Lot premiums can be significant — ask up front',
			'Community amenities lighter than Travisso',
		],
		updatedDate: '2026-04-13',
	},
	{
		slug: 'leander-estates',
		name: 'Leander Estates',
		builder: 'David Weekley Homes',
		city: 'Leander',
		cityUrl: '/neighborhoods/cedar-park',
		address: '3085 Honeywood Drive, Leander, TX 78641',
		priceFrom: 774990,
		sqftMin: 2507,
		sqftMax: 4994,
		bedsMin: 3,
		bedsMax: 5,
		bathsMin: 2,
		bathsMax: 5,
		schoolDistrict: 'Leander ISD',
		amenities: ['One-acre homesites', 'Ranch-style layouts'],
		homeTypes: ['Single family — estate lots'],
		tagline: 'One-acre lots in Leander ISD — the rare Austin "land + new build" play.',
		summary:
			'Leander Estates is a different animal from the typical production community. David Weekley is building ranch-style homes on one-acre lots — that alone makes it stand out in a market where most new construction sits on 60-foot lots. If you want space for a shop, a pool, a garden, or just distance from your neighbor, this is the most accessible way to get a one-acre Leander ISD address without building custom. Starting at $775K, which for one-acre land in Leander is actually a competitive number.',
		highlights: [
			'One-acre homesites — extremely rare in Austin new construction',
			'Ranch-style single-story plans emphasized',
			'David Weekley has a strong build-quality reputation',
			'Leander ISD — top district in the metro',
			'Up to 4,994 sqft for larger families',
		],
		watchOuts: [
			'One-acre lots mean higher maintenance costs (septic possible, well possible)',
			'Confirm whether homes are on city water/sewer or well/septic',
			'Longer commute to central Austin — this is rural Leander, not close-in',
			'Base price doesn\'t include a lot premium — ask for total delivered price',
		],
		updatedDate: '2026-04-13',
	},
	{
		slug: 'palmera-ridge',
		name: 'Palmera Ridge',
		builder: 'Highland Homes, Perry Homes, Coventry Homes',
		city: 'Leander',
		cityUrl: '/neighborhoods/cedar-park',
		priceFrom: 270000,
		priceTo: 688000,
		sqftMin: 1500,
		sqftMax: 3500,
		bedsMin: 3,
		bedsMax: 5,
		bathsMin: 2,
		bathsMax: 4,
		schoolDistrict: 'Leander ISD (Tarvin ES on-site)',
		amenities: ['Two community pools', 'Two amenity centers', 'Parks', 'Hiking trails', 'Playgrounds'],
		homeTypes: ['Single family — multi-builder'],
		heroImage: 'https://palmeraridge.com/img/home/gallery/2025-home-gallery1.jpg',
		gallery: [
			'https://palmeraridge.com/img/home/gallery/2025-home-gallery2.jpg',
			'https://palmeraridge.com/img/home/gallery/2025-home-gallery3.jpg',
			'https://palmeraridge.com/img/home/gallery/2025-home-gallery4.jpg',
		],
		tagline: 'The rare multi-builder Leander community — three builders, one HOA.',
		summary:
			'Palmera Ridge is a 426-acre master-planned community with roughly 1,000 homes at buildout. Three builders — Highland Homes, Perry Homes, and Coventry Homes — compete for buyers, which gives you more floor plans and more price points under one HOA than most Leander communities. Starting in the $270s through Highland\'s smaller plans and stretching to the high $600s for Perry\'s larger designs. On-site Tarvin Elementary means your kids don\'t cross a major road to get to school.',
		highlights: [
			'Three builders compete for buyers — more leverage for you',
			'Starting in the $270s — entry-level Leander ISD access',
			'Two pools and two amenity centers in one community',
			'On-site Tarvin Elementary',
			'Many cul-de-sac homesites — low traffic',
		],
		watchOuts: [
			'Each builder\'s base finishes differ — don\'t compare prices without comparing specs',
			'Perry Homes contracts are notably builder-favorable — bring an agent',
			'Highland\'s entry-level homes have tight layouts — walk through before committing',
			'Confirm MUD tax rate and year-2 property tax estimate before signing',
		],
		updatedDate: '2026-04-13',
	},
];

export function communitiesByCity(city: Community['city']) {
	return COMMUNITIES.filter((c) => c.city === city);
}

export function findCommunity(slug: string) {
	return COMMUNITIES.find((c) => c.slug === slug);
}

export function priceRangeLabel(c: Community): string {
	const fmt = (n: number) => {
		if (n >= 1000000) return `$${(n / 1000000).toFixed(1)}M`;
		return `$${Math.round(n / 1000)}K`;
	};
	if (c.priceTo && c.priceTo !== c.priceFrom) return `${fmt(c.priceFrom)} – ${fmt(c.priceTo)}`;
	return `From ${fmt(c.priceFrom)}`;
}

export function sqftRangeLabel(c: Community): string {
	return `${c.sqftMin.toLocaleString()} – ${c.sqftMax.toLocaleString()} sqft`;
}

export function bedsLabel(c: Community): string {
	return c.bedsMin === c.bedsMax ? `${c.bedsMin} bed` : `${c.bedsMin}–${c.bedsMax} bed`;
}
