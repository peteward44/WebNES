this.NesDb = this.NesDb || {};

NesDb[ 'B0F6CAF1292865C998B6A4A93DAE3E66B7D00C39' ] = {
	"$": {
		"name": "Qix",
		"class": "Licensed",
		"catalog": "NES-QX-USA",
		"publisher": "Taito",
		"developer": "Novotrade",
		"region": "USA",
		"players": "2",
		"date": "1991-01"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "95E4E594",
				"sha1": "B0F6CAF1292865C998B6A4A93DAE3E66B7D00C39",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-09-17"
			},
			"board": [
				{
					"$": {
						"type": "NES-SNROM",
						"pcb": "NES-SNROM-05",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-QX-0 PRG",
								"size": "128k",
								"crc": "95E4E594",
								"sha1": "B0F6CAF1292865C998B6A4A93DAE3E66B7D00C39"
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
			"name": "1 life for player 1",
			"codes": [
				[
					"PEEAPZGA"
				]
			]
		},
		{
			"name": "1 life for player 2",
			"codes": [
				[
					"PEEEAZGA"
				]
			]
		},
		{
			"name": "Start on Level 5, player 1 game",
			"codes": [
				[
					"IANAZZPA"
				]
			]
		},
		{
			"name": "Start on Level 10, player 1 game",
			"codes": [
				[
					"ZANAZZPE"
				]
			]
		},
		{
			"name": "Start on Level 20, player 1 game",
			"codes": [
				[
					"GPNAZZPA"
				]
			]
		},
		{
			"name": "Start on Level 5, player 2 game",
			"codes": [
				[
					"IEEEGZPA"
				]
			]
		},
		{
			"name": "Start on Level 10, player 2 game",
			"codes": [
				[
					"ZEEEGZPE"
				]
			]
		},
		{
			"name": "Start on Level 20, player 2 game",
			"codes": [
				[
					"GOEEGZPA"
				]
			]
		}
	]
};
