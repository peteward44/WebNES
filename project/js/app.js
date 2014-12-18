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
var animateFunction;


(function(){
	"use strict";

	
	var App = function() {
		var that = this;
		
		this._cart = null;
		this._romLoaded = false;
		this._mainboard = null;
		this._renderSurface = null;
		this._fpsMeter = null;
		this._spriteDisplay = null;
		this._paletteDisplay = null;
		this._logWindow = null;
		this._cpuInstructionsWindow = null;	
		this._input = null;
		this._encodingTypeToSet = '';
		this._newRomWaiting = false;
		this._newRomLoaded = { name: '', binaryString: null };
		this._eventBus = new Nes.EventBus();
		
		this._frameTimeTarget = 0;
		this._lastFrameTime = 0;
		this._gameSpeed = 100; // 100% normal speed
		
		this._isPaused = 0;
		this._pauseNextFrame = false;
		this._pauseOnFrame = -1;
		
		this._options = {};
		
		window.onerror = function(e) { that._showError( e ); };
	};
	
	
	App.prototype.connect = function( name, cb ) {
		
		this._eventBus.connect( name, cb );
	};
	
	
	App.prototype.setColourEncodingType = function( encodingType ) {
		
		this._encodingTypeToSet = encodingType;
	};
	

	App.prototype._loadRomCallback = function( name, binaryString ) {

		this._newRomWaiting = true;
		this._newRomLoaded = { name: name, binaryString: binaryString };
	};
	
	
	App.prototype.start = function( options ) {
	
		this._options = options || {};
		this._options.triggerFrameRenderedEvent = this._options.triggerFrameRenderedEvent === undefined ? false : this._options.triggerFrameRenderedEvent;
		this._options.createGuiComponents = this._options.createGuiComponents === undefined ? true : this._options.createGuiComponents;
	
		var that = this;

		if ( this._options.createGuiComponents ) {
			window.addEventListener( 'contextmenu', function ( event ) { event.preventDefault(); }, false );
			
			this._fpsMeter = new FPSMeter( null, { top: '10%', left: '80%' } );
			this._fpsMeter.hide();
			Gui.hookDragDropEvents( function( name, binaryString ) { that._loadRomCallback( name, binaryString ); } );

			this._canvasParent = new Gui.CanvasParent();
			this._renderSurface = null;
			if ( WebGl.webGlSupported() ) {
				console.log( "Using WebGL for rendering..." );
				this._renderSurface = new Gui.WebGlRenderSurface( this._canvasParent );
				$('#postProcessingDiv').css( 'display', 'block' ); // Show shader drop list
			} else {
				console.log( "WebGL not supported. Using canvas for rendering..." );
				this._renderSurface = new Gui.CanvasRenderSurface( this._canvasParent );
			}
		} else {
			this._renderSurface = new Test.TestRenderSurface();
		}

		this._mainboard = new Nes.mainboard( this._renderSurface );
		this._mainboard.connect( 'reset', function() { that._onReset(); } );

		if ( this._options.createGuiComponents ) {
			this._ggDialog = new Gui.GameGenieDialog( this );
			this._controlBar = new Gui.ControlBar( this );
			this._controlBar.connect( 'romLoaded', function( name, binaryString ) { that._loadRomCallback( name, binaryString ); } );
			this._input = new Gui.Input( this._mainboard );
			this._keyboardRemapDialog = new Gui.KeyboardRemapper( this );
		}
		
		this._saveStateManager = new Gui.SaveStateManager( this, this._options.createGuiComponents );
		
		// var sde = $( ".spriteDisplay" );
		// if ( sde.length > 0 ) {
			// this._spriteDisplay = new Gui.SpriteDisplayWindow( this._mainboard, sde[0] );
		// }
		// var pde = $( ".paletteDisplay" );
		// if ( pde.length > 0 ) {
			// this._paletteDisplay = new Gui.PaletteDisplayWindow( this._mainboard, pde[0] );
		// }
		// var cpu = $( ".cpuInstructions" );
		// if ( cpu.length > 0 ) {
			// this._cpuInstructionsWindow = new Nes.CpuInstructionsWindow( this._mainboard, cpu[0] );
		// }
		// var log = $( ".logWindow" );
		// if ( log.length > 0  ) {
			// this._logWindow = new Nes.LogWindow( this._mainboard, log[0] );
		// }

		window.setFastTimeout( animateFunction );
		if ( this._options.loadUrl ) {
			this.loadRomFromUrl( this._options.loadUrl );
		}
		this._animate();
	};
	
	
	App.prototype.pause = function( isPaused ) {
	
		var changed = false;

		if ( isPaused ) {
			changed = this._isPaused === 0;
			this._isPaused = 1;
		} else {
			changed = this._isPaused === 1;
			this._isPaused = 0;
		}
	
		if ( changed ) {
			this._eventBus.invoke( 'isPausedChange', this.isPaused() );
		}
	};
	
	
	App.prototype.isPaused = function() {
		return this._isPaused > 0;
	};
	
	
	App.prototype._onReset = function() {
	
		this._calculateFrameTimeTarget();
	};
	
	
	App.prototype._calculateFrameTimeTarget = function() {
		if ( this._gameSpeed > 0 ) {
			var base = ( 100000 / this._gameSpeed ); // 100000 = 1000 * 100 ( 1000 milliseconds, multiplied by 100 as gameSpeed is a %)
			this._frameTimeTarget = ( base / COLOUR_ENCODING_REFRESHRATE );
		}
	};
	
	
	App.prototype.reset = function() {
		
		this._mainboard.reset();
	};
	
	
	App.prototype.playOneFrame = function() {
		this.pause( false );
		this._pauseNextFrame = true;
	};
		
	
	App.prototype.playUntilFrame = function( frameNum ) {
		this.pause( false );
		this._pauseOnFrame = frameNum;
	};
	
	
	App.prototype.enableSound = function( enable ) {
		this._mainboard.enableSound( enable );
	};
	
	
	App.prototype.soundEnabled = function() {
		return this._mainboard.apu.soundEnabled();
	};
	
	
	App.prototype.soundSupported = function() {
		return this._mainboard.apu.soundSupported();
	};
	
	
	App.prototype.setVolume = function( val ) {
		this._mainboard.setVolume( val );
	};
	
	
	App.prototype.setGameSpeed = function( gameSpeed ) {
		
		this._gameSpeed = gameSpeed;
		this._calculateFrameTimeTarget();
	};
	
	
	App.prototype.setTraceOption = function( traceType, checked ) {

		this._mainboard.setTraceOption( traceType, checked );
	};
	
	
	App.prototype._readyToRender = function() {
		if ( this._gameSpeed <= 0 ) {
			return true;
		}
		var now = performance ? performance.now() : Date.now(); // Date.now() in unsupported browsers
		var diff = now - this._lastFrameTime;
		if ( diff >= this._frameTimeTarget ) {
			this._lastFrameTime = now;
			return true;
		} else {
			return false;
		}
	};
	
	
	App.prototype.showFpsMeter = function( show ) {
		if ( show ) {
			this._fpsMeter.show();
		} else {
			this._fpsMeter.hide();
		}
	};
		
	
	App.prototype.startTrace = function() {
	
		this._eventBus.invoke( 'traceRunning', true );
		// if ( traceType === 'cpuInstructions' ) {
		this._mainboard.cpu.enableTrace( true );
		// }
		Nes.Trace.start();
	};
		
		
	App.prototype.stopTrace = function() {
		
		Nes.Trace.stop();
		this._mainboard.cpu.enableTrace( false );
		this._eventBus.invoke( 'traceRunning', false );
	};
			
	
	App.prototype.screenshot = function() {
	
		this._renderSurface.screenshotToFile();
	};
	
	
	App.prototype._animate = function() {
		
		var that = this;

		if ( this._newRomWaiting ) {
			this._doRomLoad( this._newRomLoaded.name, this._newRomLoaded.binaryString );
			this._newRomWaiting = false;
		}
		
		if ( this._romLoaded ) {
			this._romLoaded = false;
			this._mainboard.loadCartridge( this._cart );
			this._eventBus.invoke( 'cartLoaded', this._cart );
		}
		
		if ( this._encodingTypeToSet.length > 0 ) {
			setColourEncodingType( this._encodingTypeToSet );
			this._encodingTypeToSet = '';
		}

		if ( this._isPaused <= 0 ) {
			if ( this._readyToRender() ) {
			
				if ( this._input ) {
					this._input.poll();
				}
				
				var bgColour = this._mainboard.renderBuffer.pickColour( this._mainboard.ppu.getBackgroundPaletteIndex() );
				this._renderSurface.clearBuffers( bgColour );
				this._mainboard.renderBuffer.clearBuffer();
				
				this._mainboard.doFrame();
				this._renderSurface.render( this._mainboard );
				
				if ( this._options.triggerFrameRenderedEvent ) {
					this._eventBus.invoke( 'frameRendered', this._renderSurface, this._mainboard.ppu.frameCounter );
				}

				if ( this._fpsMeter ) {
					this._fpsMeter.tick();
				}
			}

			if ( this._pauseNextFrame ) {
				this._pauseNextFrame = false;
				this.pause( true );
			}
			
			if ( this._pauseOnFrame >= 0 && this._pauseOnFrame === this._mainboard.ppu.frameCounter ) {
				this._pauseOnFrame = -1;
				this.pause( true );
			}
		
			this._saveStateManager.onFrame();

			// Note: Use setImmediate polyfill instead of homemade message implementation, as it doesn't work on firefox
			setImmediate( animateFunction );
			//window.invokeFastTimeout();
		} else {
			setTimeout( animateFunction, 300 );
		}
	};
	
	
	App.prototype._doRomLoad = function( name, binaryString ) {
		var that = this;
		this._cart = new Nes.cartridge( this._mainboard );
		this._cart.loadRom( name, binaryString, function( err ) {
			if ( !err ) {
				that._romLoaded = true;
			} else {
				that._showError( err );
			}
		} );
	};
	
	
	App.prototype.loadRomFromUrl = function( url ) {
		
		var that = this;
		Nes.loadRomFromUrl( url, function( err, name, binary ) {
			if ( !err ) {
				that._loadRomCallback( name, binary );
			} else {
				that._showError( err );
			}
		} );
	};
	
	
	App.prototype._showError = function( err ) {
	
		console.log( err );
		var errorType = typeof err;
		var msg = '';
		if ( errorType === 'string' ) {
			msg = err;
		} else if ( errorType === 'object' ) {
			if ( err.message ) {
				msg = err.message;
			} else {
				msg = err.toString();
			}
		} else {
			msg = err.toString();
		}
		this._eventBus.invoke( 'romLoadFailure', msg );
	};
	
	
	App.prototype.gameGenieCode = function( code ) {
	
		Nes.processGameGenieCode( this._mainboard, code, true );
	};
	
	
	App.prototype.loadShaderFromUrl = function( url ) {
	
		if ( this._renderSurface.loadShaderFromUrl ) {
			this._renderSurface.loadShaderFromUrl( url );
		}
	};

	
	Gui.App = new App();

}());

	
animateFunction = function() {
	Gui.App._animate();
};
