this.NesDb = this.NesDb || {};

NesDb[ '075C7EE0179B61D5F87B597B1144FB42943587A5' ] = {
	"$": {
		"name": "Airwolf",
		"class": "Licensed",
		"catalog": "NES-AF-EEC",
		"publisher": "Acclaim",
		"developer": "Imagineering",
		"region": "Europe",
		"players": "1",
		"date": "1990-12-06"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "4D345422",
				"sha1": "075C7EE0179B61D5F87B597B1144FB42943587A5",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2007-09-04"
			},
			"board": [
				{
					"$": {
						"type": "NES-SHROM",
						"pcb": "NES-SHROM-05",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-AF-0 PRG",
								"size": "32k",
								"crc": "F71A9931",
								"sha1": "3EDBADCDED4597D7216E57E129FECD9A754C48D1"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PAL-AF-0 CHR",
								"size": "128k",
								"crc": "7EAF3BB1",
								"sha1": "C76A2CA5F120A4F3A12D9DD5BD48ED6338EDDEE2"
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
			"name": "Start with 1 life",
			"codes": [
				[
					"PAUGVILA"
				]
			]
		},
		{
			"name": "Start with 6 lives",
			"codes": [
				[
					"TAUGVILA"
				]
			]
		},
		{
			"name": "Start with 9 lives",
			"codes": [
				[
					"PAUGVILE"
				]
			]
		},
		{
			"name": "Start at last mission reached",
			"codes": [
				[
					"PVXKKKLI"
				]
			]
		},
		{
			"name": "Start with 30 missiles",
			"codes": [
				[
					"TPVAPXYE"
				]
			]
		},
		{
			"name": "Start with 45 missiles",
			"codes": [
				[
					"IZVAPXYE"
				]
			]
		},
		{
			"name": "Start with infinite missiles",
			"codes": [
				[
					"GXSZAPVG"
				]
			]
		},
		{
			"name": "Sets missiles to 5 when you refuel",
			"codes": [
				[
					"IEVAISYA"
				]
			]
		},
		{
			"name": "Sets missiles to 30 when you refuel",
			"codes": [
				[
					"TOVAISYE"
				]
			]
		}
	]
};
