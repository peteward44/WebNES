this.NesDb = this.NesDb || {};

NesDb[ '334781C830F135CF30A33E392D8AAA4AFDC223F9' ] = {
	"$": {
		"name": "Fire Hawk",
		"class": "Unlicensed",
		"catalog": "CAM-FH",
		"publisher": "Camerica",
		"developer": "Codemasters",
		"region": "USA",
		"players": "1",
		"date": "1991-09"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "1BC686A8",
				"sha1": "334781C830F135CF30A33E392D8AAA4AFDC223F9",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-04-10"
			},
			"board": [
				{
					"$": {
						"type": "CAMERICA-BF9097",
						"pcb": "BIC-62",
						"mapper": "71"
					},
					"prg": [
						{
							"$": {
								"name": "COBIC FH-V1",
								"size": "128k",
								"crc": "1BC686A8",
								"sha1": "334781C830F135CF30A33E392D8AAA4AFDC223F9"
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
								"type": "BF9097"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "CIC Stun"
							}
						}
					]
				}
			]
		}
	],
	"gameGenieCodes": [
		{
			"name": "Start with 1 life",
			"codes": [
				[
					"PAOEPALA"
				]
			]
		},
		{
			"name": "Start with 6 lives",
			"codes": [
				[
					"TAOEPALA"
				]
			]
		},
		{
			"name": "Start with 9 lives",
			"codes": [
				[
					"PAOEPALE"
				]
			]
		},
		{
			"name": "Don't take any damage",
			"codes": [
				[
					"OZOXOTES"
				]
			]
		}
	]
};
