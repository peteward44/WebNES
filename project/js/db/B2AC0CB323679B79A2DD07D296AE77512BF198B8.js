this.NesDb = this.NesDb || {};

NesDb[ 'B2AC0CB323679B79A2DD07D296AE77512BF198B8' ] = {
	"$": {
		"name": "Robin Hood: Prince of Thieves",
		"class": "Licensed",
		"catalog": "NES-7R-SCN",
		"publisher": "Mindscape",
		"developer": "Sculptured Software",
		"region": "Scandinavia",
		"players": "1",
		"date": "1992-12-10"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "B67D16F6",
				"sha1": "B2AC0CB323679B79A2DD07D296AE77512BF198B8",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2008-04-30"
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
								"name": "PAL-7R-0 PRG",
								"size": "256k",
								"crc": "B67D16F6",
								"sha1": "B2AC0CB323679B79A2DD07D296AE77512BF198B8"
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
