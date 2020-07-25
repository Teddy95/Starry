var headerStarRatingEl = document.getElementById('Starry');
var headerStarRating = new Starry(headerStarRatingEl, {
	name: 'Starry',
	multiRating: true,
	beginWith: 100,
	staticActiveRating: false,
	labels: [
		'Low',
		'Nice to have',
		'Very nice',
		'Perfect',
		'Excellent'
	],
	onClear: function () {
		$('[data-name="Starry"] [data-tooltip]').tooltip('dispose');
	},
	onRender: function () {
		$('[data-name="Starry"] [data-tooltip]').tooltip({
			trigger: 'hover',
			placement: 'top'
		});
	},
	icons: {
		blank: './assets/icons/blank_large.svg',
		hover: './assets/icons/hover_large.svg',
		active: './assets/icons/active_large.svg'
	}
});

headerStarRating.on('rate', function (rating) {
	console.log('Rating: ' + rating)
})
