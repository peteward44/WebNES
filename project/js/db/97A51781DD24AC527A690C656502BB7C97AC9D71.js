this.NesDb = this.NesDb || {};

NesDb[ '97A51781DD24AC527A690C656502BB7C97AC9D71' ] = {
	"$": {
		"name": "Robo Warrior",
		"class": "Licensed",
		"catalog": "NES-RR-EEC",
		"publisher": "Jaleco",
		"developer": "Hudson Soft",
		"region": "Europe",
		"players": "1",
		"date": "1989-09-27"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "99A28276",
				"sha1": "97A51781DD24AC527A690C656502BB7C97AC9D71",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2007-12-19"
			},
			"board": [
				{
					"$": {
						"type": "NES-UNROM",
						"pcb": "NES-UNROM-08",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-RR-0 PRG",
								"size": "128k",
								"crc": "99A28276",
								"sha1": "97A51781DD24AC527A690C656502BB7C97AC9D71"
							}
						}
					],
					"vram": [
						{
							"$": {
								"size": "8k"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx161"
							}
						},
						{
							"$": {
								"type": "74xx32"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "3195A"
							}
						}
					],
					"pad": [
						{
							"$": {
								"h": "1",
								"v": "0"
							}
						}
					]
				}
			]
		}
	],
	"gameGenieCodes": [
		{
			"name": "Don't take damage from bomb blast",
			"codes": [
				[
					"GZUNYXTK"
				]
			]
		},
		{
			"name": "Don't take damage from monsters/stops power drain",
			"codes": [
				[
					"GZNNIXTK"
				]
			]
		},
		{
			"name": "Gain 5 super bombs on pick-up",
			"codes": [
				[
					"IAVTPSZA"
				]
			]
		},
		{
			"name": "Gain 20 super bombs on pick-up",
			"codes": [
				[
					"GPVTPSZA"
				]
			]
		},
		{
			"name": "Never use up super bombs",
			"codes": [
				[
					"SZKTYPVG"
				]
			]
		},
		{
			"name": "Start with 5 of everything!",
			"codes": [
				[
					"IEVKLPAA"
				]
			]
		},
		{
			"name": "Start with 10 of everything!",
			"codes": [
				[
					"ZEVKLPAE"
				]
			]
		},
		{
			"name": "Set firing range to 5",
			"codes": [
				[
					"IANGAPPA"
				]
			]
		},
		{
			"name": "Set firing range to 10",
			"codes": [
				[
					"ZANGAPPE"
				]
			]
		},
		{
			"name": "Start with Defense Level at 5",
			"codes": [
				[
					"IEVGIPPA"
				]
			]
		},
		{
			"name": "Start with Defense Level at 8",
			"codes": [
				[
					"AEVGIPPE"
				]
			]
		}
	]
};
