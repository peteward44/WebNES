this.NesDb = this.NesDb || {};

NesDb[ '4C1500B754A881F2D5F48583F92498F36EEB2580' ] = {
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
				"crc": "86B0D1CF",
				"sha1": "4C1500B754A881F2D5F48583F92498F36EEB2580",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-12-17"
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
								"name": "NES-7R-0 PRG",
								"size": "256k",
								"crc": "86B0D1CF",
								"sha1": "4C1500B754A881F2D5F48583F92498F36EEB2580"
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
