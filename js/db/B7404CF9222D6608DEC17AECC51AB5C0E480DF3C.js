this.NesDb = this.NesDb || {};

NesDb[ 'B7404CF9222D6608DEC17AECC51AB5C0E480DF3C' ] = {
	"$": {
		"name": "Adventures of Lolo",
		"class": "Licensed",
		"catalog": "NES-AV-EEC",
		"publisher": "HAL Laboratory",
		"developer": "HAL Laboratory",
		"region": "Europe",
		"players": "1",
		"date": "1990-12-28"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "DF4EDC13",
				"sha1": "B7404CF9222D6608DEC17AECC51AB5C0E480DF3C",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2008-01-22"
			},
			"board": [
				{
					"$": {
						"type": "NES-SEROM",
						"pcb": "NES-SEROM-04",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-AV-0 PRG",
								"size": "32k",
								"crc": "8E773E04",
								"sha1": "FC08BB50DEA966294A78895BB26715D671D53009"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PAL-AV-0 CHR",
								"size": "32k",
								"crc": "1F9817E9",
								"sha1": "F0CCDDA257B44D353F978315DF3E908A3F10FB0C"
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
								"type": "3195A"
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
					"SXOPSPVG"
				]
			]
		},
		{
			"name": "1 life for Lolo",
			"codes": [
				[
					"PEKPOAIA"
				]
			]
		},
		{
			"name": "9 lives for Lolo",
			"codes": [
				[
					"PEKPOAIE"
				]
			]
		}
	]
};
