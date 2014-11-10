this.NesDb = this.NesDb || {};

NesDb[ '5B05C8859F356013D37F0545F5DE5FA1693DA5DA' ] = {
	"$": {
		"name": "Faxanadu",
		"class": "Licensed",
		"catalog": "NES-FX-CAN",
		"publisher": "Nintendo",
		"developer": "Hudson Soft",
		"region": "Canada",
		"players": "1",
		"date": "1989-07-04"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "57DD23D1",
				"sha1": "5B05C8859F356013D37F0545F5DE5FA1693DA5DA",
				"dump": "ok",
				"dumper": "_zane",
				"datedumped": "2007-12-30"
			},
			"board": [
				{
					"$": {
						"type": "NES-SGROM",
						"pcb": "NES-SGROM-02",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-FX-0 PRG",
								"size": "256k",
								"crc": "57DD23D1",
								"sha1": "5B05C8859F356013D37F0545F5DE5FA1693DA5DA"
							}
						}
					],
					"vram": [
						{
							"$": {
								"size": "8k"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1B2"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "6113B1"
							}
						}
					]
				}
			]
		}
	],
	"gameGenieCodes": [
		{
			"name": "Double starting power",
			"codes": [
				[
					"AXXSNTAP"
				]
			]
		},
		{
			"name": "Triple starting power",
			"codes": [
				[
					"AUXSNTAP"
				]
			]
		},
		{
			"name": "Half normal amount of Gold",
			"codes": [
				[
					"IASEPSZA"
				]
			]
		},
		{
			"name": "Double normal amount of Gold",
			"codes": [
				[
					"GPSEPSZA"
				]
			]
		},
		{
			"name": "Infinite magic",
			"codes": [
				[
					"AEENEZZA"
				]
			]
		},
		{
			"name": "Jump in direction you are facing",
			"codes": [
				[
					"AVXVGPSZ"
				]
			]
		},
		{
			"name": "Infinite power",
			"codes": [
				[
					"GXOGZESV",
					"GXOKLESV"
				]
			]
		},
		{
			"name": "Slow mode",
			"codes": [
				[
					"AAUTAEOY",
					"AAKTPAKY",
					"AAUTZAPA"
				]
			]
		},
		{
			"name": "Infinite Gold",
			"codes": [
				[
					"SXXNUOSE",
					"SXUYUOSE",
					"SXUNUOSE"
				]
			]
		}
	]
};
