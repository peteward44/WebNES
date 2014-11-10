this.NesDb = this.NesDb || {};

NesDb[ '6A493CC7A3745F44E2EC4BA0FA71BFA89FF5CF37' ] = {
	"$": {
		"name": "Gradius II",
		"altname": "グラディウスII",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "KON-RC832",
		"publisher": "Konami",
		"developer": "Konami",
		"region": "Japan",
		"players": "2",
		"date": "1988-12-16"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "5ADBF660",
				"sha1": "6A493CC7A3745F44E2EC4BA0FA71BFA89FF5CF37",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-05-13"
			},
			"board": [
				{
					"$": {
						"type": "KONAMI-VRC-4",
						"pcb": "351406",
						"mapper": "25"
					},
					"prg": [
						{
							"$": {
								"name": "RC832J0P",
								"size": "128k",
								"crc": "C71D4CE7",
								"sha1": "1F5A56391AF6A1570D4376DE117ECC8F67586630"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "RC832J0C",
								"size": "128k",
								"crc": "537B6F6A",
								"sha1": "7C63A0F2DF6996F49AA7ADA6FF21572D45435132"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "2k"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "VRC4"
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
								}
							]
						}
					]
				}
			]
		}
	]
};
