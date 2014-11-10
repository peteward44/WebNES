this.NesDb = this.NesDb || {};

NesDb[ '29599EA4A52B88C06B80AA0BAB987E6EB329E707' ] = {
	"$": {
		"name": "Quattro Sports",
		"class": "Unlicensed",
		"subclass": "Multi-cart",
		"catalog": "ALG-QS",
		"publisher": "Camerica",
		"developer": "Codemasters",
		"region": "USA",
		"players": "2",
		"date": "1992-11"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "aladdin",
						"name": "Aladdin Deck Enhancer"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "CCCAF368",
				"sha1": "29599EA4A52B88C06B80AA0BAB987E6EB329E707",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-02-25"
			},
			"board": [
				{
					"$": {
						"type": "CAMERICA-ALGQ",
						"pcb": "ALGQV1-1",
						"mapper": "232"
					},
					"prg": [
						{
							"$": {
								"name": "COBIC 7408-QS",
								"size": "256k",
								"crc": "CCCAF368",
								"sha1": "29599EA4A52B88C06B80AA0BAB987E6EB329E707"
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
		},
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "CCCAF368",
				"sha1": "29599EA4A52B88C06B80AA0BAB987E6EB329E707",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-01-22"
			},
			"board": [
				{
					"$": {
						"type": "CAMERICA-BF9096",
						"pcb": "BIC-48",
						"mapper": "232"
					},
					"prg": [
						{
							"$": {
								"name": "COBIC 7405-QS",
								"size": "256k",
								"crc": "CCCAF368",
								"sha1": "29599EA4A52B88C06B80AA0BAB987E6EB329E707"
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
								"type": "BF9096"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "CIC Stun"
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
	]
};
