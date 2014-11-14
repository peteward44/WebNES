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
	
	
	var LoadStateDialog = function( app ) {
	
		var that = this;
		this._app = app;
		this._contentsDiv = $( "#loadStateDialog_contents" );

		this._dialog = $( "#loadStateDialog" ).dialog({
			'autoOpen': false,
			'height': 400,
			'width': 900,
			'modal': true,
			'buttons': {
				'Close': function() {
					that._dialog.dialog( "close" );
				}
			},
			'close': function() {
				that._onClose();
			}
		});
	};
	
	
	LoadStateDialog.prototype._onClose = function() {
	
		this._app.pause( false );
	};
	
	
	LoadStateDialog.prototype.show = function( cartName, meta ) {
	
		_open = this;
	
		function formatDate( date ) {
			return ( new Date( date ) ).toLocaleString();
		};
	
		// load all images saved for the currently loaded game
		var html = '';
		var keyNames = Object.keys( meta.slots );
		
		// sort so most recent is first
		keyNames = keyNames.sort( function( lhs, rhs ) {
			var slhs = meta.slots[ lhs ];
			var srhs = meta.slots[ rhs ];
			return srhs.date - slhs.date;
		} );
		
		for ( var keyIndex=0; keyIndex<keyNames.length; ++keyIndex ) {
			var slotName = keyNames[ keyIndex ];
			var slot = meta.slots[ slotName ];
			html += "<div class='loadSaveDiv'>";
			html += "<button type='button' onclick='Gui.loadSaveDialog_onclick( \"" + slotName + "\" );'>";
			if ( slot.screen ) {
				html += "<img src='" + slot.screen + "' width='" + SCREEN_WIDTH + "' height='" + SCREEN_HEIGHT + "'/><br/>";
			//	html += "<img src='" + slot.screen + "'/><br/>";
			}
			html += "<span>" + slotName + "</span><br/>";
			html += "<span>" + formatDate( slot.date ) + "</span>";
			html += "</button>";
			html += "</div>";
		}
		this._contentsDiv[0].innerHTML = html;
		this._app.pause( true );
		this._dialog.dialog( "open" );
	};
	
	
	var loadSaveDialog_onclick = function( saveName ) {
	
		if ( _open ) {
			_open._app._saveStateManager.loadState( saveName );
			_open._dialog.dialog( "close" );
		}
	};
	
	
	Gui.LoadStateDialog = LoadStateDialog;
	Gui['loadSaveDialog_onclick'] = loadSaveDialog_onclick;
	
}());
