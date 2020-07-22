'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * author:		Andre Sieverding https://github.com/Teddy95
 * license:		MIT http://opensource.org/licenses/MIT
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2020 Andre Sieverding
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

// Star rating class
var Starry = function () {
	// Constructor method -> saves configs to Starry object & calls build method
	function Starry() {
		var domElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
		var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		_classCallCheck(this, Starry);

		if (!domElement) {
			console.error('Starry: Missing DOM element!');
			return false;
		}

		if (!this.setConfig(config)) {
			return false;
		}

		this.domElement = domElement;
		this.build();
	}

	// Save configs to Starry object


	_createClass(Starry, [{
		key: 'setConfig',
		value: function setConfig(config) {
			this.config = config;

			if (typeof this.config.stars === 'undefined') this.config.stars = 5;
			if (typeof this.config.multiRating === 'undefined') this.config.multiRating = false;
			if (typeof this.config.beginWith === 'undefined') this.config.beginWith = 0;
			if (typeof this.config.readOnly === 'undefined') this.config.readOnly = false;
			if (typeof this.config.staticActiveRating === 'undefined') this.config.staticActiveRating = true;
			if (typeof this.config.setStarsAfterRating === 'undefined') this.config.setStarsAfterRating = true;
			if (typeof this.config.tooltips === 'undefined' || !Array.isArray(this.config.tooltips)) this.config.tooltips = false;
			if (typeof this.config.onRate === 'undefined') this.config.onRate = function (value) {};

			if (this.config.beginWith < 0) this.config.beginWith = 0;
			if (this.config.beginWith > 100) this.config.beginWith = 100;
			this.currentRating = this.config.beginWith / 100 * this.config.stars;

			if (typeof this.config.name === 'undefined') {
				console.error('Starry: Give your Starry star rating elements a name!');
				return false;
			}

			if (typeof this.config.icons === 'undefined' || typeof this.config.icons.blank === 'undefined' || typeof this.config.icons.hover === 'undefined' || typeof this.config.icons.active === 'undefined') {
				console.error('Starry: No star icons defined yet!');
				return false;
			}

			return true;
		}

		// Set read only option by cookie

	}, {
		key: 'checkCookie',
		value: function checkCookie() {
			var cookies = document.cookie;
			cookies = cookies.split(';');

			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = cookies[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var cookie = _step.value;

					if (cookie.trim() === 'Starry_' + this.config.name + '=true') {
						this.config.readOnly = true;
					}
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}
		}

		// Set rated cookie

	}, {
		key: 'setCookie',
		value: function setCookie() {
			var time = new Date();
			time.setTime(time.getTime() + 1000 * 60 * 60 * 24 * 30 * 12 * 10);
			document.cookie = "Starry_" + this.config.name + "=true; expires=" + time.toGMTString() + "; sameSite=Lax";
			this.config.multiRating = false;
			this.config.readOnly = true;
		}

		// Create star rating html

	}, {
		key: 'build',
		value: function build() {
			this.clear();

			if (this.config.multiRating === false) {
				this.checkCookie();
			}

			// Build starry wrapper
			var starryWrapper = document.createElement('div');
			starryWrapper.classList.add('Starry');
			starryWrapper.setAttribute('data-name', this.config.name);

			// Build starry inners -> blank stars
			var starryInnerBlank = document.createElement('div');
			starryInnerBlank.classList.add('Starry-blank');

			// Add stars to starry inners -> blank stars
			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = this.getStarRow('blank')[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var starEl = _step2.value;

					starryInnerBlank.appendChild(starEl);
				}

				// Build starry inners -> active stars
			} catch (err) {
				_didIteratorError2 = true;
				_iteratorError2 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion2 && _iterator2.return) {
						_iterator2.return();
					}
				} finally {
					if (_didIteratorError2) {
						throw _iteratorError2;
					}
				}
			}

			var starryInnerActive = document.createElement('div');
			starryInnerActive.classList.add('Starry-active');
			if (this.config.staticActiveRating === true || this.config.readOnly === true) starryInnerActive.classList.add('Starry-static');
			starryInnerActive.style.width = this.config.beginWith + '%';

			// Add stars to starry inners -> active stars
			var _iteratorNormalCompletion3 = true;
			var _didIteratorError3 = false;
			var _iteratorError3 = undefined;

			try {
				for (var _iterator3 = this.getStarRow('active')[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
					var starEl = _step3.value;

					starryInnerActive.appendChild(starEl);
				}
			} catch (err) {
				_didIteratorError3 = true;
				_iteratorError3 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion3 && _iterator3.return) {
						_iterator3.return();
					}
				} finally {
					if (_didIteratorError3) {
						throw _iteratorError3;
					}
				}
			}

			if (this.config.readOnly === false) {
				// Build starry inners -> hover stars
				var starryInnerHover = document.createElement('div');
				starryInnerHover.classList.add('Starry-hover');

				// Add stars to starry inners -> hover stars
				var _iteratorNormalCompletion4 = true;
				var _didIteratorError4 = false;
				var _iteratorError4 = undefined;

				try {
					for (var _iterator4 = this.getStarRow('hover')[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
						var starEl = _step4.value;

						starryInnerHover.appendChild(starEl);
					}
				} catch (err) {
					_didIteratorError4 = true;
					_iteratorError4 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion4 && _iterator4.return) {
							_iterator4.return();
						}
					} finally {
						if (_didIteratorError4) {
							throw _iteratorError4;
						}
					}
				}
			}

			// Append starry inners to starry wrapper
			starryWrapper.appendChild(starryInnerBlank);
			starryWrapper.appendChild(starryInnerActive);
			if (this.config.readOnly === false) starryWrapper.appendChild(starryInnerHover);

			// Append Starry element to star rating dom element
			this.domElement.appendChild(starryWrapper);

			// Perform on render method if it exists
			if (typeof this.config.onRender !== 'undefined' && typeof this.config.onRender === 'function') this.config.onRender();
		}

		// Get stars html

	}, {
		key: 'getStarRow',
		value: function getStarRow(type) {
			var _this = this;

			var stars = [];

			for (var i = this.config.stars; i > 0; i--) {
				// Build star element
				var starElement = document.createElement('div');
				starElement.classList.add('Starry-star');

				// Add event listener for hovering stars
				if (type === 'hover') {
					starElement.setAttribute('data-value', i);

					if (Array.isArray(this.config.tooltips)) {
						starElement.setAttribute('title', this.config.tooltips[i - 1]);
						starElement.setAttribute('data-tooltip', this.config.tooltips[i - 1]);
					}

					starElement.addEventListener('click', function (event) {
						var targetEl = event.target;

						if (!targetEl.classList.contains('Starry-star')) {
							targetEl = event.target.closest('.Starry-star');
						}

						var onRateResult = _this.config.onRate({
							name: _this.config.name,
							value: targetEl.getAttribute('data-value')
						});

						if (onRateResult !== false) {
							_this.currentRating = targetEl.getAttribute('data-value');

							if (_this.config.setStarsAfterRating === true) {
								_this.config.beginWith = parseInt(targetEl.getAttribute('data-value')) / _this.config.stars * 100;
							}
						}

						if (_this.config.multiRating === false) {
							_this.setCookie();
						}

						_this.build();
					});
				}

				// Build star visual
				var starVisual = document.createElement('img');
				starVisual.setAttribute('src', this.config.icons[type]);
				starElement.appendChild(starVisual);

				// Push star element to stars array
				stars.push(starElement);
			}

			return stars;
		}

		// Clear Starry html DOM

	}, {
		key: 'clear',
		value: function clear() {
			if (typeof this.config.onClear !== 'undefined' && typeof this.config.onClear === 'function') this.config.onClear();
			this.domElement.innerHTML = '';
		}

		// Update starry

	}, {
		key: 'update',
		value: function update(config) {
			this.setConfig(config);
			this.build();
		}

		// Get current rating

	}, {
		key: 'getCurrentRating',
		value: function getCurrentRating() {
			return this.currentRating;
		}
	}]);

	return Starry;
}();
