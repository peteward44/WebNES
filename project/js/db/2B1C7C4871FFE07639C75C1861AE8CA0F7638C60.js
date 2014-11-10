this.NesDb = this.NesDb || {};

NesDb[ '2B1C7C4871FFE07639C75C1861AE8CA0F7638C60' ] = {
	"$": {
		"name": "Wai Wai World 2: SOS!! Paseri Jou",
		"altname": "ワイワイワールド２ ＳＯＳ！！パセリ城",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "KON-RC850",
		"publisher": "Konami",
		"developer": "Konami",
		"region": "Japan",
		"players": "1",
		"date": "1991-01-05"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "8B03F74D",
				"sha1": "2B1C7C4871FFE07639C75C1861AE8CA0F7638C60",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-11-27"
			},
			"board": [
				{
					"$": {
						"type": "KONAMI-VRC-4",
						"pcb": "352398",
						"mapper": "21"
					},
					"prg": [
						{
							"$": {
								"name": "RC850J02P",
								"size": "256k",
								"crc": "B201B522",
								"sha1": "2312167E8238A79AE297304D2DDEFF21D5B9E028"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "RC850J00C",
								"size": "128k",
								"crc": "75754679",
								"sha1": "BF2352EAD2F72FE6AEB2A4A9B34B323F5A20B513"
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
										"function": "PRG A2"
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
