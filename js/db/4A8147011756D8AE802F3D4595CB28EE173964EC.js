this.NesDb = this.NesDb || {};

NesDb[ '4A8147011756D8AE802F3D4595CB28EE173964EC' ] = {
	"$": {
		"name": "Tiny Toon Adventures",
		"altname": "タイニートゥーンアドベンチャー",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "KON-RC860",
		"publisher": "Konami",
		"developer": "Konami",
		"region": "Japan",
		"players": "2",
		"date": "1991-12-20"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "91328C1D",
				"sha1": "4A8147011756D8AE802F3D4595CB28EE173964EC",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-05-13"
			},
			"board": [
				{
					"$": {
						"type": "KONAMI-VRC-4",
						"pcb": "352396",
						"mapper": "23"
					},
					"prg": [
						{
							"$": {
								"name": "RC860J00P",
								"size": "128k",
								"crc": "7FCC340A",
								"sha1": "DE0048CF06032CE82E8F187958CEFE53C8FA6F6D"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "RC860J00C",
								"size": "128k",
								"crc": "6CCA5E24",
								"sha1": "F11EAD67ABAC47751469969C794413B4F4B83AFD"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "VRC4"
							},
							"pin": [
								{
									"$": {
										"number": "3",
										"function": "PRG A3"
									}
								},
								{
									"$": {
										"number": "4",
										"function": "PRG A2"
									}
								}
							]
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
					"AAXKUYZA"
				]
			]
		},
		{
			"name": "Start with 6 lives",
			"codes": [
				[
					"IAXKUYZA"
				]
			]
		},
		{
			"name": "Start with 9 lives",
			"codes": [
				[
					"AAXKUYZE"
				]
			]
		},
		{
			"name": "1 life after continue",
			"codes": [
				[
					"AEXZNZZA"
				]
			]
		},
		{
			"name": "6 lives after continue",
			"codes": [
				[
					"IEXZNZZA"
				]
			]
		},
		{
			"name": "9 lives after continue",
			"codes": [
				[
					"AEXZNZZE"
				]
			]
		},
		{
			"name": "Slow down timer",
			"codes": [
				[
					"YYXIXXLU"
				]
			]
		},
		{
			"name": "Speed up timer",
			"codes": [
				[
					"YPXIXXLU"
				]
			]
		},
		{
			"name": "Infinite energy after collecting one heart",
			"codes": [
				[
					"SZOOSVVK"
				]
			]
		},
		{
			"name": "Infinite lives",
			"codes": [
				[
					"SZNOUNVK"
				]
			]
		},
		{
			"name": "Pick up more hearts",
			"codes": [
				[
					"AEEPPYPA"
				]
			]
		},
		{
			"name": "Start on level 2",
			"codes": [
				[
					"VASGOYSA",
					"XZXKNNOZ",
					"IAUGEYPA"
				]
			]
		},
		{
			"name": "Start on level 3",
			"codes": [
				[
					"VASGOYSA",
					"XZXKNNOZ",
					"ZAUGEYPE"
				]
			]
		},
		{
			"name": "Start on level 4",
			"codes": [
				[
					"VASGOYSA",
					"XZXKNNOZ",
					"YAUGEYPE"
				]
			]
		},
		{
			"name": "Start on level 5",
			"codes": [
				[
					"VASGOYSA",
					"XZXKNNOZ",
					"GPUGEYPA"
				]
			]
		}
	]
};
