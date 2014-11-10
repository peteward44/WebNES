this.NesDb = this.NesDb || {};

NesDb[ '1AC6489CBFC032CAF1BB8AB114157FA9F1E5B2EB' ] = {
	"$": {
		"name": "Teenage Mutant Ninja Turtles II: The Arcade Game",
		"class": "Licensed",
		"catalog": "NES-2N-AUS",
		"publisher": "Konami",
		"developer": "Konami",
		"region": "Australia",
		"players": "2",
		"date": "1991"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-A",
				"crc": "7BCCAFBB",
				"sha1": "1AC6489CBFC032CAF1BB8AB114157FA9F1E5B2EB",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2010-01-16"
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
								"name": "PAL-2N-0 PRG",
								"size": "256k",
								"crc": "0FBD4688",
								"sha1": "38CEF34B56A128DBE48EC1FB4152F5A0E7911EF9"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PAL-2N-0 CHR",
								"size": "256k",
								"crc": "79A28C43",
								"sha1": "28B7B7C54ED36A6DC1CEC894E28EE1BD1190C620"
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
								"type": "3197A"
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
