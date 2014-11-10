this.NesDb = this.NesDb || {};

NesDb[ '583E112FD794AD3B9BCDAE23EB22005C208AA4EE' ] = {
	"$": {
		"name": "Galaxy 5000: Racing in the 51st Century",
		"class": "Licensed",
		"catalog": "NES-Y5-USA",
		"publisher": "Activision",
		"developer": "Activision",
		"region": "USA",
		"players": "2",
		"date": "1991-02"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "1D20A5C6",
				"sha1": "583E112FD794AD3B9BCDAE23EB22005C208AA4EE",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-09-21"
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
								"name": "NES-Y5-0 PRG",
								"size": "128k",
								"crc": "7F531249",
								"sha1": "C14DAA88C694A03701012F43A760755CFD49C474"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-Y5-0 CHR",
								"size": "128k",
								"crc": "18DA922D",
								"sha1": "31AF2992FFEFEF7BFE6B9C945C74E2D0A51D096A"
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
			"name": "Stop timer",
			"codes": [
				[
					"SLKPAEVS"
				]
			]
		},
		{
			"name": "Reduce damage free of charge",
			"codes": [
				[
					"GXNXSVSN"
				]
			]
		},
		{
			"name": "No damage from falling",
			"codes": [
				[
					"SXKZEPAX"
				]
			]
		},
		{
			"name": "Take less damage",
			"codes": [
				[
					"OXNNVPSX",
					"PENNNOZP"
				]
			]
		},
		{
			"name": "More damage from falling",
			"codes": [
				[
					"SXUXSOSU",
					"ALVUVYLZ"
				]
			]
		},
		{
			"name": "More damage from shots",
			"codes": [
				[
					"TEEOZGVV",
					"NUEOLKVN"
				]
			]
		}
	]
};
