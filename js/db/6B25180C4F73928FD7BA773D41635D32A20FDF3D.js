this.NesDb = this.NesDb || {};

NesDb[ '6B25180C4F73928FD7BA773D41635D32A20FDF3D' ] = {
	"$": {
		"name": "Wily & Light no Rockboard: That's Paradise",
		"altname": "ワイリー＆ライトのロックボード ザッツパラダイス",
		"class": "Licensed",
		"catalog": "CAP-BE",
		"publisher": "Capcom",
		"developer": "Capcom",
		"region": "Japan",
		"players": "1",
		"date": "1993-01-15"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "23F4B48F",
				"sha1": "6B25180C4F73928FD7BA773D41635D32A20FDF3D",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2011-09-08"
			},
			"board": [
				{
					"$": {
						"type": "HVC-TGROM",
						"pcb": "HVC-TGROM-01",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "CAP-BE-0 PRG",
								"size": "256k",
								"crc": "23F4B48F",
								"sha1": "6B25180C4F73928FD7BA773D41635D32A20FDF3D"
							}
						}
					],
					"vram": [
						{
							"$": {
								"size": "8k"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC3C"
							}
						}
					]
				}
			]
		}
	]
};
