this.NesDb = this.NesDb || {};

NesDb[ '5A9B96ECD55949DA42B66CE59ADAB46E0CBE1E87' ] = {
	"$": {
		"name": "Robin Hood: Prince of Thieves",
		"class": "Licensed",
		"catalog": "NES-7R-USA",
		"publisher": "Virgin Games",
		"developer": "Sculptured Software",
		"region": "USA",
		"players": "1",
		"date": "1991-11"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"revision": "A",
				"crc": "C3CCC493",
				"sha1": "5A9B96ECD55949DA42B66CE59ADAB46E0CBE1E87",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-11-04"
			},
			"board": [
				{
					"$": {
						"type": "NES-SGROM",
						"pcb": "NES-SGROM-04",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-7R-1 PRG",
								"size": "256k",
								"crc": "C3CCC493",
								"sha1": "5A9B96ECD55949DA42B66CE59ADAB46E0CBE1E87"
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
