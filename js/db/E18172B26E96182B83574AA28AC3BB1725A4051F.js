this.NesDb = this.NesDb || {};

NesDb[ 'E18172B26E96182B83574AA28AC3BB1725A4051F' ] = {
	"$": {
		"name": "Viva Las Vegas",
		"altname": "ビバ・ラスベガス",
		"class": "Licensed",
		"catalog": "ESF-LV/59·6R-2",
		"publisher": "Epic / Sony Records",
		"developer": "HAL Laboratory",
		"region": "Japan",
		"players": "4",
		"date": "1988-09-30"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "D6FE9826",
				"sha1": "E18172B26E96182B83574AA28AC3BB1725A4051F",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-06-27"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SKROM",
						"pcb": "HVC-SKROM-02",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "ESF-LV-0 PRG",
								"size": "128k",
								"crc": "9FBE7939",
								"sha1": "2311650581F4287471B32C46EF0CEA2AAD89D8CC"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "ESF-LV-0 CHR",
								"size": "128k",
								"crc": "84C9DC56",
								"sha1": "9271377979AC081D264E7D6289B2F056795EC994"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "8k"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1A"
							}
						}
					]
				}
			]
		}
	]
};
