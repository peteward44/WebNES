this.NesDb = this.NesDb || {};

NesDb[ 'B2662816D0367143D41A697B7B714F312E9AC125' ] = {
	"$": {
		"name": "Hillsfar, Advanced Dungeons & Dragons",
		"class": "Licensed",
		"catalog": "NES-QQ-USA",
		"publisher": "FCI",
		"developer": "Strategic Simulations",
		"region": "USA",
		"players": "1",
		"date": "1993-02"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "5DE61639",
				"sha1": "B2662816D0367143D41A697B7B714F312E9AC125",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-12-06"
			},
			"board": [
				{
					"$": {
						"type": "NES-SNROM",
						"pcb": "NES-SNROM-06",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-QQ-0 PRG",
								"size": "256k",
								"crc": "5DE61639",
								"sha1": "B2662816D0367143D41A697B7B714F312E9AC125"
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
