this.NesDb = this.NesDb || {};

NesDb[ '5633AC906453F33819A79D395CC612B5098F0B8B' ] = {
	"$": {
		"name": "TwinBee 3: Poko Poko Dai Maou",
		"altname": "ツインビー3　ポコポコ大魔王",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "KON-RC841",
		"publisher": "Konami",
		"developer": "Konami",
		"region": "Japan",
		"players": "2",
		"date": "1989-09-29"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "D7FABAC1",
				"sha1": "5633AC906453F33819A79D395CC612B5098F0B8B",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-11-27"
			},
			"board": [
				{
					"$": {
						"type": "KONAMI-VRC-2",
						"pcb": "351618",
						"mapper": "22"
					},
					"prg": [
						{
							"$": {
								"name": "RC841J0P",
								"size": "128k",
								"crc": "7A508DBB",
								"sha1": "8676B34E9C99BE7CFB3166F9E1D496F6D46A23C5"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "RC841J0C",
								"size": "128k",
								"crc": "51B6F84A",
								"sha1": "BB37C1857F50972A8DA9D6CDCF80AA04EC1EFE51"
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
										"function": "PRG A0"
									}
								},
								{
									"$": {
										"number": "4",
										"function": "PRG A1"
									}
								},
								{
									"$": {
										"number": "21",
										"function": "NC"
									}
								},
								{
									"$": {
										"number": "22",
										"function": "CHR A15"
									}
								},
								{
									"$": {
										"number": "23",
										"function": "CHR A10"
									}
								},
								{
									"$": {
										"number": "24",
										"function": "CHR A12"
									}
								},
								{
									"$": {
										"number": "25",
										"function": "CHR A13"
									}
								},
								{
									"$": {
										"number": "26",
										"function": "CHR A11"
									}
								},
								{
									"$": {
										"number": "27",
										"function": "CHR A14"
									}
								},
								{
									"$": {
										"number": "28",
										"function": "CHR A16"
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
