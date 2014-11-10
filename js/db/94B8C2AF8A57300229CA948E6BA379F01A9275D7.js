this.NesDb = this.NesDb || {};

NesDb[ '94B8C2AF8A57300229CA948E6BA379F01A9275D7' ] = {
	"$": {
		"name": "Bubble Bobble",
		"class": "Licensed",
		"catalog": "NES-B2-EEC",
		"publisher": "Taito",
		"developer": "Taito",
		"region": "Europe",
		"players": "2",
		"date": "1990-10-26"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "C99B690A",
				"sha1": "94B8C2AF8A57300229CA948E6BA379F01A9275D7",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2007-09-04"
			},
			"board": [
				{
					"$": {
						"type": "NES-SFROM",
						"pcb": "NES-SFROM-03",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-B2-0 PRG",
								"size": "128k",
								"crc": "1F0D03F8",
								"sha1": "C1B1D738FAB58B662D7D53FB78B18F0A3E8AF685"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-B2-0 CHR",
								"size": "32k",
								"crc": "A6AA53AC",
								"sha1": "9C54D3951289FA716FC44C3442570CE7D0588887"
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
								"type": "3195A"
							}
						}
					]
				}
			]
		}
	],
	"gameGenieCodes": [
		{
			"name": "Both players start with 1 life",
			"codes": [
				[
					"PAUKEZLA"
				]
			]
		},
		{
			"name": "Both players start with 6 lives",
			"codes": [
				[
					"TAUKEZLA"
				]
			]
		},
		{
			"name": "Both players start with 9 lives",
			"codes": [
				[
					"PAUKEZLE"
				]
			]
		},
		{
			"name": "Start game on level 10",
			"codes": [
				[
					"ZAUGEZPE"
				]
			]
		},
		{
			"name": "Start game on level 25",
			"codes": [
				[
					"PPUGEZPE"
				]
			]
		},
		{
			"name": "Start game on level 50",
			"codes": [
				[
					"ZLUGEZPA"
				]
			]
		},
		{
			"name": "Start game on level 75",
			"codes": [
				[
					"LGUGEZPE"
				]
			]
		},
		{
			"name": "Skip only 2 levels",
			"codes": [
				[
					"ZAOGOLGA"
				]
			]
		},
		{
			"name": "Skip 10 levels",
			"codes": [
				[
					"ZAOGOLGE"
				]
			]
		},
		{
			"name": "Lots of bubble power",
			"codes": [
				[
					"AAUILSPP"
				]
			]
		},
		{
			"name": "Monsters move faster",
			"codes": [
				[
					"ZANEAGPA",
					"NNEEAKVN"
				]
			]
		},
		{
			"name": "Monsters move super fast",
			"codes": [
				[
					"LANEAGPA",
					"NNEEAKSN"
				]
			]
		},
		{
			"name": "Angry monsters move faster",
			"codes": [
				[
					"LANEIGZA",
					"SNEEIKVN"
				]
			]
		},
		{
			"name": "Always wear turbo shoes",
			"codes": [
				[
					"AANSIGTA",
					"AESIPGTA"
				]
			]
		}
	]
};
