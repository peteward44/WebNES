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
	
	
	
	var hookDragDropEvents = function( fileDropCallback ) {

		if (typeof window.FileReader !== 'function') {
			//alert("The file API isn't supported on this browser yet.");
			return;
		}

		function handleFileSelect(evt) {
			evt.stopPropagation();
			evt.preventDefault();
			var files = evt.dataTransfer.files; // FileList object.

			if ( files.length > 0 )
			{
				var fr = new FileReader();
				fr.onload = function() {
					if ( fileDropCallback ) {
						fileDropCallback( files[0].name, new Uint8Array( fr.result ) );
					}
				};
				fr.readAsArrayBuffer( files[0] );
			}
		}

		function handleDragOver(evt) {
			evt.stopPropagation();
			evt.preventDefault();
			evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
		}

		// Setup the dnd listeners.
		var dropZone = document.getElementById('body');
		dropZone.addEventListener('dragover', handleDragOver, false);
		dropZone.addEventListener('drop', handleFileSelect, false);
	};
	
	Gui.hookDragDropEvents = hookDragDropEvents;
	
}());
