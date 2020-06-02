module.exports = {
	whitelist: [
		// Utility Classes
		'has-background',
		'has-background-gradient',
		'has-drop-cap',
		'wp-has-aspect-ratio',
		'is-resized',
		'is-cropped',
		'has-parallax',
		'is-grid',
		'has-dates',
		'is-stacked-on-mobile',
		'is-image-fill',
		'has-avatars',

		// core/cover
		'wp-block-cover__gradient-background',
		'wp-block-cover__inner-container',

		// core/gallery
		'blocks-gallery-grid',
		'blocks-gallery-item',

		// core/calendar
		'wp-calendar',
		'wp-calendar-table',
		'wp-calendar-nav',

		// core/embed
		'wp-embed-responsive',
		'wp-has-aspect-ratio'

	],
	whitelistPatterns: [
		// Default Block Classes
		/^wp-block(-.*)?$/,

		// Utility Classes
		/^is-style(-.*)?$/,
		/^has-(.*)?-color$/,
		/^has-(.*)?-background$/,
		/^has-text-align-(left|right|center|justify)$/,
		/^align(left|right|center|wide|full)$/,
		/^has-(.*)?-font-size$/,
		/^(is|are)-vertically-aligned-(top|center|bottom)$/,

		// core/cover
		/^has-background-dim-\d+$/,

		// core/gallery
		/^columns-(\d+)$/,

		// core/media-text
		/^has-media-on-the-(left|right)$/,

		// core/embed
		/^wp-embed-aspect-(\d+-\d+)?$/,

		// core/social-links
		/^wp-social-link(-.*)?$/

	]
};
