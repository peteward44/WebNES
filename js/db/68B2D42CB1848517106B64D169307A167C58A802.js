this.NesDb = this.NesDb || {};

NesDb[ '68B2D42CB1848517106B64D169307A167C58A802' ] = {
	"$": {
		"name": "Guardian Legend, The",
		"class": "Licensed",
		"catalog": "NES-GD-SCN",
		"publisher": "Nintendo",
		"developer": "Compile",
		"region": "Scandinavia",
		"players": "1",
		"date": "1992-02-20"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "FE907015",
				"sha1": "68B2D42CB1848517106B64D169307A167C58A802",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2007-05-16"
			},
			"board": [
				{
					"$": {
						"type": "NES-UNROM",
						"pcb": "NES-UNROM-09",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-GD-0 PRG",
								"size": "128k",
								"crc": "FE907015",
								"sha1": "68B2D42CB1848517106B64D169307A167C58A802"
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
			"name": "Infinite energy",
			"codes": [
				[
					"AAXTIUNY"
				]
			]
		},
		{
			"name": "Start with less energy",
			"codes": [
				[
					"AXVAIAAG"
				]
			]
		},
		{
			"name": "Start with more energy",
			"codes": [
				[
					"EEVAIAAG"
				]
			]
		},
		{
			"name": "Start on area 1",
			"codes": [
				[
					"PAKVELAA"
				]
			]
		},
		{
			"name": "Start on area 3",
			"codes": [
				[
					"LAKVELAA"
				]
			]
		},
		{
			"name": "Start on area 5",
			"codes": [
				[
					"IAKVELAA"
				]
			]
		},
		{
			"name": "Start on area 7",
			"codes": [
				[
					"YAKVELAA"
				]
			]
		},
		{
			"name": "Start on area 9",
			"codes": [
				[
					"PAKVELAE"
				]
			]
		},
		{
			"name": "Use up minimum shots",
			"codes": [
				[
					"OVOAKLSV",
					"PEOASLAP"
				]
			]
		},
		{
			"name": "Never use up shots",
			"codes": [
				[
					"GXOAKLST"
				]
			]
		}
	]
};
