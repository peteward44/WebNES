this.NesDb = this.NesDb || {};

NesDb[ '3D6AC8691573FB5E21F8AE2D5AF06AC26C0B3DB9' ] = {
	"$": {
		"name": "Stinger",
		"class": "Licensed",
		"catalog": "NES-SR-USA",
		"publisher": "Konami",
		"developer": "Konami",
		"region": "USA",
		"players": "2",
		"date": "1987-09"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "C5B0B1AB",
				"sha1": "3D6AC8691573FB5E21F8AE2D5AF06AC26C0B3DB9",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-04-03"
			},
			"board": [
				{
					"$": {
						"type": "NES-UNROM",
						"pcb": "NES-UN-ROM-04",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "NES-SR-0 PRG",
								"size": "128k",
								"crc": "C5B0B1AB",
								"sha1": "3D6AC8691573FB5E21F8AE2D5AF06AC26C0B3DB9"
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
								"type": "3193A"
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
			"name": "Keep weapons after death",
			"codes": [
				[
					"GZNGNLSP"
				]
			]
		},
		{
			"name": "Start with 1 life",
			"codes": [
				[
					"PAXKPGLA"
				]
			]
		},
		{
			"name": "Start with 6 lives",
			"codes": [
				[
					"TAXKPGLA"
				]
			]
		},
		{
			"name": "Start with 9 lives",
			"codes": [
				[
					"PAXKPGLE"
				]
			]
		},
		{
			"name": "Infinite lives",
			"codes": [
				[
					"OZVKKLVS"
				]
			]
		},
		{
			"name": "Start with Dual Cannons",
			"codes": [
				[
					"YGNGAKTL",
					"PAVKTGAP"
				]
			]
		},
		{
			"name": "Start with Laser",
			"codes": [
				[
					"YGNGAKTL",
					"ZAVKTGAP"
				]
			]
		},
		{
			"name": "Start with Shoot Right",
			"codes": [
				[
					"YGNGAKTL",
					"GAVKTGAP"
				]
			]
		},
		{
			"name": "Start with Shoot Left",
			"codes": [
				[
					"YGNGAKTL",
					"AAVKTGAO"
				]
			]
		},
		{
			"name": "Start with Five Direction Firing",
			"codes": [
				[
					"YGNGAKTL",
					"APVKTGAP"
				]
			]
		},
		{
			"name": "Start with Three Direction Firing",
			"codes": [
				[
					"YGNGAKTL",
					"AZVKTGAP"
				]
			]
		},
		{
			"name": "Start with Force field",
			"codes": [
				[
					"YGNGAKTL",
					"AGVKTGAP"
				]
			]
		},
		{
			"name": "Start at stage 2 (You must wait for the \"demonstration game\" to start by itself before pressing \"Start\")",
			"codes": [
				[
					"GZOGIGSA",
					"PAEGPLPA"
				]
			]
		},
		{
			"name": "Start at stage 3 (You must wait for the \"demonstration game\" to start by itself before pressing \"Start\")",
			"codes": [
				[
					"GZOGIGSA",
					"ZAEGPLPA"
				]
			]
		},
		{
			"name": "Start at stage 4 (You must wait for the \"demonstration game\" to start by itself before pressing \"Start\")",
			"codes": [
				[
					"GZOGIGSA",
					"LAEGPLPA"
				]
			]
		},
		{
			"name": "Start at stage 5 (You must wait for the \"demonstration game\" to start by itself before pressing \"Start\")",
			"codes": [
				[
					"GZOGIGSA",
					"GAEGPLPA"
				]
			]
		},
		{
			"name": "Start at stage 6 (You must wait for the \"demonstration game\" to start by itself before pressing \"Start\")",
			"codes": [
				[
					"GZOGIGSA",
					"IAEGPLPA"
				]
			]
		}
	]
};
