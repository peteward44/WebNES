this.NesDb = this.NesDb || {};

NesDb[ 'D5A685D4E79B84FB19542860F5371AB449905E78' ] = {
	"$": {
		"name": "Paperboy 2",
		"class": "Licensed",
		"catalog": "NES-Y7-NOE",
		"publisher": "Mindscape",
		"developer": "Tengen",
		"region": "Germany",
		"players": "2",
		"date": "1992-06-06"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "509E6032",
				"sha1": "D5A685D4E79B84FB19542860F5371AB449905E78",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2007-11-02"
			},
			"board": [
				{
					"$": {
						"type": "NES-UOROM",
						"pcb": "NES-UOROM-02",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-Y7-0 PRG",
								"size": "256k",
								"crc": "509E6032",
								"sha1": "D5A685D4E79B84FB19542860F5371AB449905E78"
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
			"name": "Start with 1 life--Paperboy only",
			"codes": [
				[
					"PEOUYGIA"
				]
			]
		},
		{
			"name": "Start with 3 lives--Paperboy only",
			"codes": [
				[
					"LEOUYGIA"
				]
			]
		},
		{
			"name": "Start with 10 lives--Paperboy only",
			"codes": [
				[
					"ZEOUYGIE"
				]
			]
		},
		{
			"name": "Infinite lives",
			"codes": [
				[
					"AAKEZLPA"
				]
			]
		},
		{
			"name": "Start with 15 papers",
			"codes": [
				[
					"YAELGVZE"
				]
			]
		},
		{
			"name": "Start with 20 papers",
			"codes": [
				[
					"GPELGVZA"
				]
			]
		},
		{
			"name": "Infinite papers",
			"codes": [
				[
					"AEVPNLPA"
				]
			]
		},
		{
			"name": "Pick up 5 papers",
			"codes": [
				[
					"IEOAEOZA"
				]
			]
		},
		{
			"name": "Pick up 15 papers",
			"codes": [
				[
					"YEOAEOZE"
				]
			]
		},
		{
			"name": "Pick up 20 papers",
			"codes": [
				[
					"GOOAEOZA"
				]
			]
		}
	]
};
