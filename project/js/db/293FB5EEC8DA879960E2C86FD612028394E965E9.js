this.NesDb = this.NesDb || {};

NesDb[ '293FB5EEC8DA879960E2C86FD612028394E965E9' ] = {
	"$": {
		"name": "Power Blade",
		"class": "Licensed",
		"catalog": "NES-7T-USA",
		"publisher": "Taito",
		"developer": "Natsume",
		"region": "USA",
		"players": "1",
		"date": "1991-03"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "5CF536F4",
				"sha1": "293FB5EEC8DA879960E2C86FD612028394E965E9",
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
								"name": "NES-7T-0 PRG",
								"size": "128k",
								"crc": "FAA957B1",
								"sha1": "612C4823ED588652A78017096A6D76DD8064807A"
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
