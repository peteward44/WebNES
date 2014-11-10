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
this.Gui = this.Gui || {};

var urlRootTestRoms = 'testRoms';

var cpuTestRoms = [ 
	{ name: 'Branch timing test - Basics', 	url: 'cpu/branch_timing_tests/1.Branch_Basics.nes', 		testCanvasOnFrames: { frame: 49, expectedHash: "2A4D9827CCEAE5E72DFBA65299B7B3FB67949DC6" } },
	{ name: 'Branch timing test - Backwards', 	url: 'cpu/branch_timing_tests/2.Backward_Branch.nes', 		testCanvasOnFrames: { frame: 65, expectedHash: "98DD4D6F389046CF6FDC5D53D15E4936C011822F" } },
	{ name: 'Branch timing test - Forwards', 	url: 'cpu/branch_timing_tests/3.Forward_Branch.nes', 		testCanvasOnFrames: { frame: 31, expectedHash: "EA3C8BD5CD624BBA97C1D7985B79A1393B7C5F44" } },

	// (broken)
//	{ name: 'CLI latency tests', 	url: 'cpu/cli_latency_tests/cli_latency.nes', 		testCanvasOnFrames: { frame: 31, expectedHash: "EA3C8BD5CD624BBA97C1D7985B79A1393B7C5F44" } },
	
	{ name: 'CPU dummy writes OAM', 	url: 'cpu/cpu_dummy_writes/cpu_dummy_writes_oam.nes', 		testCanvasOnFrames: { frame: 450, expectedHash: "1B24E72417E4A3CAE3EAE20A1A161BD24118AD00" } },
	{ name: 'CPU dummy writes PPUMEM', 	url: 'cpu/cpu_dummy_writes/cpu_dummy_writes_ppumem.nes', 		testCanvasOnFrames: { frame: 356, expectedHash: "BFDA4B8FCC1204DAABAD8827561A203F4FDA2280" } },
	
	// (broken - apu support)
//	{ name: 'CPU exec space APU', 		url: 'cpu/cpu_exec_space/test_cpu_exec_space_apu.nes', 		testCanvasOnFrames: { frame: 100, expectedHash: "" } },
	{ name: 'CPU exec space PPUIO', 	url: 'cpu/cpu_exec_space/test_cpu_exec_space_ppuio.nes', 		testCanvasOnFrames: { frame: 192, expectedHash: "44333129E7164BA2CEDB610E95515CBE95CBC71C" } },
	
	{ name: 'CPU dummy reads', 			url: 'cpu/cpu_dummy_reads/cpu_dummy_reads.nes', 		testCanvasOnFrames: { frame: 256, expectedHash: "4845F653DB37E875E466EE37657F5964B9BCFE32" } },
	
	// (broken - apu support)
//	{ name: 'CPU interrupts', 			url: 'cpu/cpu_interrupts_v2/cpu_interrupts.nes', 		testCanvasOnFrames: { frame: 100, expectedHash: "" } },

	// (broken - apu support)
//	{ name: 'CPU instruction misc', 			url: 'cpu/instr_misc/instr_misc.nes', 		testCanvasOnFrames: { frame: 100, expectedHash: "" } },
	
	// (broken - apu support)
//	{ name: 'Instruction timing', 			url: 'cpu/instr_timing/instr_timing.nes', 		testCanvasOnFrames: { frame: 100, expectedHash: "" } },

	{ name: 'Overflow test', 	url: 'ppu/overtest/overtest.nes',  		testCanvasOnFrames: { frame: 206, expectedHash: "B0C23D83021146F91DE5E8F31BD567DEB8F7A2BF" } },
	
	{ name: 'instr_test-v5 - Official only', 	url: 'cpu/instr_test-v5/official_only.nes', 		testCanvasOnFrames: { frame: 1897, expectedHash: "FD5508B14A27E7F5DFE30C5D8FDF8785428FC51E" } },
	{ name: 'cpu_timing_test6', 				url: 'cpu/cpu_timing_test6/cpu_timing_test.nes', 	testCanvasOnFrames: { frame: 1117, expectedHash: "D5C4024E68B107D4E5C575A85863677A53A99507" } }
//	{ name: 'missing', 							url: 'missing.nes', 							testCanvasOnFrames: { frame: 400, expectedHash: "" } }
];


