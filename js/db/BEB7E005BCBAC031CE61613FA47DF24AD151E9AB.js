this.NesDb = this.NesDb || {};

NesDb[ 'BEB7E005BCBAC031CE61613FA47DF24AD151E9AB' ] = {
	"$": {
		"name": "Akumajou Densetsu",
		"altname": "悪魔城伝説",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "KON-RC845",
		"publisher": "Konami",
		"developer": "Konami",
		"region": "Japan",
		"players": "1",
		"date": "1989-12-22"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "E349AF38",
				"sha1": "BEB7E005BCBAC031CE61613FA47DF24AD151E9AB",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-03-16"
			},
			"board": [
				{
					"$": {
						"type": "KONAMI-VRC-6",
						"pcb": "351951",
						"mapper": "24"
					},
					"prg": [
						{
							"$": {
								"name": "RC845J0.0P",
								"size": "256k",
								"crc": "BA6BDD6A",
								"sha1": "F6A2E1080FC1BADF751FE48492CE3C513FD7BA91"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "RC845J0.1C",
								"size": "128k",
								"crc": "BF15255C",
								"sha1": "3D69816BD9502680B6EC48334808F9355DA3A175"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "VRC6"
							},
							"pin": [
								{
									"$": {
										"number": "9",
										"function": "PRG A1"
									}
								},
								{
									"$": {
										"number": "10",
										"function": "PRG A0"
									}
								}
							]
						}
					]
				}
			]
		}
	]
};
