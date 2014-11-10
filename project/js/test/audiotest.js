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

this.Test = this.Test || {};

(function(){
	"use strict";
	
	var clamp = function( low, high, val ) {
		if ( val < low ) return low;
		if ( val > high ) return high;
		return val;
	};
	
	var createSineWaveNode = function( context, inverse ) {
	
		// Create a ScriptProcessorNode with a bufferSize of 4096 and a single output channel
		var audioNode = context.createScriptProcessor(4096, 0, 1);

		var volume = .2;

		// The frequncy of the sine wave tone
		var frequency = 220;

		// Give the node a function to process audio events
		audioNode.onaudioprocess = function(audioProcessingEvent) {

			// The output buffer contains the samples that will be modified and played
			var outputBuffer = audioProcessingEvent.outputBuffer;

			// Loop through the output channels (in this case there is only one)
			for (var channel = 0; channel < outputBuffer.numberOfChannels; channel++) {
				var outData = outputBuffer.getChannelData(channel);

				// Loop through the 4096 samples
				for (var sample = 0; sample < outputBuffer.length; sample++) {

					// The time at which the sample will play
					var sampleTime = context.currentTime + outputBuffer.duration * sample / outputBuffer.length;

					// Set the data in the output buffer for each sample
					var sampleVal = clamp( -1.0, 1.0, volume * Math.sin(sampleTime * frequency * Math.PI * 2) );
					if ( inverse ) {
						sampleVal = -sampleVal;
					}
					outData[sample] = sampleVal;
				}
			}
		}

		return audioNode;
	};
	
	var createMixerNode = function( context ) {
		var compressor = context.createDynamicsCompressor();
		return compressor;
	};
	
	var createGainNode = function( context ) {
		var g = context.createGain();
		return g;
	};
	
	var audioStart = function() {
		var context = new AudioContext();
		var sineWaveNode = createSineWaveNode( context );
		var sineWaveNode2 = createSineWaveNode( context, true );
		var mixerNode = createGainNode( context );
		
		sineWaveNode.connect( mixerNode );
		sineWaveNode2.connect( mixerNode );
		
		// Connect the node to the context to start playing the sound
		mixerNode.connect(context.destination); // Connect to speakers
	};
	
	Test.audioStart = audioStart;

}());


window.onload = function() {
	Test.audioStart();
};
