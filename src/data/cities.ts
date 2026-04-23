// City data for dynamic new construction and sell pages.
// Each city gets a /new-construction/{slug}/ page and a /sell/{slug}/ page.

export interface CityData {
	slug: string;
	name: string;
	state: string;
	metro: string;
	schoolDistricts: string[];
	nearbyEmployers: string[];
	medianPriceRange: string;
	newConstructionPriceRange: string;
	commuteToDowntown: string;
	description: string;
	sellDescription: string;
	newConstructionFaqs: { question: string; answer: string }[];
	sellFaqs: { question: string; answer: string }[];
}

export const CITIES: CityData[] = [
	{
		slug: 'pflugerville',
		name: 'Pflugerville',
		state: 'TX',
		metro: 'Austin',
		schoolDistricts: ['Pflugerville ISD'],
		nearbyEmployers: ['Samsung', 'Tesla', 'Dell', 'Apple', 'Amazon'],
		medianPriceRange: '$350K-$550K',
		newConstructionPriceRange: '$290K-$750K',
		commuteToDowntown: '20-30 minutes',
		description: 'Pflugerville sits in the north-central Austin metro with fast toll-road access to the tech corridor along Toll 130. It has some of the most active new construction in the region, with communities ranging from entry-level Lennar builds in the $290s to Chesmar homes near $750K.',
		sellDescription: 'Pflugerville homes sell well because of the north-central location, tech corridor proximity, and strong demand from relocation buyers. Pflugerville ISD schools, Toll 130 access to Samsung and Tesla, and relative affordability compared to Leander or Round Rock make it a consistently liquid market.',
		newConstructionFaqs: [
			{
				question: 'How much do new construction homes cost in Pflugerville, TX?',
				answer: 'New construction in Pflugerville ranges from the high $290s for entry-level Lennar homes at Meadowlark Preserve to $750K+ for larger Chesmar homes at The Grove at Blackhawk. The sweet spot for most buyers is $375K-$550K, which gets you a 3-5 bedroom home with 1,700-2,600 sqft in communities like Lisso, Kuempel Estates, or Trails at Carmel.',
			},
			{
				question: 'Which builders build new homes in Pflugerville?',
				answer: 'Major builders active in Pflugerville include Taylor Morrison (Lisso), Chesmar Homes (The Grove at Blackhawk), Ashton Woods (Trails at Carmel), Lennar (Meadowlark Preserve), Meritage Homes (Lakeside Meadows), Pulte Homes (Kuempel Estates), KB Home (Village at Northtown), and GFO Homes (Enclave at Cele). Each targets a different price point and buyer profile.',
			},
			{
				question: 'Is Pflugerville ISD a good school district?',
				answer: 'Pflugerville ISD is a solid, improving district. It is not top-ranked like Leander ISD or Eanes ISD, but it serves the area well with multiple elementary and high school options including Weiss High School and Hendrickson High School. For buyers whose top priority is school rankings, Leander ISD communities are 10-15 minutes north. For buyers who prioritize location and value, Pflugerville ISD is a strong choice.',
			},
			{
				question: 'What are MUD taxes in Pflugerville new construction?',
				answer: 'Many Pflugerville new construction communities are in Municipal Utility Districts (MUDs), which add 0.5-1.0% to your property tax rate. This funds infrastructure like water, sewer, and roads. MUD rates decrease over time as the debt is paid off, but initially they can push total tax rates above 3%. Always ask for the MUD disclosure and calculate your Year 2 tax estimate before signing a contract.',
			},
			{
				question: 'How far is Pflugerville from Austin tech employers?',
				answer: 'Pflugerville is one of the best-positioned suburbs for Austin tech workers. Samsung Taylor is about 15-20 minutes via Toll 130. Tesla Gigafactory is 20-25 minutes. Dell Round Rock is 15 minutes. Apple is 20-25 minutes. The Toll 130 and Toll 45 corridors give Pflugerville faster access to the northeast tech corridor than most Austin suburbs.',
			},
		],
		sellFaqs: [
			{
				question: 'How much is my Pflugerville home worth in 2026?',
				answer: 'Pflugerville home values range from $350K-$550K for typical single-family homes, depending on neighborhood, condition, lot size, and school zoning. I provide a free market analysis using current MLS comps specific to your street and subdivision — not an algorithm estimate. Contact me and I will pull comps for your exact address.',
			},
			{
				question: 'How long does it take to sell a home in Pflugerville?',
				answer: 'Well-priced homes in Pflugerville typically sell within 30-45 days. The key is pricing right from day one — Pflugerville buyers are savvy and compare heavily against new construction pricing in the same area. Overpricing by even 3-5% can mean sitting for months while nearby builders offer incentives on brand-new homes.',
			},
			{
				question: 'Should I sell my Pflugerville home or rent it out?',
				answer: 'It depends on your financial situation and timeline. Pflugerville rental demand is strong thanks to tech employer proximity and Toll 130 access. If your mortgage rate is below 4%, renting may generate positive cash flow. If you need the equity for your next purchase or your home needs significant updates, selling is usually the better move. I can run both scenarios for you.',
			},
			{
				question: 'How do I compete with new construction when selling in Pflugerville?',
				answer: 'The biggest challenge for Pflugerville resale sellers is competing with builder incentives. To win, you need: accurate pricing (not aspirational), professional photos, a clean and updated home, and marketing that highlights what new construction cannot offer — mature trees, established neighborhoods, larger lots, and no MUD taxes. I help you position against the builders, not just against other resale listings.',
			},
		],
	},
	{
		slug: 'leander',
		name: 'Leander',
		state: 'TX',
		metro: 'Austin',
		schoolDistricts: ['Leander ISD'],
		nearbyEmployers: ['Apple', 'Dell', 'Samsung', 'Tesla'],
		medianPriceRange: '$400K-$700K',
		newConstructionPriceRange: '$270K-$2M+',
		commuteToDowntown: '30-45 minutes',
		description: 'Leander is the top choice for families prioritizing school quality. Leander ISD is consistently the highest-rated large district in the Austin metro. New construction ranges from $270K entry-level at Palmera Ridge to $2M+ luxury at Travisso, with the widest selection of any Austin suburb.',
		sellDescription: 'Leander homes command a premium because of Leander ISD. Families relocating to Austin consistently target Leander for school quality, making it one of the most liquid resale markets in the metro. Demand is especially strong for homes zoned to top-rated elementary and high schools.',
		newConstructionFaqs: [
			{
				question: 'How much do new construction homes cost in Leander, TX?',
				answer: 'Leander has the widest new construction price range in the Austin metro. Entry-level starts at $270K at Palmera Ridge (Highland Homes). Mid-range runs $450K-$650K at communities like Horizon Lake (Pulte), Edgewood (MI Homes), and Hawkes Landing (Brightland). Luxury ranges from $530K at Wildspring (Toll Brothers) to $2M+ at Travisso (Toll Brothers and Taylor Morrison).',
			},
			{
				question: 'Why is Leander ISD so popular with Austin homebuyers?',
				answer: 'Leander ISD is consistently the highest-rated large school district in the Austin metro. It has strong elementary, middle, and high school options — Rouse HS, Vista Ridge HS, and Leander HS are all well-regarded. For families relocating to Austin, Leander ISD is often the deciding factor in where to buy, which also supports strong resale values.',
			},
			{
				question: 'Which Leander communities have the best value right now?',
				answer: 'For pure value, Palmera Ridge starts in the $270s with Leander ISD zoning — that is the lowest entry point into the district. Horizon Lake by Pulte offers strong standard finishes starting at $465K. Deerbrooke Cottages offers detached condos for lock-and-leave buyers under $420K. For the best amenity package, Travisso is unmatched but starts at $600K.',
			},
			{
				question: 'How far is Leander from downtown Austin?',
				answer: 'Leander is 30-45 minutes from downtown Austin depending on traffic and which part of Leander you live in. Highway 183, Toll 183A, and the Capital MetroRail Red Line all connect Leander to central Austin. Most Leander buyers work in the north Austin tech corridor (Apple, Dell) rather than downtown, making the effective commute 20-30 minutes.',
			},
		],
		sellFaqs: [
			{
				question: 'How much is my Leander home worth in 2026?',
				answer: 'Leander home values typically range from $400K-$700K depending on the neighborhood, lot size, age, and condition. Homes in top-rated school zones command a measurable premium. I provide a free market analysis using current MLS data specific to your subdivision and zoning — not Zillow estimates. Call me and I will pull comps for your address.',
			},
			{
				question: 'How fast do homes sell in Leander?',
				answer: 'Leander is one of the fastest-selling markets in the Austin metro thanks to Leander ISD demand. Well-priced homes typically sell within 21-45 days. Homes in top school zones with modern updates sell fastest. The main risk is overpricing — Leander buyers are informed and will compare your home against new construction incentives.',
			},
			{
				question: 'Is it a good time to sell in Leander in 2026?',
				answer: 'Leander remains a strong seller market relative to most Austin suburbs because of sustained Leander ISD demand. Relocation buyers from California, New York, and other states consistently target Leander for school quality. If your home is in good condition and priced accurately, you are in a favorable position. I can give you a current market snapshot for your specific neighborhood.',
			},
		],
	},
	{
		slug: 'round-rock',
		name: 'Round Rock',
		state: 'TX',
		metro: 'Austin',
		schoolDistricts: ['Round Rock ISD'],
		nearbyEmployers: ['Dell', 'Apple', 'Samsung', 'Emerson'],
		medianPriceRange: '$375K-$600K',
		newConstructionPriceRange: '$310K-$620K',
		commuteToDowntown: '25-35 minutes',
		description: 'Round Rock is one of Austin\'s most established suburbs with Dell\'s headquarters, strong schools, and a well-developed retail and dining scene. New construction options include townhomes from $310K at Homestead Village and single-family homes up to $620K at Saul\'s Ranch.',
		sellDescription: 'Round Rock is a consistently liquid market thanks to Dell HQ, Round Rock ISD, and a well-established community infrastructure. Buyers value the shorter commute to the north Austin tech corridor compared to Georgetown or Leander, and the city\'s mature retail, dining, and medical facilities.',
		newConstructionFaqs: [
			{
				question: 'How much do new construction homes cost in Round Rock, TX?',
				answer: 'New construction in Round Rock ranges from $310K for Meritage townhomes at Homestead Village to $620K for single-family homes at Saul\'s Ranch by MileStone and Coventry. Round Rock has less new construction inventory than Leander or Pflugerville because much of the city is already built out, which makes the available communities more competitive.',
			},
			{
				question: 'Is Round Rock ISD a good school district?',
				answer: 'Round Rock ISD is one of the most respected districts in the Austin metro. It is large, well-funded, and has consistently strong high schools. The district is not quite at Leander ISD or Eanes ISD levels in rankings, but it is well above average and serves a diverse student body. School zoning varies by address — always verify the specific campus assignment for any home you are considering.',
			},
			{
				question: 'What is the commute from Round Rock to Austin tech employers?',
				answer: 'Round Rock has some of the shortest commutes to north Austin tech employers. Dell HQ is in Round Rock itself. Apple\'s campus in north Austin is 15-20 minutes. Samsung Taylor is 20-25 minutes. The I-35 and Toll 45 corridors connect Round Rock to the broader metro. Downtown Austin is 25-35 minutes.',
			},
		],
		sellFaqs: [
			{
				question: 'How much is my Round Rock home worth in 2026?',
				answer: 'Round Rock home values typically range from $375K-$600K depending on neighborhood, school zoning, and condition. Homes near Dell HQ and in top Round Rock ISD zones command premiums. I provide a free market analysis using current MLS comps — not Zillow or Redfin estimates. Contact me for a valuation specific to your address.',
			},
			{
				question: 'How long does it take to sell a home in Round Rock?',
				answer: 'Round Rock homes typically sell within 30-45 days when priced correctly. The market benefits from steady demand driven by Dell, tech corridor employers, and Round Rock ISD families. Round Rock has less new construction competition than Pflugerville or Leander, which is an advantage for resale sellers.',
			},
		],
	},
	{
		slug: 'georgetown',
		name: 'Georgetown',
		state: 'TX',
		metro: 'Austin',
		schoolDistricts: ['Georgetown ISD', 'Liberty Hill ISD'],
		nearbyEmployers: ['Samsung Taylor', 'Dell', 'Southwestern University'],
		medianPriceRange: '$350K-$650K',
		newConstructionPriceRange: '$345K-$750K',
		commuteToDowntown: '35-50 minutes',
		description: 'Georgetown combines a historic downtown square with large-scale new construction communities. Two school districts serve the area — Georgetown ISD and the fast-improving Liberty Hill ISD. Samsung\'s Taylor facility has made Georgetown a hub for semiconductor jobs.',
		sellDescription: 'Georgetown\'s market is driven by the Samsung Taylor semiconductor corridor, Sun City retirees, and families drawn to the historic downtown and improving schools. The city\'s character — a real town square, local restaurants, community events — differentiates it from generic suburban development.',
		newConstructionFaqs: [
			{
				question: 'How much do new construction homes cost in Georgetown, TX?',
				answer: 'Georgetown new construction ranges from $310K at Morningstar (Meritage) to $750K at Wolf Ranch (Perry Homes and Westin Homes). Parkside on the River by Taylor Morrison fills the mid-range at $470K-$700K. Liberty Hill ISD zoning communities tend to be the best value plays in the area.',
			},
			{
				question: 'Is Georgetown too far from Austin for commuting?',
				answer: 'Georgetown is 30-50 minutes from central Austin depending on traffic and which part of Georgetown you live in. Most Georgetown buyers work in the north Austin tech corridor (Samsung, Dell, Apple) rather than downtown, making the effective commute 20-35 minutes. I-35 and Toll 130 are the primary routes.',
			},
			{
				question: 'Which school district is better in Georgetown — Georgetown ISD or Liberty Hill ISD?',
				answer: 'Both are solid. Georgetown ISD is the more established district with a broader range of programs. Liberty Hill ISD is smaller and fast-improving — it has been one of the fastest-rising districts in the region. Liberty Hill ISD communities (like Morningstar and Parkside on the River) tend to offer lower entry prices than Georgetown ISD options.',
			},
		],
		sellFaqs: [
			{
				question: 'How much is my Georgetown home worth in 2026?',
				answer: 'Georgetown home values typically range from $350K-$650K depending on location, school district, and proximity to the historic square. The Samsung Taylor facility has driven steady demand and appreciation. I provide a free market analysis using current MLS comps for your specific address.',
			},
			{
				question: 'How fast do homes sell in Georgetown?',
				answer: 'Georgetown homes typically sell within 30-60 days when priced accurately. Demand is steady thanks to Samsung Taylor, the semiconductor supply chain, and retirees moving to Sun City. The biggest challenge for sellers is competing with the volume of new construction in the area — accurate pricing is essential.',
			},
		],
	},
	{
		slug: 'hutto',
		name: 'Hutto',
		state: 'TX',
		metro: 'Austin',
		schoolDistricts: ['Hutto ISD'],
		nearbyEmployers: ['Samsung Taylor', 'Tesla', 'Dell', 'Amazon'],
		medianPriceRange: '$300K-$400K',
		newConstructionPriceRange: '$300K-$370K',
		commuteToDowntown: '35-45 minutes',
		description: 'Hutto is the floor of the Austin metro for new construction pricing. Entry-level homes start in the $300s with a 2-car garage — a combination that does not exist closer in. Infrastructure is improving rapidly as the city grows, and proximity to Samsung Taylor and Tesla Gigafactory makes it viable for tech workers willing to trade commute time for affordability.',
		sellDescription: 'Hutto\'s market is driven by affordability-focused buyers, first-time homebuyers, and investors. As the lowest-priced suburb in the metro with access to the tech corridor, demand is steady from buyers who are priced out of Pflugerville or Round Rock.',
		newConstructionFaqs: [
			{
				question: 'How much do new construction homes cost in Hutto, TX?',
				answer: 'Hutto is the most affordable new construction market in the Austin metro. Entry-level homes start around $300K for a 3-bedroom, 2-car garage home. Move-up options reach $370K for 4-bedroom layouts around 2,200 sqft. Multiple builders compete in Hutto, which keeps pricing aggressive.',
			},
			{
				question: 'Is Hutto a good investment for real estate?',
				answer: 'Hutto has strong investment fundamentals: it is the lowest entry point in the metro, infrastructure is being built out, and the Samsung Taylor facility and Amazon fulfillment center provide a growing job base nearby. Early buyers in Hutto communities have historically seen solid appreciation as neighborhoods mature. The risk is that Hutto ISD is not a top-ranked district, which limits the ceiling for appreciation compared to Leander or Round Rock.',
			},
			{
				question: 'What is the commute from Hutto to Austin?',
				answer: 'Hutto is 35-45 minutes from central Austin and 20-30 minutes from the north Austin tech corridor (Samsung Taylor, Dell, Tesla). Highway access is improving but not yet seamless. Hutto adds 10-15 minutes to a Pflugerville commute. Most Hutto buyers work northeast of Austin rather than downtown.',
			},
		],
		sellFaqs: [
			{
				question: 'How much is my Hutto home worth in 2026?',
				answer: 'Hutto home values typically range from $300K-$400K for single-family homes. Values have appreciated steadily as the city has grown and infrastructure has improved. I provide a free market analysis using current MLS comps for your address — not algorithm estimates.',
			},
			{
				question: 'How do I sell a home in Hutto when new construction is so cheap?',
				answer: 'The key to selling in Hutto is pricing below or at parity with new construction after factoring in builder incentives. Your advantages over new builds: no MUD taxes (if your home is in an established section), mature landscaping, move-in ready with no 6-month wait, and a known neighborhood. I help you position these advantages in the marketing.',
			},
		],
	},
	{
		slug: 'austin',
		name: 'Austin',
		state: 'TX',
		metro: 'Austin',
		schoolDistricts: ['Austin ISD', 'Del Valle ISD'],
		nearbyEmployers: ['Apple', 'Google', 'Meta', 'Tesla', 'Oracle', 'Samsung'],
		medianPriceRange: '$400K-$800K',
		newConstructionPriceRange: '$320K-$600K',
		commuteToDowntown: '15-35 minutes',
		description: 'New construction within Austin city limits is limited compared to the suburbs, but communities like Whisper Valley in east Austin and Sonoma Heights near the Round Rock border offer Austin addresses at suburban prices. Whisper Valley is notable for its community-wide geothermal HVAC system.',
		sellDescription: 'Austin city homes benefit from the strongest brand recognition in the metro. An Austin address carries weight with relocation buyers, investors, and anyone prioritizing proximity to downtown, UT, and the east-side tech corridor. Limited new construction supply within city limits supports resale values.',
		newConstructionFaqs: [
			{
				question: 'Where is new construction available within Austin city limits?',
				answer: 'New construction within Austin proper is concentrated in east Austin (Whisper Valley by GFO Homes, starting at $320K) and the northwest border near Round Rock (Sonoma Heights by Coventry Homes, starting at $400K). Central Austin new construction is mostly limited to infill projects and custom builds at significantly higher price points.',
			},
			{
				question: 'What makes Whisper Valley different from other Austin communities?',
				answer: 'Whisper Valley is built on a community-wide geothermal HVAC system that cuts heating and cooling costs by 50-60% compared to conventional builds. This is a genuine engineering differentiator, not marketing — every home connects to shared geothermal infrastructure. The Austin address puts it roughly 25 minutes from UT campus. Del Valle ISD is the trade-off.',
			},
		],
		sellFaqs: [
			{
				question: 'How much is my Austin home worth in 2026?',
				answer: 'Austin home values vary dramatically by neighborhood. East Austin, South Congress, and Mueller homes range $500K-$900K. Northwest Austin near The Domain ranges $400K-$700K. Central Austin and Tarrytown can exceed $1M. I provide a free market analysis using current MLS comps specific to your neighborhood — not Zillow estimates.',
			},
			{
				question: 'How fast do homes sell in Austin?',
				answer: 'Austin city homes typically sell within 21-45 days when priced correctly. Central and east Austin homes in desirable neighborhoods often move faster. The Austin brand draws relocation buyers from coast to coast, which keeps demand steady even in slower market conditions.',
			},
		],
	},
	{
		slug: 'dripping-springs',
		name: 'Dripping Springs',
		state: 'TX',
		metro: 'Austin',
		schoolDistricts: ['Dripping Springs ISD'],
		nearbyEmployers: ['Apple (20 min)', 'Dell (30 min)', 'Downtown Austin (30-40 min)'],
		medianPriceRange: '$600K-$1.2M',
		newConstructionPriceRange: '$650K-$1.2M+',
		commuteToDowntown: '30-40 minutes',
		description: 'Dripping Springs is Austin\'s Hill Country luxury market. Dripping Springs ISD is among the top-performing districts in the metro, and the community offers a rural lifestyle with wineries, breweries, and genuine Hill Country views. Headwaters by Toll Brothers is the flagship new construction community.',
		sellDescription: 'Dripping Springs commands premium pricing because of Dripping Springs ISD, Hill Country views, and a lifestyle that cannot be replicated in the flat suburban subdivisions. Buyers here are typically move-up families, remote workers, and executives willing to pay for quality of life.',
		newConstructionFaqs: [
			{
				question: 'How much do new construction homes cost in Dripping Springs, TX?',
				answer: 'Dripping Springs new construction starts around $650K at Headwaters by Toll Brothers and ranges to $1.2M+ for estate-level builds. This is the luxury tier of the Austin new construction market. Toll Brothers\' design center and lot premiums can add $100K-$300K to base prices, so budget accordingly.',
			},
			{
				question: 'Is Dripping Springs ISD worth the premium?',
				answer: 'Dripping Springs ISD is among the top-performing districts in the Austin metro by virtually every measure. For families where school quality is the top priority and budget allows, it is consistently one of the best choices in the region alongside Eanes ISD and Lake Travis ISD.',
			},
		],
		sellFaqs: [
			{
				question: 'How much is my Dripping Springs home worth in 2026?',
				answer: 'Dripping Springs home values typically range from $600K-$1.2M+ depending on acreage, views, and proximity to the town center. Hill Country view lots and homes on larger acreage command significant premiums. I provide a free market analysis using current MLS data specific to your property.',
			},
			{
				question: 'Who buys homes in Dripping Springs?',
				answer: 'Dripping Springs buyers are typically move-up families from central Austin, remote workers who want Hill Country lifestyle, and executives relocating to Austin who prioritize school quality and space. Marketing your home to this buyer profile — emphasizing schools, views, privacy, and lifestyle — is critical to selling at the right price.',
			},
		],
	},
	{
		slug: 'manor',
		name: 'Manor',
		state: 'TX',
		metro: 'Austin',
		schoolDistricts: ['Manor ISD'],
		nearbyEmployers: ['Tesla Gigafactory (15 min)', 'Samsung (20 min)', 'Dell (30 min)', 'Amazon (20 min)', 'Apple (35 min)'],
		medianPriceRange: '$300K-$450K',
		newConstructionPriceRange: '$260K-$600K',
		commuteToDowntown: '25-45 minutes',
		description: 'Manor is the most active new construction market in Travis County and one of the most affordable in the Austin metro. Five master-planned communities — Carillon, Lagos, ShadowGlen, Whisper Valley, and Mustang Valley — offer new homes from the $260s to $600K with multiple builders competing at each price point. Tesla Gigafactory is 15 minutes away, Samsung 20 minutes, and downtown Austin 25-45 minutes via US-290 or SH-130. Manor grew 185% over the last decade, making it one of the fastest-growing cities in the U.S. The trade-off is Manor ISD, which is below the state average in ratings.',
		sellDescription: 'Manor resale homes compete directly with a large pipeline of new construction, which means pricing strategy is critical. Resale advantages include established landscaping, no MUD premium in older sections, and immediate occupancy. The long-term demand story is strong — Tesla, Samsung, and Amazon are driving job growth nearby, and Manor Crossing (H-E-B, Home Depot) has improved retail access. Sellers who price at or below new construction cost-per-sqft and offer concessions are moving homes.',
		newConstructionFaqs: [
			{
				question: 'How much do new construction homes cost in Manor, TX?',
				answer: 'Manor is one of the most affordable new construction markets in the Austin metro. Entry-level homes start around $260K-$300K from builders like KB Home and Terrata. Mid-range runs $350K-$500K at Carillon, Lagos, and ShadowGlen. The average new construction price is $353K-$374K, which is 15-25% below comparable suburbs like Pflugerville and Round Rock.',
			},
			{
				question: 'Which builders are building new homes in Manor?',
				answer: 'Manor has one of the deepest builder pools in the Austin metro. Major national builders include D.R. Horton, KB Home, Pulte Homes, M/I Homes, Meritage Homes, Tri Pointe, Ashton Woods, and Richmond American. Regional builders include Chesmar Homes, DRB Homes, Terrata Homes, GFO Home, and Pacesetter. Most are concentrated across five master-planned communities: Carillon, Lagos, ShadowGlen, Mustang Valley, and Whisper Valley.',
			},
			{
				question: 'Is Manor ISD a good school district?',
				answer: 'Manor ISD is below the state average in school ratings. Math proficiency is around 22% versus 44% statewide, and reading proficiency is 37% versus 51%. The district is expanding with the city growth. For buyers where school rankings are a top priority, Pflugerville ISD or Leander ISD communities are 15-20 minutes away. For buyers prioritizing affordability and proximity to Tesla or Samsung, Manor ISD is serviceable.',
			},
			{
				question: 'Are there MUD taxes on Manor new construction?',
				answer: 'Most Manor new construction communities are in MUDs, which push total property tax rates to 1.77-2.37% of assessed value. On a $400K home, that means $7,080-$9,480 per year. Always ask for the MUD disclosure and calculate your Year 2 tax estimate before signing.',
			},
			{
				question: 'How far is Manor from Austin tech employers?',
				answer: 'Manor is well-positioned for east-side tech workers. Tesla Gigafactory is about 15 minutes via SH-130. Samsung is 20 minutes. Amazon fulfillment centers are 20 minutes. Dell and Apple are 30-35 minutes. Downtown Austin is 25-45 minutes depending on traffic and route (US-290 free or SH-130 toll).',
			},
		],
		sellFaqs: [
			{
				question: 'How much is my Manor home worth in 2026?',
				answer: 'Manor home values typically range from $300K-$450K for single-family homes, with the median around $342K-$355K. Values have been steady but sellers face heavy competition from new construction incentives. I provide a free market analysis using current MLS comps specific to your address — not algorithm estimates.',
			},
			{
				question: 'How do I compete with new construction when selling in Manor?',
				answer: 'Manor has one of the largest new construction pipelines in the metro, which means resale sellers must price aggressively. Price at or below new construction cost-per-sqft, highlight what builders cannot offer — mature landscaping, no MUD taxes in established sections, immediate occupancy — and consider offering a rate buydown or closing cost credit. Homes averaging 101 days on market in 2026.',
			},
			{
				question: 'Is now a good time to sell in Manor?',
				answer: 'Manor is a buyer market in 2026 with homes averaging 101 days on market. But the long-term fundamentals are strong — Tesla, Samsung, Amazon nearby, 185% population growth over the last decade, and new retail like H-E-B and Home Depot. Sellers who price right and offer concessions are still closing. Overpriced listings sit.',
			},
		],
	},
	{
		slug: 'cedar-park',
		name: 'Cedar Park',
		state: 'TX',
		metro: 'Austin',
		schoolDistricts: ['Leander ISD', 'Round Rock ISD'],
		nearbyEmployers: ['Apple (10-15 min)', 'Dell (15 min)', 'The Domain tech corridor (15-20 min)', 'Firefly Aerospace (in-city)', 'NXP Semiconductors (10 min)'],
		medianPriceRange: '$490K-$700K',
		newConstructionPriceRange: '$370K-$1.4M+',
		commuteToDowntown: '25-40 minutes',
		description: 'Cedar Park is one of Austin\'s most established suburbs with top-rated Leander ISD schools, proximity to Apple\'s campus, and a rapidly developing commercial base. New construction is extremely limited because the city is largely built out — only three active communities as of 2026: Crestline at Brushy Creek (Toll Brothers luxury from $950K), Cross Creek (Brohn Homes from $400K), and Whitestone Preserve (Pulte townhomes from $370K, near sellout). The scarcity supports property values but limits buyer options.',
		sellDescription: 'Cedar Park resale homes benefit from persistent demand driven by Leander ISD schools, Apple campus proximity, and the city\'s landlocked supply constraint. The median home price is around $490K-$515K, and while prices are down 8-10% from 2023 peaks, Cedar Park holds up better than outer suburbs. The CedarView mixed-use development, Scheels, and Nebraska Furniture Mart coming in 2026 are strengthening the city\'s commercial appeal.',
		newConstructionFaqs: [
			{
				question: 'Is there new construction available in Cedar Park in 2026?',
				answer: 'Yes, but options are very limited. Cedar Park is largely built out. Three active communities: Crestline at Brushy Creek (Toll Brothers, $950K-$1.4M+), Cross Creek (Brohn Homes, ~$400K), and Whitestone Preserve (Pulte townhomes, $370K-$390K, near sellout). Buyers who need more options should also look at Leander, which shares Leander ISD and has a much larger new construction pipeline.',
			},
			{
				question: 'What school district serves Cedar Park new construction?',
				answer: 'Most Cedar Park homes are zoned to Leander ISD, one of the top-rated districts in the Austin metro. One exception: Crestline at Brushy Creek (Toll Brothers) is zoned to Round Rock ISD despite the Cedar Park address. Always verify school zoning with the builder and district before purchasing.',
			},
			{
				question: 'Why is Cedar Park new construction so limited?',
				answer: 'Cedar Park is landlocked and largely built out. Available raw land for traditional subdivisions is scarce. Most of the remaining development parcels support either luxury product (Crestline) or infill communities on smaller lots. Buyers seeking entry-level or mid-market detached homes have more options in neighboring Leander.',
			},
			{
				question: 'How does Cedar Park compare to Leander for new construction?',
				answer: 'Cedar Park offers a more established, amenity-rich environment with shorter commutes to NW Austin employers. But Leander (5 minutes north, also Leander ISD) has a far larger new construction pipeline across all price points with more builder competition. Cedar Park wins on location and maturity. Leander wins on selection and price range.',
			},
			{
				question: 'What is the commute from Cedar Park to Austin tech employers?',
				answer: 'Cedar Park is one of the best-positioned suburbs for NW Austin tech workers. Apple campus is 10-15 minutes. The Domain tech corridor is 15-20 minutes. Dell Round Rock HQ is 15 minutes. Downtown Austin is 25-40 minutes via 183A Toll Road. The CapMetro Lakeline Station offers rail access to downtown.',
			},
		],
		sellFaqs: [
			{
				question: 'How much is my Cedar Park home worth in 2026?',
				answer: 'Cedar Park home values typically range from $490K-$700K depending on neighborhood, school zoning, and condition. The median is around $490K-$515K as of early 2026, down about 8-10% from 2023 peaks. Homes in top Leander ISD zones hold value better. I provide a free market analysis using current MLS comps for your address.',
			},
			{
				question: 'How fast do homes sell in Cedar Park?',
				answer: 'Cedar Park homes average about 49 days on market in 2026, up from 42 days a year ago. Well-priced homes in top school zones still move in 21-30 days. The sale-to-list ratio is about 97.5%, and about 14% of homes still sell above list price.',
			},
			{
				question: 'What makes Cedar Park homes hold their value?',
				answer: 'Three factors: Leander ISD schools (non-negotiable demand from families), proximity to Apple and the NW Austin tech corridor (keeps tech workers in the buyer pool), and Cedar Park\'s landlocked geography (limits new supply, preventing the inventory glut pressuring outer suburbs). The coming CedarView development with Scheels and Nebraska Furniture Mart is also strengthening demand.',
			},
		],
	},
];

export function findCity(slug: string) {
	return CITIES.find((c) => c.slug === slug);
}
