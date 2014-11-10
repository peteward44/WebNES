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
	
	
	var isClickWithinElementBounds = function( element, clickX, clickY ) {
		// look for a click outside the menu, then close the menu if it's outside of the menu's bounds
		var margin = 40;
		var pos = element.offset();
		var width = element.width();
		var height = element.height();
		var inBounds = ( pos.left - margin <= clickX && pos.left + width + margin >= clickX && pos.top - margin <= clickY && pos.top + height + margin >= clickY );
		return inBounds;
	};
	

	var ControlBarButton = function( mainboard, jqId, options ) {
		
		var that = this;
		this._options = options;
		this._toggleState = false;
		this._button = $( "#" + jqId ).button( { 'text': false, 'label': this._options.primary.label, 'icons': { 'primary': this._options.primary.icon } } );
		
		if ( this._options.toggleIcon || this._options.click ) {
			this._button.click( function() { var ret = that._onClick(); return ret === undefined ? true : ret; } );
		}
		
		if ( this._options.enabledWhenRomIsLoaded ) {
			this.enable( false );
			mainboard.connect( 'romLoaded', function( cart ) { that._onRomLoaded( cart ); } );
		}
	};
	
	
	ControlBarButton.prototype._onClick = function() {

		if ( this._options.click ) {
			return this._options.click();
		}
		return true;
	};
	

	ControlBarButton.prototype._onRomLoaded = function( cart ) {
		
		if ( this._options.enabledWhenRomIsLoaded ) {
			this.enable( true );
		}
	};
	
	
	ControlBarButton.prototype.toggleIcon = function( forceToggle ) {
		
		if ( forceToggle === undefined ) {
			this._toggleState = !this._toggleState;
		} else {
			this._toggleState = forceToggle;
		}
		if ( this._options.toggle ) {
			var opts;
			if ( this._toggleState ) {
				opts = { 'label': ( this._options.toggle.label || this._options.primary.label ), 'icons': { 'primary': ( this._options.toggle.icon || this._options.primary.icon ) } };
			} else {
				opts = { 'label': this._options.primary.label, 'icons': { 'primary': this._options.primary.icon } };
			}
			this._button.button( "option", opts );
		}
	};
	
	
	ControlBarButton.prototype.highlight = function( hl ) {
			
		if ( hl === true || hl === undefined ) {
			this._button.addClass( 'ui-state-highlight' );
		} else {
			this._button.removeClass( 'ui-state-highlight' );
		}
	};
	
	
	ControlBarButton.prototype.alert = function( hl ) {
			
		if ( hl === true || hl === undefined ) {
			this._button.addClass( 'ui-state-error' );
		} else {
			this._button.removeClass( 'ui-state-error' );
		}
	};
	
	
	ControlBarButton.prototype.enable = function( enable ) {
		var txt = ( enable === undefined || enable ) ? 'enable' : 'disable';
		this._button.button( txt );
	};
	
	
	
	var ControlBarMenu = function( menuJqId, buttonObject, options ) {
	
		var that = this;
		
		this._buttonObject = buttonObject;
		this._options = options || {};
		this._menu = $( "#" + menuJqId ).menu();
		this._menu.hide();
		
		$( document ).on( "click", function( e ) {
			that._onDocClick( e );
		});
		
		// Connect checkbox change events
		if ( this._options.checkBoxes && Array.isArray( this._options.checkBoxes ) ) {
			for ( var i=0; i<this._options.checkBoxes.length; ++i ) {
				var obj = this._options.checkBoxes[i];
				if ( obj.change ) {
					obj.checkBoxSelector.change( obj.change );
				}
			}
		}
	};
	
	
	ControlBarMenu.prototype._onDocClick = function( e ) {
		// hide menu when clicked somewhere else
		// HACK: cx and cy will be zero on a forced (manual) click event invoked by .click(). So we ignore these
		if ( e.clientX === 0 && e.clientY === 0 ) {
			return;
		}
		if ( this.isVisible() ) {
			if ( !isClickWithinElementBounds( this._menu, e.clientX, e.clientY ) ) {
				this.hide();
			} else {
				// click was inside the menu. check the options object for specified behaviour
				if ( this._options.checkBoxes && Array.isArray( this._options.checkBoxes ) ) {
					for ( var i=0; i<this._options.checkBoxes.length; ++i ) {
						var obj = this._options.checkBoxes[i];
						// if we clicked on the li element, check the checkbox (this way user doesnt have to click checkbox exactly)
						if ( e.target.id === obj.parentId ) {
							obj.checkBoxSelector.click();
						}
					}
				}
			}
		}
	};
	
	
	ControlBarMenu.prototype.toggleShow = function() {
	
		if ( this.isVisible() ) {
			this.hide();
		} else {
			this.show();
		}
	};
	
	
	ControlBarMenu.prototype.show = function() {
		this._menu.show().position( {
				'my': "left bottom",
				'at': "left top",
				'of': this._buttonObject._button
			});
	};
	
	
	ControlBarMenu.prototype.hide = function() {
		if ( this._menu.is(':visible') ) {
			this._menu.hide();
		}
	};
	
	
	ControlBarMenu.prototype.isVisible = function() {
		return this._menu.is(':visible');
	};
	
	
	
	
	var ControlBarSlider = function( jqId, buttonObject, options ) {
	
		var that = this;
		this._buttonObject = buttonObject;
		this._options = options;
		this._options.defaultValueIndex = this._options.defaultValueIndex === undefined ? 0 : this._options.defaultValueIndex;
		this._currentIndex = this._options.defaultValueIndex;
		this._tooltipCreated = false;
		
		this._dialog = $( "#" + jqId ).dialog({
				'dialogClass': "no-close controlBarSlider",
				'draggable': false,
				'autoOpen': false,
				'height': 130,
				'minHeight': 130,
				'width': 40,
				'minWidth': 40,
				'modal': false,
				'resizable': false,
				'buttons': {
				},
				'close': function() {
				}
			} );
			
		var sliderElement = document.createElement( 'div' );
		this._dialog[0].appendChild( sliderElement );
		
		var isRangeSlider = this._options.values === undefined;
		
		if ( isRangeSlider ) {
			this._slider = $( sliderElement ).slider( {
				'value': this._options.defaultValueIndex,
				'min': this._options.minValue,
				'max': this._options.maxValue,
				'orientation': "vertical",
				'change': function( event, ui ) {
					that._updateTooltip( ui.handle, ui.value );
				}
			} );
		} else {
			this._slider = $( sliderElement ).slider( {
				'value': this._options.defaultValueIndex,
				'min': 0,
				'max': this._options.values.length-1,
				'step': 1,
				'orientation': "vertical",
				'slide': function( event, ui ) {
					that._updateTooltip( ui.handle, ui.value );
				},
				'change': function( event, ui ) {
					that._updateTooltip( ui.handle, ui.value );
				}
			} );
		}
		this._slider.addClass( 'controlBarSliderContents' );
		this._createTooltip();

		$( document ).on( "click", function( e ) {
			that._onDocClick( e );
		});
	};
	
	
	ControlBarSlider.prototype._getTooltipText = function( val ) {
		if ( this._options.values && val >= 0 && val < this._options.values.length ) {
			return this._options.values[ val ].text;
		} else {
			return val.toString();
		}
	};
	
	
	ControlBarSlider.prototype._createTooltip = function() {
		var handleElement = $('.ui-slider-handle', this._slider);
		handleElement.qtip( {
			'content': this._getTooltipText( this._options.defaultValueIndex ),
			'position': {
				'corner':{'target':'leftMiddle','tooltip':'rightMiddle'}, //instead of corner:{target:'rightMiddle',tooltip:'leftMiddle'},
				'adjust':{'screen':true, 'resize':true}
			},
			'hide': {
				'delay': 100
			}
		} );
	};
	
	
	ControlBarSlider.prototype._updateTooltip = function( handle, val ) {
		if ( this._currentIndex !== val ) {
			this._currentIndex = val;
			$(handle).qtip( "option", 'content.text', this._getTooltipText( val ) );
			if ( this._options.change ) {
				this._options.change( this._options.values ? this._options.values[ this._currentIndex ].value : val );
			}
		}
	};
	
	
	ControlBarSlider.prototype._onDocClick = function( e ) {
		// HACK: cx and cy will be zero on a forced (manual) click event invoked by .click(). So we ignore these
		if ( e.clientX === 0 && e.clientY === 0 ) {
			return;
		}
		// hide menu when clicked somewhere else
		if ( this.isVisible() ) {
			if ( !isClickWithinElementBounds( this._dialog, e.clientX, e.clientY ) ) {
				this.hide();
			}
		}
	};
	
	
	ControlBarSlider.prototype.show = function() {
		this._dialog.dialog( "option", "position", {
				'my': "left bottom",
				'at': "left top",
				'of': this._buttonObject._button
			} );
		this._dialog.dialog( "open" );
	};
	
	
	ControlBarSlider.prototype.hide = function() {
		if ( this._dialog.is(':visible') ) {
			this._dialog.dialog( "close" );
		}
	};
	
	
	ControlBarSlider.prototype.isVisible = function() {
		return this._dialog.is(':visible');
	};
	
	
	
	
	
	var ControlBarMessage = function( jqId, buttonObject, options ) {
	
		var that = this;
		this._buttonObject = buttonObject;
		this._options = options;
		this._allowAutoHide = false;

		this._dialog = $( "#" + jqId ).dialog({
				'dialogClass': "no-close controlBarSlider",
				'draggable': false,
				'autoOpen': false,
				'height': 'auto',
				'minHeight': 50,
				'width': 'auto',
				'minWidth': 100,
				'modal': false,
				'resizable': false,
				'buttons': {
				},
				'close': function() {
				}
			} );
			
		this._textElement = document.createElement( 'div' );
		this._dialog[0].appendChild( this._textElement );
		
		$( document ).on( "click", function( e ) {
			that._onDocClick( e );
		});
	};
	
	
	ControlBarMessage.prototype.setText = function( text ) {
		
		this._textElement.innerHTML = '<p>' + text + '</p>';
	};
	
	
	ControlBarMessage.prototype._onDocClick = function( e ) {
		// HACK: cx and cy will be zero on a forced (manual) click event invoked by .click(). So we ignore these
		if ( e.clientX === 0 && e.clientY === 0 ) {
			return;
		}
		// hide menu when clicked somewhere else
		if ( this.isVisible() ) {
			if ( !isClickWithinElementBounds( this._dialog, e.clientX, e.clientY ) ) {
				if ( this._allowAutoHide ) {
					this.hide();
				}
			}
		}
	};
	
	
	ControlBarMessage.prototype.show = function() {
		var that = this;
		this._dialog.dialog( "option", "position", {
				'my': "right top",
				'at': "right bottom",
				'of': this._buttonObject._button
			} );
		this._dialog.dialog( "open" );
		this._buttonObject.alert( true );
		this._allowAutoHide = false;
		setTimeout( function() {
			that._allowAutoHide = true;
		}, 300 );
	};
	
	
	ControlBarMessage.prototype.hide = function() {
		if ( this._dialog.is(':visible') ) {
			this._dialog.dialog( "close" );
		}
		this._buttonObject.alert( false );
	};
	
	
	ControlBarMessage.prototype.isVisible = function() {
		return this._dialog.is(':visible');
	};
	
	
	
	
	
	Gui.ControlBarButton = ControlBarButton;
	Gui.ControlBarMenu = ControlBarMenu;
	Gui.ControlBarSlider = ControlBarSlider;
	Gui.ControlBarMessage = ControlBarMessage;
}());



