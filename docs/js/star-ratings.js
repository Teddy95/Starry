var headerStarRatingEl = document.getElementById('Starry');
var headerStarRating = new Starry(headerStarRatingEl, {
	name: 'Starry',
	multiRating: true,
	beginWith: 100,
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
		blank: './assets/icons/blank@2x.png',
		hover: './assets/icons/hover@2x.png',
		active: './assets/icons/active@2x.png'
	}
});
