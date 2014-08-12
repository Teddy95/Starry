/**
 * author:		Andre Sieverding https://github.com/Teddy95
 * license:		MIT http://opensource.org/licenses/MIT
 * 
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Andre Sieverding
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

// Starry info
var starryPath;
var starryFilename;
var starryInfo;
starryPath = document.getElementsByTagName('script');
starryPath = starryPath[starryPath.length-1];
starryPath = starryPath.src;
starryFilename = starryPath.split('/').reverse()[0];
var starryInfo = {
	url: starryPath.replace(starryFilename, ''),
	author: "Andre Sieverding"
};

function Starry (element) {

	this.element = element;
	this.elementName = false;
	this.stars = false;
	this.placeholder = $(element).clone();
	this.initSettings = false;

	// Create the star rating
	Starry.prototype.init = function (settings) {
		if (typeof jQuery != 'function') {
			//alert('Starry: You must include jQuery!');

			return false;
		}

		if (typeof $(this.element).attr('name') == 'undefined') {
			return false;
		}

		var elementName;
		elementName = $(this.element).attr('name');
		this.elementName = elementName;

		if (typeof settings == 'undefined') {
			settings = {};
		}

		if (typeof settings.stars == 'undefined' || settings.stars == 0) {
			settings.stars = 5;
		}

		if (typeof settings.multiple == 'undefined') {
			settings.multiple = false;
		}

		if (typeof settings.startValue == 'undefined') {
			settings.startValue = 0;
		}

		if (typeof settings.readOnly == 'undefined') {
			settings.readOnly = false;
		}

		if (typeof settings.tooltips == 'undefined') {
			settings.tooltips = false;
		}

		if (settings.stars == 5 && settings.tooltips === true) {
			settings.tooltips = [
				'Awful',
				'Poor',
				'Average',
				'Good',
				'Excellent'
			];
		}

		if (typeof settings.success == 'undefined') {
			settings.success = false;
		}

		if (settings.multiple === false) {
			var cookies;
			cookies = document.cookie;
			cookies = cookies.split(';');

			for (var i = 0; i < cookies.length; i++) {
				cookie = cookies[i];

				if (cookie.trim() == 'starry_' + elementName + '=true') {
					settings.readOnly = true;
				}
			}
		}

		this.initSettings = settings;

		// Readonly
		if (settings.readOnly == true) {
			var starPosition;
			var greyStars;
			var coloredStars;
			var width;
			var starryWidth;
			var newCode;

			starPosition = 0;
			greyStars = '';
			coloredStars = '';

			for (var i = 0; settings.stars > i; i++) {
				starPosition = i * 32;
				greyStars += "<img class='Starry-star' src='" + starryInfo.url + "icons/star_grey.png' alt='' style='left: " + starPosition + "px;' />";
				coloredStars += "<img class='Starry-star' src='" + starryInfo.url + "icons/star_color.png' alt='' style='left: " + starPosition + "px;' />";
			}

			width = 100 / settings.stars * settings.startValue;
			starryWidth = settings.stars * 32;

			newCode = "<div id='Starry_" + elementName + "' class='Starry-readonly' style='width: " + starryWidth + "px;'><div class='Starry-stars'>" + greyStars + "</div><div class='Starry-stars' style='width: " + width + "%;'>" + coloredStars + "</div></div>";

			$(this.element).replaceWith(newCode);
			$('#Starry_' + elementName).attr('data-rate', settings.startValue);

			this.stars = true;

			return true;
		} else {
			// Start value
			var starPosition;
			var greyStars;
			var coloredStars;
			var width;
			var starryWidth;
			var startValue;

			starPosition = 0;
			greyStars = '';
			coloredStars = '';

			for (var i = 0; settings.stars > i; i++) {
				starPosition = i * 32;
				greyStars += "<img class='Starry-star' src='" + starryInfo.url + "icons/star_grey.png' alt='' style='left: " + starPosition + "px;' />";
				coloredStars += "<img class='Starry-star' src='" + starryInfo.url + "icons/star_color.png' alt='' style='left: " + starPosition + "px;' />";
			}

			width = 100 / settings.stars * settings.startValue;
			starryWidth = settings.stars * 32;

			startValue = "<div class='Starry-readonly' style='width: " + starryWidth + "px;'><div class='Starry-stars'>" + greyStars + "</div><div id='Starry-stars_" + elementName + "' class='Starry-stars' style='width: " + width + "%;'>" + coloredStars + "</div></div>";

			// Rating script
			var newCode;
			var tooltip;

			starPosition = 0;

			newCode = "<div id='Starry_" + elementName + "' class='Starry' style='width: " + starryWidth + "px;'>" + startValue + "<div id='Starry-inner_" + elementName + "' class='Starry-inner'>";

			for (var i = 0; settings.stars > i; i++) {
				if (settings.tooltips !== false && $.isFunction($.fn.tipsy) === true) {
					tooltip = " Starry-tooltip' title='" + settings.tooltips[settings.stars - 1 - i];
				} else {
					tooltip = '';
				}

				starPosition = i * 32;
				newCode += "<div class='Starry-star Starry-star-" + elementName + tooltip + "' data-level='" + (settings.stars - i) + "' style='right: " + starPosition + "px; background-image: url(" + starryInfo.url + "icons/star_hover.png);'></div>";
			}

			newCode += "</div></div>";

			$(this.element).replaceWith(newCode);
			$('#Starry_' + elementName).attr('data-rate', settings.startValue);

			setTimeout(function () {
				// Create tipsy tooltips
				if (settings.tooltips !== false && $.isFunction($.fn.tipsy) === true) {
					$('.Starry-tooltip').tipsy({
						gravity: 's'
					});
				}
			}, 0);

			// Star onclick event
			$('.Starry-star-' + elementName).off();
			$('.Starry-star-' + elementName).click(function () {
				level = $(this).attr('data-level');
				
				var readOnly;

				if (settings.multiple === false) {
					var time;
					time = new Date();
					time.setTime(time.getTime() + (1000*60*60*24*30*12*10));
					document.cookie = "starry_" + elementName + "=true; expires=" + time.toGMTString();

					readOnly = true;
				}
				
				// Redraw
				if (readOnly === true) {
					$('#Starry-inner_' + elementName).remove();
					$('#Starry_' + elementName).replaceWith($('#Starry_' + elementName).html());

					width = 100 / settings.stars * level;
					$('#Starry-stars_' + elementName).css('width', width + '%');
				} else {
					width = 100 / settings.stars * level;
					$('#Starry-stars_' + elementName).css('width', width + '%');
				}

				$('.tipsy').css('display', 'none');

				if (settings.success !== false) {
					settings.success(level);
				}

				$('#Starry_' + elementName).attr('data-rate', level);
			});

			this.stars = true;

			return true;
		}
	}

	// Destroy the star rating
	Starry.prototype.destroy = function () {
		if (this.stars === true) {
			$('#Starry_' + this.elementName).replaceWith(this.placeholder);

			this.stars = false;

			return true;
		} else {
			return false;
		}
	}

	// Rebuild the star rating
	Starry.prototype.rebuild = function (settings) {
		this.destroy();

		if (typeof settings == 'undefined') {
			if (this.initSettings === false) {
				this.init();
			} else {
				this.init(this.initSettings);
			}
		} else {
			this.init(settings);
		}
	}

	// Get the active rating
	Starry.prototype.getRating = function () {
		var rate;
		rate = $('#Starry_' + this.elementName).attr('data-rate');

		return rate;
	}

	// Set the active rating
	Starry.prototype.setRating = function (rating) {
		if (this.stars === true) {
			this.destroy();

			settings = this.initSettings;
			settings.startValue = rating;

			this.init(settings);
		}
	}

}
