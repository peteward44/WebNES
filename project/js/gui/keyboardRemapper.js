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
		this._waitingPress = false;
		this._waitingPressKey = '';
		this._contentsDiv = $( "#keyboardRemapperDialog_contents" );
		
		this._dialog = $( "#keyboardRemapperDialog" ).dialog({
			'autoOpen': false,
			'title': 'Control mapping',
			'height': 335,
			'width': 603,
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
		
		this._setKeyDialog = $( "#keyboardRemapperSetKeyDialog" ).dialog({
			'dialogClass': "no-close",
			'draggable': false,
			'autoOpen': false,
			'height': 200,
			'minHeight': 200,
			'width': 400,
			'minWidth': 400,
			'modal': true,
			'resizable': false,
			'buttons': {
				'Close': function() {
					that._setKeyDialog.dialog( "close" );
				}
			},
			'close': function() {
				that._waitingPress = false;
			}
		});
		
		this._setKeyDialogContents = $( "#keyboardRemapperSetKeyDialog_contents" );
		
		// TODO: Load previously used key map from local storage

		$('.keyboardMap').maphilight();
		
		$( document ).keypress( function( event ) { that._onDocumentKeypress( event ); } );
	};
	
	
	KeyboardRemapper.prototype._onDocumentKeypress = function( event ) {
		
		if ( this._waitingPress ) {
			this._setKeyDialogContents[0].innerHTML += " " + event.which;
		}
	};
	
	
	KeyboardRemapper.prototype._keyCodeToString = function( keyCode ) {
		return keyCode.toString();
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
	
	
	KeyboardRemapper.prototype._onSetKeyClick = function( keyName ) {
		
		var id = JOYPAD_NAME_TO_ID( keyName );
		this._waitingPressKey = id;
		this._waitingPress = true;
		this._setKeyDialog.dialog('option', 'title', 'Press keys to assign to ' + keyName );
		this._setKeyDialog.dialog( "open" );
	};
	
	
	var keyboardRemapperDialog_onsetkeyclick = function( keyName ) {

		_open._onSetKeyClick( keyName );
	};


	
	Gui.KeyboardRemapper = KeyboardRemapper;
	Gui[ 'keyboardRemapperDialog_onsetkeyclick' ] = keyboardRemapperDialog_onsetkeyclick;

}());
