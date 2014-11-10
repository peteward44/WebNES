this.NesDb = this.NesDb || {};

NesDb[ 'DF7315C617A1107880273925280CD2472609E508' ] = {
	"$": {
		"name": "Robin Hood: Prince of Thieves",
		"class": "Licensed",
		"catalog": "NES-7R-FRG",
		"publisher": "Mindscape",
		"developer": "Sculptured Software",
		"region": "Germany",
		"players": "1",
		"date": "1992-09-27"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "D49DCA84",
				"sha1": "DF7315C617A1107880273925280CD2472609E508",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2007-11-06"
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
								"name": "FRG-7R-0 PRG",
								"size": "256k",
								"crc": "D49DCA84",
								"sha1": "DF7315C617A1107880273925280CD2472609E508"
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