var ppuTestRoms = [
	{ name: 'Vblank NMI timing', 	url: 'ppu/nes_vbl_nmi_tests/vbl_nmi.nes', 		testCanvasOnFrames: { frame: 1907, expectedHash: "264B7882C6B1EB2CD2C844DF1CE0E8EBEBC1A178" } },
	
	{ name: 'PPU read buffer', 	url: 'ppu/ppu_read_buffer/test_ppu_read_buffer.nes', 		testCanvasOnFrames: { frame: 1500, expectedHash: "D9D4F10132C1CBE6B662162FAD100D0D4E8B572F" } },
	
	{ name: 'PPU tests 2005/09/15b - Palette RAM', 	url: 'ppu/blargg_ppu_tests_2005.09.15b/palette_ram.nes',  		testCanvasOnFrames: { frame: 125, expectedHash: "4A1E94331ED1F475BE240C9928E68B84CADF21EB" } },
	{ name: 'PPU tests 2005/09/15b - Sprite RAM', 	url: 'ppu/blargg_ppu_tests_2005.09.15b/sprite_ram.nes',  		testCanvasOnFrames: { frame: 109, expectedHash: "4A1E94331ED1F475BE240C9928E68B84CADF21EB" } },
	{ name: 'PPU tests 2005/09/15b - VBL clear time', 	url: 'ppu/blargg_ppu_tests_2005.09.15b/vbl_clear_time.nes', testCanvasOnFrames: { frame: 109, expectedHash: "4A1E94331ED1F475BE240C9928E68B84CADF21EB" } },
	{ name: 'PPU tests 2005/09/15b - VRAM access', 	url: 'ppu/blargg_ppu_tests_2005.09.15b/vram_access.nes',  		testCanvasOnFrames: { frame: 105, expectedHash: "4A1E94331ED1F475BE240C9928E68B84CADF21EB" } },
	
	{ name: 'dmc_dma_during_read4: DMA 2007 read', 	url: 'ppu/dmc_dma_during_read4/dma_2007_read.nes',  		testCanvasOnFrames: { frame: 92, expectedHash: "DA7D6432F76E03EEE150D13EBB78072A59999439" } },
	{ name: 'dmc_dma_during_read4: DMA 2007 write', 	url: 'ppu/dmc_dma_during_read4/dma_2007_write.nes',  		testCanvasOnFrames: { frame: 411, expectedHash: "9A4C0B881C25ABFDB7B2FD76670F021DD6B4373E" } },
	{ name: 'dmc_dma_during_read4: Double 2007 read', 	url: 'ppu/dmc_dma_during_read4/double_2007_read.nes',  		testCanvasOnFrames: { frame: 84, expectedHash: "8E7DC668B2C7DB612E9E870868E75EC09B9BD7E5" } },
	{ name: 'dmc_dma_during_read4: Read/Write 2007', 	url: 'ppu/dmc_dma_during_read4/read_write_2007.nes',  		testCanvasOnFrames: { frame: 117, expectedHash: "EAB90FDEB7692CFA047AAA0F6D6F875F518F9679" } },
	
	
	{ name: 'OAM read', 	url: 'ppu/oam_read/oam_read.nes',  		testCanvasOnFrames: { frame: 127, expectedHash: "FDF6B704D264E10C86802E5002EEEF40822D8E55" } },
	
	// (broken - just broken)
//	{ name: 'OAM stress', 	url: 'ppu/oam_stress/oam_stress.nes',  		testCanvasOnFrames: { frame: 127, expectedHash: "FDF6B704D264E10C86802E5002EEEF40822D8E55" } },

	{ name: 'PPU VBL NMI', 	url: 'ppu/ppu_vbl_nmi/ppu_vbl_nmi.nes',  		testCanvasOnFrames: { frame: 3076, expectedHash: "5DDA3BBDD8D2F6135E609EA6C7CAA2ECD973FBFA" } },
	
	// TODO: sprite overflow
	{ name: 'Sprite hit test: 01.basics', 	url: 'ppu/sprite_hit_tests_2005.10.05/01.basics.nes',  		testCanvasOnFrames: { frame: 67, expectedHash: "891F5C729A7A9F6CA320AFD303AF946FC0C6473D" } },
	{ name: 'Sprite hit test: 02.alignment', 	url: 'ppu/sprite_hit_tests_2005.10.05/02.alignment.nes',  		testCanvasOnFrames: { frame: 59, expectedHash: "8F5BCCA8EE90DF15D408D2C92F4C406DCC4AF3C9" } },
	{ name: 'Sprite hit test: 03.corners', 	url: 'ppu/sprite_hit_tests_2005.10.05/03.corners.nes',  		testCanvasOnFrames: { frame: 115, expectedHash: "DDA0E9A30C947E0D38238B5ED26E0BD8B6015F61" } },
	{ name: 'Sprite hit test: 04.flip', 	url: 'ppu/sprite_hit_tests_2005.10.05/04.flip.nes',  		testCanvasOnFrames: { frame: 65, expectedHash: "CFDA5D1F0FCEB9615EE78988EE8CBF5407ED7664" } },
	{ name: 'Sprite hit test: 05.left_clip', 	url: 'ppu/sprite_hit_tests_2005.10.05/05.left_clip.nes',  		testCanvasOnFrames: { frame: 134, expectedHash: "C6452C5E4EC7BD4599A698CCD248C92B6CA0F79F" } },
	{ name: 'Sprite hit test: 06.right_edge', 	url: 'ppu/sprite_hit_tests_2005.10.05/06.right_edge.nes',  		testCanvasOnFrames: { frame: 80, expectedHash: "E7756497102F7670FDD216A07EF43B53CED5C6C8" } },
	{ name: 'Sprite hit test: 07.screen_bottom', 	url: 'ppu/sprite_hit_tests_2005.10.05/07.screen_bottom.nes',  		testCanvasOnFrames: { frame: 96, expectedHash: "226290ED92A239E970EA8297B5DF886F657CCB21" } },
	{ name: 'Sprite hit test: 08.double_height', 	url: 'ppu/sprite_hit_tests_2005.10.05/08.double_height.nes',  		testCanvasOnFrames: { frame: 90, expectedHash: "E7E04C43C4B0F870B36106A4D99835E4C9E37F39" } },
	{ name: 'Sprite hit test: 09.timing_basics', 	url: 'ppu/sprite_hit_tests_2005.10.05/09.timing_basics.nes',  		testCanvasOnFrames: { frame: 114, expectedHash: "AA09DD615B0385F220D4A3512F949D0951074957" } },
	{ name: 'Sprite hit test: 10.timing_order', 	url: 'ppu/sprite_hit_tests_2005.10.05/10.timing_order.nes',  		testCanvasOnFrames: { frame: 126, expectedHash: "3FF5789420C9EA9642B794681679EDE5BAD1B68C" } },
	{ name: 'Sprite hit test: 11.edge_timing', 	url: 'ppu/sprite_hit_tests_2005.10.05/11.edge_timing.nes',  		testCanvasOnFrames: { frame: 146, expectedHash: "8A487FF0334A71069F7F05E8B4E4E543AEFDEBA1" } },
	
	{ name: 'Sprite hit test: sprite_hit_timing', 	url: 'ppu/sprite_hit_timing/sprite_hit_timing.nes',  		testCanvasOnFrames: { frame: 234, expectedHash: "C4C275A2DA3E4D22821FE1C9DED6611CD90D371D" } },
];


