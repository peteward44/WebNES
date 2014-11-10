this.NesDb = this.NesDb || {};

NesDb[ 'E4D7FBE95FC5FA25BDCE3F0213D2051B1D013A0C' ] = {
	"$": {
		"name": "Tom & Jerry",
		"class": "Licensed",
		"catalog": "NES-5Y-USA",
		"publisher": "Hi Tech Expressions",
		"developer": "Software Creations",
		"region": "USA",
		"players": "1",
		"date": "1991-12"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "D63B30F5",
				"sha1": "E4D7FBE95FC5FA25BDCE3F0213D2051B1D013A0C",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-10-05"
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
								"name": "NES-5Y-0 PRG",
								"size": "128k",
								"crc": "D4A70D2B",
								"sha1": "CBD1E32669CA7E91A46B8E6F2EEA235C0BF60005"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-5Y-0 CHR",
								"size": "128k",
								"crc": "42F91F99",
								"sha1": "B9438CF2D5842432F2F7D65BE101FA823DA87161"
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
			"name": "Start with 1 life",
			"codes": [
				[
					"PASNVZLA"
				]
			]
		},
		{
			"name": "Start with 6 lives",
			"codes": [
				[
					"TASNVZLA"
				]
			]
		},
		{
			"name": "Start with 9 lives",
			"codes": [
				[
					"PASNVZLE"
				]
			]
		},
		{
			"name": "Infinite lives",
			"codes": [
				[
					"SXSNYEVK"
				]
			]
		},
		{
			"name": "Infinite energy",
			"codes": [
				[
					"AEXYPAPA"
				]
			]
		},
		{
			"name": "Minimum energy--one touch kills!",
			"codes": [
				[
					"LEXYPAPA"
				]
			]
		},
		{
			"name": "Start on world 2",
			"codes": [
				[
					"AEVYKPAE"
				]
			]
		},
		{
			"name": "Start on world 3",
			"codes": [
				[
					"AOVYKPAA"
				]
			]
		},
		{
			"name": "Start on world 4",
			"codes": [
				[
					"AOVYKPAE"
				]
			]
		},
		{
			"name": "Start on world 5",
			"codes": [
				[
					"AXVYKPAA"
				]
			]
		}
	]
};
