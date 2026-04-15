// Client reviews / testimonials for 512austinhome.com
//
// HOW TO ADD A REVIEW:
// 1. Get the client's written permission to publish their name and quote
// 2. Add a new object below with: author, rating (1-5), reviewBody, datePublished (YYYY-MM-DD), location (optional)
// 3. That's it — the /reviews page, Review schema, and AggregateRating will update automatically
//
// Schema notes:
// - These are emitted as schema.org Review entries, linked to William's Person/RealEstateAgent entity
// - AggregateRating on the homepage will auto-calculate from all reviews here
// - NEVER fabricate reviews — Google and LLMs can detect patterns and both will punish fake testimonials
// - Ideal sources: Google Business Profile reviews, Zillow reviews, direct client testimonials with written permission

export interface ClientReview {
	author: string;
	rating: 1 | 2 | 3 | 4 | 5;
	reviewBody: string;
	datePublished: string; // YYYY-MM-DD
	location?: string;
	transactionType?: 'buy' | 'sell' | 'relocation' | 'new-construction';
}

// Sources:
//   - Google Business Profile (https://share.google/trv8A42Hs8vMpUjyS)
//   - RateMyAgent (https://www.ratemyagent.com/real-estate-agent/william-zhang-b2ojcq)
// The 5 Google reviews and 5 RateMyAgent reviews are the same 5 clients cross-posted;
// listed once here to avoid inflating counts.
// Dates approximated from relative "X months ago" labels at import time (2026-04-14).
export const REVIEWS: ClientReview[] = [
	{
		author: "Tiian Liu",
		rating: 5,
		reviewBody: "We had the absolute pleasure of working with William as our real estate agent, and we couldn't be more grateful for his support throughout the entire home buying process. His professional insight was invaluable when it came to selecting the right house — he took the time to understand our needs and offered thoughtful guidance that helped us make confident decisions. Since we were purchasing remotely, William went above and beyond for us behind the scenes, coordinating with inspectors, communicating with the listing agent, and ensuring a smooth closing. What truly stood out was how William treated us not just as clients, but as friends. William is truly one of the best in the field, and we feel so fortunate to have had him by our side.",
		datePublished: "2025-06-14",
		location: "Georgetown, TX",
		transactionType: "relocation",
	},
	{
		author: "Chiyin Zhang",
		rating: 5,
		reviewBody: "William was wonderful to work with, very friendly, very patient, and always quick to respond. Highly recommended!",
		datePublished: "2026-02-14",
		location: "Georgetown, TX",
		transactionType: "buy",
	},
	{
		author: "Curtis Hsu",
		rating: 5,
		reviewBody: "William has rich experience in finding good houses in Austin, TX. He also generously helped me negotiate and approach good deals.",
		datePublished: "2025-07-14",
		location: "Leander, TX",
		transactionType: "buy",
	},
	{
		author: "Verified Google Reviewer",
		rating: 5,
		reviewBody: "As a first time homebuyer, I had many questions and uncertainties, but William guided me through every step with patience, professionalism, and genuine care. From the very beginning of the home search process all the way to closing, he made everything clear, smooth, and stress-free. I truly appreciate his dedication and support throughout the journey. I highly recommend William to anyone looking to buy a home.",
		datePublished: "2025-12-10",
		location: "Austin, TX",
		transactionType: "buy",
	},
	{
		author: "Verified Google Reviewer",
		rating: 5,
		reviewBody: "I bought my house through William and I only gave one offer — and it was the one that got selected out of four. The seller already had two offers, and I was the last to submit. My offer wasn't the highest, but we won because William communicated with the seller's agent, analyzed the seller's needs, and crafted an offer that appealed to them most — allowing the seller to continue living in the home for another month, with another round for the buyer to back out. Best agent for a buyer.",
		datePublished: "2025-04-14",
		location: "Austin, TX",
		transactionType: "buy",
	},
];
