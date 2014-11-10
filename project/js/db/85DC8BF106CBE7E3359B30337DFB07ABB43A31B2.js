this.NesDb = this.NesDb || {};

NesDb[ '85DC8BF106CBE7E3359B30337DFB07ABB43A31B2' ] = {
	"$": {
		"name": "Hillsfar, Advanced Dungeons & Dragons",
		"altname": "ＡＤ＆Ｄ ヒルズファー",
		"class": "Licensed",
		"catalog": "PNF-QQ (R78V5936)",
		"publisher": "Pony Canyon",
		"developer": "Strategic Simulations",
		"region": "Japan",
		"players": "1",
		"date": "1991-03-21"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "2C33161D",
				"sha1": "85DC8BF106CBE7E3359B30337DFB07ABB43A31B2",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-01"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SNROM",
						"pcb": "HVC-SNROM-09",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "PNF-QQ-0 PRG",
								"size": "256k",
								"crc": "2C33161D",
								"sha1": "85DC8BF106CBE7E3359B30337DFB07ABB43A31B2"
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
					]
				}
			]
		}
	],
	"gameGenieCodes": [
		{
			"name": "Faster timer when lock-picking",
			"codes": [
				[
					"AOULILAZ"
				]
			]
		},
		{
			"name": "Slower timer when lock-picking",
			"codes": [
				[
					"ASULILAZ"
				]
			]
		},
		{
			"name": "Very slow timer when lock-picking",
			"codes": [
				[
					"ENULILAZ"
				]
			]
		},
		{
			"name": "Infinite knock rings",
			"codes": [
				[
					"SXKUTSVK",
					"AEKUISAI"
				]
			]
		},
		{
			"name": "Start with 50% less gold (only work on characters you create)",
			"codes": [
				[
					"IEVANKZA"
				]
			]
		},
		{
			"name": "Start with 50% more gold (only work on characters you create)",
			"codes": [
				[
					"YEVANKZE"
				]
			]
		},
		{
			"name": "Start with 100% more gold (only work on characters you create)",
			"codes": [
				[
					"GOVANKZA"
				]
			]
		}
	]
};
