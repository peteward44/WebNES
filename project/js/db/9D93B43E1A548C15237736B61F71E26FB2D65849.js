this.NesDb = this.NesDb || {};

NesDb[ '9D93B43E1A548C15237736B61F71E26FB2D65849' ] = {
	"$": {
		"name": "Chip 'n Dale Rescue Rangers 2, Disney's",
		"class": "Licensed",
		"catalog": "NES-DV-USA",
		"publisher": "Capcom",
		"developer": "Capcom",
		"region": "USA",
		"players": "2",
		"date": "1994-01"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"prototype": "1",
				"crc": "CC6CA4DC",
				"sha1": "9D93B43E1A548C15237736B61F71E26FB2D65849",
				"dump": "ok",
				"dumper": "TheRedEye",
				"datedumped": "2012-04-22"
			},
			"board": [
				{
					"$": {
						"type": "NES-SKEPROM",
						"pcb": "NES-SKEPROM-01",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "RR2-M P CAPCOM",
								"size": "128k",
								"crc": "302D9FE0",
								"sha1": "B3DD3EE763D5F5E54E54D85C10F45268D7DEC4EB"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "RR2-M C CAPCOM",
								"size": "128k",
								"crc": "A0C30578",
								"sha1": "C49107F8280C56FC3AC72D4E8C80E20B4ED4AD58"
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
			"name": "Both start with 1 life",
			"codes": [
				[
					"PEUYIILA"
				]
			]
		},
		{
			"name": "Both start with 2 lives",
			"codes": [
				[
					"ZEUYIILA"
				]
			]
		},
		{
			"name": "Both start with 4 lives",
			"codes": [
				[
					"GEUYIILA"
				]
			]
		},
		{
			"name": "Both start with 5 lives",
			"codes": [
				[
					"IEUYIILA"
				]
			]
		},
		{
			"name": "Almost infinite lives--both players",
			"codes": [
				[
					"GXKZKTVI"
				]
			]
		},
		{
			"name": "Both start with 1 heart",
			"codes": [
				[
					"PEOYZILA"
				]
			]
		},
		{
			"name": "Both start with 2 hearts",
			"codes": [
				[
					"ZEOYZILA"
				]
			]
		},
		{
			"name": "Both start with 4 hearts",
			"codes": [
				[
					"GEOYZILA"
				]
			]
		},
		{
			"name": "Both start with 5 hearts",
			"codes": [
				[
					"IEOYZILA"
				]
			]
		},
		{
			"name": "Infinite hearts--both",
			"codes": [
				[
					"OUXLLEVS"
				]
			]
		},
		{
			"name": "Start with 1 credit",
			"codes": [
				[
					"PANNAILA"
				]
			]
		},
		{
			"name": "Start with 2 credits",
			"codes": [
				[
					"ZANNAILA"
				]
			]
		},
		{
			"name": "Start with 6 credits",
			"codes": [
				[
					"TANNAILA"
				]
			]
		},
		{
			"name": "Start with 9 credits",
			"codes": [
				[
					"PANNAILE"
				]
			]
		},
		{
			"name": "Start with 255 credits (ignore the counter)",
			"codes": [
				[
					"NYNNAILE"
				]
			]
		},
		{
			"name": "Infinite credits",
			"codes": [
				[
					"OXUNGIVK"
				]
			]
		}
	]
};
