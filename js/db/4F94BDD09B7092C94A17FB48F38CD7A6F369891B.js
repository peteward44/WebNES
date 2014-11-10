this.NesDb = this.NesDb || {};

NesDb[ '4F94BDD09B7092C94A17FB48F38CD7A6F369891B' ] = {
	"$": {
		"name": "Gremlins 2: The New Batch",
		"class": "Licensed",
		"catalog": "NES-2Z-ITA",
		"publisher": "Sunsoft",
		"developer": "Sunsoft",
		"region": "Italy",
		"players": "1",
		"date": "1991-02-21"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-A",
				"crc": "2B20B022",
				"sha1": "4F94BDD09B7092C94A17FB48F38CD7A6F369891B",
				"dump": "ok",
				"dumper": "Mark_K",
				"datedumped": "2011-12-05"
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
								"name": "PAL-2Z-0 PRG",
								"size": "128k",
								"crc": "0E2FCB2E",
								"sha1": "0FBC4F055DF6FCE1013AA075694C14857FFDB56B"
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
								"type": "3197A"
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
