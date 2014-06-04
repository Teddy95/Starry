# Starry

![Image](http://i.imgur.com/nZpT2Yb.png)

Starry is a JavaScript star rating library.

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
		file: '../rate.php' // Path / URL to the rate file!
	});
});
```

-------------

### Options

| Option | Type | Default | Description | 
|:----- |:----- |:----- |:----- |
| stars | int | 5 | Number of rating stars. | 
| userId | int | 0 | Id of the user who has voted. | 
| file | string | false | File to which the rating will be sent. | 
| multiple | boolean | false | Determines whether the user can submit several ratings. | 
| startValue | int | 0 | Preloaded rating. | 
| readOnly | boolean | false | Determines whether the user can submit ratings. | 
| tooltips | array | false | Tooltips for the stars. | 

-------------

### Download

- [Releases on Github](https://github.com/Teddy95/Starry/releases)
- **[Download latest version from Github](https://github.com/Teddy95/Starry/archive/v1.0.0.zip)**
- [Download master from Github](https://github.com/Teddy95/Starry/archive/master.zip)

-------------

### Contributors

- [Teddy95](https://github.com/Teddy95)

-------------

### License

The MIT License (MIT) - [View LICENSE.md](https://github.com/Teddy95/Starry/blob/master/LICENSE.md)

The default icons are from [https://github.com/paomedia/small-n-flat](https://github.com/paomedia/small-n-flat)
