this.NesDb = this.NesDb || {};

NesDb[ '206EC54F949572989E35A6EDD7CD592875AE1D27' ] = {
	"$": {
		"name": "Casino Kid II",
		"class": "Licensed",
		"catalog": "NES-CK-USA",
		"publisher": "Sofel",
		"developer": "Sofel",
		"region": "USA",
		"players": "1",
		"date": "1993-04"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "7329118D",
				"sha1": "206EC54F949572989E35A6EDD7CD592875AE1D27",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-12-10"
			},
			"board": [
				{
					"$": {
						"type": "NES-UNROM",
						"pcb": "NES-UNROM-10",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "NES-CK-0 PRG",
								"size": "128k",
								"crc": "7329118D",
								"sha1": "206EC54F949572989E35A6EDD7CD592875AE1D27"
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
								"type": "74xx161"
							}
						},
						{
							"$": {
								"type": "74xx32"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "6113B1"
							}
						}
					],
					"pad": [
						{
							"$": {
								"h": "0",
								"v": "1"
							}
						}
					]
				}
			]
		}
	],
	"gameGenieCodes": [
		{
			"name": "Start new game with $82 instead of $200",
			"codes": [
				[
					"AZKKYOTG"
				]
			]
		},
		{
			"name": "Start new game with $512",
			"codes": [
				[
					"EGKKYOTK"
				]
			]
		},
		{
			"name": "Start new game with $21,171",
			"codes": [
				[
					"AZSGGPAA"
				]
			]
		},
		{
			"name": "Start new game with $131,272",
			"codes": [
				[
					"EGSGGPAE"
				]
			]
		},
		{
			"name": "Start new game with $1,342,377",
			"codes": [
				[
					"AASKPPAE"
				]
			]
		},
		{
			"name": "Start new game with $5,368,909",
			"codes": [
				[
					"AZSKPPAA"
				]
			]
		},
		{
			"name": "Can't double down in blackjack (game will say no $)",
			"codes": [
				[
					"PAOASGIE"
				]
			]
		},
		{
			"name": "Can't split in blackjack (game will say you no $)",
			"codes": [
				[
					"PAKAVIIE"
				]
			]
		}
	]
};