var mapperRoms = [
	// (broken but shouldn't be - needs investigation as to why test runner produces different result to main game)
	//{ name: 'MMC1 colour bars', 	url: 'mappers/Colour Bars MMC1 (PD)/Colour Bars MMC1 (PD).nes', 		testCanvasOnFrames: { frame: 197, expectedHash: "81CBC3E6068CE558F2241D3B24F63DD15B3A95FA" } },

	// MMC3 irqs
	{ name: 'MMC3 IRQ: 1.Clocking', 		url: 'mappers/mmc3_irq_tests/1.Clocking.nes', 						testCanvasOnFrames: { frame: 68, expectedHash: "984AAE66DA84F6C9060938EB020B76D60B2494B9" } },
	{ name: 'MMC3 IRQ: 2.Details', 			url: 'mappers/mmc3_irq_tests/2.Details.nes', 					testCanvasOnFrames: { frame: 74, expectedHash: "6EF2F50E1D17726ED681A76E89065BA65DA813D4" } },
	{ name: 'MMC3 IRQ: 3.A12_clocking',	 	url: 'mappers/mmc3_irq_tests/3.A12_clocking.nes', 				testCanvasOnFrames: { frame: 61, expectedHash: "A75A8D0F2CC02F9BAEC901C0D3F6C2EEB6B7D8FD" } },
	//{ name: 'MMC3 IRQ: 4.Scanline_timing', 	url: 'mappers/mmc3_irq_tests/4.Scanline_timing.nes', 			testCanvasOnFrames: { frame: 1, expectedHash: "" } },
	//{ name: 'MMC3 IRQ: 5.MMC3_rev_A', 		url: 'mappers/mmc3_irq_tests/5.MMC3_rev_A.nes', 				testCanvasOnFrames: { frame: 1, expectedHash: "" } },
	{ name: 'MMC3 IRQ: 6.MMC3_rev_B', 		url: 'mappers/mmc3_irq_tests/6.MMC3_rev_B.nes', 				testCanvasOnFrames: { frame: 91, expectedHash: "9242572245581CEAEE86437F63577CD541F8314B" } },
	
	{ name: 'MMC3 Tests: 1-clocking', 			url: 'mappers/mmc3_test/1-clocking.nes', 					testCanvasOnFrames: { frame: 136, expectedHash: "1A236625A9FD04BF29B5BF12DB2810D02AB9F82F" } },
	{ name: 'MMC3 Tests: 2-details', 			url: 'mappers/mmc3_test/2-details.nes', 					testCanvasOnFrames: { frame: 62, expectedHash: "D57BF73C46F2EA675D83372547EF0D7853AB032E" } },
	{ name: 'MMC3 Tests: 3-A12_clocking', 		url: 'mappers/mmc3_test/3-A12_clocking.nes', 				testCanvasOnFrames: { frame: 74, expectedHash: "7D085A6DB30CEFA778A49AC9703B0A417C2F5EA8" } },
	// (broken)
	//{ name: 'MMC3 Tests: 4-scanline_timing', 	url: 'mappers/mmc3_test/4-scanline_timing.nes', 			testCanvasOnFrames: { frame: 1, expectedHash: "" } },
	{ name: 'MMC13 Tests: 5-MMC3', 				url: 'mappers/mmc3_test/5-MMC3.nes', 						testCanvasOnFrames: { frame: 114, expectedHash: "0BE58D0315E297675A6370349F2E024960F36393" } },
	
	{ name: 'MMC3 Tests: 6-MMC6', 				url: 'mappers/mmc3_test/6-MMC6.nes', 						testCanvasOnFrames: { frame: 53, expectedHash: "DFD96C612690AEA18FCEF2150D461CD02DE88D65" } },
	
	{ name: 'MMC3 Test2: 1-clocking', 			url: 'mappers/mmc3_test_2/rom_singles/1-clocking.nes', 				testCanvasOnFrames: { frame: 58, expectedHash: "1A236625A9FD04BF29B5BF12DB2810D02AB9F82F" } },
	{ name: 'MMC3 Test2: 2-details', 			url: 'mappers/mmc3_test_2/rom_singles/2-details.nes', 				testCanvasOnFrames: { frame: 84, expectedHash: "D57BF73C46F2EA675D83372547EF0D7853AB032E" } },
	{ name: 'MMC3 Test2: 3-A12_clocking', 		url: 'mappers/mmc3_test_2/rom_singles/3-A12_clocking.nes', 			testCanvasOnFrames: { frame: 81, expectedHash: "7D085A6DB30CEFA778A49AC9703B0A417C2F5EA8" } },
	//{ name: 'MMC3 Test2: 4-scanline_timing', 	url: 'mappers/mmc3_test_2/rom_singles/4-scanline_timing.nes', 		testCanvasOnFrames: { frame: 1, expectedHash: "" } },
	{ name: 'MMC3 Test2: 5-MMC3', 				url: 'mappers/mmc3_test_2/rom_singles/5-MMC3.nes', 					testCanvasOnFrames: { frame: 91, expectedHash: "0BE58D0315E297675A6370349F2E024960F36393" } },
	//{ name: 'MMC3 Test2: 6-MMC3_alt', 			url: 'mappers/mmc3_test_2/rom_singles/6-MMC3_alt.nes', 				testCanvasOnFrames: { frame: 1, expectedHash: "" } },
	
	// MMC5 (broken)
//	{ name: 'MMC5 exram', 			url: 'mappers/exram/mmc5exram.nes', 						testCanvasOnFrames: { frame: 230, expectedHash: "468CA0981EBFA3A4B3AB801FBEDD15FD1169C730" } }
	
];


