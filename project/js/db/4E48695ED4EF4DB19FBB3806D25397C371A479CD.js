this.NesDb = this.NesDb || {};

NesDb[ '4E48695ED4EF4DB19FBB3806D25397C371A479CD' ] = {
	"$": {
		"name": "Yoshi",
		"class": "Licensed",
		"catalog": "NES-YM-USA",
		"publisher": "Nintendo",
		"developer": "Game Freak",
		"region": "USA",
		"players": "2",
		"date": "1992-06"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "E7EAD93B",
				"sha1": "4E48695ED4EF4DB19FBB3806D25397C371A479CD",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-10-02"
			},
			"board": [
				{
					"$": {
						"type": "NES-SFROM",
						"pcb": "NES-SFROM-03",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-YM-0 PRG",
								"size": "128k",
								"crc": "FE5F17F0",
								"sha1": "B5A7664905020635C4A41270105C201100E8FEC3"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-YM-0 CHR",
								"size": "32k",
								"crc": "694C1999",
								"sha1": "44FB5B3CD5CB97C4C938F3E4DE60D29C91B789CA"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1B3"
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
			"name": "Short wait for next characters",
			"codes": [
				[
					"GOUYPEAZ"
				]
			]
		},
		{
			"name": "Really short wait for next characters",
			"codes": [
				[
					"ZEUYPEAZ"
				]
			]
		},
		{
			"name": "Really long wait for next characters",
			"codes": [
				[
					"NNUYPEAX"
				]
			]
		},
		{
			"name": "Freeze characters for a short time",
			"codes": [
				[
					"AVSULYZA"
				]
			]
		},
		{
			"name": "Need only 1 Victory Egg to win",
			"codes": [
				[
					"PAVAAPLA",
					"PESTAZLA",
					"PEXTZLLA"
				]
			]
		},
		{
			"name": "Need only 2 Victory Eggs to win",
			"codes": [
				[
					"ZAVAAPLA",
					"ZESTAZLA",
					"ZEXTZLLA"
				]
			]
		}
	]
};
