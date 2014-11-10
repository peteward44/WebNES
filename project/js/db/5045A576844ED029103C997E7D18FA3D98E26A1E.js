this.NesDb = this.NesDb || {};

NesDb[ '5045A576844ED029103C997E7D18FA3D98E26A1E' ] = {
	"$": {
		"name": "Tiger-Heli",
		"class": "Licensed",
		"catalog": "NES-TI-EEC",
		"publisher": "Acclaim",
		"developer": "Toaplan",
		"portdeveloper": "Micronics / Khaos",
		"region": "Europe",
		"players": "2",
		"date": "1990-01-17"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "40BFA660",
				"sha1": "5045A576844ED029103C997E7D18FA3D98E26A1E",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2008-02-24"
			},
			"board": [
				{
					"$": {
						"type": "NES-CNROM",
						"pcb": "NES-CNROM-06",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-TI-0 PRG",
								"size": "32k",
								"crc": "7925EC62",
								"sha1": "7B8CF32CDD641E33C0ADFBF8B93130E74BE80205"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-TI-0 CHR",
								"size": "32k",
								"crc": "E1DAA15C",
								"sha1": "3A81D05FED3015EB8FD0CEACEFD6FE2445C786FE"
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
