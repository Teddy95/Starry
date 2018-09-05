# Starry

<p align="center">
	<img src="http://root.andre-sieverding.de/briefkasten/GithubRepoLogos/Starry2.png" alt="">
	<br />
	<span align="center">Starry is a JavaScript star rating system based on Ajax. <a href="http://teddy95.github.io/Starry/">Demo</a></span>
</p>

-------------

### Installation

> You need [jQuery](https://github.com/jquery/jquery) version 1.11.0 or higher!

HTML markup:
```html
<div id="starry" name="starry"></div>
```
JavaScript markup:
```javascript
$(document).ready(function () {
	var starry = new Starry('#starry');
	starry.init({
		success: function (level) {
			alert('You voted: ' + level);
		}
	});
});
```

-------------

### Options

| Option | Type | Default | Description | 
|:----- |:----- |:----- |:----- |
| stars | int | 5 | Number of rating stars. (= y) | 
| starSize | int | 32 | Height and width of star icons in pixel. | 
| multiple | boolean | false | Determines whether the user can submit several ratings. | 
| startValue | int | 0 | Preloaded rating. <code>{x ∈ ℝ<sub>+</sub> ¦ x <= y}</code> | 
| readOnly | boolean | false | Determines whether the user can submit ratings. | 
| iconPath | string | `icons/` | Path to rating icons. | 
| tooltips | array | false | Tooltips for the stars. (You must include [tipsy](https://github.com/jaz303/tipsy)!) | 
| success | function | false | A function to be called if the request succeeds. The function gets passed one argument: Your rating (3 for example). | 

-------------

### Browser support

| Browser | Version | 
|:-----:|:----- |
| ![](http://www.w3schools.com/images/compatible_ie.gif) | 9 or higher | 
| ![](http://www.w3schools.com/images/compatible_chrome.gif) | Works! Tested in version 35 | 
| ![](http://www.w3schools.com/images/compatible_firefox.gif) | Works! Tested in version 29 | 
| ![](http://www.w3schools.com/images/compatible_safari.gif) | Works! Tested in version 11 | 
| ![](http://www.w3schools.com/images/compatible_opera.gif) | Not tested - [Tell us!](https://github.com/Teddy95/Starry/issues) | 

-------------

### Icons (Stars)

These are the default icons:

![unrated](https://raw.githubusercontent.com/Teddy95/Starry/icons/stars/5/32px/unrated.png) ![rated](https://raw.githubusercontent.com/Teddy95/Starry/icons/stars/5/32px/rated.png) ![hover](https://raw.githubusercontent.com/Teddy95/Starry/icons/stars/5/32px/hover.png)

More icons can be found [here](https://github.com/Teddy95/Starry/tree/icons).

-------------

### Cookies

Starry use [cookies](http://en.wikipedia.org/wiki/HTTP_cookie), to save ratings! :cookie:

-------------

### Download

- [Releases on Github](https://github.com/Teddy95/Starry/releases)
- **[Download latest version from Github](https://github.com/Teddy95/Starry/archive/v3.1.2.zip)**
- [Download master from Github](https://github.com/Teddy95/Starry/archive/master.zip)

-------------

### Contributors

- [Teddy95](https://github.com/Teddy95)

-------------

### License

The MIT License (MIT) - [View LICENSE.md](https://github.com/Teddy95/Starry/blob/master/LICENSE.md)
