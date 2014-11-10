this.NesDb = this.NesDb || {};

NesDb[ 'DEE9CF8DCC91DE3F9C65181A07E7E84F7570363D' ] = {
	"$": {
		"name": "Teenage Mutant Ninja Turtles II: The Arcade Game",
		"class": "Licensed",
		"catalog": "NES-2N-USA",
		"publisher": "Ultra Games",
		"developer": "Konami",
		"region": "USA",
		"players": "2",
		"date": "1990-12"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "A9217EA2",
				"sha1": "DEE9CF8DCC91DE3F9C65181A07E7E84F7570363D",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-11-01"
			},
			"board": [
				{
					"$": {
						"type": "NES-TLROM",
						"pcb": "NES-TLROM-03",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "NES-2N-0 PRG",
								"size": "256k",
								"crc": "717E1C46",
								"sha1": "B49CC88E026DAC7F5BA96F5C16BCB897ADDBE259"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-2N-0 CHR",
								"size": "256k",
								"crc": "0DBC575F",
								"sha1": "8094278CF3267757953AB761DBCCF38589142376"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC3B"
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
			"name": "Start with 1 life",
			"codes": [
				[
					"PEOIAPZA"
				]
			]
		},
		{
			"name": "Start with 6 lives",
			"codes": [
				[
					"TEOIAPZA"
				]
			]
		},
		{
			"name": "Start with 9 lives",
			"codes": [
				[
					"PEOIAPZE"
				]
			]
		},
		{
			"name": "Infinite lives",
			"codes": [
				[
					"AAEAULPA"
				]
			]
		},
		{
			"name": "More powerful turtle weapon",
			"codes": [
				[
					"PEXTKZZE"
				]
			]
		},
		{
			"name": "More powerful 'jump + attack'",
			"codes": [
				[
					"PEOVKZGE"
				]
			]
		},
		{
			"name": "Weaker 'jump + attack'",
			"codes": [
				[
					"ZEOVKZGA"
				]
			]
		},
		{
			"name": "More powerful kick",
			"codes": [
				[
					"PEXTEZLE"
				]
			]
		},
		{
			"name": "Weaker kick",
			"codes": [
				[
					"PEXTEZLA"
				]
			]
		},
		{
			"name": "In two-turtle mode, when one player is revived the other player's spare life won't get used up",
			"codes": [
				[
					"SXEAPZVG",
					"SZUAYZVG"
				]
			]
		}
	]
};
