this.NesDb = this.NesDb || {};

NesDb[ '974BA6A6C95551FF5B5F8842D876BA02A827A778' ] = {
	"$": {
		"name": "Stealth ATF",
		"class": "Licensed",
		"catalog": "NES-LH-USA",
		"publisher": "Activision",
		"developer": "Imagineering",
		"region": "USA",
		"players": "2",
		"date": "1989-10"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "C6DD7E69",
				"sha1": "974BA6A6C95551FF5B5F8842D876BA02A827A778",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-12-17"
			},
			"board": [
				{
					"$": {
						"type": "NES-SLROM",
						"pcb": "NES-SLROM-04",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-LH-0 PRG",
								"size": "128k",
								"crc": "21D7517A",
								"sha1": "F1746813AB4F247E33448603908F2EBDFE2A693D"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-LH-0 CHR",
								"size": "128k",
								"crc": "BBA9A33D",
								"sha1": "4EB2F19E79DFA9D8D655BFA4D8C696161A7DB62F"
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
			"name": "Infinite missiles",
			"codes": [
				[
					"SZVZSSVK"
				]
			]
		},
		{
			"name": "Start with double missiles",
			"codes": [
				[
					"AOUXXEAA"
				]
			]
		},
		{
			"name": "No damage taken from enemy's bullets",
			"codes": [
				[
					"SZVPXNVV"
				]
			]
		},
		{
			"name": "Start with less fuel",
			"codes": [
				[
					"AVUXNAVP"
				]
			]
		},
		{
			"name": "More enemy planes on the screen",
			"codes": [
				[
					"AEKZZLZE"
				]
			]
		}
	]
};
