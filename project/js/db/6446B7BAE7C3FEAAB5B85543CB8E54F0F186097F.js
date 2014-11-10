this.NesDb = this.NesDb || {};

NesDb[ '6446B7BAE7C3FEAAB5B85543CB8E54F0F186097F' ] = {
	"$": {
		"name": "Gremlins 2: The New Batch",
		"class": "Licensed",
		"catalog": "NES-2Z-USA",
		"publisher": "Sunsoft",
		"developer": "Sunsoft",
		"region": "USA",
		"players": "1",
		"date": "1990-10"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "0ED96F42",
				"sha1": "6446B7BAE7C3FEAAB5B85543CB8E54F0F186097F",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-01-20"
			},
			"board": [
				{
					"$": {
						"type": "NES-TLROM",
						"pcb": "NES-TLROM-03",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "NES-2Z-0 PRG",
								"size": "128k",
								"crc": "EDDD580B",
								"sha1": "FA9AAC9E7D390F1EA4DD7C5D25C8C63471A70979"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-2Z-0 CHR",
								"size": "256k",
								"crc": "59C28B7F",
								"sha1": "3092317B658340B566B696CDC3B3A21EB377D290"
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
			"name": "Start with 5 lives",
			"codes": [
				[
					"GAEGEAAA"
				]
			]
		},
		{
			"name": "Start with 10 lives",
			"codes": [
				[
					"PAEGEAAE"
				]
			]
		},
		{
			"name": "Start with 3 balloons",
			"codes": [
				[
					"LAEGSAPA"
				]
			]
		},
		{
			"name": "Start with 6 balloons",
			"codes": [
				[
					"TAEGSAPA"
				]
			]
		},
		{
			"name": "Infinite lives",
			"codes": [
				[
					"SZNETEVK"
				]
			]
		},
		{
			"name": "Infinite balloons",
			"codes": [
				[
					"SZXEUXVK"
				]
			]
		},
		{
			"name": "Don't take damage from monsters (or harmful surfaces)",
			"codes": [
				[
					"SXKEZPVG"
				]
			]
		},
		{
			"name": "Start with only 1 heart",
			"codes": [
				[
					"ZAEKXATA",
					"ZEEELATA"
				]
			]
		},
		{
			"name": "Start with 4 hearts",
			"codes": [
				[
					"AAEKXATE",
					"AEEELATE"
				]
			]
		}
	]
};
