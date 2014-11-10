this.NesDb = this.NesDb || {};

NesDb[ 'B0BFCC07619DEFD0530696731DCA37A088049270' ] = {
	"$": {
		"name": "Silver Surfer",
		"class": "Licensed",
		"catalog": "NES-VQ-USA",
		"publisher": "Arcadia",
		"developer": "Software Creations",
		"region": "USA",
		"players": "1",
		"date": "1990-11"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "BEE1C0D9",
				"sha1": "B0BFCC07619DEFD0530696731DCA37A088049270",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-10-10"
			},
			"board": [
				{
					"$": {
						"type": "NES-TSROM",
						"pcb": "NES-TSROM-07",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "NES-VQ-0 PRG",
								"size": "128k",
								"crc": "8C940984",
								"sha1": "9275234CD036FC8BB7B54013EBE9D1701C241F43"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-VQ-0 CHR",
								"size": "256k",
								"crc": "58E3FE8A",
								"sha1": "7E0D7B570B9A93D80F1C5F4C6F70A80FF947BFE8"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "8k"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC3B"
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
			"name": "1 life for player 1",
			"codes": [
				[
					"PAOILIIA"
				]
			]
		},
		{
			"name": "1 life for player 2",
			"codes": [
				[
					"PAKSGIIA"
				]
			]
		},
		{
			"name": "Player 1 starts with 5 smart bombs",
			"codes": [
				[
					"IAXSGIPA"
				]
			]
		},
		{
			"name": "Player 2 starts with 5 smart bombs",
			"codes": [
				[
					"IAVIIIPA"
				]
			]
		},
		{
			"name": "Infinite lives for both players",
			"codes": [
				[
					"SXEKSNVK"
				]
			]
		},
		{
			"name": "Infinite smart bombs for both players",
			"codes": [
				[
					"NYVTLVGO"
				]
			]
		},
		{
			"name": "Keep cosmic weapons after losing a life",
			"codes": [
				[
					"GXEITSSE"
				]
			]
		},
		{
			"name": "Have 5 smart bombs on a new life",
			"codes": [
				[
					"IEESIIPA"
				]
			]
		},
		{
			"name": "Keep orbs after losing a life",
			"codes": [
				[
					"GXEILSSE",
					"GXKIOUSE"
				]
			]
		}
	]
};
