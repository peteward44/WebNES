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

this.Gui = this.Gui || {};

(function(){
	"use strict";
	
	
	var CanvasParent = function( renderSurface ) {
	
		var that = this;

		this._eventBus = new Nes.EventBus();
		this._parent = $( "#content" );
		this._element = $( "#canvasWrapper" );
		
		this._canvasElement = document.createElement('canvas');
		this._element[0].appendChild( this._canvasElement );
		
		this._setSize();
		
		$(window).resize(function(){
			that._setSize();
			that._setPosition();
		});
		this._setPosition();
	};
	
	
	CanvasParent.prototype.connect = function( name, cb ) {
		
		this._eventBus.connect( name, cb );
	};
	
	
	CanvasParent.prototype.getCanvasElement = function() {
		return this._canvasElement;
	};
	
	
	CanvasParent.prototype._setSize = function() {
	
		var parentWidth = this._parent.width();
		var parentHeight = this._parent.height();
		
		var resizeType = 'keepAspectRatio';
		
		if ( resizeType === 'keepAspectRatio' ) {
		
			var aspectRatio = SCREEN_WIDTH / SCREEN_HEIGHT;
			var newWidth = aspectRatio * parentHeight;
		
			this._canvasElement.width = Math.floor( newWidth );
			this._canvasElement.height = parentHeight;

			this._eventBus.invoke( 'resize' );
		}
	};
	
	
	CanvasParent.prototype._setPosition = function() {
		this._element.position( { 'of': this._parent, 'my': "center center", 'at': "center center" } );
	};
	
	
	Gui.CanvasParent = CanvasParent;
	
}());
