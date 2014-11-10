this.NesDb = this.NesDb || {};

NesDb[ '460BBE5F79BBB9A7526C5047974D17BB7CFE16C0' ] = {
	"$": {
		"name": "Ikari Warriors",
		"class": "Licensed",
		"catalog": "NES-IW-EEC",
		"publisher": "SNK",
		"developer": "SNK",
		"portdeveloper": "Micronics / Khaos",
		"region": "Europe",
		"players": "2",
		"date": "1989-08-10"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "538218B2",
				"sha1": "460BBE5F79BBB9A7526C5047974D17BB7CFE16C0",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2008-02-15"
			},
			"board": [
				{
					"$": {
						"type": "NES-UNROM",
						"pcb": "NES-UN-ROM-07",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-IW-0 PRG",
								"size": "128k",
								"crc": "538218B2",
								"sha1": "460BBE5F79BBB9A7526C5047974D17BB7CFE16C0"
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
								"h": "0",
								"v": "1"
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
					"SXSNZTVI"
				]
			]
		},
		{
			"name": "Infinite missiles for tank",
			"codes": [
				[
					"SXXNVUVS"
				]
			]
		},
		{
			"name": "Infinite bullets",
			"codes": [
				[
					"SZONZSVS"
				]
			]
		},
		{
			"name": "Infinite grenades",
			"codes": [
				[
					"SXEYZSVS"
				]
			]
		},
		{
			"name": "Start with 1 life",
			"codes": [
				[
					"PAUYPTLA"
				]
			]
		},
		{
			"name": "Start with 6 lives",
			"codes": [
				[
					"TAUYPTLA"
				]
			]
		},
		{
			"name": "Start with 9 lives",
			"codes": [
				[
					"PAUYPTLE"
				]
			]
		},
		{
			"name": "Start with 50 bullets",
			"codes": [
				[
					"ZUNNLZLT"
				]
			]
		},
		{
			"name": "Start with 99 grenades",
			"codes": [
				[
					"LTEYALZL"
				]
			]
		},
		{
			"name": "Start with 25 grenades",
			"codes": [
				[
					"PPEYALZU"
				]
			]
		}
	]
};
