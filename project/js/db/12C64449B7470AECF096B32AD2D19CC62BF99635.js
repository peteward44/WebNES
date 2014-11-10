this.NesDb = this.NesDb || {};

NesDb[ '12C64449B7470AECF096B32AD2D19CC62BF99635' ] = {
	"$": {
		"name": "Tetris 2",
		"class": "Licensed",
		"catalog": "NES-TS-USA",
		"publisher": "Nintendo",
		"developer": "TOSE Software",
		"region": "USA",
		"players": "2",
		"date": "1993-10"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "9C537919",
				"sha1": "12C64449B7470AECF096B32AD2D19CC62BF99635",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-12-14"
			},
			"board": [
				{
					"$": {
						"type": "NES-TSROM",
						"pcb": "NES-TSROM-08",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "NES-TS-0 PRG",
								"size": "128k",
								"crc": "07299793",
								"sha1": "F674EE3C6241124CFF7E695A219962B9FBB28408"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-TS-0 CHR",
								"size": "128k",
								"crc": "C5C4DA1E",
								"sha1": "97D2CE32711EB4983A0BC8C9E1133E9A69B8EB67"
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
			"name": "1 player: Speed doesn't increase",
			"codes": [
				[
					"AAUEUSSO"
				]
			]
		},
		{
			"name": "1 player: Speed increases much faster",
			"codes": [
				[
					"VNUEUSSO"
				]
			]
		},
		{
			"name": "1 player: Start and stay at speed of 25",
			"codes": [
				[
					"TEXAKYPA"
				]
			]
		},
		{
			"name": "1 player: Max speed is 2",
			"codes": [
				[
					"ZEKESSPP",
					"PESAOSAP"
				]
			]
		},
		{
			"name": "1 player: Max speed is 10",
			"codes": [
				[
					"ZEKESSPO",
					"PESAOSAO"
				]
			]
		},
		{
			"name": "1 player: Max speed is 15",
			"codes": [
				[
					"YEKESSPO",
					"TESAOSAO"
				]
			]
		},
		{
			"name": "1 player: Max speed is 20",
			"codes": [
				[
					"GOKESSPP",
					"LOSAOSAP"
				]
			]
		},
		{
			"name": "1 player vs 2 player or 1 player vs CPU: Every round starts with 4 fixed blocks",
			"codes": [
				[
					"OZNETPOU",
					"PANEYPAA"
				]
			]
		},
		{
			"name": "1 player vs 2 player or 1 player vs CPU: Every round starts with 10 fixed blocks",
			"codes": [
				[
					"OZNETPOU",
					"YANEYPAA"
				]
			]
		},
		{
			"name": "1 player vs 2 player or 1 player vs CPU: Every round starts with 15 fixed blocks",
			"codes": [
				[
					"OZNETPOU",
					"GANEYPAE"
				]
			]
		},
		{
			"name": "1 player vs 2 player or 1 player vs CPU: Every round starts with 20 fixed blocks",
			"codes": [
				[
					"OZNETPOU",
					"PPNEYPAA"
				]
			]
		},
		{
			"name": "Cannot pause game with START button",
			"codes": [
				[
					"AAVZVYEA"
				]
			]
		},
		{
			"name": "Don't hide remaining pieces during pause",
			"codes": [
				[
					"AVEXOYXZ"
				]
			]
		}
	]
};
