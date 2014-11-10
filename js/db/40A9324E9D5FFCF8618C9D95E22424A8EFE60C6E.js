this.NesDb = this.NesDb || {};

NesDb[ '40A9324E9D5FFCF8618C9D95E22424A8EFE60C6E' ] = {
	"$": {
		"name": "Akumajou Special: Boku Dracula-kun",
		"altname": "悪魔城すぺしゃる ぼくドラキュラ君",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "KON-RC847",
		"publisher": "Konami",
		"developer": "Konami",
		"region": "Japan",
		"players": "1",
		"date": "1990-10-19"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "C1FBF659",
				"sha1": "40A9324E9D5FFCF8618C9D95E22424A8EFE60C6E",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-03"
			},
			"board": [
				{
					"$": {
						"type": "KONAMI-VRC-4",
						"pcb": "352396",
						"mapper": "23"
					},
					"prg": [
						{
							"$": {
								"name": "RC847J00P",
								"size": "128k",
								"crc": "93794634",
								"sha1": "F7BAF2B7F4E2BFF59D57F9C249C532FC52DECBC2"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "RC847J00C",
								"size": "128k",
								"crc": "C5D1196E",
								"sha1": "8881940578AE9D920AB9526BE63C74071721E1FC"
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
										"function": "PRG A3"
									}
								},
								{
									"$": {
										"number": "4",
										"function": "PRG A2"
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
