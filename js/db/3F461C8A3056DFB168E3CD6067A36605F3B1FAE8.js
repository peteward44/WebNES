this.NesDb = this.NesDb || {};

NesDb[ '3F461C8A3056DFB168E3CD6067A36605F3B1FAE8' ] = {
	"$": {
		"name": "Championship Pool",
		"class": "Licensed",
		"catalog": "NES-P3-USA",
		"publisher": "Mindscape",
		"developer": "Bitmasters",
		"region": "USA",
		"players": "8",
		"date": "1993-10"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "CDC641FC",
				"sha1": "3F461C8A3056DFB168E3CD6067A36605F3B1FAE8",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-02-19"
			},
			"board": [
				{
					"$": {
						"type": "NES-UNROM",
						"pcb": "NES-UNROM-10",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "NES-P3-0 PRG",
								"size": "128k",
								"crc": "CDC641FC",
								"sha1": "3F461C8A3056DFB168E3CD6067A36605F3B1FAE8"
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
								"type": "6113B1"
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
			"name": "1 foul loses the game-only in 10-ball in party mode",
			"codes": [
				[
					"PAOUYALA"
				]
			]
		},
		{
			"name": "2 fouls lose the game-only on 9 & 10 ball in party mode",
			"codes": [
				[
					"ZAOUYALA"
				]
			]
		},
		{
			"name": "Fouls don't count- only on 9 & 10 ball in party mode",
			"codes": [
				[
					"SLNUKXSO"
				]
			]
		},
		{
			"name": "Number of fouls is not cleared after a good shot",
			"codes": [
				[
					"SUOLXXSO"
				]
			]
		},
		{
			"name": "Player 1 always breaks in 9- or 10-ball",
			"codes": [
				[
					"OZVETASX",
					"AAVEYEST"
				]
			]
		},
		{
			"name": "Player 2 always breaks in 9- or 10-ball",
			"codes": [
				[
					"OZVETASX",
					"PAVEYEST"
				]
			]
		}
	]
};
