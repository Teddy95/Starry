var headerStarRatingEl = document.getElementById('Starry');
var headerStarRating = new Starry(headerStarRatingEl, {
	name: 'StarryPlayground',
	stars: 10,
	multiRating: true,
	beginWith: 66,
	icons: {
		blank: './assets/icons/blank_large.svg',
		hover: './assets/icons/hover_large.svg',
		active: './assets/icons/active_large.svg'
	}
});
