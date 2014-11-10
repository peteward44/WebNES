this.NesDb = this.NesDb || {};

NesDb[ '3774ABE51D449579E5D90D90A816FDB98D8E332E' ] = {
	"$": {
		"name": "Guardian Legend, The",
		"class": "Licensed",
		"catalog": "NES-GD-USA",
		"publisher": "Brøderbund",
		"developer": "Compile",
		"region": "USA",
		"players": "1",
		"date": "1989-04"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "FA43146B",
				"sha1": "3774ABE51D449579E5D90D90A816FDB98D8E332E",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-07-03"
			},
			"board": [
				{
					"$": {
						"type": "NES-UNROM",
						"pcb": "NES-UNROM-08",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "NES-GD-0 PRG",
								"size": "128k",
								"crc": "FA43146B",
								"sha1": "3774ABE51D449579E5D90D90A816FDB98D8E332E"
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
