this.NesDb = this.NesDb || {};

NesDb[ 'F002058527461A857BD74E51FEE2BF3820CE9BA6' ] = {
	"$": {
		"name": "Mouryou Senki Madara",
		"altname": "魍魎戦記マダラ",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "KON-RC846",
		"publisher": "Konami",
		"developer": "Konami",
		"region": "Japan",
		"players": "1",
		"date": "1990-03-30"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "E1383DEB",
				"sha1": "F002058527461A857BD74E51FEE2BF3820CE9BA6",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-07-03"
			},
			"board": [
				{
					"$": {
						"type": "KONAMI-VRC-6",
						"pcb": "351949A",
						"mapper": "26"
					},
					"prg": [
						{
							"$": {
								"name": "RC846J0.1P",
								"size": "256k",
								"crc": "836CC1AB",
								"sha1": "506D0A31C329D38041174DA6804E84BEE2773698"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "RC846J0.1C",
								"size": "256k",
								"crc": "8F895BD9",
								"sha1": "FF357A4D23C4179A0A86F863426E9BA88FE467E9"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "8k",
								"battery": "1"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MM1026"
							}
						},
						{
							"$": {
								"type": "VRC6"
							},
							"pin": [
								{
									"$": {
										"number": "9",
										"function": "PRG A0"
									}
								},
								{
									"$": {
										"number": "10",
										"function": "PRG A1"
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
