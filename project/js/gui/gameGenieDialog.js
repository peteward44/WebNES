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
	
	
	var GameGenieDialog = function( app ) {
	
		var that = this;
		this._app = app;
		this._contentsDiv = $( "#gameGenieDialog_contents" );
		
		this._app.connect( 'cartLoaded', function( cart ) { that._onCartLoaded( cart ); } );

		this._dialog = $( "#gameGenieDialog" ).dialog({
			'autoOpen': false,
			'title': 'Game Genie Codes',
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


	GameGenieDialog.prototype.show = function() {
	
		_open = this;
		this._app.pause( true );
		this._dialog.dialog( "open" );
	};
	
	
	GameGenieDialog.prototype._onClose = function() {
	
		this._app.pause( false );
	};
	
	
	GameGenieDialog.prototype._onCartLoaded = function( cart ) {
	
		var html = '';
		var that = this;
		if ( cart && cart._dbData && cart._dbData['gameGenieCodes'] ) {
			var codesArray = cart._dbData['gameGenieCodes'];

			for ( var i=0; i<codesArray.length; ++i ) {
			
				var gg = codesArray[i];
				var checkboxId = "gg_cb_" + i;
				
				html += '<div id="gg_' + i + '">';
				html += "<input type='checkbox' id='" + checkboxId + "' value='" + i + "' onclick='Gui.gameGenieDialog_onclick( " + i + " );'><span>" + gg.name + "</span>";
				html += '</div>';
			}
		}
		
		this._contentsDiv[0].innerHTML = html;
	};
	
	
	
	var gameGenieDialog_onclick = function( gameCodeId ) {
	
		if ( _open ) {
			var cart = _open._app._mainboard.cart;
			var codesArray = cart._dbData['gameGenieCodes'];
			
			var jqElement = $( "#gg_cb_" + gameCodeId );
			var isChecked = jqElement[0].checked;
			var code = codesArray[ gameCodeId ];
			//console.log( "Checked " + jqElement.id + " = " + isChecked );
			var selectedSubCodeIndex = 0;
			for ( var j=0; j<code['codes'][ selectedSubCodeIndex ].length; ++j ) {
				Nes.processGameGenieCode( _open._app._mainboard, code['codes'][ selectedSubCodeIndex ][j], isChecked );
			}
		}
	};
	
	
	Gui.GameGenieDialog = GameGenieDialog;
	Gui['gameGenieDialog_onclick'] = gameGenieDialog_onclick;
	
}());
