function copyToClipboard (value) {
	let secretTextArea = document.createElement('textarea');
	secretTextArea.value = value;
	document.body.appendChild(secretTextArea);
	secretTextArea.select();
	document.execCommand('copy');
	document.body.removeChild(secretTextArea);
	alert("Copied to clipboard!");
}

document.addEventListener('DOMContentLoaded', function (event) {
	var iconPreviews = document.querySelectorAll('.icon-preview');
	var codeBadges = document.querySelectorAll('code');

	codeBadges.forEach(function (codeBadge) {
		codeBadge.addEventListener('click', function (event) {
			event.stopPropagation();
		});
	});

	iconPreviews.forEach(function (iconPreview) {
		iconPreview.addEventListener('click', function (event) {
			copyToClipboard(iconPreview.getAttribute('data-icon-name'))
		});
	});
});
