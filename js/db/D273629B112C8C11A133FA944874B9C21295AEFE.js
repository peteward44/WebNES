this.NesDb = this.NesDb || {};

NesDb[ 'D273629B112C8C11A133FA944874B9C21295AEFE' ] = {
	"$": {
		"name": "Konami Wai Wai World",
		"altname": "コナミ ワイワイワールド",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "KON-RC825",
		"publisher": "Konami",
		"developer": "Konami",
		"region": "Japan",
		"players": "1",
		"date": "1988-01-14"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "8A96E00D",
				"sha1": "D273629B112C8C11A133FA944874B9C21295AEFE",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-11-27"
			},
			"board": [
				{
					"$": {
						"type": "KONAMI-VRC-2",
						"pcb": "350926",
						"mapper": "23"
					},
					"prg": [
						{
							"$": {
								"name": "RC825J0P",
								"size": "128k",
								"crc": "64818FC5",
								"sha1": "3FD24BA4878A06AA63EAE7F778BAD49E53CD2B9A"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "RC825J0C",
								"size": "128k",
								"crc": "FCB9A86C",
								"sha1": "2C4D7E0AEB0B300B08F396CFC683668D9E19FECC"
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
										"function": "NC"
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
