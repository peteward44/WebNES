this.NesDb = this.NesDb || {};

NesDb[ '76D29C013CC6B09AA71875B9A458FFE92FF885F1' ] = {
	"$": {
		"name": "Bad Street Brawler",
		"class": "Licensed",
		"catalog": "NES-BV-USA",
		"publisher": "Mattel",
		"developer": "Beam Software",
		"region": "USA",
		"players": "2",
		"date": "1989-09"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "powerglove",
						"name": "Power Glove"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "1AE7B933",
				"sha1": "76D29C013CC6B09AA71875B9A458FFE92FF885F1",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-07-03"
			},
			"board": [
				{
					"$": {
						"type": "NES-SGROM",
						"pcb": "NES-SGROM-03",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-BV-0 PRG",
								"size": "128k",
								"crc": "1AE7B933",
								"sha1": "76D29C013CC6B09AA71875B9A458FFE92FF885F1"
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
			"name": "Infinite lives",
			"codes": [
				[
					"OZOIYPVK"
				]
			]
		},
		{
			"name": "Start with 1 life",
			"codes": [
				[
					"PAXITALA"
				]
			]
		},
		{
			"name": "Start with 6 lives",
			"codes": [
				[
					"TAXITALA"
				]
			]
		},
		{
			"name": "Start with 9 lives",
			"codes": [
				[
					"PAXITALE"
				]
			]
		},
		{
			"name": "Start on level 5",
			"codes": [
				[
					"GEUZZYAA"
				]
			]
		},
		{
			"name": "Start on level 10",
			"codes": [
				[
					"PEUZZYAE"
				]
			]
		},
		{
			"name": "Start on level 15",
			"codes": [
				[
					"TEUZZYAE"
				]
			]
		},
		{
			"name": "Don't die at time out",
			"codes": [
				[
					"SZOITNVK"
				]
			]
		}
	]
};
