this.NesDb = this.NesDb || {};

NesDb[ 'BB1967B0947989FFD9FCF6B10B81AE036110491A' ] = {
	"$": {
		"name": "Dragon Scroll: Yomigaerishi Maryuu",
		"altname": "ドラゴンスクロール 甦りし魔竜",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "KON-RC823",
		"publisher": "Konami",
		"developer": "Konami",
		"region": "Japan",
		"players": "1",
		"date": "1987-12-04"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "AC9895CC",
				"sha1": "BB1967B0947989FFD9FCF6B10B81AE036110491A",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-07-26"
			},
			"board": [
				{
					"$": {
						"type": "KONAMI-VRC-2",
						"pcb": "350603",
						"mapper": "23"
					},
					"prg": [
						{
							"$": {
								"name": "RC823J0P",
								"size": "128k",
								"crc": "F60F6667",
								"sha1": "0101EA90F6A3CAECD33309FEBA29E2ED1264BB3F"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "RC823J0C",
								"size": "128k",
								"crc": "46CC6146",
								"sha1": "CEF3E3590B46924B78C108606C0A5DC2B79EE427"
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
