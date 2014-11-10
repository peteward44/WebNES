this.NesDb = this.NesDb || {};

NesDb[ 'BE0377E9D69625BB3ED1903AD652AB0925335F74' ] = {
	"$": {
		"name": "Batman",
		"class": "Licensed",
		"catalog": "NES-B4-USA",
		"publisher": "Sunsoft",
		"developer": "Sunsoft",
		"region": "USA",
		"players": "1",
		"date": "1990-02"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"prototype": "1",
				"crc": "816AD178",
				"sha1": "BE0377E9D69625BB3ED1903AD652AB0925335F74",
				"dump": "ok",
				"dumper": "Skrybe",
				"datedumped": "2012-04-15"
			},
			"board": [
				{
					"$": {
						"type": "NES-TKEPROM",
						"pcb": "NES-TKEPROM-01",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "NES BATMAN PRG-AE29A4 VER 0.0 8-89",
								"size": "128k",
								"crc": "A8F5C8ED",
								"sha1": "DFEF4ABDDEE3E51E83F243FD8C819E4958585017"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES BATMAN CHR VER 0.0 8-89 / 972E8E",
								"size": "128k",
								"crc": "47C50822",
								"sha1": "2D07E4DC486B907218308F5D69B08F130D7C1A93"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx139"
							}
						},
						{
							"$": {
								"type": "MMC3A"
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
			"name": "Infinite lives",
			"codes": [
				[
					"SZUGGTVG"
				]
			]
		},
		{
			"name": "Start with 1 life",
			"codes": [
				[
					"AEESKGZA"
				]
			]
		},
		{
			"name": "Start with 6 lives",
			"codes": [
				[
					"IEESKGZA"
				]
			]
		},
		{
			"name": "Start with 9 lives",
			"codes": [
				[
					"AEESKGZE"
				]
			]
		},
		{
			"name": "Extra energy on heart pick-up",
			"codes": [
				[
					"GEEPOTPA"
				]
			]
		},
		{
			"name": "Infinite pellets after pick-up",
			"codes": [
				[
					"GZNOUGST"
				]
			]
		},
		{
			"name": "Double usual pellets on pick-up",
			"codes": [
				[
					"GPSPXVZA"
				]
			]
		},
		{
			"name": "Half usual pellets on pick-up",
			"codes": [
				[
					"IASPXVZA"
				]
			]
		}
	]
};
