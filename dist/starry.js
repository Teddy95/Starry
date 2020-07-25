"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
var Starry = /*#__PURE__*/function () {
  // Constructor method -> saves configs to Starry object & calls build method
  function Starry() {
    var domElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Starry);

    if (!domElement) {
      console.error("Starry: Missing DOM element!");
      return false;
    }

    if (!this.setConfig(config)) {
      return false;
    }

    this.domElement = domElement;
    this.build();
  } // Save configs to Starry object


  _createClass(Starry, [{
    key: "setConfig",
    value: function setConfig(config) {
      this.config = config;
      if (typeof this.config.stars === 'undefined') this.config.stars = 5;
      if (typeof this.config.multiRating === 'undefined') this.config.multiRating = true;
      if (typeof this.config.beginWith === 'undefined') this.config.beginWith = 0;
      if (typeof this.config.readOnly === 'undefined') this.config.readOnly = false;
      if (typeof this.config.staticActiveRating === 'undefined') this.config.staticActiveRating = true;
      if (typeof this.config.setStarsAfterRating === 'undefined') this.config.setStarsAfterRating = true;
      if (typeof this.config.labels === 'undefined' || !Array.isArray(this.config.labels)) this.config.labels = false;
      if (typeof this.config.onRate === 'undefined') this.config.onRate = function (value) {
        return true;
      };
      if (typeof this.currentRating === 'undefined') this.currentRating = 0;
      if (this.config.beginWith < 0) this.config.beginWith = 0;
      if (this.config.beginWith > 100) this.config.beginWith = 100;

      if (this.config.multiRating === false && typeof this.config.name === 'undefined') {
        console.error("Starry: Give your Starry star rating elements with multi rating a name!");
        return false;
      }

      if (typeof this.config.icons === 'undefined' || typeof this.config.icons.blank === 'undefined' || typeof this.config.icons.hover === 'undefined' || typeof this.config.icons.active === 'undefined') {
        console.error("Starry: No star icons defined yet!");
        return false;
      }

      return true;
    } // Set read only option by cookie

  }, {
    key: "checkCookie",
    value: function checkCookie() {
      var cookies = document.cookie;
      cookies = cookies.split(';');

      var _iterator = _createForOfIteratorHelper(cookies),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var cookie = _step.value;

          if (cookie.trim() === 'Starry_' + this.config.name + '=true') {
            this.config.readOnly = true;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } // Set rated cookie

  }, {
    key: "setCookie",
    value: function setCookie() {
      var time = new Date();
      time.setTime(time.getTime() + 1000 * 60 * 60 * 24 * 30 * 12 * 10);
      document.cookie = "Starry_" + this.config.name + "=true; expires=" + time.toGMTString() + "; sameSite=Lax";
      this.config.multiRating = false;
      this.config.readOnly = true;
    } // Create star rating html

  }, {
    key: "build",
    value: function build() {
      this.clear();

      if (this.config.multiRating === false) {
        this.checkCookie();
      } // Build starry wrapper


      var starryWrapper = document.createElement('div');
      starryWrapper.classList.add('Starry');
      starryWrapper.setAttribute('data-name', this.config.name); // Build starry inners -> blank stars

      var starryInnerBlank = document.createElement('div');
      starryInnerBlank.classList.add('Starry-blank'); // Add stars to starry inners -> blank stars

      var _iterator2 = _createForOfIteratorHelper(this.getStarRow('blank')),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var starEl = _step2.value;
          starryInnerBlank.appendChild(starEl);
        } // Build starry inners -> active stars

      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      var starryInnerActive = document.createElement('div');
      starryInnerActive.classList.add('Starry-active');
      if (this.config.staticActiveRating === true || this.config.readOnly === true) starryInnerActive.classList.add('Starry-static');
      starryInnerActive.style.width = "".concat(this.config.beginWith, "%"); // Add stars to starry inners -> active stars

      var _iterator3 = _createForOfIteratorHelper(this.getStarRow('active')),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var starEl = _step3.value;
          starryInnerActive.appendChild(starEl);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      if (this.config.readOnly === false) {
        // Build starry inners -> hover stars
        var starryInnerHover = document.createElement('div');
        starryInnerHover.classList.add('Starry-hover'); // Add stars to starry inners -> hover stars

        var _iterator4 = _createForOfIteratorHelper(this.getStarRow('hover')),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var starEl = _step4.value;
            starryInnerHover.appendChild(starEl);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      } // Append starry inners to starry wrapper


      starryWrapper.appendChild(starryInnerBlank);
      starryWrapper.appendChild(starryInnerActive);
      if (this.config.readOnly === false) starryWrapper.appendChild(starryInnerHover); // Append Starry element to star rating dom element

      this.domElement.appendChild(starryWrapper); // Perform on render method if it exists

      if (typeof this.config.onRender !== 'undefined' && typeof this.config.onRender === 'function') this.config.onRender();
    } // Get stars html

  }, {
    key: "getStarRow",
    value: function getStarRow(type) {
      var _this = this;

      var stars = [];

      for (var i = this.config.stars; i > 0; i--) {
        // Build star element
        var starElement = document.createElement('div');
        starElement.classList.add('Starry-star'); // Add event listener for hovering stars

        if (type === 'hover') {
          starElement.setAttribute('data-value', i);

          if (Array.isArray(this.config.labels)) {
            starElement.setAttribute('title', this.config.labels[i - 1]);
            starElement.setAttribute('data-label', this.config.labels[i - 1]);
            starElement.setAttribute('data-tooltip', this.config.labels[i - 1]);
          }

          starElement.addEventListener('click', function (event) {
            var targetEl = event.target;

            if (!targetEl.classList.contains('Starry-star')) {
              targetEl = event.target.closest('.Starry-star');
            }

            var onRateResult = _this.config.onRate(targetEl.getAttribute('data-value'));

            if (onRateResult !== false) {
              _this.currentRating = parseInt(targetEl.getAttribute('data-value'));

              if (_this.config.setStarsAfterRating === true) {
                _this.config.beginWith = _this.currentRating / _this.config.stars * 100;
              }
            }

            if (_this.config.multiRating === false) {
              _this.setCookie();
            }

            _this.build();
          });
        } // Build star visual


        var starVisual = document.createElement('img');
        starVisual.setAttribute('src', this.config.icons[type]);
        starElement.appendChild(starVisual); // Push star element to stars array

        stars.push(starElement);
      }

      return stars;
    } // Clear Starry html DOM

  }, {
    key: "clear",
    value: function clear() {
      if (typeof this.config.onClear !== 'undefined' && typeof this.config.onClear === 'function') this.config.onClear();
      this.domElement.innerHTML = '';
    } // Update starry

  }, {
    key: "update",
    value: function update(config) {
      this.setConfig(Object.assign({}, this.config, config));
      this.build();
    } // Get current rating

  }, {
    key: "getCurrentRating",
    value: function getCurrentRating() {
      return this.currentRating;
    }
  }]);

  return Starry;
}();
