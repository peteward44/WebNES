this.NesDb = this.NesDb || {};

NesDb[ 'CF3EE859EDAC2D22B508F71242D03BF4E8F70249' ] = {
	"$": {
		"name": "Rampage",
		"class": "Licensed",
		"catalog": "NES-RP-USA",
		"publisher": "Data East",
		"developer": "Data East",
		"region": "USA",
		"players": "2",
		"date": "1988-12"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "263AC8A0",
				"sha1": "CF3EE859EDAC2D22B508F71242D03BF4E8F70249",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-03-10"
			},
			"board": [
				{
					"$": {
						"type": "NES-TFROM",
						"pcb": "NES-TFROM-01",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "NES-RP-0 PRG",
								"size": "128k",
								"crc": "99344ACD",
								"sha1": "EE9AC82E896D8802668AF4834DE4EBEBD784998D"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-RP-0 CHR",
								"size": "64k",
								"crc": "5CC46B14",
								"sha1": "D3DBB73EB4860CD66663FF7AC0C2956D2522BBFB"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC3A"
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
			"name": "More energy for player 1",
			"codes": [
				[
					"NYSGLUYN"
				]
			]
		},
		{
			"name": "More energy for player 2",
			"codes": [
				[
					"NYVKTUYN"
				]
			]
		},
		{
			"name": "Less energy for player 1",
			"codes": [
				[
					"YLSGLUYN"
				]
			]
		},
		{
			"name": "Less energy for player 2",
			"codes": [
				[
					"YLVKTUYN"
				]
			]
		},
		{
			"name": "More energy for players 1 and 2 after continue",
			"codes": [
				[
					"NNNGKNYN"
				]
			]
		},
		{
			"name": "Less energy for players 1 and 2 after continue",
			"codes": [
				[
					"YUNGKNYN"
				]
			]
		},
		{
			"name": "No harm from falling",
			"codes": [
				[
					"AEXLPGAP"
				]
			]
		},
		{
			"name": "No harm from attacks or bad food",
			"codes": [
				[
					"GXXLALOP"
				]
			]
		},
		{
			"name": "More damage done from falling",
			"codes": [
				[
					"AXXLPGAP"
				]
			]
		},
		{
			"name": "Double energy from food",
			"codes": [
				[
					"GEULLLIA"
				]
			]
		},
		{
			"name": "Half energy from food",
			"codes": [
				[
					"AEULLLIA",
					"ZKULTUZE"
				]
			]
		},
		{
			"name": "No harm from water",
			"codes": [
				[
					"AAOUOPPA",
					"AASLSPPA"
				]
			]
		}
	]
};
