this.NesDb = this.NesDb || {};

NesDb[ '0305A626ACDC6523FF168725C402C6F81EC5B106' ] = {
	"$": {
		"name": "Wizards & Warriors",
		"class": "Licensed",
		"catalog": "NES-WW-USA",
		"publisher": "Acclaim",
		"developer": "Rare",
		"region": "USA",
		"players": "1",
		"date": "1987-12"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "505F9715",
				"sha1": "0305A626ACDC6523FF168725C402C6F81EC5B106",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-09-30"
			},
			"board": [
				{
					"$": {
						"type": "NES-ANROM",
						"pcb": "NES-ANROM-01",
						"mapper": "7"
					},
					"prg": [
						{
							"$": {
								"name": "NES-WW-0 PRG",
								"size": "128k",
								"crc": "505F9715",
								"sha1": "0305A626ACDC6523FF168725C402C6F81EC5B106"
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
								"type": "74xx02"
							}
						},
						{
							"$": {
								"type": "74xx161"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "6113"
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
					"GXVUZGVG"
				]
			]
		},
		{
			"name": "Infinite energy",
			"codes": [
				[
					"GZNVILST"
				]
			]
		},
		{
			"name": "Potions will last longer",
			"codes": [
				[
					"NTEINNYK"
				]
			]
		},
		{
			"name": "Gain half energy value from meat",
			"codes": [
				[
					"PEEVAGZA"
				]
			]
		},
		{
			"name": "Gain double energy value from meat",
			"codes": [
				[
					"GEEVAGZA"
				]
			]
		},
		{
			"name": "Start with 6 lives",
			"codes": [
				[
					"IAUUKAZA",
					"IAXGGAZA"
				]
			]
		},
		{
			"name": "Start with 9 lives",
			"codes": [
				[
					"AAUUKAZE",
					"AAXGGAZE"
				]
			]
		}
	]
};
