// Real YouTube publish times for every embedded video, used as VideoObject uploadDate.
// Google wants a full ISO datetime with a timezone; a bare date is flagged in Search Console.
// Refresh with yt-dlp (--print "%(id)s %(timestamp)s") when adding a video.
export const VIDEO_UPLOAD_DATES: Record<string, string> = {
	'-5SGJCGkP4Q': '2026-01-22T21:00:00Z',
	'1r2fjJ5LDvE': '2025-11-24T17:03:52Z',
	'3C-hZ47L414': '2025-11-01T14:36:25Z',
	'3tgOyAic138': '2026-03-15T15:00:00Z',
	'49-Oew6vgqo': '2023-12-09T19:00:02Z',
	'52yMnDj-VuE': '2024-02-07T13:00:03Z',
	'5d0rjaXCq4A': '2026-02-06T15:00:00Z',
	'7B-hI1v6X6g': '2023-10-23T21:00:04Z',
	'AImlyNw-dPk': '2025-05-29T20:53:57Z',
	'B5EkgSOmaDg': '2025-12-31T14:27:23Z',
	'C8FOCow_8As': '2024-01-16T01:00:04Z',
	'CHByMMlK4wc': '2025-10-12T16:46:30Z',
	'Dc6H5YdxCUI': '2025-09-16T13:34:17Z',
	'G7Tly-ShXy4': '2025-03-14T14:00:18Z',
	'KAM0fwREmv4': '2025-04-30T15:32:39Z',
	'OIwfU8mPGq8': '2025-04-01T18:53:01Z',
	'OhHo2YFLWVE': '2024-10-08T23:13:54Z',
	'QOj-d4iOw9w': '2026-03-26T15:00:00Z',
	'RMG81Jaubtc': '2024-02-04T13:00:30Z',
	'T3-2soHef6k': '2026-04-21T23:15:00Z',
	'VnnutCgRpng': '2025-04-11T12:13:46Z',
	'WAj4aubV3H8': '2026-02-04T15:00:00Z',
	'Ww5iVsbX_Zw': '2026-02-23T15:00:00Z',
	'XTCzvBtMfQM': '2025-02-18T15:12:46Z',
	'YvAB4Z8avwQ': '2025-07-07T16:45:59Z',
	'ZYTnSabMOco': '2024-01-22T14:18:02Z',
	'_90oXt2E7pM': '2026-01-06T23:41:28Z',
	'aHN8ixlyXZA': '2025-04-17T22:45:34Z',
	'cWEARUkPXu4': '2025-05-22T14:00:55Z',
	'gIFsLueJl8E': '2023-12-15T04:28:35Z',
	'i4E-pbp_1Mc': '2023-10-30T23:30:06Z',
	'iI66vFun5UA': '2026-03-03T10:23:37Z',
	'ioay1Tcy2iM': '2026-03-02T15:00:00Z',
	'jEXDj4MUlmc': '2025-08-25T18:59:27Z',
	'jmz1lLN9nIM': '2025-07-20T17:08:45Z',
	'kMz0DCNdwM0': '2025-03-08T20:15:04Z',
	'kjShKPfLjbg': '2026-03-06T15:00:00Z',
	'n4AH-9LFVVg': '2025-03-02T17:11:41Z',
	'nr2xK-jJvYY': '2025-12-18T01:29:37Z',
	'oETZVgqo8gk': '2025-03-25T14:30:21Z',
	'rG3qXE-g_HQ': '2024-03-28T12:00:56Z',
	'rgg6tnsaeFw': '2024-04-09T12:00:54Z',
	'sbGYnob_ONM': '2026-03-28T15:00:00Z',
	't-Ma7qoQHZ4': '2023-11-02T22:02:38Z',
	'tROSMNhs18M': '2024-12-20T13:01:09Z',
	'uHLNChqMwtg': '2025-10-24T13:08:10Z',
	'xS-kJfwZBp8': '2025-10-01T22:01:20Z',
	'yxNtNHmuMvY': '2024-04-06T20:00:14Z',
	'zolkmgRCg1U': '2025-03-18T21:00:56Z',
};

/** Upload time for a video, else the page date at midnight Central as a valid fallback. */
export function videoUploadDate(id: string, fallback: string | Date) {
	if (VIDEO_UPLOAD_DATES[id]) return VIDEO_UPLOAD_DATES[id];
	const d = typeof fallback === 'string' ? fallback.slice(0, 10) : fallback.toISOString().slice(0, 10);
	return `${d}T00:00:00-05:00`;
}
