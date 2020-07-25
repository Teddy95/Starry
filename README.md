# Starry 🌟🌃💖

![Screenshot](docs/assets/screenshot.png)

[Starry Documentation](https://teddy95.github.io/Starry)

## Installation

Include Starry scripts and stylesheets in your html DOM:

```html
<link rel="stylesheet" type="text/css" href="./dist/starry.min.css" />
```

```html
<script type='text/javascript' language='javascript' src='./dist/starry.min.js'></script>
```

Or install Starry as a Node dependency:

```bash
$ npm install starry-rating
```

```javascript
import Starry from 'starry-rating'

// or with require...
const Starry = require('starry-rating')
```

## How to use

### HTML markup

```html
<!-- Use a simple div container which is selectable by id or class -->
<div id="star-rating"></div>
```

### JavaScript API

```javascript
var starRatingEl = document.getElementById('star-rating');
var starRating = new Starry(starRatingEl);
```

#### More complex example

More complex example of a star rating with tooltips and custom icons, which is logging the rating to console. Tooltips have to be rendered in ```onRender()``` method by any tooltip library. In this example we use Bootstrap tooltips with jQuery & Popper.js.

```javascript
var starRatingId = 'ExampleRating'; // Html DOM id + star rating element name
var starRatingEl = document.getElementById(starRatingId);
var starRating = new Starry(starRatingEl, {
	name: starRatingId, // Use a name to determine tooltips for only this Starry element
	labels: [
		'Low',
		'Nice to have',
		'Very nice',
		'Perfect',
		'Excellent'
	],
	onClear: function () {
		$('[data-name="' + starRatingId + '"] [data-tooltip]').tooltip('dispose');
	},
	onRender: function () {
		$('[data-name="' + starRatingId + '"] [data-tooltip]').tooltip({
			trigger: 'hover',
			placement: 'top'
		});
	},
	onRate: function (rating) {
		console.log(rating)
	},
	icons: {
		// File path, uri or base64 string for `src` attribute
		blank: './dist/icons/blank.svg',
		hover: './dist/icons/hover.svg',
		active: './dist/icons/active.svg'
	}
});
```

#### Options

| Option              | Type            | Default                              | Description                                                                                            |
| ------------------- | --------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| name                | String          |                                      | Name of star rating element. This option is required, if multi rating is disabled.                     |
| stars               | Integer         | `5`                                  | Number of rating stars.                                                                                |
| multiRating         | Boolean         | `true`                               | Determines whether the user can submit several ratings.                                                |
| beginWith           | Float           | `0`                                  | Preloaded rating in percentage.                                                                        |
| readOnly            | Boolean         | `false`                              | Read only rating stars.                                                                                |
| staticActiveRating  | Boolean         | `true`                               | Show current rating while hovering over rating stars.                                                  |
| setStarsAfterRating | Boolean         | `true`                               | Update rating stars after rating to new value.                                                         |
| labels              | Array / Boolean | `false`                              | Labels / tooltips for the stars.                                                                       |
| onRate              | Function        | `(rating) => true`                   | Called on rating event.                                                                                |
| onClear             | Function        | `undefined`                          | Called each time when Starry is being destroyed or rebuilt.                                            |
| onRender            | Function        | `undefined`                          | Called each time when Starry is build / rendered in html DOM.                                          |
| icons               | Object          | Default [Starry icons](/dist/icons). | Icon images. Object with properties `blank` (![blank](/dist/icons/blank.png)), `active` (![blank](/dist/icons/active.png)) and `hover` (![blank](/dist/icons/hover.png)). Use a string for each image source. |

#### Methods

##### Get current rating `getCurrentRating()`

```javascript
console.log(starRating.getCurrentRating())
```

##### Destroy Starry `clear()`

```javascript
starRating.clear()
```

##### Update Starry with new configurations `update(config)`

Starry will merge the new configurations into the old ones.

```javascript
starRating.update({
	readOnly: true,
	beginWith: 50
})
```

##### Attach event listener `on(eventName, callbackFunction)`

Attach an event listener to the star rating.

```javascript
starRating.on('rate', function (rating) {
	console.log('Rating: ' + rating)
})
```

#### Events

| Name   | Arguments | Description          |
| ------ | --------- | -------------------- |
| rate   | `rating`  | Fired on rating.     |
| render |           | Fired on rendering.  |
| clear  |           | Fired on destroying. |

## Cookies

Starry use [cookies](http://en.wikipedia.org/wiki/HTTP_cookie), to save ratings! 🍪

## License

The MIT License (MIT) - [View LICENSE.md](LICENSE.md)

## Resources

- [Starry v3.1.3 Documentation](https://teddy95.github.io/Starry/v3.1.3)
