/*
This file is part of WebNES.

WebNES is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

WebNES is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with WebNES.  If not, see <http://www.gnu.org/licenses/>.
*/

(function() {
	"use strict";
	
	// Array shuffling prototype, implemented using Fisher-Yates Shuffle http://bost.ocks.org/mike/shuffle/
	if (!Array.prototype.shuffle){
		Array.prototype.shuffle = function( randomFunctor ){
			randomFunctor = randomFunctor || function( range ) { return Math.floor( Math.random() * range ); };

			var counter = this.length, temp, index;

			// While there are elements in the array
			while (counter > 0) {
				// Pick a random index
				index = randomFunctor( counter );
				counter--;

				// And swap the last element with it
				temp = this[counter];
				this[counter] = this[index];
				this[index] = temp;
			}
		};
	}
	
	if (!Array.prototype.map){
		Array.prototype.map = function(fun /*, thisArg */) {
			if (this === void 0 || this === null) {
				throw new TypeError();
			}

			var t = Object(this);
			var len = t.length >>> 0;
			if (typeof fun !== "function") {
				throw new TypeError();
			}

			var res = new Array(len);
			var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
			for (var i = 0; i < len; i++)
			{
				// NOTE: Absolute correctness would demand Object.defineProperty
				//       be used.  But this method is fairly new, and failure is
				//       possible only if Object.prototype or Array.prototype
				//       has a property |i| (very unlikely), so use a less-correct
				//       but more portable alternative.
				if (i in t) {
					res[i] = fun.call(thisArg, t[i], i, t);
				}
			}

			return res;
		};
	}

	if (!Array.prototype.some) {
		Array.prototype.some = function(fun /*, thisArg */) {
			if (this === void 0 || this === null) {
				throw new TypeError();
			}

			var t = Object(this);
			var len = t.length >>> 0;
			if (typeof fun !== 'function') {
				throw new TypeError();
			}

			var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
			for (var i = 0; i < len; i++)
			{
				if (i in t && fun.call(thisArg, t[i], i, t)) {
					return true;
				}
			}

			return false;
		};
	}


	if (!Array.prototype.forEach) {
		Array.prototype.forEach = function(fun /*, thisArg */) {
			if (this === void 0 || this === null) {
				throw new TypeError();
			}

			var t = Object(this);
			var len = t.length >>> 0;
			if (typeof fun !== "function") {
				throw new TypeError();
			}

			var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
			for (var i = 0; i < len; i++) {
				if (i in t) {
					fun.call(thisArg, t[i], i, t);
				}
			}
		};
	}


	if (!Array.prototype.indexOf) {
		Array.prototype.indexOf = function (searchElement, fromIndex) {
			if ( this === undefined || this === null ) {
				throw new TypeError( '"this" is null or not defined' );
			}

			var length = this.length >>> 0; // Hack to convert object.length to a UInt32

			fromIndex = +fromIndex || 0;

			if (Math.abs(fromIndex) === Infinity) {
				fromIndex = 0;
			}

			if (fromIndex < 0) {
				fromIndex += length;
				if (fromIndex < 0) {
					fromIndex = 0;
				}
			}

			for (;fromIndex < length; fromIndex++) {
				if (this[fromIndex] === searchElement) {
					return fromIndex;
				}
			}

			return -1;
		};
	}

	if (!Array.prototype.filter) {
		Array.prototype.filter = function(fun /*, thisArg */) {
			if (this === void 0 || this === null) {
				throw new TypeError();
			}

			var t = Object(this);
			var len = t.length >>> 0;
			if (typeof fun != "function") {
				throw new TypeError();
			}

			var res = [];
			var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
			for (var i = 0; i < len; i++) {
				if (i in t) {
					var val = t[i];
					// NOTE: Technically this should Object.defineProperty at
					//       the next index, as push can be affected by
					//       properties on Object.prototype and Array.prototype.
					//       But that method's new, and collisions should be
					//       rare, so use the more-compatible alternative.
					if (fun.call(thisArg, val, i, t)) {
						res.push(val);
					}
				}
			}

			return res;
		};
	}

	// move an item in an array to another location in the array
	// http://stackoverflow.com/questions/5306680/move-an-array-element-from-one-array-position-to-another
	if (!Array.prototype.move) {
		Array.prototype.move = function(from, to) {
			this.splice(to, 0, this.splice(from, 1)[0]);
		};
	}

	// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/every
	if (!Array.prototype.every)	{
		Array.prototype.every = function(fun /*, thisArg */){
			if (this === void 0 || this === null) {
				throw new TypeError();
			}

			var t = Object(this);
			var len = t.length >>> 0;
			if (typeof fun !== 'function') {
				throw new TypeError();
			}

			var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
			for (var i = 0; i < len; i++)
			{
				if (i in t && !fun.call(thisArg, t[i], i, t)) {
					return false;
				}
			}

			return true;
		};
	}
	
	// Tests if an object is an array
	if (!Array.isArray) {
		Array.isArray = function(obj) {
			return Object.prototype.toString.call(obj) === '[object Array]';
		};
	}

}());