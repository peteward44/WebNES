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

this.Test = this.Test || {};

(function(){
	"use strict";
	
		
	var TestRenderSurface = function( canvasParent ) {

		this._buffer = new Uint32Array( SCREEN_WIDTH * SCREEN_HEIGHT );
	};
	
	
	TestRenderSurface.prototype.writeToBuffer = function( bufferIndex, insertIndex, colour ) {

		this._buffer[ insertIndex ] = 0xFF000000 | colour;
	};
	
	
	TestRenderSurface.prototype.clearBuffers = function( backgroundColour ) {

		for ( var i=0; i<this._buffer.length; ++i ) {
			this._buffer[i] = 0xFF000000 | backgroundColour;
		}
	};
		
	
	TestRenderSurface.prototype.render = function( mainboard ) {

	};
	
	
	TestRenderSurface.prototype.getRenderBufferHash = function() {
	
		var rusha = new Rusha();
		return rusha.digestFromArrayBuffer( this._buffer ).toUpperCase();
	};
	
	
	TestRenderSurface.prototype.screenshot = function() {
	};
	
	
	Test.TestRenderSurface = TestRenderSurface;
	
}());
