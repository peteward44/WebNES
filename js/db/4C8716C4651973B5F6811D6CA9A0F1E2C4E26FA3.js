this.NesDb = this.NesDb || {};

NesDb[ '4C8716C4651973B5F6811D6CA9A0F1E2C4E26FA3' ] = {
	"$": {
		"name": "Last Starfighter, The",
		"class": "Licensed",
		"catalog": "NES-LM-USA",
		"publisher": "Mindscape",
		"developer": "Graftgold",
		"region": "USA",
		"players": "2",
		"date": "1990-06"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "6997F5E1",
				"sha1": "4C8716C4651973B5F6811D6CA9A0F1E2C4E26FA3",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-12-24"
			},
			"board": [
				{
					"$": {
						"type": "NES-CNROM",
						"pcb": "NES-CNROM-07",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"name": "NES-LM-0 PRG",
								"size": "32k",
								"crc": "CAF9CC4C",
								"sha1": "B8A05AB18B398338B1BF781B8CA1F541CD0E1B97"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-LM-0 CHR",
								"size": "32k",
								"crc": "F6EFA754",
								"sha1": "ECDEFA28602B04A5C2C4FA876B9A135A7AA47201"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx161"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "6113B1"
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
			"name": "Players 1 and 2 start with 1 life",
			"codes": [
				[
					"PANENLIA"
				]
			]
		},
		{
			"name": "Players 1 and 2 start with 6 lives",
			"codes": [
				[
					"TANENLIA"
				]
			]
		},
		{
			"name": "Players 1 and 2 start with 9 lives",
			"codes": [
				[
					"PANENLIE"
				]
			]
		},
		{
			"name": "Player 2 starts with 1 life",
			"codes": [
				[
					"KEEAVLSA"
				]
			]
		},
		{
			"name": "Players 1 and 2 haveinfinite lives",
			"codes": [
				[
					"SZVPATVG"
				]
			]
		},
		{
			"name": "Stop irritating shake",
			"codes": [
				[
					"GXUPLGSA"
				]
			]
		},
		{
			"name": "Player 1 start on level 5",
			"codes": [
				[
					"GAVEKLAA",
					"GZVENLSA",
					"GZNAOLSA"
				]
			]
		},
		{
			"name": "Player 1 start on level 10",
			"codes": [
				[
					"PAVEKLAE",
					"GZVENLSA",
					"GZNAOLSA"
				]
			]
		},
		{
			"name": "Player 1 start on level 14",
			"codes": [
				[
					"IAVEKLAE",
					"GZVENLSA",
					"GZNAOLSA"
				]
			]
		}
	]
};
