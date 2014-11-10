this.NesDb = this.NesDb || {};

NesDb[ '3E7B1F68A8E758D34252E4F2755D392F987824EA' ] = {
	"$": {
		"name": "Captain Planet and the Planeteers",
		"class": "Licensed",
		"catalog": "NES-5C-UKV",
		"publisher": "Mindscape",
		"developer": "Gray Matter",
		"region": "United Kingdom",
		"players": "1",
		"date": "1992-08-20"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-A",
				"crc": "8D901FAD",
				"sha1": "3E7B1F68A8E758D34252E4F2755D392F987824EA",
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
								"name": "PAL-5C-0 PRG",
								"size": "128k",
								"crc": "40A458F0",
								"sha1": "189CAFA68431C1DE88BDFBCF7099CE223D6A3197"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-5C-0 CHR",
								"size": "128k",
								"crc": "8D92550D",
								"sha1": "322063ABC983CB9D2C4D22EED388090DE597F1B5"
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
			"name": "Start with 2 lives instead of 5, outside levels",
			"codes": [
				[
					"PENVIGGA"
				]
			]
		},
		{
			"name": "Start with 10 lives, outside levels",
			"codes": [
				[
					"PENVIGGE"
				]
			]
		},
		{
			"name": "Infinite lives, outside levels",
			"codes": [
				[
					"SXNLYVVK"
				]
			]
		},
		{
			"name": "Infinite lives, inside levels",
			"codes": [
				[
					"SZSUGVVK"
				]
			]
		},
		{
			"name": "Start with 10 lives, inside levels",
			"codes": [
				[
					"PAETITGE"
				]
			]
		},
		{
			"name": "Start with 2 lives, inside levels",
			"codes": [
				[
					"PAETITGA"
				]
			]
		},
		{
			"name": "Start inside level 1 instead of outside.",
			"codes": [
				[
					"AANVAEGZ"
				]
			]
		},
		{
			"name": "Infinite power, outside levels",
			"codes": [
				[
					"SZNXGXVK",
					"SZVXPKVK"
				]
			]
		},
		{
			"name": "Infinite power, inside levels",
			"codes": [
				[
					"SXXXEUVK",
					"SZEUGKVK"
				]
			]
		}
	]
};
