// Inventory links: where a page sends someone who wants to see actual homes.
//
// ARCHITECTURE: 512austinhome.com is the reference site — it ranks, it gets
// cited, it holds no listings. Inventory lives on New Home Buddy (a saved search
// per topic, attributed to William) or on lifeinaustintx.com, his Real Geeks IDX
// site. That keeps listing pages, their bloat and their licensing off this domain
// entirely.
//
// TO FILL IN: in New Home Buddy go to Lead Gen, create a saved search with the
// filters described in `nhbSearch`, click "Copy link" and paste it into `nhb`.
// Anything left empty falls back automatically, so a page never renders a dead
// or wrong link.
//
// Fallback order: nhb saved search → idx (only where the IDX URL pattern has been
// verified) → William's NHB personal link, which always works and is attributed
// to him but is unfiltered (6,234 homes statewide).
//
// Verified 2026-09-23: the personal link IGNORES query params — ?city=Georgetown
// still loads every home in Texas. Filtered links must come from saved searches.

export interface SearchLink {
	/** New Home Buddy saved-search link. Paste from "Copy link". */
	nhb: string;
	/** What to set when creating the NHB saved search. For William, not rendered. */
	nhbSearch: string;
	/** Verified IDX fallback. Leave empty rather than guess a URL pattern. */
	idx?: string;
	/** Button text. */
	label: string;
}

/** William's New Home Buddy personal link. Attributed to him, unfiltered. */
export const NHB_PERSONAL = 'https://a.nhb.app/u/william-zhang';

const IDX = 'https://www.lifeinaustintx.com/search/results/';
// Verified 2026-09-23: /search/results/?city=Georgetown returns Georgetown listings.
const idxCity = (name: string) => `${IDX}?city=${encodeURIComponent(name)}`;

/** Priority order for creating NHB searches is the order within each group. */
export const CITY_LINKS: Record<string, SearchLink> = {
	'georgetown':       { nhb: '', nhbSearch: 'City: Georgetown TX · New construction', idx: idxCity('Georgetown'), label: 'See new homes in Georgetown' },
	'leander':          { nhb: '', nhbSearch: 'City: Leander TX · New construction', idx: idxCity('Leander'), label: 'See new homes in Leander' },
	'pflugerville':     { nhb: '', nhbSearch: 'City: Pflugerville TX · New construction', idx: idxCity('Pflugerville'), label: 'See new homes in Pflugerville' },
	'hutto':            { nhb: '', nhbSearch: 'City: Hutto TX · New construction', idx: idxCity('Hutto'), label: 'See new homes in Hutto' },
	'manor':            { nhb: '', nhbSearch: 'City: Manor TX · New construction', idx: idxCity('Manor'), label: 'See new homes in Manor' },
	'round-rock':       { nhb: '', nhbSearch: 'City: Round Rock TX · New construction', idx: idxCity('Round Rock'), label: 'See new homes in Round Rock' },
	'cedar-park':       { nhb: '', nhbSearch: 'City: Cedar Park TX · New construction', idx: idxCity('Cedar Park'), label: 'See new homes in Cedar Park' },
	'austin':           { nhb: '', nhbSearch: 'City: Austin TX · New construction', idx: idxCity('Austin'), label: 'See new homes in Austin' },
	'dripping-springs': { nhb: '', nhbSearch: 'City: Dripping Springs TX · New construction', idx: idxCity('Dripping Springs'), label: 'See new homes in Dripping Springs' },
};

