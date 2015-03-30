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

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}


window.onload = function() {

	// This allows a list box to be on the page to load a given nes file local to the site
	var sel = $('#loadGameComboBox');
	if ( sel ) {
		sel['change'](function(){
			var value = $(this)['val']();
			if ( value.length > 0 ) {
				console.log( "Loading ROM " + value );
				Gui.App.loadRomFromUrl( value );
			}
		});
	}
	
	// And this is the select box for selecting a WebGL shader
	sel = $('#shaderListComboBox');
	if ( sel ) {
		sel['change'](function(){
			var value = $(this)['val']();
			if ( value.length > 0 ) {
				console.log( "Loading shader " + value );
				Gui.App.loadShaderFromUrl( value );
			} else {
				Gui.App.loadShaderFromUrl( null );
			}
		});
	}
	
	var requestedGameToLoad = getParameterByName( 'gameUrl' );
	Gui.App.start( { createGuiComponents: true, loadUrl: requestedGameToLoad } );
};
