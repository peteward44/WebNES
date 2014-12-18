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
	
	var gamepad_consts = {
		top1:	0, // Top button 1 ("A" on the Xbox 360 controller; cross on the PS3 controller)
		top2:	1, // Top button 2 ("B" on the Xbox 360 controller; circle on the PS3 controller)
		bottom3: 2, // gp_face3	Top button 3 ("X" on the Xbox 360 controller; square on the PS3 controller)
		bottom4: 3, // gp_face4	Top button 4 ("Y" on the Xbox 360 controller; triangle on the PS3 controller)
		shoulderLeft:	4, // gp_shoulderlb	Left shoulder button (digital)
		shoulderRight: 5, // gp_shoulderrb	Right shoulder button (digital)
		shoulderLeftTrigger:	6, // gp_shoulderl	Left shoulder trigger (analogue)
		shoulderRightTrigger:	7, // gp_shoulderr	Right shoulder trigger (analogue)
		select: 8, // gp_select	The select button on PlayStation 3 and the back button on Xbox 360
		start: 9, // gp_start	The start button
		leftStickButton: 10, // gp_stickl	The left stick pressed (as a button)
		rightStickButton: 11, // gp_stickr	The right stick pressed (as a button)
		dpadUp: 12, // gp_padu	D-pad up (digital)
		dpadDown:	13, // gp_padd	D-pad down (digital)
		dpadLeft:	14, // gp_padl	D-pad left (digital)
		dpadRight: 15, // gp_padr	D-pad right (digital)
		leftStickHoriz: 0, // gp_axislh	Left stick horizontal axis (analogue)
		leftStickVert: 1, // gp_axislv	Left stick vertical axis (analogue)
		rightStickHoriz: 2, // gp_axisrh	Right stick horizontal axis (analogue)
		rightStickVert: 3 // gp_axisrv	Right stick vertical axis (analogue)
	};
	
	
	
	var GamePad = function( rawPad ) {
		
		this._axisThreshold = 0.5;
		this._buttonStates = new Int32Array( rawPad['buttons'].length );
		this._axesStates = new Int32Array( rawPad['axes'].length );
	};
	
	
	GamePad.prototype.getButtonCount = function() {
		return this._buttonStates.length;
	};
	
	
	// Returns 0 for not changed, 1 for pressed, 2 for not pressed
	GamePad.prototype.getButtonState = function( rawPad, buttonIndex ) {
		
		var isPressed = rawPad['buttons'][ buttonIndex ]['pressed'];
		var intState = ( isPressed ? 1 : 0 );
		if ( this._buttonStates[ buttonIndex ] !== intState ) {
			this._buttonStates[ buttonIndex ] = intState;
			return isPressed ? 1 : 2;
		}
		return 0;
	};
	
	
	GamePad.prototype.getAxisCount = function() {
		return this._axesStates.length;
	};
	
	
	// Returns 0 for not changed, 1 for pressed, 2 for not pressed
	GamePad.prototype.getAxisState = function( rawPad, axisIndex ) {
		
		var isPressed = rawPad['axes'][ axisIndex ] >= this._axisThreshold || rawPad['axes'][ axisIndex ] <= -this._axisThreshold;
		var intState = ( isPressed ? 1 : 0 );
		if ( this._axesStates[ axisIndex ] !== intState ) {
			this._axesStates[ axisIndex ] = intState;
			return isPressed ? 1 : 2;
		}
		return 0;
	};	
	
	
	///////////////////////////////////////////////////////////////////////////////////////////////
	
	
	var Input = function( mainboard ) {
	
		this._mainboard = mainboard;
		this._pads = [];
		
		this._loadKeyBindingsFromLocalStorage();

		// these values are guessed - need testing
		this._gamepadButtonMap = {
			'UP': [ gamepad_consts.dpadUp ],
			'DOWN': [ gamepad_consts.dpadDown ],
			'LEFT': [ gamepad_consts.dpadLeft ],
			'RIGHT': [ gamepad_consts.dpadRight ],
			'A': [ gamepad_consts.top1, gamepad_consts.top2, gamepad_consts.shoulderLeft ],
			'B': [ gamepad_consts.bottom3, gamepad_consts.bottom4, gamepad_consts.shoulderRight ],
			'SELECT': [ gamepad_consts.select ],
			'START': [ gamepad_consts.start ]
		};
		
		this._gamepadAxisMap = {
			'UP': [ { axis: gamepad_consts.leftStickVert, type: 'positive' }, { axis: gamepad_consts.rightStickVert, type: 'positive' } ],
			'DOWN': [ { axis: gamepad_consts.leftStickVert, type: 'negative' }, { axis: gamepad_consts.rightStickVert, type: 'negative' } ],
			'LEFT': [ { axis: gamepad_consts.leftStickHoriz, type: 'negative' }, { axis: gamepad_consts.rightStickHoriz, type: 'negative' } ],
			'RIGHT': [ { axis: gamepad_consts.leftStickHoriz, type: 'positive' }, { axis: gamepad_consts.rightStickHoriz, type: 'positive' } ],
			'A': [ { axis: gamepad_consts.shoulderLeftTrigger, type: 'positive' } ],
			'B': [ { axis: gamepad_consts.shoulderRightTrigger, type: 'positive' } ]
		};
		
		var that = this;
		
		// keyboard support
		window.addEventListener( 'keydown', function( event ) { if ( that._doKeyboardButtonPress( Number( event.keyCode ), true ) ) { event.preventDefault(); } }, false );
		window.addEventListener( 'keyup', function( event ) { if ( that._doKeyboardButtonPress( Number( event.keyCode ), false ) ) { event.preventDefault(); } }, false );
		
		this._gamepadsSupported = navigator['getGamepads'] !== undefined;
		
		if ( this._gamepadsSupported ) {
			this._populateGamepads();
			
			$( window ).on( "gamepadconnected", function() { that._populateGamepads(); } );
			$( window ).on( "gamepaddisconnected", function() { that._populateGamepads(); } );
		}
	};
	
	
	Input.prototype._populateGamepads = function() {
	
		this._pads.length = 0;
		if ( this._gamepadsSupported ) {
			var gamepads = navigator['getGamepads']();
			for (var i = 0; i < gamepads.length; ++i) {
				if ( gamepads[i] ) {
					var pad = gamepads[i];
					this._pads.push( new GamePad( pad ) );
				}
			}
		}
	};
	
	
	Input.prototype.poll = function() {
	
		if ( this._gamepadsSupported ) {
			this._pollGamepads();
		}
	};
	
	
	Input.prototype._pollGamepads = function() {
	
		var pads = navigator['getGamepads']();
		for ( var i=0; i<this._pads.length; ++i ) {
			var pad = this._pads[i];
			
			// do buttons
			for ( var buttonIndex=0; buttonIndex<pad.getButtonCount(); ++buttonIndex ) {
				var buttonState = pad.getButtonState( pads[ i ], buttonIndex );
				if ( buttonState > 0 ) {
					//console.log( "Pressed button " + buttonIndex );
					this._doGamepadButton( i, buttonIndex, buttonState === 1 );
				}
			}
			
			// do axes
			for ( var axisIndex=0; axisIndex<pad.getAxisCount(); ++axisIndex ) {
				var axisState = pad.getAxisState( pads[ i ], axisIndex );
				if ( axisState > 0 ) {
//					this._doGamepadAxis( i, axisIndex, axisState === 1, pads[ i ].axes[ axisIndex ] > 0 ? 'positive' : 'negative' );
				}
			}
		}
	};
	
	
	Input.prototype._doGamepadAxis = function( gamepadIndex, axisIndex, isPressed, axisType ) {
	
		var joypad = this._mainboard.inputdevicebus.getJoypad( gamepadIndex );

		if ( joypad ) {
			for ( var buttonName in this._gamepadButtonMap ) {
				if ( this._gamepadButtonMap.hasOwnProperty( buttonName ) ) {

					var buttonArray = this._gamepadButtonMap[ buttonName ];
					for ( var i=0; i<buttonArray.length; ++i ) {
						
						var but = buttonArray[ i ];
						if ( but.axis === axisIndex && but.type === axisType ) {
							joypad.pressButton( Number( JOYPAD_NAME_TO_ID( buttonName ) ), isPressed );
						}
					}
				}
			}
		}
	};
	
	
	Input.prototype._doGamepadButton = function( gamepadIndex, buttonIndex, isPressed ) {
	
		var joypad = this._mainboard.inputdevicebus.getJoypad( gamepadIndex );

		if ( joypad ) {
			for ( var buttonName in this._gamepadButtonMap ) {
				if ( this._gamepadButtonMap.hasOwnProperty( buttonName ) ) {
					var buttonArray = this._gamepadButtonMap[ buttonName ];
					for ( var i=0; i<buttonArray.length; ++i ) {
						if ( buttonIndex === buttonArray[ i ] ) {
							joypad.pressButton( Number( JOYPAD_NAME_TO_ID( buttonName ) ), isPressed );
						}
					}
				}
			}
		}
	};
	
	
	Input.prototype._doKeyboardButtonPress = function( keyCode, pressed ) {
	
		var len = Math.min( 2, this._playerKeyboardMaps.length );
		var wasPressed = false;
		
		for ( var playerIndex = 0; playerIndex < len; ++playerIndex ) {
		
			var joypad = this._mainboard.inputdevicebus.getJoypad( playerIndex );
			var map = this._playerKeyboardMaps[ playerIndex ];
			
			if ( map && joypad ) {
				for ( var buttonIndex=0; buttonIndex<map.length; ++buttonIndex ) {	
					var buttonArray = map[ buttonIndex ];
					for ( var i=0; i<buttonArray.length; ++i ) {
						if ( buttonArray[ i ] === keyCode ) {
							joypad.pressButton( buttonIndex, pressed );
							wasPressed = true;
						}
					}
				}
			}
		}
		return wasPressed;
	};
	
	
	Input.prototype.saveKeyBindings = function( playerId, key, keysAssigned ) {
		
		this._playerKeyboardMaps[ playerId ][ key ] = keysAssigned.slice( 0 );
		this._saveKeyBindingsToLocalStorage();
	};
		
		
	Input.prototype.getKeyBindings = function( playerId, key ) {
		
		return this._playerKeyboardMaps[ playerId ][ key ].slice( 0 );
	};
	
	
	Input.prototype._loadKeyBindingsFromLocalStorage = function() {
		this._playerKeyboardMaps = Gui.loadFromLocalStorage( "webnes_keybindings" );
				
		// Load defaults if no local storage found
		if ( !this._playerKeyboardMaps ) {
			this._playerKeyboardMaps = [
				[
					// defaults for player 1
					[ 90 ], // Z // var JOYPAD_A = 0;
					[ 88 ], // X // var JOYPAD_B = 1;
					[ 16, 160, 161, 67 ], // shift, left shift, right shift, C // var JOYPAD_SELECT = 2;
					[ 13, 32, 86 ], // enter, space, V // var JOYPAD_START = 3;
					[ 38, 87, 104 ], // up, W, numpad 8 // var JOYPAD_UP = 4;
					[ 40, 83, 101, 98 ], // down, S, numpad 5, numpad 2 // var JOYPAD_DOWN = 5;
					[ 37, 65, 100 ], // left, A, numpad 4 // var JOYPAD_LEFT = 6;
					[ 39, 68, 102 ] // right, D, numpad 6 // var JOYPAD_RIGHT = 7;
				],
				[
					[],
					[],
					[],
					[],
					[],
					[],
					[],
					[]
				],
				[
					[],
					[],
					[],
					[],
					[],
					[],
					[],
					[]
				],
				[
					[],
					[],
					[],
					[],
					[],
					[],
					[],
					[]
				]
			];
		}
	};
	
	
	Input.prototype._saveKeyBindingsToLocalStorage = function() {
		Gui.saveToLocalStorage( "webnes_keybindings", this._playerKeyboardMaps );
	};
	

	Gui.Input = Input;

}());
