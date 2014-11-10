this.NesDb = this.NesDb || {};

NesDb[ 'FD9079CB5E8479EB06D93C2AE5175BFCE871746A' ] = {
	"$": {
		"name": "Tetris",
		"class": "Licensed",
		"catalog": "NES-EI-CAN",
		"publisher": "Nintendo",
		"developer": "Nintendo",
		"region": "Canada",
		"players": "1",
		"date": "1989-09-22"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "1394F57E",
				"sha1": "FD9079CB5E8479EB06D93C2AE5175BFCE871746A",
				"dump": "ok",
				"dumper": "_zane",
				"datedumped": "2007-12-30"
			},
			"board": [
				{
					"$": {
						"type": "NES-SEROM",
						"pcb": "NES-SEROM-03",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-EI-0 PRG",
								"size": "32k",
								"crc": "943DFBBE",
								"sha1": "3EF4B8D6C668C0DE0CFDF508DD28E2AD8DE9A2E9"
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
								"type": "MMC1B1"
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
