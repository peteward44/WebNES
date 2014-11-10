this.NesDb = this.NesDb || {};

NesDb[ '66883B9EDDEC933E36B6BFF0479CEFD2434FFB40' ] = {
	"$": {
		"name": "Tetris",
		"class": "Licensed",
		"catalog": "NES-EI-EEC",
		"publisher": "Nintendo",
		"developer": "Nintendo",
		"region": "Europe",
		"players": "1",
		"date": "1990-02-23"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "FDFF80D5",
				"sha1": "66883B9EDDEC933E36B6BFF0479CEFD2434FFB40",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2007-07-29"
			},
			"board": [
				{
					"$": {
						"type": "NES-SEROM",
						"pcb": "NES-SEROM-04",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-EI-0 PRG",
								"size": "32k",
								"crc": "D3DEA841",
								"sha1": "677FECD986CDC9BCE65533D04B1BD90728045393"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-EI-0 CHR",
								"size": "16k",
								"crc": "251AF21C",
								"sha1": "E3EE7056ABA68DDB2770ECE06127790FE9A57B74"
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
								"type": "3195A"
							}
						}
					]
				}
			]
		}
	],
	"gameGenieCodes": [
		{
			"name": "Two-player interactive game!",
			"codes": [
				[
					"ENEALYNN"
				]
			]
		},
		{
			"name": "Need only complete 10 lines in game B",
			"codes": [
				[
					"APSEGYIZ"
				]
			]
		},
		{
			"name": "Must complete 50 lines in game B",
			"codes": [
				[
					"AISEGYIZ"
				]
			]
		},
		{
			"name": "Must complete 80 lines in game B",
			"codes": [
				[
					"EASEGYIZ"
				]
			]
		},
		{
			"name": "Faster 'forced' fall rate",
			"codes": [
				[
					"PASAUPPE"
				]
			]
		}
	]
};