export const BUILDER_LINKS: Record<string, SearchLink> = {
	'lennar':              { nhb: 'https://a.nhb.app/saved-search/051057c8-6922-43ee-b91e-190ae5198c58', nhbSearch: 'Lennar, Austin — Builder: Lennar · Travis/Williamson/Hays/Bastrop/Caldwell counties', label: 'See available Lennar homes' },
	'meritage-homes':      { nhb: 'https://a.nhb.app/saved-search/ed0fb64c-951e-4166-87ec-061ddcfd7ead', nhbSearch: 'Meritage, Austin — Builder: Meritage Homes · Travis/Williamson/Hays/Bastrop/Caldwell counties', label: 'See available Meritage homes' },
	'taylor-morrison':     { nhb: '', nhbSearch: 'Builder: Taylor Morrison · Austin metro (not in NHB builder list as of 2026-09-23)', label: 'See available Taylor Morrison homes' },
	'pulte-homes':         { nhb: '', nhbSearch: 'Builder: Pulte Homes · Austin metro (not in NHB builder list as of 2026-09-23)', label: 'See available Pulte homes' },
	'dr-horton':           { nhb: '', nhbSearch: 'Builder: D.R. Horton · Austin metro', label: 'See available D.R. Horton homes' },
	'coventry-homes':      { nhb: '', nhbSearch: 'Builder: Coventry Homes · Austin metro', label: 'See available Coventry homes' },
	'highland-homes':      { nhb: '', nhbSearch: 'Builder: Highland Homes · Austin metro', label: 'See available Highland homes' },
	'perry-homes':         { nhb: '', nhbSearch: 'Builder: Perry Homes · Austin metro', label: 'See available Perry homes' },
	'david-weekley-homes': { nhb: '', nhbSearch: 'Builder: David Weekley Homes · Austin metro', label: 'See available David Weekley homes' },
	'toll-brothers':       { nhb: '', nhbSearch: 'Builder: Toll Brothers · Austin metro', label: 'See available Toll Brothers homes' },
	'mi-homes':            { nhb: '', nhbSearch: 'Builder: M/I Homes · Austin metro', label: 'See available M/I homes' },
	'chesmar-homes':       { nhb: '', nhbSearch: 'Builder: Chesmar Homes · Austin metro', label: 'See available Chesmar homes' },
	'kb-home':             { nhb: '', nhbSearch: 'Builder: KB Home · Austin metro', label: 'See available KB homes' },
	'ashton-woods':        { nhb: '', nhbSearch: 'Builder: Ashton Woods · Austin metro', label: 'See available Ashton Woods homes' },
	'brohn-homes':         { nhb: '', nhbSearch: 'Builder: Brohn Homes · Austin metro', label: 'See available Brohn homes' },
	'gfo-home':            { nhb: '', nhbSearch: 'Builder: GFO Home · Austin metro', label: 'See available GFO homes' },
};

export const TOPIC_LINKS: Record<string, SearchLink> = {
	'quick-move-in':    { nhb: 'https://a.nhb.app/saved-search/b519ac0d-6a79-4094-8b33-0445e48c63d7', nhbSearch: 'Move-in ready, Austin — Build status: Inventory · Travis/Williamson/Hays/Bastrop/Caldwell counties', label: 'See quick move-in homes' },
	'price-reductions': { nhb: '', nhbSearch: 'Austin metro · sorted by recent price drop (NHB has no price-reduced filter or sort as of 2026-09-23)', label: 'See recently reduced homes' },
	'rate-buydowns':    { nhb: 'https://a.nhb.app/saved-search/59e1b362-3ee9-4a4f-92be-76124aa55a50', nhbSearch: 'Rate incentives, Austin — Interest rate up to 5.5% · Travis/Williamson/Hays/Bastrop/Caldwell counties', label: 'See homes with rate incentives' },
	'incentives':       { nhb: 'https://a.nhb.app/saved-search/925406c7-fdc3-4346-8765-6441453f0303', nhbSearch: 'Incentives, Austin — Builder paid closing costs $1+ · Travis/Williamson/Hays/Bastrop/Caldwell counties', label: 'See homes with incentives' },
	'best-time-to-buy': { nhb: 'https://a.nhb.app/saved-search/b519ac0d-6a79-4094-8b33-0445e48c63d7', nhbSearch: 'Reuses Move-in ready, Austin (quick-move-in)', label: 'See quick move-in homes' },
	'luxury':           { nhb: 'https://a.nhb.app/saved-search/b0cd5481-2ff3-417d-ae37-4ea19c646738', nhbSearch: 'Luxury new construction — Price $750K+ · Travis/Williamson/Hays/Bastrop/Caldwell counties', label: 'See luxury new construction' },
	'best-schools':     { nhb: 'https://a.nhb.app/saved-search/78efa686-e7e9-41d0-9166-683bed87e363', nhbSearch: 'Top school districts — School system: Leander, Round Rock, Dripping Springs, Liberty Hill, Georgetown ISD', label: 'See new homes in top school districts' },
};

/** Resolve a link through its fallbacks. Always returns something usable. */
export function resolveLink(link?: SearchLink): { href: string; label: string; source: 'nhb-search' | 'idx' | 'nhb-personal' } {
	if (link?.nhb) return { href: link.nhb, label: link.label, source: 'nhb-search' };
	if (link?.idx) return { href: link.idx, label: link.label, source: 'idx' };
	// Unfiltered, so the label must not promise a filtered result.
	return { href: NHB_PERSONAL, label: 'Browse new construction homes', source: 'nhb-personal' };
}
