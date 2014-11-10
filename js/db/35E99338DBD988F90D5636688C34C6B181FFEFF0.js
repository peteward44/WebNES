this.NesDb = this.NesDb || {};

NesDb[ '35E99338DBD988F90D5636688C34C6B181FFEFF0' ] = {
	"$": {
		"name": "Back to the Future",
		"class": "Licensed",
		"catalog": "NES-FU-USA",
		"publisher": "LJN",
		"developer": "Beam Software",
		"region": "USA",
		"players": "1",
		"date": "1989-09"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "A55FA397",
				"sha1": "35E99338DBD988F90D5636688C34C6B181FFEFF0",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-10-14"
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
								"name": "NES-FU-0 PRG",
								"size": "32k",
								"crc": "7A424C07",
								"sha1": "C8606B016D5479E383D3AA5420086DDFF59D61B1"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-FU-0 CHR",
								"size": "32k",
								"crc": "4C2F0483",
								"sha1": "D19C45708BE24A9518BB565F9AE8FE383B82D5F3"
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
			"name": "Start with 1 life",
			"codes": [
				[
					"PEXEGAGA"
				]
			]
		},
		{
			"name": "Start with 8 lives",
			"codes": [
				[
					"AEXEGAGE"
				]
			]
		},
		{
			"name": "Never lose a life in Hill Valley game",
			"codes": [
				[
					"SZKEGOVK"
				]
			]
		},
		{
			"name": "Never lose a life in Cafe game",
			"codes": [
				[
					"SXOELOVK"
				]
			]
		},
		{
			"name": "Never lose a life in School game",
			"codes": [
				[
					"SXKALOVK"
				]
			]
		},
		{
			"name": "Never lose a life in Dancing Hall game",
			"codes": [
				[
					"SXVELOVK"
				]
			]
		},
		{
			"name": "Disable all timers",
			"codes": [
				[
					"AVVOUZSZ"
				]
			]
		}
	]
};
