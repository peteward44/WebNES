this.NesDb = this.NesDb || {};

NesDb[ '7D1B4D76F2343251F8C3978BCA20AFE78C38DC43' ] = {
	"$": {
		"name": "Jarinko Chie: Bakudan Musume no Shiawase Sagashi",
		"altname": "じゃりン子チエ ばくだん娘の幸せさがし",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "KON-RC828",
		"publisher": "Konami",
		"developer": "Konami",
		"region": "Japan",
		"players": "1",
		"date": "1988-07-15"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "39B68AA3",
				"sha1": "7D1B4D76F2343251F8C3978BCA20AFE78C38DC43",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-11-27"
			},
			"board": [
				{
					"$": {
						"type": "KONAMI-VRC-2",
						"pcb": "351179",
						"mapper": "23"
					},
					"prg": [
						{
							"$": {
								"name": "RC828J0P",
								"size": "128k",
								"crc": "5A3EC21C",
								"sha1": "E0FBFAB81D348BFEAE1599FC80AE5AA6330E5696"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "RC828 J0C",
								"size": "256k",
								"crc": "6C25D16A",
								"sha1": "62B07E015A40862BF583B0A036C1EF82F522E1F6"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "VRC2"
							},
							"pin": [
								{
									"$": {
										"number": "3",
										"function": "PRG A1"
									}
								},
								{
									"$": {
										"number": "4",
										"function": "PRG A0"
									}
								},
								{
									"$": {
										"number": "21",
										"function": "CHR A10"
									}
								},
								{
									"$": {
										"number": "22",
										"function": "CHR A16"
									}
								},
								{
									"$": {
										"number": "23",
										"function": "CHR A11"
									}
								},
								{
									"$": {
										"number": "24",
										"function": "CHR A13"
									}
								},
								{
									"$": {
										"number": "25",
										"function": "CHR A14"
									}
								},
								{
									"$": {
										"number": "26",
										"function": "CHR A12"
									}
								},
								{
									"$": {
										"number": "27",
										"function": "CHR A15"
									}
								},
								{
									"$": {
										"number": "28",
										"function": "CHR A17"
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
