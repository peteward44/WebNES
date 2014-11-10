this.NesDb = this.NesDb || {};

NesDb[ 'E9DDCFC47956FA55623621A2475BF6DF70489426' ] = {
	"$": {
		"name": "R.C. Pro-Am",
		"class": "Licensed",
		"catalog": "NES-PM-CAN",
		"publisher": "Nintendo",
		"developer": "Rare",
		"region": "Canada",
		"players": "1",
		"date": "1988-11-15"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"revision": "A",
				"crc": "AAED295C",
				"sha1": "E9DDCFC47956FA55623621A2475BF6DF70489426",
				"dump": "ok",
				"dumper": "_zane",
				"datedumped": "2007-12-29"
			},
			"board": [
				{
					"$": {
						"type": "NES-SEROM",
						"pcb": "NES-SEROM-02",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-PM-1 PRG",
								"size": "32k",
								"crc": "82CFDE25",
								"sha1": "4EB9ABE896E597F8ECABB4F044D8C4B545A51B11"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-PM-0 CHR",
								"size": "32k",
								"crc": "83C90D47",
								"sha1": "26917E1E016D2BE0FA48D766D332779AAE12B053"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1A"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "6113A"
							}
						}
					]
				}
			]
		}
	],
	"gameGenieCodes": [
		{
			"name": "Infinite continues",
			"codes": [
				[
					"AAEIPPPA"
				],
				[
					"AASIUAPA"
				]
			]
		},
		{
			"name": "No continues",
			"codes": [
				[
					"AEXEPPZA"
				],
				[
					"AAUAGZZA"
				]
			]
		},
		{
			"name": "5 continues",
			"codes": [
				[
					"IEXEPPZA"
				],
				[
					"IAUAGZZA"
				]
			]
		},
		{
			"name": "8 continues",
			"codes": [
				[
					"AEXEPPZE"
				],
				[
					"AAUAGZZE"
				]
			]
		},
		{
			"name": "Max turbo on first pick-up",
			"codes": [
				[
					"GEUGAPPA"
				],
				[
					"GAOGOAPA"
				]
			]
		},
		{
			"name": "Max tires on first pick-up",
			"codes": [
				[
					"GEKKGPPA"
				],
				[
					"GAXKSAPA"
				]
			]
		},
		{
			"name": "Max speed on first pick-up",
			"codes": [
				[
					"GAVGIPPA"
				],
				[
					"GEKGTYPA"
				]
			]
		},
		{
			"name": "Double turbo on first pick-up",
			"codes": [
				[
					"ZEUGAPPA"
				],
				[
					"ZAOGOAPA"
				]
			]
		},
		{
			"name": "Double tires on first pick-up",
			"codes": [
				[
					"ZEKKGPPA"
				],
				[
					"ZAXKSAPA"
				]
			]
		},
		{
			"name": "Double speed on first pick-up",
			"codes": [
				[
					"ZAVGIPPA"
				],
				[
					"ZEKGTYPA"
				]
			]
		},
		{
			"name": "Computer cars go crazy!",
			"codes": [
				[
					"SXVLGZAK"
				],
				[
					"SZKLOPAK"
				]
			]
		}
	]
};
