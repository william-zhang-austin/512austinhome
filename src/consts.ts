export const SITE_TITLE = '512 Austin Home — Austin Real Estate Agent | William Zhang';
export const SITE_DESCRIPTION = 'Austin real estate agent William Zhang helps you buy and sell homes in Austin, Cedar Park, Round Rock, and surrounding areas. Local expertise, data-driven guidance, and honest advice.';
export const SITE_URL = 'https://512austinhome.com';
export const YOUTUBE_URL = 'https://www.youtube.com/channel/UCun_gJQ6zg3q3Uc8avyOq6w';
export const YOUTUBE_ZH_URL = 'https://www.youtube.com/@WilliamTexasHomes';
export const GBP_URL = 'https://share.google/trv8A42Hs8vMpUjyS';
export const IDX_URL = 'https://lifeinaustintx.com';
export const TIDYCAL_URL = 'https://tidycal.com/williamzhang/buyer-consultation';
export const TIDYCAL_PATH = 'williamzhang/buyer-consultation';
export const PHONE = '(512) 766-3188';
export const EMAIL = 'william@512austinhome.com';
export const BROKERAGE = 'eXp Realty';
export const TREC_LICENSE = '811948';

// Additional profile URLs for Person/Agent sameAs (entity consolidation signal for LLMs + Google).
// Add LinkedIn, Zillow, Realtor.com, Homes.com, Facebook, Instagram profile URLs here as they are claimed.
export const SAME_AS: string[] = [
	YOUTUBE_URL,
	YOUTUBE_ZH_URL,
	GBP_URL,
	'https://www.realtor.com/realestateagents/650b3ee1a490e661cd08238b',
	'https://www.ratemyagent.com/real-estate-agent/william-zhang-b2ojcq/sales/overview',
	'https://www.instagram.com/william.zhang_austin.realtor/',
];

// Services offered — used by Service schema on homepage and service pages.
export const SERVICES = [
	{
		name: 'Home Buying Representation in Austin, TX',
		description: 'Buyer representation for home purchases across Austin and the greater Austin metro area, including first-time buyers, relocation buyers, and investors.',
		serviceType: 'Buyer Agent',
		url: 'https://512austinhome.com/buy',
	},
	{
		name: 'Home Listing & Selling Services in Austin, TX',
		description: 'Full-service listing representation including pricing strategy, staging advice, professional marketing, and negotiation for sellers in Austin and surrounding areas.',
		serviceType: 'Listing Agent',
		url: 'https://512austinhome.com/sell',
	},
	{
		name: 'Austin Relocation Services',
		description: 'Helping out-of-state buyers relocate to Austin with neighborhood tours, school district guidance, cost-of-living comparisons, and end-to-end home search support.',
		serviceType: 'Relocation Specialist',
		url: 'https://512austinhome.com/buy',
	},
];
