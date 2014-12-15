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
	
	var _open = null;
	
	
	var KeyboardRemapper = function( app ) {
		
		var that = this;
		this._app = app;
		this._contentsDiv = $( "#keyboardRemapperDialog_contents" );
		
		this._dialog = $( "#keyboardRemapperDialog" ).dialog({
			'autoOpen': false,
			'title': 'Control mapping',
			'height': 400,
			'width': 900,
			'modal': true,
			'buttons': {
				'OK': function() {
					that._onApplyClick();
				},
				'Close': function() {
					that._dialog.dialog( "close" );
				}
			},
			'close': function() {
				that._onClose();
			}
		});
		
		// TODO: Load previously used key map from local storage
		var html = '';
		
		html += this._buildHtmlForButton( JOYPAD_A, [ 90 ] );
		html += this._buildHtmlForButton( JOYPAD_B, [ 88 ] );
		html += this._buildHtmlForButton( JOYPAD_SELECT, [ 16, 160, 161, 67 ] );
		html += this._buildHtmlForButton( JOYPAD_START, [ 13, 32, 86 ] );
		html += this._buildHtmlForButton( JOYPAD_UP, [ 38, 87, 104 ] );
		html += this._buildHtmlForButton( JOYPAD_DOWN, [ 40, 83, 101, 98 ] );
		html += this._buildHtmlForButton( JOYPAD_LEFT, [ 37, 65, 100 ] );
		html += this._buildHtmlForButton( JOYPAD_RIGHT, [ 39, 68, 102 ] );
		
		this._contentsDiv[0].innerHTML = html;
	};
	
	
	KeyboardRemapper.prototype._buildHtmlForButton = function( keyEnum, keyCodeArray ) {
		
		var keys = 'Keys: ';
		for ( var i=0; i<keyCodeArray.length; ++i ) {
			keys += keyCodeArray[ i ] ) + ' ';
		}
		var onclick = 'Gui.keyboardRemapperDialog_onsetkeyclick( ' + keyEnum + ' )';
		
		return '<div><p>' + JOYPAD_ID_TO_NAME( keyEnum ) + '</p><p><button type="button" value="" onclick="' + onclick + '">' + keys + '</button></p></div>';
	};


	KeyboardRemapper.prototype.show = function() {
	
		_open = this;
		this._app.pause( true );
		this._dialog.dialog( "open" );
	};
	
	
	KeyboardRemapper.prototype._onClose = function() {
	
		this._app.pause( false );
	};
	
	
	KeyboardRemapper.prototype._onApplyClick = function() {
	
		this._dialog.dialog( "close" );
	};
	
	
	var keyboardRemapperDialog_onsetkeyclick = function( keyEnum ) {
		// set single key code for action
	};


	
	Gui.KeyboardRemapper = KeyboardRemapper;
	Gui[ 'keyboardRemapperDialog_onsetkeyclick' ] = keyboardRemapperDialog_onsetkeyclick;

}());
