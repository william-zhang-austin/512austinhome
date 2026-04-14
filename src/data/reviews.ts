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

export const REVIEWS: ClientReview[] = [
	// Example format (delete this comment and add real reviews):
	// {
	// 	author: "Jane D.",
	// 	rating: 5,
	// 	reviewBody: "William helped us relocate from the Bay Area to Cedar Park. He did virtual tours every weekend for two months and knew every neighborhood inside out. Closing was seamless.",
	// 	datePublished: "2025-11-14",
	// 	location: "Cedar Park, TX",
	// 	transactionType: "relocation",
	// },
];
