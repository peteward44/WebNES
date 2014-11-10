this.NesDb = this.NesDb || {};

NesDb[ '789B550C09671C668E706BA0BB4F81186585CBC6' ] = {
	"$": {
		"name": "Captain Planet and the Planeteers",
		"class": "Licensed",
		"catalog": "NES-5C-USA",
		"publisher": "Mindscape",
		"developer": "Gray Matter",
		"region": "USA",
		"players": "1",
		"date": "1991-09"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "0B404915",
				"sha1": "789B550C09671C668E706BA0BB4F81186585CBC6",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-03-09"
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
								"name": "NES-5C-0 PRG",
								"size": "128k",
								"crc": "C23A56DA",
								"sha1": "90548EE21CBE2C2BB965294F16D7C45FFCB96114"
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