(function(){
	"use strict";
	
	
	var gotFrame = false;
	var frameHash = '';
	var waitingForFrame = -1;
	var currentTest = null;
	var g_assert = null;
	
	
	var frameRenderedCallback = function( renderSurface, frameCount ) {
	
		if ( waitingForFrame >= 0 && waitingForFrame === frameCount ) {
			frameHash = renderSurface.getRenderBufferHash();
			gotFrame = true;
			waitingForFrame = -1;
		}
	};
	
	
	var waitUntilPaused = function( callback ) {
		
		setTimeout( function() {
			if ( gotFrame ) {
				callback();
			} else {
				waitUntilPaused( callback );
			}
		}, 100 );
	};
	
	
	
	var runRomTest = function( options ) {

		asyncTest( options.name, function( assert ) {
			
			//console.log( options.name );
	
			// load rom
			Gui.App.pause( true ); // start app paused
			Gui.App.setGameSpeed( 0 ); // dont limit fps
			currentTest = options;
			g_assert = assert;
			Gui.App.loadRomFromUrl( urlRootTestRoms + '/' + options.url );
		} );
	};
	
	
	var romLoadedCallback = function( cart ) {

		// perform canvas tests
		if ( currentTest.testCanvasOnFrames ) {
			gotFrame = false;
			
			// Unpause app, run for specified number of frames
			var canvasTest = currentTest.testCanvasOnFrames;
			waitingForFrame = canvasTest.frame;
			Gui.App.playUntilFrame( canvasTest.frame );
			
			waitUntilPaused( function() {
				var actualHash = frameHash;
				g_assert.strictEqual( actualHash, canvasTest.expectedHash, 'Canvas assertion on frame ' + canvasTest.frame );
				QUnit.start();
			} );
		} else {
			QUnit.start();
		}
	};
	

	var runAllRoms = function() {
	
		Gui.App.connect( 'frameRendered', frameRenderedCallback );
		Gui.App.connect( 'cartLoaded', romLoadedCallback );
		
		//module( "Int32 test - Does Crankshaft treat values from Int32Array the same as a native int?" );
		module( "CPU test roms" );
		cpuTestRoms.forEach( runRomTest );
		
		module( "PPU test roms" );
		ppuTestRoms.forEach( runRomTest );
		
		module( "Mapper test roms" );
		mapperRoms.forEach( runRomTest );
	};
	
	
	Test.runAllRoms = runAllRoms;

}());


window.onload = function() {
	
	Gui.App.start( { createGuiComponents: false, triggerFrameRenderedEvent: true } );
	Test.runAllRoms();
};


