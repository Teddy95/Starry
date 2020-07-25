var headerStarRatingEl = document.getElementById('StarryPlayground');
var headerStarRating = new Starry(headerStarRatingEl, {
	name: 'StarryPlayground',
	stars: 10,
	multiRating: true,
	beginWith: 66,
	onClear: function () {
		$('[data-name="StarryPlayground"] [data-tooltip]').tooltip('dispose');
	},
	onRender: function () {
		$('[data-name="StarryPlayground"] [data-tooltip]').tooltip({
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

$('#destroy').off();
$('#destroy').click(function () {
	headerStarRating.clear();
});

$('#rebuild').off();
$('#rebuild').click(function () {
	headerStarRating.build();
});

$('#getRating').off();
$('#getRating').click(function () {
	alert(headerStarRating.getCurrentRating());
});

$('#enableMultiple').off();
$('#enableMultiple').click(function () {
	headerStarRating.update({
		multiRating: true
	});
});

$('#disableMultiple').off();
$('#disableMultiple').click(function () {
	headerStarRating.update({
		multiRating: false
	});
});

$('#enableReadonly').off();
$('#enableReadonly').click(function () {
	headerStarRating.update({
		readOnly: true
	});
});

$('#disableReadonly').off();
$('#disableReadonly').click(function () {
	headerStarRating.update({
		readOnly: false
	});
});

$('#switchIcon').off();
$('#switchIcon').click(function () {
	var random;
	random = 1 + parseInt(Math.random() * ((7 + 1) - 1));

	headerStarRating.update({
		icons: {
			blank: './icons/' + random + '/unrated.png',
			hover: './icons/' + random + '/hover.png',
			active: './icons/' + random + '/rated.png'
		}
	});
});

$('#enableTooltips').off();
$('#enableTooltips').click(function () {
	headerStarRating.update({
		labels: Array.from(Array(parseInt(headerStarRating.getConfig().stars)), function (_, i) {
			return i + 1;
		})
	});
});

$('#disableTooltips').off();
$('#disableTooltips').click(function () {
	headerStarRating.update({
		labels: false
	});
});

$('#addSuccess').off();
$('#addSuccess').click(function () {
	headerStarRating.update({
		onRate: function (rating) {
			alert('You voted: ' + rating);
		}
	});
});

$('#removeSuccess').off();
$('#removeSuccess').click(function () {
	headerStarRating.update({
		onRate: undefined
	});
});

$('#stars').off();
$('#stars').change(function () {
	var labels = Array.from(Array(parseInt($('#stars').val())), function (_, i) {
		return i + 1;
	})

	headerStarRating.update({
		stars: $('#stars').val(),
		labels: Array.isArray(headerStarRating.getConfig().labels) ? labels : false
	});
});

$('#startVal').off();
$('#startVal').change(function () {
	headerStarRating.update({
		beginWith: (parseInt($('#startVal').val()) / parseInt($('#stars').val())) * 100
	});
});

$('#getConfig').off();
$('#getConfig').click(function () {
	$('#code').val(JSON.stringify(headerStarRating.getConfig(), null, 4))
});
