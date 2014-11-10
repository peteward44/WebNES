this.NesDb = this.NesDb || {};

NesDb[ '6775C06E3EF05AFFD891C96CAC14109D60FB8E80' ] = {
	"$": {
		"name": "Tiger-Heli",
		"altname": "タイガーヘリ",
		"class": "Licensed",
		"catalog": "PNF-TH (R49V5905)",
		"publisher": "Pony Canyon",
		"developer": "Toaplan",
		"portdeveloper": "Micronics / Khaos",
		"region": "Japan",
		"players": "2",
		"date": "1986-12-05"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "2E68ACFC",
				"sha1": "6775C06E3EF05AFFD891C96CAC14109D60FB8E80",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-11-15"
			},
			"board": [
				{
					"$": {
						"type": "HVC-CNROM",
						"pcb": "HVC-CNROM-256K-01",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"name": "PNF-TH-0 PRG",
								"size": "32k",
								"crc": "256D33C3",
								"sha1": "34856381AA7CA957814F65A9902394DF94985FD3"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PNF-TH-0 CHR",
								"size": "32k",
								"crc": "C6390084",
								"sha1": "2775264F3F8CD8FB7B5255A16803BD6C22E45CA0"
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
			"name": "Don't take damage",
			"codes": [
				[
					"SZSYAEGK"
				]
			]
		},
		{
			"name": "Infinite lives--1-player game",
			"codes": [
				[
					"SLXLGNVS"
				]
			]
		},
		{
			"name": "Start with 2 lives--1-player game",
			"codes": [
				[
					"AEUUYTZA"
				]
			]
		},
		{
			"name": "Start with 9 lives--1-player game",
			"codes": [
				[
					"AEUUYTZE"
				]
			]
		},
		{
			"name": "Start with 6 lives--player 1 in a 2-player game",
			"codes": [
				[
					"IASUYYZA"
				]
			]
		},
		{
			"name": "Start with 9 lives--player 1 in a 2-player game",
			"codes": [
				[
					"AASUYYZE"
				]
			]
		},
		{
			"name": "Start with 6 lives--player 2",
			"codes": [
				[
					"IANLZYZA"
				]
			]
		},
		{
			"name": "Start with 9 lives--player 2",
			"codes": [
				[
					"AANLZYZE"
				]
			]
		},
		{
			"name": "Extra life every 5 bonus blocks",
			"codes": [
				[
					"LASNVVZA"
				]
			]
		},
		{
			"name": "Start with 2 little-helis after dying",
			"codes": [
				[
					"XTVLUEZK"
				]
			]
		},
		{
			"name": "Autofire capability",
			"codes": [
				[
					"TEKNAXIA"
				]
			]
		},
		{
			"name": "Burstfire capability",
			"codes": [
				[
					"ZEKNAXIA"
				]
			]
		},
		{
			"name": "Turbo boost",
			"codes": [
				[
					"GXVNZLZP"
				]
			]
		},
		{
			"name": "Infinite lives--both players",
			"codes": [
				[
					"SUKLINVS",
					"SUVULNVS"
				]
			]
		}
	]
};
