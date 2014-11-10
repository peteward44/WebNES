this.NesDb = this.NesDb || {};

NesDb[ '1B5FC6A78299A66002F3EC522347E6DCBBEF4D9B' ] = {
	"$": {
		"name": "Ganbare Pennant Race!",
		"altname": "がんばれペナントレース!",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "KON-RC834",
		"publisher": "Konami",
		"developer": "Konami",
		"region": "Japan",
		"players": "2",
		"date": "1989-02-28"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "90F6FA33",
				"sha1": "1B5FC6A78299A66002F3EC522347E6DCBBEF4D9B",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-07-01"
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
								"name": "RC834J0P",
								"size": "128k",
								"crc": "953CA1B6",
								"sha1": "3E55C552432799455FC2E03DD6517E0B5BD6480C"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "RC834J0C",
								"size": "128k",
								"crc": "89A44100",
								"sha1": "7C7433DC09CC1581643FE6159B90D6F517AE327B"
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
