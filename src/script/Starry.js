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
import icon from './icons.json'

// Star rating class
class Starry {
	// Constructor method -> saves configs to Starry object & calls build method
	constructor (domElement = false, config = {}) {
		if (!domElement) {
			console.error(`Starry: Missing DOM element!`)
			return false
		}

		if (!this.setConfig(config)) {
			return false
		}

        this.domElement = domElement
		this.build()
	}

	// Save configs to Starry object
	setConfig (config) {
		this.config = config

		if (typeof this.config.stars === 'undefined') this.config.stars = 5
		if (typeof this.config.multiRating === 'undefined') this.config.multiRating = true
		if (typeof this.config.beginWith === 'undefined') this.config.beginWith = 0
		if (typeof this.config.readOnly === 'undefined') this.config.readOnly = false
		if (typeof this.config.staticActiveRating === 'undefined') this.config.staticActiveRating = true
		if (typeof this.config.setStarsAfterRating === 'undefined') this.config.setStarsAfterRating = true
		if (typeof this.config.labels === 'undefined' || !Array.isArray(this.config.labels)) this.config.labels = false
		if (typeof this.config.onRate === 'undefined') this.config.onRate = (value) => true
        if (typeof this.currentRating === 'undefined') this.currentRating = 0

		if (typeof this.config.icons === 'undefined' ||
			typeof this.config.icons.blank === 'undefined' ||
			typeof this.config.icons.hover === 'undefined' ||
			typeof this.config.icons.active === 'undefined') {
			this.config.icons = icon
		}

		if (this.config.beginWith < 0) this.config.beginWith = 0
		if (this.config.beginWith > 100) this.config.beginWith = 100

		if (typeof this.config.name === 'undefined') {
            if (this.config.multiRating === false) {
                console.error(`Starry: Give your Starry star rating elements with multi rating a name!`)
    			return false
            } else {
                this.config.name = 'Starry_' + Date.now()
            }
		}

        return true
	}

    // Set read only option by cookie
    checkCookie () {
        var cookies = document.cookie
        cookies = cookies.split(';')

        for (var cookie of cookies) {
            if (cookie.trim() === 'Starry_' + this.config.name + '=true') {
                this.config.readOnly = true
            }
        }
    }

    // Set rated cookie
    setCookie () {
        var time = new Date()
        time.setTime(time.getTime() + (1000*60*60*24*30*12*10))
        document.cookie = "Starry_" + this.config.name + "=true; expires=" + time.toGMTString() + "; sameSite=Lax"
        this.config.multiRating = false
        this.config.readOnly = true
    }

	// Create star rating html
	build () {
		this.clear()

        if (this.config.multiRating === false) {
            this.checkCookie()
        }

		// Build starry wrapper
		var starryWrapper = document.createElement('div')
		starryWrapper.classList.add('Starry')
		starryWrapper.setAttribute('data-name', this.config.name)

		// Build starry inners -> blank stars
		var starryInnerBlank = document.createElement('div')
		starryInnerBlank.classList.add('Starry-blank')

		// Add stars to starry inners -> blank stars
		for (var starEl of this.getStarRow('blank')) {
			starryInnerBlank.appendChild(starEl)
		}

		// Build starry inners -> active stars
		var starryInnerActive = document.createElement('div')
		starryInnerActive.classList.add('Starry-active')
		if (this.config.staticActiveRating === true || this.config.readOnly === true) starryInnerActive.classList.add('Starry-static')
		starryInnerActive.style.width = `${this.config.beginWith}%`

		// Add stars to starry inners -> active stars
		for (var starEl of this.getStarRow('active')) {
			starryInnerActive.appendChild(starEl)
		}

		if (this.config.readOnly === false) {
			// Build starry inners -> hover stars
			var starryInnerHover = document.createElement('div')
			starryInnerHover.classList.add('Starry-hover')

			// Add stars to starry inners -> hover stars
			for (var starEl of this.getStarRow('hover')) {
				starryInnerHover.appendChild(starEl)
			}
		}

		// Append starry inners to starry wrapper
		starryWrapper.appendChild(starryInnerBlank)
		starryWrapper.appendChild(starryInnerActive)
		if (this.config.readOnly === false) starryWrapper.appendChild(starryInnerHover)

		// Append Starry element to star rating dom element
		this.domElement.appendChild(starryWrapper)

        // Perform on render method if it exists
        if (typeof this.config.onRender !== 'undefined' && typeof this.config.onRender === 'function') this.config.onRender()
	}

	// Get stars html
	getStarRow (type) {
		var stars = []

		for (var i = this.config.stars; i > 0; i--) {
			// Build star element
			var starElement = document.createElement('div')
			starElement.classList.add('Starry-star')

			// Add event listener for hovering stars
			if (type === 'hover') {
				starElement.setAttribute('data-value', i)

                if (Array.isArray(this.config.labels)) {
                    starElement.setAttribute('title', this.config.labels[i - 1])
                    starElement.setAttribute('data-label', this.config.labels[i - 1])
                    starElement.setAttribute('data-tooltip', this.config.labels[i - 1])
                }

				starElement.addEventListener('click', (event) => {
					var targetEl = event.target

					if (!targetEl.classList.contains('Starry-star')) {
						targetEl = event.target.closest('.Starry-star')
					}

					const onRateResult = this.config.onRate(targetEl.getAttribute('data-value'))

					if (onRateResult !== false) {
                        this.currentRating = parseInt(targetEl.getAttribute('data-value'))

                        if (this.config.setStarsAfterRating === true) {
                            this.config.beginWith = (this.currentRating / this.config.stars) * 100
                        }
					}

                    if (this.config.multiRating === false) {
                        this.setCookie()
                    }

                    this.build()
				})
			}

			// Build star visual
			var starVisual = document.createElement('img')
			starVisual.setAttribute('src', this.config.icons[type])
			starElement.appendChild(starVisual)

			// Push star element to stars array
			stars.push(starElement)
		}

		return stars
	}

    // Clear Starry html DOM
    clear () {
        if (typeof this.config.onClear !== 'undefined' && typeof this.config.onClear === 'function') this.config.onClear()
		this.domElement.innerHTML = ''
	}

    // Update starry
    update (config) {
        this.setConfig(Object.assign({}, this.config, config))
        this.build()
    }

    // Get current rating
    getCurrentRating () {
        return this.currentRating
    }

    // Get config object
    getConfig () {
        return this.config
    }

    // Custom event listener
    on (eventName, callbackFunction) {
        switch (eventName) {
            case 'rate':
                this.config.onRate = callbackFunction
                break

            case 'render':
                this.config.onRender = callbackFunction
                break

            case 'clear':
                this.config.onClear = callbackFunction
                break

            default:
                console.error(`Starry: Event '${eventName}' doesn't exists!`)
                return
        }
    }
}
