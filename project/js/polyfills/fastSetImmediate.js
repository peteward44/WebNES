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


// From: http://dbaron.org/log/20100309-faster-timeouts

// Only add setZeroTimeout to the window object, and hide everything
// else in a closure.
(function() {
	var timeout = null;
	var messageName = "fi";

	// Like setTimeout, but only takes a function argument.  There's
	// no time argument (always zero) and no arguments (you have to
	// use a closure).
	function setFastTimeout(fn) {
		timeout = fn;
	};
	
	function invokeFastTimeout() {
		window.postMessage(messageName, "*");
	};

	function handleMessage(event) {
		if ( event.data === messageName ) {
			event.stopPropagation();
			timeout();
		}
	}

	window.addEventListener( "message", handleMessage, false, false );

	// Add the one thing we want added to the window object.
	window.setFastTimeout = setFastTimeout;
	window.invokeFastTimeout = invokeFastTimeout;
})();