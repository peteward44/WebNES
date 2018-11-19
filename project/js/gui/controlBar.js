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

	
	var ControlBar = function( app ) {
	
		var that = this;
		this._debugEnabled = false;
		this._isLimitOn = true;
		this._traceRunning = false;
		this._isPaused = false;
		this._encodingIgnoreNextClick = false;
		this._app = app;
		this._eventBus = new Nes.EventBus();
		
		this._app.connect( 'cartLoaded', function( cart ) { that._onCartLoaded( cart ); } );
		this._app._mainboard.connect( 'soundEnabled', function( enabled, supported ) { that._onSoundEnabled( enabled, supported ); } );
		this._app.connect( 'traceRunning', function( on ) { that._onTraceRunning( on ); } );
		this._app.connect( 'frameLimit', function( on ) { that._onFrameLimitSet( on ); } );
		this._app.connect( 'isPausedChange', function( on ) { that._onPauseChange( on ); } );
		this._app.connect( 'romLoadFailure', function( reason ) { that._onRomLoadFailure( reason ); } );
		
		this._element = $( "#controlBar" );
		
		this._debugBar = $( "#debugBar" );
		this._debugBar.hide();
		
		this._buttons = [];
		
		// primary buttons
		this._addButton( "controlBar_loadRomButton", { primary: { label: "Open ROM", icon: "ui-icon-folder-open" }, click: function() { that._loadRomButtonClick(); } } );
		this._addButton( "controlBar_resetButton", { enabledWhenRomIsLoaded: true, primary: { label: "Reset", icon: "ui-icon-refresh" }, click: function() { that._onResetButtonClick(); } } );
		this._playButton = this._addButton( "controlBar_playButton", { primary: { label: "Pause", icon: "ui-icon-pause" }, toggle: { label: "Play", icon: 'ui-icon-play' }, click: function() { that._onPlayButtonClick(); } } );
		this._gameGenieButton = this._addButton( "controlBar_gameGenieButton", { enabledWhenRomIsLoaded: true, primary: { label: "Game Genie", icon: "ui-icon-star" }, click: function() { that._onGameGenieButtonClick(); } } );
		this._addButton( "controlBar_quickSaveButton", { enabledWhenRomIsLoaded: true, primary: { label: "Quick save", icon: "ui-icon-disk" }, click: function() { that._onSaveButtonClick(); } } );
		this._addButton( "controlBar_quickLoadButton", { enabledWhenRomIsLoaded: true, primary: { label: "Quick load", icon: "ui-icon-folder-collapsed" }, click: function() { that._onLoadButtonClick(); } } );
		this._addButton( "controlBar_screenshotButton", { enabledWhenRomIsLoaded: true, primary: { label: "Screenshot", icon: "ui-icon-image" }, click: function() { that._onScreenshotButtonClick(); } } );
		this._debugButton = this._addButton( "controlBar_debugButton", { primary: { label: "Debug panel", icon: "ui-icon-wrench" }, click: function() { that._onDebugButtonClick(); } } );
		this._keyboardRemapperButton = this._addButton( "controlBar_keyboardRemap", { primary: { label: "Remap controls", icon: "ui-icon-calculator" }, click: function() { that._onKeyboardRemapButtonClick(); } } );
		
		this._soundButton = this._addButton( "controlBar_soundButton", { primary: { label: "Volume", icon: "ui-icon-volume-on" }, toggle: { label: "Volume", icon: 'ui-icon-volume-off' }, click: function() { that._onSoundButtonClick(); return false; } } );
		this._soundSlider = new Gui.ControlBarSlider( "controlBar_volumeSlider", this._soundButton, {
				minValue: 0,
				maxValue: 100,
				defaultValueIndex: 100,
				change: function( val ) {
					that._onVolumeSliderChange( val );
				}
			} );
		this._errorDisplayButton = this._addButton( "controlBar_errorDisplay", { primary: { label: "Alerts", icon: "ui-icon-alert" }, click: function() { that._errorDisplayButtonClick(); } } );
		this._errorDisplayMessage = new Gui.ControlBarMessage( "controlBar_alertMessage", this._errorDisplayButton );
		
		// debug buttons
		this._addButton( "debugControlBar_playOneFrameButton", { primary: { label: "Play one frame", icon: "ui-icon-seek-next" }, click: function() { that._onPlayOneFrameButtonClick(); } } );
		this._gameSpeedButton = this._addButton( "debugControlBar_gameSpeedButton", { primary: { label: "Game Speed", icon: "ui-icon-transferthick-e-w" }, click: function() { that._onGameSpeedClick(); return false; } } );
		this._addButton( "debugControlBar_getFrameHashButton", { primary: { label: "Display frame information", icon: "ui-icon-locked" }, click: function() { that._getFrameHashButtonClick(); } } );
		this._traceButton = this._addButton( "debugControlBar_traceButton", { primary: { label: "Start Trace", icon: "ui-icon-arrowthickstop-1-s" }, toggle: { label: "Stop Trace", icon: "ui-icon-stop" }, click: function() { that._startTrace(); } } );

		// NTSC / PAL encoding selection
		this._encodingSelection = $( "#debugControlBar_encoding" ).buttonset();
		this._encodingNTSC = $( "#debugControlBar_encodingNTSC" ).click( function() { return that._encodingClick( "NTSC" ); } );
		this._encodingPAL = $( "#debugControlBar_encodingPAL" ).click( function() { return that._encodingClick( "PAL" ); } );
		
		// trace menu
		this._selectTraceButton = this._addButton( "debugControlBar_selectTraceButton", { primary: { label: "Trace Options..", icon: "ui-icon-triangle-1-n" }, click: function() { that._traceMenu.toggleShow(); return false; } } );
		this._traceMenu = new Gui.ControlBarMenu( "debugControlBar_traceMenu", this._selectTraceButton,
				{ checkBoxes: [
					{ parentId: 'controlBar_cpuTraceParent', 				checkBoxSelector: $( "#controlBar_cpuTraceButton" ), 				change: function( event ) { that._onTraceOption( Nes.trace_cpu, event ); } },
					{ parentId: 'controlBar_cpuInstructionsTraceParent', 	checkBoxSelector: $( "#controlBar_cpuInstructionsTraceButton" ), 	change: function( event ) { that._onTraceOption( Nes.trace_cpuInstructions, event ); } },
					{ parentId: 'controlBar_ppuTraceParent', 				checkBoxSelector: $( "#controlBar_ppuTraceButton" ), 				change: function( event ) { that._onTraceOption( Nes.trace_ppu, event ); } },
					{ parentId: 'controlBar_mapperTraceParent', 			checkBoxSelector: $( "#controlBar_mapperTraceButton" ), 			change: function( event ) { that._onTraceOption( Nes.trace_mapper, event ); } },
					{ parentId: 'controlBar_allTraceParent', 				checkBoxSelector: $( "#controlBar_allTraceButton" ), 				change: function( event ) { that._onTraceOption( Nes.trace_all, event ); } }
				] }
			);
			
		// game speed slider
		this._gameSpeedSlider = new Gui.ControlBarSlider( "debugControlBar_gameSpeedSlider", this._gameSpeedButton, {
				values: [
					{ text: '25% Speed', value: 25 },
					{ text: '50% Speed', value: 50 },
					{ text: '75% Speed', value: 75 },
					{ text: '100% Speed', value: 100 },
					{ text: '125% Speed', value: 125 },
					{ text: '150% Speed', value: 150 },
					{ text: '175% Speed', value: 175 },
					{ text: '200% Speed', value: 200 },
					{ text: 'Unlimited', value: -1 }
				],
				defaultValueIndex: 3,
				change: function( speedVal ) {
					that._onGameSpeedSliderChange( speedVal );
				}
			} );
		
		this._element.css( 'visibility', 'visible' );
		$(window).resize(function(){
			that._setPosition();
		});
		this._setPosition();
	};
	
	
	ControlBar.prototype._onKeyboardRemapButtonClick = function() {
		
		this._app._keyboardRemapDialog.show();
	};
	
	
	ControlBar.prototype._errorDisplayButtonClick = function() {
		this._errorDisplayButton.alert( false );
	};
	
	
	ControlBar.prototype._onRomLoadFailure = function( reason ) {

		this._errorDisplayMessage.setText( reason );
		this._errorDisplayMessage.show();
	};
	
	
	ControlBar.prototype._onTraceOption = function( traceType, event ) {

		this._app.setTraceOption( traceType, event.currentTarget.checked );
	};
	
	
	ControlBar.prototype._onGameSpeedSliderChange = function( speedVal ) {
		
		this._app.setGameSpeed( speedVal );
	};
	
	
	ControlBar.prototype._onVolumeSliderChange = function( val ) {
		
		var muted = val === 0;
		if ( this._app.soundSupported() ) {
			this._soundButton.toggleIcon( muted );
			this._app.enableSound( !muted );
			this._app.setVolume( val );
		}
	};
	
	
	ControlBar.prototype._addButton = function( jqId, options ) {
	
		var but = new Gui.ControlBarButton( this._app._mainboard, jqId, options );
		this._buttons.push( but );
		return but;
	};
	
	
	ControlBar.prototype.connect = function( name, cb ) {

		this._eventBus.connect( name, cb );
	};
	
	
	ControlBar.prototype._encodingClick = function( encodingType ) {
		if ( this._encodingIgnoreNextClick ) {
			this._encodingIgnoreNextClick = false;
			return true;
		}
		this._app.setColourEncodingType( encodingType );
	//	this._onEncodingChanged( encodingType );
		return true;
	};
		
	
	ControlBar.prototype._onEncodingChanged = function( encodingType ) {
	
		this._encodingIgnoreNextClick = true;
		if ( encodingType === "PAL" ) {
			this._encodingPAL.click();
		} else {
			this._encodingNTSC.click();
		}
	};
	
	
	ControlBar.prototype._onPauseChange = function( isPaused ) {

		this._playButton.toggleIcon( isPaused );
	};
	
	
	ControlBar.prototype._onTraceRunning = function( on ) {
		this._traceRunning = on;
		this._traceButton.highlight( this._traceRunning );
		this._traceButton.toggleIcon( this._traceRunning );
	};
	
	
	ControlBar.prototype._startTrace = function() {
		
		if ( !this._traceRunning ) {
			this._app.startTrace();
		} else {
			this._app.stopTrace();
		}
	};
	
	
	ControlBar.prototype._onScreenshotButtonClick = function() {
		
		this._app.screenshot();
	};
	
	
	ControlBar.prototype._onCartLoaded = function( cart ) {
	
		this._gameGenieButton.highlight( cart.areGameGenieCodesAvailable() );
		this._onEncodingChanged( cart._colourEncodingType );
		// if ( !this._element.is(":visible") ) {
			// this._element.show( "slide", { direction: "down" }, 1000 );
		// }
	};
	
	
	ControlBar.prototype._onSoundEnabled = function( enabled, supported ) {

		if ( supported ) {
			this._soundButton.enable( true );
			this._soundButton.toggleIcon( !enabled );
		} else {
			this._soundButton.enable( false );
			this._soundButton.toggleIcon( true );
		}
	};
	
	
	ControlBar.prototype._onSaveButtonClick = function() {
	
		this._app._saveStateManager.quickSaveState();
	};
	
	
	ControlBar.prototype._onLoadButtonClick = function() {
	
		//this._app._saveStateManager.quickLoadState();
		this._app._saveStateManager.showLoadStateDialog();
	};
	
	
	ControlBar.prototype._getFrameHashButtonClick = function() {

		console.log( "{ frame: " + this._app._mainboard.ppu.frameCounter + ', expectedHash: "' + this._app._renderSurface.getRenderBufferHash() + '" }' );
	};
	
	
	ControlBar.prototype._onDebugButtonClick = function() {
		
		this._debugEnabled = !this._debugEnabled;
		this._debugButton.highlight( this._debugEnabled );
		if ( this._debugEnabled ) {
			this._debugBar.show();
			this._app.showFpsMeter( true );
		} else {
			this._debugBar.hide(); 
			this._app.showFpsMeter( false );
		}
	};
	
	
	ControlBar.prototype._onPlayOneFrameButtonClick = function() {
	
		this._app.playOneFrame();
	};
	
	
	ControlBar.prototype._onResetButtonClick = function() {
	
		this._app.reset();
	};
	

	ControlBar.prototype._loadRomButtonClick = function() {
	
		var that = this;
	
		var handleFileSelect = function( evt ) {

			var file = evt.target.files[0];
			var reader = new FileReader();

			// If we use onloadend, we need to check the readyState.
			reader.onloadend = function( loadEvent ) {
				if ( loadEvent.target.readyState === FileReader.DONE ) {
					that._eventBus.invoke( 'romLoaded', file.name, new Uint8Array( loadEvent.target.result ) );
				}
			};

			reader.readAsArrayBuffer( file );
		};

		var input = $( document.createElement( 'input' ) );
		input.attr( "type", "file" );
		input.on( 'change', handleFileSelect );
		input.trigger( 'click' ); // open dialog
	};
	
	
	ControlBar.prototype._onGameSpeedClick = function() {

		if ( this._gameSpeedSlider.isVisible() ) {
			this._gameSpeedSlider.hide();
		} else {
			this._gameSpeedSlider.show();
		}
	};
	
	
	ControlBar.prototype._onFrameLimitSet = function( limitOn ) {

		this._isLimitOn = limitOn;
	//	this._frameLimitButton.toggleIcon( !this._isLimitOn );
	};
	
	
	ControlBar.prototype._onPlayButtonClick = function() {
	
		this._isPaused = !this._isPaused;
		this._app.pause( this._isPaused );
	};
	
	
	ControlBar.prototype._onSoundButtonClick = function() {

		if ( this._soundSlider.isVisible() ) {
			this._soundSlider.hide();
		} else {
			this._soundSlider.show();
		}
	};
	
	
	ControlBar.prototype._onGameGenieButtonClick = function() {
	
		if ( this._app._mainboard.cart ) {
			this._app._ggDialog.show();
		}
	};
	
	
	ControlBar.prototype._setPosition = function() {
		this._element.position( { 'of': $( window ), 'my': "bottom", 'at': "bottom" } );
	};
	
	
	Gui.ControlBar = ControlBar;
	
}());
