this.NesDb = this.NesDb || {};

NesDb[ '20D7C80529312BCC24C4FBD8F727A304AFFF3102' ] = {
	"$": {
		"name": "Bases Loaded 4",
		"class": "Licensed",
		"catalog": "NES-BD-USA",
		"publisher": "Jaleco",
		"developer": "TOSE Software",
		"region": "USA",
		"players": "2",
		"date": "1993-04"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "28F9B41F",
				"sha1": "20D7C80529312BCC24C4FBD8F727A304AFFF3102",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-10-10"
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
								"name": "NES-BD-0 PRG",
								"size": "256k",
								"crc": "A025344D",
								"sha1": "28DD5FE50DD776EC31F3ED15538F3A38056F2E03"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-BD-0 CHR",
								"size": "128k",
								"crc": "920BCBFF",
								"sha1": "4F0F79C483118ECD2D9F9E0DD794EB73B481972A"
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
			"name": "Balls do not count",
			"codes": [
				[
					"SZNXGUVV"
				]
			]
		},
		{
			"name": "Strikes do not count",
			"codes": [
				[
					"SXOXYUVV"
				]
			]
		},
		{
			"name": "2 strikes and you're out",
			"codes": [
				[
					"PEOXGLZA"
				]
			]
		},
		{
			"name": "4 strikes and you're out",
			"codes": [
				[
					"LEOXGLZA"
				]
			]
		},
		{
			"name": "1 ball and you walk",
			"codes": [
				[
					"AANZGLLA"
				]
			]
		},
		{
			"name": "2 balls and you walk",
			"codes": [
				[
					"PANZGLLA"
				]
			]
		},
		{
			"name": "3 balls and you walk",
			"codes": [
				[
					"ZANZGLLA"
				]
			]
		},
		{
			"name": "2-player mode only: Some batters start with count of 1 and 1",
			"codes": [
				[
					"PANPUTAA",
					"PEOETGAA"
				]
			]
		},
		{
			"name": "2-player mode only: Some batters start with count of 2 and 2",
			"codes": [
				[
					"ZANPUTAA",
					"ZEOETGAA"
				]
			]
		}
	]
};
