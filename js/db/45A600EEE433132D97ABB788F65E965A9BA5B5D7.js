this.NesDb = this.NesDb || {};

NesDb[ '45A600EEE433132D97ABB788F65E965A9BA5B5D7' ] = {
	"$": {
		"name": "Power Blade",
		"class": "Licensed",
		"catalog": "NES-7T-FRG",
		"publisher": "Taito",
		"developer": "Natsume",
		"region": "Germany",
		"players": "1",
		"date": "1992-01-23"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "D0DF525E",
				"sha1": "45A600EEE433132D97ABB788F65E965A9BA5B5D7",
				"dump": "ok",
				"dumper": "piteta",
				"datedumped": "2011-05-21"
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
								"name": "PAL-7T-0 PRG",
								"size": "128k",
								"crc": "DFB502B0",
								"sha1": "40D7DC8191E7B9AF497E57399741C22107D932B0"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-7T-0 CHR",
								"size": "128k",
								"crc": "344BE4A6",
								"sha1": "2894292544F4315DF44CDA1BDC96047453DA03E8"
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
			"name": "1 life",
			"codes": [
				[
					"AAXYZYZA"
				]
			]
		},
		{
			"name": "6 lives",
			"codes": [
				[
					"IAXYZYZA"
				]
			]
		},
		{
			"name": "9 lives",
			"codes": [
				[
					"AAXYZYZE"
				]
			]
		},
		{
			"name": "Infinite lives",
			"codes": [
				[
					"SZSIAAVG"
				]
			]
		},
		{
			"name": "Take minimum damage",
			"codes": [
				[
					"SZKAKXOU"
				]
			]
		},
		{
			"name": "Don't take damage from monsters!",
			"codes": [
				[
					"OTKESZSV"
				]
			]
		},
		{
			"name": "Mega jump",
			"codes": [
				[
					"AZXSAVAU"
				]
			]
		},
		{
			"name": "Don't lose boomerang strength when you die",
			"codes": [
				[
					"GZUITAVG",
					"GZVITASA"
				]
			]
		},
		{
			"name": "Don't lose multi-boomerangs when you die",
			"codes": [
				[
					"GZUSGAVG",
					"GZVSZASA"
				]
			]
		}
	]
};
