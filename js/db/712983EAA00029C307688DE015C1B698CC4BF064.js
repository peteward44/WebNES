this.NesDb = this.NesDb || {};

NesDb[ '712983EAA00029C307688DE015C1B698CC4BF064' ] = {
	"$": {
		"name": "Tecmo NBA Basketball",
		"class": "Licensed",
		"catalog": "NES-BK-USA",
		"publisher": "Tecmo",
		"developer": "Tecmo",
		"region": "USA",
		"players": "2",
		"date": "1992-11"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"revision": "A",
				"crc": "DA8E4AF4",
				"sha1": "712983EAA00029C307688DE015C1B698CC4BF064",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-03-14"
			},
			"board": [
				{
					"$": {
						"type": "NES-TKROM",
						"pcb": "NES-TKROM-10",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "NES-BK-1 PRG",
								"size": "128k",
								"crc": "EA244F51",
								"sha1": "F8F5EA3D0468B4FF43ED8F9D0C6E570182360F8D"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-BK-1 CHR",
								"size": "256k",
								"crc": "85E70489",
								"sha1": "C37F6352E82A520B2DA10FBD43C9DFCE370F7236"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "8k",
								"battery": "1"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC3C"
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
			"name": "Infinite timeouts",
			"codes": [
				[
					"SLVUPUVS"
				]
			]
		},
		{
			"name": "2-pt. shots worth 1, 3-pt. shots worth 2",
			"codes": [
				[
					"AEOLVPPA"
				]
			]
		},
		{
			"name": "2-pt. shots worth 3, 3-pt. shots worth 4",
			"codes": [
				[
					"ZEOLVPPA"
				]
			]
		},
		{
			"name": "2-pt. shots worth 4, 3-pt. shots worth 5",
			"codes": [
				[
					"LEOLVPPA"
				]
			]
		},
		{
			"name": "2-pt. shots worth 5, 3-pt. shots worth 6",
			"codes": [
				[
					"GEOLVPPA"
				]
			]
		},
		{
			"name": "2-pt. shots worth 6, 3-pt. shots worth 7",
			"codes": [
				[
					"IEOLVPPA"
				]
			]
		},
		{
			"name": "3-pt. shots worth 2 pts.",
			"codes": [
				[
					"AVNUVOVT"
				]
			]
		},
		{
			"name": "5-second violations become 10-second violations",
			"codes": [
				[
					"NYSENZYE"
				]
			]
		},
		{
			"name": "No 10-second violations",
			"codes": [
				[
					"NYOPTNZE"
				]
			]
		},
		{
			"name": "Longer shot clock after getting ball on rebound",
			"codes": [
				[
					"ASOLSEAO"
				]
			]
		},
		{
			"name": "Shorter shot clock after getting ball on rebound",
			"codes": [
				[
					"AEOLSEAO"
				]
			]
		}
	]
};
