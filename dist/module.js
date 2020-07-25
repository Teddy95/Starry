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
// Import default icons
var icon = {
  blank: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT5ibGFuazwvdGl0bGU+DQogICAgPGcgaWQ9ImJsYW5rIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPHBhdGggZD0iTTExLjA0NDAxNDEsMS4zNjcyMTIxNyBMNy45OTAyNTM2MSw3LjU1Mzg5NTc5IEwxLjE2MjcwNzcyLDguNTQ2NDAxNSBDMC45MzA3MDc2MTgsOC41ODAxMTMwOSAwLjcxNjI5MDcwNSw4LjY4OTM2Mzk2IDAuNTUyNjUxMjE3LDguODU3MjQwODIgTDAuNDY1MjYzMjc2LDguOTU4NzkwNTkgQzAuMTQ1NDc5MzEyLDkuMzgxMDkyODMgMC4xODI3NjQ1MjUsOS45ODUzMzE0MyAwLjU3MTkxODczNywxMC4zNjQ2NjMgTDUuNTEyMTA5NTYsMTUuMTgwOTI0NSBMNC4zNDYyNDE5MywyMS45ODA4MzU0IEM0LjMwNjYxMTU4LDIyLjIxMTg5ODEgNC4zNDQyNTY4NywyMi40NDk1ODEgNC40NTMzNDk4NiwyMi42NTcwODgyIEw0LjUxNzU0Nzg4LDIyLjc2Mzc4ODMgQzQuODE4NzU3NTUsMjMuMjA0Mzk1OSA1LjQwOTA2MzI5LDIzLjM1ODk3NTggNS44OTI5NDc1NywyMy4xMDQ1ODI4IEwxMS45OTk5NTAxLDE5Ljg5MzM5MzYgTDE4LjEwNjkxNCwyMy4xMDQ1ODI4IEMxOC4zMTQ0MjEyLDIzLjIxMzY3NTggMTguNTUyMTA0MiwyMy4yNTEzMjExIDE4Ljc4MzE2NjgsMjMuMjExNjkwNyBMMTguODk2NTg5OCwyMy4xODU4OTA3IEMxOS40MTMyMTQ3LDIzLjAzODU2MjIgMTkuNzQ2NTA3MiwyMi41MjI0MTE2IDE5LjY1MzYxOTYsMjEuOTgwODM1NCBMMTguNDg2NzY2MiwxNS4xODA5MjQ1IEwyMy40Mjc5NDI4LDEwLjM2NDY2MyBDMjMuNTk1ODE5NywxMC4yMDEwMjM1IDIzLjcwNTA3MDYsOS45ODY2MDY2MyAyMy43Mzg3ODIxLDkuNzU0NjA2NTMgTDIzLjc0OTI5NDUsOS42Mzg3NjIyNiBDMjMuNzY4ODIyNiw5LjEwMTg5NTc4IDIzLjM4MDkyNzMsOC42MjU0MTY0MSAyMi44MzcxNTM4LDguNTQ2NDAxNSBMMTYuMDA4NjIyMiw3LjU1Mzg5NTc5IEwxMi45NTU4NDc0LDEuMzY3MjEyMTcgQzEyLjg1MjA5MzgsMS4xNTY5ODQ0MSAxMi42ODE5MzE2LDAuOTg2ODIyMTgzIDEyLjQ3MTcwMzksMC44ODMwNjg1ODIgQzExLjk0Mzc2NTcsMC42MjI1MTU1MDggMTEuMzA0NTY3MiwwLjgzOTI3Mzk3NCAxMS4wNDQwMTQxLDEuMzY3MjEyMTcgWiBNMTEuOTk4OTI1NywyLjkwMTg2OTI3IEwxNC42OTQ2ODk3LDguMzYyNjg3MDIgTDE0Ljc2MjI4ODQsOC40ODI3MjYyMyBDMTQuOTU4Njc0Nyw4Ljc5MDkwMjk5IDE1LjI4MDY1MDksOS4wMDExOTA0IDE1LjY0NjczMDEsOS4wNTQzODQ4MyBMMjEuNjcxNzgwNiw5LjkyOTU5NDg2IEwxNy4zMTIxODI3LDE0LjE4MDEyMDkgTDE3LjIxODkwNzgsMTQuMjgxNTA1MyBDMTYuOTg2NTAxLDE0LjU2MzUxMTYgMTYuODg2MDAxOSwxNC45MzQ3MTE1IDE2Ljk0ODUzNTcsMTUuMjk5MzExNSBMMTcuOTc2NTkwMiwyMS4yOTk5NjMxIEwxMi41ODgzMjQxLDE4LjQ2NzE5MDYgTDEyLjQ0NzEwNzksMTguNDAzNjQ2NSBDMTIuMTExMDY3OCwxOC4yNzY1NTgyIDExLjczMzg1MjYsMTguMjk3NzM5NiAxMS40MTE1Mzc1LDE4LjQ2NzE5MDYgTDYuMDIyMjg1NTYsMjEuMjk5OTYzMSBMNy4wNTEzMjU5MiwxNS4yOTkzMTE1IEw3LjA2NzE5NDcyLDE1LjE2MjQ2NDIgQzcuMDg5NDU2NjIsMTQuNzk3NzExIDYuOTUyNTc2MjcsMTQuNDM4MzMyMSA2LjY4NzY3ODg2LDE0LjE4MDEyMDkgTDIuMzI3MDk1MTUsOS45Mjk1OTQ4NiBMOC4zNTMxMzE0OCw5LjA1NDM4NDgzIEM4Ljc2NDk3MDU5LDguOTk0NTQxMSA5LjEyMDk5MTc5LDguNzM1ODc2NTYgOS4zMDUxNzE4NCw4LjM2MjY4NzAyIEwxMS45OTg5MjU3LDIuOTAxODY5MjcgWiIgZmlsbD0iI0ZBREIzNyIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+DQogICAgPC9nPg0KPC9zdmc+",
  active: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT5hY3RpdmU8L3RpdGxlPg0KICAgIDxnIGlkPSJhY3RpdmUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8cGF0aCBkPSJNMTEuMDQ0MDE0MSwxLjM2NzIxMjE3IEw3Ljk5MDI1MzYxLDcuNTUzODk1NzkgTDEuMTYyNzA3NzIsOC41NDY0MDE1IEMwLjkzMDcwNzYxOCw4LjU4MDExMzA5IDAuNzE2MjkwNzA1LDguNjg5MzYzOTYgMC41NTI2NTEyMTcsOC44NTcyNDA4MiBMMC40NjUyNjMyNzYsOC45NTg3OTA1OSBDMC4xNDU0NzkzMTIsOS4zODEwOTI4MyAwLjE4Mjc2NDUyNSw5Ljk4NTMzMTQzIDAuNTcxOTE4NzM3LDEwLjM2NDY2MyBMNS41MTIxMDk1NiwxNS4xODA5MjQ1IEw0LjM0NjI0MTkzLDIxLjk4MDgzNTQgQzQuMzA2NjExNTgsMjIuMjExODk4MSA0LjM0NDI1Njg3LDIyLjQ0OTU4MSA0LjQ1MzM0OTg2LDIyLjY1NzA4ODIgTDQuNTE3NTQ3ODgsMjIuNzYzNzg4MyBDNC44MTg3NTc1NSwyMy4yMDQzOTU5IDUuNDA5MDYzMjksMjMuMzU4OTc1OCA1Ljg5Mjk0NzU3LDIzLjEwNDU4MjggTDExLjk5OTk1MDEsMTkuODkzMzkzNiBMMTguMTA2OTE0LDIzLjEwNDU4MjggQzE4LjMxNDQyMTIsMjMuMjEzNjc1OCAxOC41NTIxMDQyLDIzLjI1MTMyMTEgMTguNzgzMTY2OCwyMy4yMTE2OTA3IEwxOC44OTY1ODk4LDIzLjE4NTg5MDcgQzE5LjQxMzIxNDcsMjMuMDM4NTYyMiAxOS43NDY1MDcyLDIyLjUyMjQxMTYgMTkuNjUzNjE5NiwyMS45ODA4MzU0IEwxOC40ODY3NjYyLDE1LjE4MDkyNDUgTDIzLjQyNzk0MjgsMTAuMzY0NjYzIEMyMy41OTU4MTk3LDEwLjIwMTAyMzUgMjMuNzA1MDcwNiw5Ljk4NjYwNjYzIDIzLjczODc4MjEsOS43NTQ2MDY1MyBMMjMuNzQ5Mjk0NSw5LjYzODc2MjI2IEMyMy43Njg4MjI2LDkuMTAxODk1NzggMjMuMzgwOTI3Myw4LjYyNTQxNjQxIDIyLjgzNzE1MzgsOC41NDY0MDE1IEwxNi4wMDg2MjIyLDcuNTUzODk1NzkgTDEyLjk1NTg0NzQsMS4zNjcyMTIxNyBDMTIuODUyMDkzOCwxLjE1Njk4NDQxIDEyLjY4MTkzMTYsMC45ODY4MjIxODMgMTIuNDcxNzAzOSwwLjg4MzA2ODU4MiBDMTEuOTQzNzY1NywwLjYyMjUxNTUwOCAxMS4zMDQ1NjcyLDAuODM5MjczOTc0IDExLjA0NDAxNDEsMS4zNjcyMTIxNyBaIiBmaWxsPSIjRkFEQjM3IiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4NCiAgICA8L2c+DQo8L3N2Zz4=",
  hover: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDx0aXRsZT5ob3ZlcjwvdGl0bGU+DQogICAgPGcgaWQ9ImhvdmVyIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPHBhdGggZD0iTTExLjA0NDAxNDEsMS4zNjcyMTIxNyBMNy45OTAyNTM2MSw3LjU1Mzg5NTc5IEwxLjE2MjcwNzcyLDguNTQ2NDAxNSBDMC45MzA3MDc2MTgsOC41ODAxMTMwOSAwLjcxNjI5MDcwNSw4LjY4OTM2Mzk2IDAuNTUyNjUxMjE3LDguODU3MjQwODIgTDAuNDY1MjYzMjc2LDguOTU4NzkwNTkgQzAuMTQ1NDc5MzEyLDkuMzgxMDkyODMgMC4xODI3NjQ1MjUsOS45ODUzMzE0MyAwLjU3MTkxODczNywxMC4zNjQ2NjMgTDUuNTEyMTA5NTYsMTUuMTgwOTI0NSBMNC4zNDYyNDE5MywyMS45ODA4MzU0IEM0LjMwNjYxMTU4LDIyLjIxMTg5ODEgNC4zNDQyNTY4NywyMi40NDk1ODEgNC40NTMzNDk4NiwyMi42NTcwODgyIEw0LjUxNzU0Nzg4LDIyLjc2Mzc4ODMgQzQuODE4NzU3NTUsMjMuMjA0Mzk1OSA1LjQwOTA2MzI5LDIzLjM1ODk3NTggNS44OTI5NDc1NywyMy4xMDQ1ODI4IEwxMS45OTk5NTAxLDE5Ljg5MzM5MzYgTDE4LjEwNjkxNCwyMy4xMDQ1ODI4IEMxOC4zMTQ0MjEyLDIzLjIxMzY3NTggMTguNTUyMTA0MiwyMy4yNTEzMjExIDE4Ljc4MzE2NjgsMjMuMjExNjkwNyBMMTguODk2NTg5OCwyMy4xODU4OTA3IEMxOS40MTMyMTQ3LDIzLjAzODU2MjIgMTkuNzQ2NTA3MiwyMi41MjI0MTE2IDE5LjY1MzYxOTYsMjEuOTgwODM1NCBMMTguNDg2NzY2MiwxNS4xODA5MjQ1IEwyMy40Mjc5NDI4LDEwLjM2NDY2MyBDMjMuNTk1ODE5NywxMC4yMDEwMjM1IDIzLjcwNTA3MDYsOS45ODY2MDY2MyAyMy43Mzg3ODIxLDkuNzU0NjA2NTMgTDIzLjc0OTI5NDUsOS42Mzg3NjIyNiBDMjMuNzY4ODIyNiw5LjEwMTg5NTc4IDIzLjM4MDkyNzMsOC42MjU0MTY0MSAyMi44MzcxNTM4LDguNTQ2NDAxNSBMMTYuMDA4NjIyMiw3LjU1Mzg5NTc5IEwxMi45NTU4NDc0LDEuMzY3MjEyMTcgQzEyLjg1MjA5MzgsMS4xNTY5ODQ0MSAxMi42ODE5MzE2LDAuOTg2ODIyMTgzIDEyLjQ3MTcwMzksMC44ODMwNjg1ODIgQzExLjk0Mzc2NTcsMC42MjI1MTU1MDggMTEuMzA0NTY3MiwwLjgzOTI3Mzk3NCAxMS4wNDQwMTQxLDEuMzY3MjEyMTcgWiIgZmlsbD0iI0ZGOTUwMCIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+DQogICAgPC9nPg0KPC9zdmc+"
}; // Star rating class

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

      if (typeof this.config.icons === 'undefined' || typeof this.config.icons.blank === 'undefined' || typeof this.config.icons.hover === 'undefined' || typeof this.config.icons.active === 'undefined') {
        this.config.icons = icon;
      }

      if (this.config.beginWith < 0) this.config.beginWith = 0;
      if (this.config.beginWith > 100) this.config.beginWith = 100;

      if (typeof this.config.name === 'undefined') {
        if (this.config.multiRating === false) {
          console.error("Starry: Give your Starry star rating elements with multi rating a name!");
          return false;
        } else {
          this.config.name = 'Starry_' + Date.now();
        }
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
    } // Get config object

  }, {
    key: "getConfig",
    value: function getConfig() {
      return this.config;
    } // Custom event listener

  }, {
    key: "on",
    value: function on(eventName, callbackFunction) {
      switch (eventName) {
        case 'rate':
          this.config.onRate = callbackFunction;
          break;

        case 'render':
          this.config.onRender = callbackFunction;
          break;

        case 'clear':
          this.config.onClear = callbackFunction;
          break;

        default:
          console.error("Starry: Event '".concat(eventName, "' doesn't exists!"));
          return;
      }
    }
  }]);

  return Starry;
}();

module.exports = Starry;
