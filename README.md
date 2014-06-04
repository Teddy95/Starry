# Starry

![Image](http://i.imgur.com/nZpT2Yb.png)

Starry is a JavaScript star rating library.

### Installation

> You need [jQuery](https://github.com/jquery/jquery) version 1.11.0 or higher!

HTML markup:
```html
<div id="starry" name="starrating"></div>
```
Without options:
```javascript
$.("#starry").starry();
```
With options:
```javascript
$.("#starry").starry({
	stars: 5,
	userId: 0,
	file: 'http://www.example.com/rating.php',
	multiple: false,
	startValue: 0,
	readOnly: false,
	tooltips: [
		'Worst',
		'Bad',
		'OK',
		'Good',
		'Excellent'
	]
});
```

-------------

### Documentaion

[https://github.com/Teddy95/Starry/wiki](https://github.com/Teddy95/Starry/wiki)

-------------

### Download

- [Releases on Github](https://github.com/Teddy95/Starry/releases)
- **[Download latest version from Github](https://github.com/Teddy95/Starry/archive/v1.2.0.zip)**
- [Download master from Github](https://github.com/Teddy95/Starry/archive/master.zip)

-------------

### Contributors

- [Teddy95](https://github.com/Teddy95)

-------------

### License

The MIT License (MIT) - [View LICENSE.md](https://github.com/Teddy95/Starry/blob/master/LICENSE.md)