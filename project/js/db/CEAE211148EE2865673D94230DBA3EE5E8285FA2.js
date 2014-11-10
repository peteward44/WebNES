this.NesDb = this.NesDb || {};

NesDb[ 'CEAE211148EE2865673D94230DBA3EE5E8285FA2' ] = {
	"$": {
		"name": "Rally Bike",
		"class": "Licensed",
		"catalog": "NES-LI-USA",
		"publisher": "Romstar",
		"developer": "Toaplan",
		"region": "USA",
		"players": "1",
		"date": "1990-09"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "E1C41D7C",
				"sha1": "CEAE211148EE2865673D94230DBA3EE5E8285FA2",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-04-11"
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
								"name": "NES-LI-0 PRG",
								"size": "128k",
								"crc": "E1C41D7C",
								"sha1": "CEAE211148EE2865673D94230DBA3EE5E8285FA2"
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
			"name": "Start with 1 life in 1-player game",
			"codes": [
				[
					"PAUIKTIA"
				]
			]
		},
		{
			"name": "Start with 10 lives in 1-player game",
			"codes": [
				[
					"ZAUIKTIE"
				]
			]
		},
		{
			"name": "Infinite lives in 1 player game",
			"codes": [
				[
					"SZEITKVV"
				]
			]
		},
		{
			"name": "Infinite lives in 2 player game, both players",
			"codes": [
				[
					"SZOSIKVN"
				]
			]
		},
		{
			"name": "Infinite gas",
			"codes": [
				[
					"SIUKLUVV"
				]
			]
		},
		{
			"name": "Start with 1 life in 2-player game, both players",
			"codes": [
				[
					"PAUIKITA",
					"ZAXSTGTA"
				]
			]
		},
		{
			"name": "Start with 10 lives in 2-player game, both players",
			"codes": [
				[
					"ZAUIKTIE",
					"LAXSTGIE"
				]
			]
		}
	]
};
