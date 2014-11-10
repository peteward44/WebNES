this.NesDb = this.NesDb || {};

NesDb[ '7031D4124E914C66A831A770A0FBEC873149B250' ] = {
	"$": {
		"name": "Robin Hood: Prince of Thieves",
		"class": "Licensed",
		"catalog": "NES-7R-ESP",
		"publisher": "Mindscape",
		"developer": "Sculptured Software",
		"region": "Spain",
		"players": "1",
		"date": "1993-09-01"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "FD21F54D",
				"sha1": "7031D4124E914C66A831A770A0FBEC873149B250",
				"dump": "ok",
				"dumper": "Akomander",
				"datedumped": "2006-09-20"
			},
			"board": [
				{
					"$": {
						"type": "NES-SGROM",
						"pcb": "NES-SGROM-05",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "ESP-7R-0 PRG",
								"size": "256k",
								"crc": "FD21F54D",
								"sha1": "7031D4124E914C66A831A770A0FBEC873149B250"
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
			"name": "Infinite hit points for Robin in 'main combat'",
			"codes": [
				[
					"VAXEOLSA"
				]
			]
		},
		{
			"name": "Infinite hit points for Robin in 'dueling combat'",
			"codes": [
				[
					"EYXAOPAL"
				]
			]
		},
		{
			"name": "Bandages give more hit points back",
			"codes": [
				[
					"GOXLLNAA"
				]
			]
		},
		{
			"name": "Food gives more hit points back--Except the Leg of meat",
			"codes": [
				[
					"AOULIUAE"
				]
			]
		},
		{
			"name": "Infinite arrows",
			"codes": [
				[
					"AASPIZPA"
				]
			]
		}
	]
};
