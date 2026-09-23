// Austin tech employers, for /moving-to-austin/{slug}/.
//
// Extracted from the single /tech-employers/ page, which was trying to rank for
// twelve separate entities at once. One page cannot be the best result for
// "neighborhoods near Apple Austin" and "where to live near Tesla Gigafactory"
// simultaneously; a model asked about one of them has to wade through the other
// eleven to find the answer. The hub page stays as the overview and links out.

export interface EmployerArea {
	name: string;
	commute: string;
	price: string;
	schools: string;
	notes: string;
}

export interface Employer {
	slug: string;
	name: string;
	/** Campus location, in plain words. */
	location: string;
	/** Headcount or footprint, as stated on the hub page. */
	scale: string;
	/** The commute-corridor context that decides where it makes sense to live. */
	intro: string;
	areas: EmployerArea[];
}

export const EMPLOYERS: Employer[] = [
	{
		slug: 'apple',
		name: 'Apple',
		location: 'Parmer Lane / Riata Vista, North Austin',
		scale: '~15,000 employees',
		intro: 'Apple\'s campus sprawls along Parmer Lane between US-183 and TX-45, roughly 20 miles north of downtown. It\'s the largest single private employer in Austin and the anchor of the North Austin tech corridor that also includes Samsung, IBM, and several smaller semiconductor companies. US-183A (toll road) is the primary commute artery from the northwest suburbs.',
		areas: [
			{ name: 'Cedar Park', commute: '15-20 min via US-183A', price: '$425K–$700K', schools: 'Leander ISD', notes: 'Cedar Park is the default choice for most Apple employees with families — short toll-road commute, highly-rated schools, and established neighborhoods with mature trees and amenities. Inventory is tight but demand is consistent.' },
			{ name: 'Leander (Wildspring, Horizon Lake, Travisso)', commute: '20-30 min via US-183A', price: '$450K–$900K', schools: 'Leander ISD', notes: 'Leander has some of the best new construction options for Apple employees. Wildspring and Horizon Lake offer new builds from the $450Ks. Travisso is the luxury option with Hill Country views north of $700K.' },
			{ name: 'Round Rock (Northwest)', commute: '20-25 min via Parmer Ln / TX-45', price: '$375K–$600K', schools: 'Round Rock ISD', notes: 'Northwest Round Rock sits directly east of Parmer Lane and offers slightly lower prices than Cedar Park for similar square footage. Round Rock ISD is top-rated.' },
			{ name: 'Northwest Austin (78750, 78759)', commute: '15-20 min via Parmer Ln', price: '$550K–$1M+', schools: 'Round Rock ISD / Austin ISD', notes: 'Anderson Mill, Spicewood, and the 78759 corridor put you closest to the Apple campus with a straight shot down Parmer Lane. Resale inventory is the norm here; prices reflect the premium location.' },
		],
	},
	{
		slug: 'tesla',
		name: 'Tesla',
		location: 'Del Valle / SE Austin, off TX-130 Toll',
		scale: '20,000+ employees at full buildout',
		intro: 'Tesla\'s Gigafactory Texas sits off TX-130 in Del Valle, about 15 miles southeast of downtown Austin. It\'s the most unconventional commute corridor in the Austin metro — southeast of downtown, which means most suburbs are northwest-to-southeast drives that avoid the worst congestion. TX-130 is the lifeline for this commute.',
		areas: [
			{ name: 'Pflugerville (Lisso, Grove at Blackhawk)', commute: '20-25 min via TX-130', price: '$375K–$560K new construction', schools: 'Pflugerville ISD', notes: 'The best value commuter suburb for Tesla. Lisso (Taylor Morrison, from $375K) and Grove at Blackhawk are both near the TX-130/TX-45 interchange and give a clean SE run to Giga Texas.' },
			{ name: 'Mueller / East Austin', commute: '20-25 min via TX-71 / 183', price: '$600K–$900K', schools: 'Austin ISD', notes: 'For Tesla workers who want central Austin walkability, Mueller and East Austin (78702) are the closest urban options. Higher prices, smaller homes, but walkable amenities and a short highway hop southeast.' },
			{ name: 'Manor', commute: '20-30 min via US-290 E', price: '$300K–$450K', schools: 'Manor ISD', notes: 'Manor is the entry-level option for Tesla workers. Prices are the lowest in the metro for this commute corridor. The tradeoff is Manor ISD schools rank below Pflugerville ISD, and the area is still catching up on retail and services.' },
			{ name: 'Hutto / Kyle', commute: '30-40 min via TX-130', price: '$320K–$480K', schools: 'Hutto ISD / Hays CISD', notes: 'Hutto (northeast) and Kyle (south) offer value and TX-130 access but add 10-15 minutes to the Tesla commute. Best for buyers prioritizing price per square foot over commute time.' },
		],
	},
	{
		slug: 'samsung',
		name: 'Samsung',
		location: 'Parmer Lane (existing fab) + Taylor, TX (new $17B fab)',
		scale: '10,000+ Austin, 2,000+ Taylor',
		intro: 'Samsung operates two distinct campuses in the Austin metro. The original fab on Parmer Lane in northeast Austin sits near the Samsung Blvd/Parmer Lane intersection (78754). The new Taylor fab — a $17 billion investment that broke ground in 2022 — is off US-79 in Taylor, TX, about 30 miles northeast of Austin. Pflugerville sits at the geographic midpoint between both campuses.',
		areas: [
			{ name: 'Pflugerville (Lisso, Grove at Blackhawk)', commute: '', price: '$375K–$560K', schools: 'Pflugerville ISD', notes: 'Pflugerville is the single best location for Samsung employees who want to hedge both campuses. Lisso and Grove at Blackhawk both sit near the TX-130/TX-45 interchange.' },
			{ name: 'Hutto', commute: '', price: '$320K–$480K', schools: 'Hutto ISD', notes: 'For employees assigned primarily to the Taylor fab, Hutto is the closest established city with a range of housing options. Prices are lower than Pflugerville and Round Rock, and new construction is active in several communities.' },
			{ name: 'Round Rock', commute: '', price: '$380K–$620K', schools: 'Round Rock ISD', notes: 'Round Rock ISD is one of the strongest districts in Central Texas, making Round Rock a top choice for Samsung families who want to prioritize schools.' },
			{ name: 'Northeast Austin (78754)', commute: '', price: '$380K–$600K', schools: 'Austin ISD / Pflugerville ISD', notes: 'The closest resale neighborhoods to Samsung\'s Parmer Lane fab. Convenient but resale-only; most new construction has pushed further out to Pflugerville and Hutto.' },
		],
	},
	{
		slug: 'dell',
		name: 'Dell',
		location: 'Round Rock HQ on Dell Way',
		scale: '~13,000 employees in metro',
		intro: 'Dell\'s corporate headquarters and main campus sits on Dell Way in Round Rock, just east of I-35 near the I-35/TX-45 interchange. It\'s one of the best-positioned corporate campuses in the metro for suburb access — Round Rock, Cedar Park, Pflugerville, and Hutto all offer reasonable commutes without requiring the I-35 gauntlet into downtown.',
		areas: [
			{ name: 'Round Rock', commute: '10-15 min', price: '$380K–$620K', schools: 'Round Rock ISD', notes: 'Living in Round Rock itself is the obvious choice for Dell employees — short commute, strong schools, and decent inventory across a range of price points. The northwest and southwest parts of Round Rock add 5-10 minutes but offer newer construction.' },
			{ name: 'Cedar Park', commute: '20-25 min via US-183 or TX-45', price: '$425K–$700K', schools: 'Leander ISD', notes: 'Cedar Park\'s east side is a 20-minute drive to Dell; the west side adds another 10 minutes but rewards with larger lots and top-ranked Leander ISD schools.' },
			{ name: 'Pflugerville', commute: '20-25 min via TX-45', price: '$375K–$560K', schools: 'Pflugerville ISD', notes: 'Pflugerville offers the best value for Dell employees willing to commute 20 minutes. The TX-45 connection to Round Rock avoids I-35. New construction is the primary option.' },
			{ name: 'Hutto', commute: '25-30 min via TX-130 / TX-45', price: '$310K–$460K', schools: 'Hutto ISD', notes: 'Hutto is the price-conscious option — best dollars-per-square-foot in the Dell commute corridor. A good fit for first-time buyers or those prioritizing space over commute time.' },
		],
	},
	{
		slug: 'google',
		name: 'Google',
		location: '500 W 2nd St + 601 W 2nd St (Block 185), Downtown Austin',
		scale: '~1,100 employees',
		intro: 'Google operates two adjacent office buildings in downtown Austin along West 2nd Street near the corner of Lamar Blvd. Both are walkable from the 2nd Street District and Lady Bird Lake. At roughly 1,100 employees, Google Austin is a mid-size office — large enough to anchor a real estate search, small enough that most employees choose centrally-located neighborhoods over suburban commutes.',
		areas: [
			{ name: 'Mueller', commute: '15-20 min via MLK Blvd or I-35', price: '$600K–$900K', schools: 'Austin ISD', notes: 'Mueller is the most-requested central Austin neighborhood for tech workers. It\'s a planned community with walkable retail, parks, a farmers market, and a mix of townhomes and single-family homes. Prices are high but justified by the quality of life and central location.' },
			{ name: 'East Austin (78702)', commute: '12-18 min via E 6th or E 2nd', price: '$550K–$1M+', schools: 'Austin ISD', notes: 'East Austin is popular with younger tech workers for its walkability, restaurant and bar scene, and proximity to downtown. New construction townhomes and condos fill many lots. Traffic into downtown is manageable from East 6th or East 2nd.' },
			{ name: 'South Congress / Travis Heights', commute: '15-20 min via S Congress or S 1st', price: '$650K–$1.2M', schools: 'Austin ISD', notes: 'South Congress and Travis Heights attract Google employees who want the Austin lifestyle — bungalows, walkability, proximity to Lady Bird Lake and Barton Springs. Premium prices, very limited inventory.' },
			{ name: 'Clarksville / Tarrytown', commute: '5-10 min via W 6th or Lamar', price: '$900K–$2M+', schools: 'Austin ISD (Casis Elem)', notes: 'For senior Google employees with larger budgets, Clarksville and Tarrytown are essentially walking distance from the office. Expect $900K+ for a modest single-family home; the location premium is real.' },
		],
	},
	{
		slug: 'oracle',
		name: 'Oracle',
		location: '2300 Cloud Way (Waterloo campus), Lady Bird Lake south shore',
		scale: '~10,000 employees',
		intro: 'Oracle\'s Waterloo campus sits on the south shore of Lady Bird Lake, replacing the old Auditorium Shores area. The location is uniquely central — it\'s equidistant from South Austin residential neighborhoods, the East Austin corridor, and the Westlake Hills that rise west of MoPac. The campus is close enough to walk or bike from South Congress-area neighborhoods.',
		areas: [
			{ name: 'Travis Heights / South Congress', commute: '5-15 min on bike or car', price: '$600K–$1.2M', schools: 'Austin ISD', notes: 'The closest residential neighborhoods to Oracle\'s campus. Travis Heights is walkable, has classic Austin bungalows, and sits just south of Lady Bird Lake. South Congress adds retail and restaurant walkability. Both are resale-only markets with limited inventory.' },
			{ name: 'Barton Hills / Zilker', commute: '10-20 min via S Lamar or Barton Springs Rd', price: '$750K–$1.5M', schools: 'Austin ISD (Barton Hills Elem)', notes: 'Zilker and Barton Hills are some of the most desirable neighborhoods in Austin — Barton Springs Pool, Zilker Park, the hike-and-bike trail, and proximity to downtown. Premium prices but some of the best resale stability in the city.' },
			{ name: 'Westlake Hills / Rollingwood', commute: '20-30 min via MoPac or Loop 360', price: '$1M–$4M+', schools: 'Eanes ISD', notes: 'For Oracle executives and senior managers, Westlake Hills and Rollingwood offer Eanes ISD (the highest-rated district in Central Texas) plus large lots and privacy. MoPac can be congested; budget 30-40 minutes during peak hours.' },
			{ name: 'Bee Cave / Lakeway', commute: '30-40 min via TX-71 / MoPac', price: '$550K–$1.2M', schools: 'Lake Travis ISD', notes: 'Bee Cave and Lakeway are popular with Oracle families who want Hill Country lifestyle, Lake Travis access, and strong Lake Travis ISD schools at lower prices than Westlake.' },
		],
	},
	{
		slug: 'meta',
		name: 'Meta',
		location: '300 W 6th St / Sixth and Guadalupe, Downtown Austin',
		scale: '',
		intro: 'Meta\'s Austin presence is concentrated in its downtown office at 300 West 6th Street, near the Shoal Creek corridor. It\'s a central location with access to all major central Austin neighborhoods and reasonable drives to most east and south Austin areas. Like Google, Meta\'s Austin office size means employees typically choose central neighborhoods over suburban commutes.',
		areas: [
			{ name: 'Downtown / Seaholm', commute: 'Walking distance or 5 min', price: '$450K–$900K (condos)', schools: 'Austin ISD', notes: 'Downtown condos in the Seaholm District, 2nd Street corridor, and West 6th area are literal walking distance to Meta\'s office. The downtown condo market has been softer than single-family since 2022, which means better values than the peak.' },
			{ name: 'Clarksville / Old West Austin', commute: '5-10 min or walkable', price: '$900K–$2M+', schools: 'Austin ISD', notes: 'Clarksville is immediately west of Meta\'s office — walkable for many employees. Older bungalows on tree-lined streets with strong walkability and top location. Very limited inventory, prices reflect the scarcity.' },
			{ name: 'East Austin / Mueller', commute: '15-25 min via E 6th or Manor Rd', price: '$550K–$900K', schools: 'Austin ISD', notes: 'East Austin and Mueller are the go-to central neighborhoods for Meta employees who want more space than downtown condos offer at a lower price than Clarksville. The 15-25 minute commute via 6th Street or Manor Rd is manageable.' },
			{ name: 'Tarrytown', commute: '10-15 min via W 6th or Lake Austin Blvd', price: '$900K–$2.5M+', schools: 'Austin ISD (Casis Elem)', notes: 'Tarrytown is the established luxury neighborhood west of downtown — older homes, large lots, mature trees, and the Casis Elementary attendance zone. One of the most coveted family neighborhoods in central Austin.' },
		],
	},
	{
		slug: 'amazon',
		name: 'Amazon',
		location: 'Downtown office + 3.8M sqft fulfillment center in Pflugerville (near Blackhawk)',
		scale: '',
		intro: 'Amazon has two distinct footprints in Austin. Corporate employees work in the downtown Austin office (similar commute profile to Google/Meta). Operations and fulfillment workers commute to the massive fulfillment center in northeast Pflugerville, adjacent to the Blackhawk community off TX-130. The neighborhoods that work depend entirely on which facility you\'re at.',
		areas: [
			{ name: 'Pflugerville (Lisso, Grove at Blackhawk, Meadowlark Preserve)', commute: '', price: '$375K–$560K', schools: 'Pflugerville ISD', notes: '' },
			{ name: 'Manor', commute: '', price: '$300K–$430K', schools: 'Manor ISD', notes: 'Manor offers the lowest entry prices for Amazon fulfillment workers. Short commute via US-290 to TX-130. A solid entry-level option for first-time buyers in this corridor.' },
			{ name: 'East Austin / Mueller (for corporate)', commute: '', price: '$550K–$900K', schools: 'Austin ISD', notes: 'Amazon corporate employees at the downtown office follow the same neighborhood logic as Google and Meta workers — Mueller, East Austin, and central neighborhoods work well.' },
			{ name: 'Round Rock', commute: '', price: '$380K–$620K', schools: 'Round Rock ISD', notes: 'Round Rock adds commute time for fulfillment workers but rewards with stronger schools and more established community infrastructure.' },
		],
	},
	{
		slug: 'ibm',
		name: 'IBM',
		location: '11400 Burnet Rd, Northwest Austin',
		scale: 'long-established campus',
		intro: 'IBM\'s Burnet Road campus is one of the oldest tech employer campuses in Austin — IBM has been on this site since the 1960s. It sits at the MoPac / US-183 corridor in northwest Austin (78759), surrounded by established neighborhoods and the Jollyville/Anderson Mill area. Traffic on MoPac and 183 can be challenging; neighborhoods that avoid these arteries for the commute have an advantage.',
		areas: [
			{ name: 'Anderson Mill / Millwood (78750)', commute: '10-15 min', price: '$450K–$750K', schools: 'Round Rock ISD', notes: 'Anderson Mill is the closest established neighborhood to IBM\'s campus — 1970s-1980s ranchers and traditional homes, large lots, and Round Rock ISD schools. A classic IBM employee neighborhood that remains popular with the campus\'s long-tenured workforce.' },
			{ name: 'Northwest Hills / Crestview / Allandale', commute: '15-20 min via Burnet Rd or MoPac', price: '$650K–$1.2M', schools: 'Austin ISD', notes: 'Northwest Hills, Allandale, and Crestview are central Austin\'s most established mid-century neighborhoods — popular with IBM employees who want proximity to Burnet Rd bars and restaurants and central Austin amenities. Higher prices but excellent location.' },
			{ name: 'Cedar Park (south side)', commute: '20-25 min via US-183', price: '$425K–$680K', schools: 'Leander ISD', notes: 'The south Cedar Park area gives IBM employees Leander ISD schools plus a 20-25 minute commute down US-183 or Parmer Lane. A solid family option at lower prices than central Austin equivalents.' },
			{ name: 'Lakeline / Leander', commute: '25-30 min via US-183A', price: '$390K–$650K', schools: 'Leander ISD', notes: 'Lakeline and south Leander offer newer construction and Leander ISD schools with a 25-30 minute commute via the 183A toll road — a good tradeoff for families prioritizing school quality and new-build warranties.' },
		],
	},
	{
		slug: 'indeed',
		name: 'Indeed',
		location: '200 W 6th St, Downtown Austin',
		scale: 'major tech downtown employer',
		intro: 'Indeed\'s global headquarters sits at 200 West 6th Street in the heart of downtown Austin — two blocks from Meta, four blocks from Google. The downtown location means the commute calculus is identical to other downtown employers: central Austin neighborhoods work, suburban commutes are long and unnecessary for most employees.',
		areas: [
			{ name: 'Mueller', commute: '15-20 min via MLK or I-35', price: '$600K–$900K', schools: 'Austin ISD', notes: 'Mueller is consistently the top recommendation for Indeed employees — planned, walkable, family-friendly, and a reasonable drive or bike ride downtown. Limited inventory; homes move quickly when listed.' },
			{ name: 'East Austin (78702, 78721)', commute: '15-20 min', price: '$550K–$950K', schools: 'Austin ISD', notes: 'East Austin\'s 78702 and 78721 ZIP codes remain popular with downtown employers. A wide range of housing types — bungalows, new construction townhomes, converted duplexes — at prices somewhat lower than Mueller.' },
			{ name: 'South Congress / Bouldin Creek', commute: '10-20 min', price: '$650K–$1.3M', schools: 'Austin ISD', notes: 'South Congress and Bouldin Creek are walkable, culturally rich neighborhoods south of Lady Bird Lake. Popular with Indeed employees who want Austin\'s food and music scene within walking or biking distance of the office.' },
			{ name: 'Travis Heights / Zilker', commute: '15-20 min via S Congress', price: '$650K–$1.5M', schools: 'Austin ISD', notes: 'Travis Heights and Zilker offer Barton Springs access, lake proximity, and the classic Austin lifestyle — a premium over comparable square footage elsewhere, but with strong long-term demand and resale stability.' },
		],
	},
	{
		slug: 'amd',
		name: 'AMD',
		location: '7171 Southwest Pkwy (SW Austin) + Lakeline campus (NW Austin)',
		scale: '',
		intro: 'AMD operates two Austin campuses: the primary Southwest Parkway campus in southwest Austin (near the US-290 W / Mopac junction) and a secondary Lakeline campus in northwest Austin near Cedar Park. Where you work determines the entire neighborhood calculus — the two campuses are on opposite sides of the city.',
		areas: [
			{ name: 'Circle C Ranch / Oak Hill (SW campus)', commute: '10-20 min via SW Pkwy or TX-45', price: '$550K–$950K', schools: 'Austin ISD / Eanes ISD', notes: 'Circle C Ranch is the most popular neighborhood for AMD Southwest Pkwy employees — planned community, highly-rated Austin ISD schools, community pools, and a reasonable drive to the campus. Oak Hill offers slightly more affordable options just east of Circle C.' },
			{ name: 'Bee Cave / Sunset Valley (SW campus)', commute: '15-25 min via TX-71 / SW Pkwy', price: '$550K–$1.2M', schools: 'Lake Travis ISD', notes: 'Bee Cave gives AMD employees Lake Travis ISD schools and Hill Country proximity with a 15-25 minute southwest commute. Good option for families who want lake access and outdoor lifestyle.' },
			{ name: 'Cedar Park / Lakeline (NW campus)', commute: '10-20 min', price: '$430K–$700K', schools: 'Leander ISD', notes: 'For AMD\'s Lakeline campus employees, Cedar Park is the logical choice — close to the campus, excellent Leander ISD schools, and a wide selection of resale and new construction.' },
			{ name: 'Leander (NW campus)', commute: '20-30 min via US-183A', price: '$400K–$750K', schools: 'Leander ISD', notes: 'Leander adds commute time for the Lakeline campus but rewards with newer construction and more space. New communities like Wildspring and Travisso are active options.' },
		],
	},
	{
		slug: 'applied-materials',
		name: 'Applied Materials',
		location: '9700 US Hwy 290 E (east Austin) + NW Austin offices',
		scale: '',
		intro: 'Applied Materials\' primary Austin facility sits on US-290 East, between Austin and Manor — a semiconductor equipment manufacturer with close ties to the Samsung and NXP semiconductor plants nearby. The campus is east of I-35, making east Austin, Mueller, and Pflugerville the most practical commute neighborhoods.',
		areas: [
			{ name: 'Mueller / East Austin', commute: '15-25 min via US-290 E or Manor Rd', price: '$550K–$900K', schools: 'Austin ISD', notes: 'Mueller and the nearby East Austin neighborhoods offer the closest central Austin option to Applied Materials\' 290 E campus. A quick hop east on 290 or Manor Rd without going through downtown congestion.' },
			{ name: 'Manor', commute: '10-20 min via US-290 E', price: '$295K–$430K', schools: 'Manor ISD', notes: 'Manor is the closest and most affordable option for Applied Materials workers — entry-level prices and a short commute. The tradeoff is less developed retail and restaurant infrastructure than Pflugerville or central Austin.' },
			{ name: 'Pflugerville (Northeast side)', commute: '20-30 min via TX-130 / US-290', price: '$375K–$560K', schools: 'Pflugerville ISD', notes: 'Pflugerville\'s northeast communities give Applied Materials workers the convenience of established retail (Costco, H-E-B, restaurants), Pflugerville ISD schools, and TX-130 access for a manageable 20-30 minute commute.' },
			{ name: 'Cedar Park (for NW offices)', commute: '15-25 min via US-183', price: '$430K–$700K', schools: 'Leander ISD', notes: 'Employees at Applied Materials\' northwest Austin offices find Cedar Park the natural fit — short commute via US-183, Leander ISD schools, and established neighborhood infrastructure.' },
		],
	},
];

export function findEmployer(slug: string) {
	return EMPLOYERS.find((e) => e.slug === slug);
}
