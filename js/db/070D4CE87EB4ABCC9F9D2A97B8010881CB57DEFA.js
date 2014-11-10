this.NesDb = this.NesDb || {};

NesDb[ '070D4CE87EB4ABCC9F9D2A97B8010881CB57DEFA' ] = {
	"$": {
		"name": "Final Fantasy II",
		"altname": "ファイナルファンタジーⅡ",
		"class": "Licensed",
		"catalog": "SQF-FY",
		"publisher": "Square",
		"developer": "Square",
		"region": "Japan",
		"players": "1",
		"date": "1988-12-17"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "D29DB3C7",
				"sha1": "070D4CE87EB4ABCC9F9D2A97B8010881CB57DEFA",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-11-11"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SNROM",
						"pcb": "HVC-SNROM-07",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "SQF-FY-0 PRG",
								"size": "256k",
								"crc": "D29DB3C7",
								"sha1": "070D4CE87EB4ABCC9F9D2A97B8010881CB57DEFA"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "8k",
								"battery": "1"
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
								"type": "MMC1A"
							}
						}
					]
				}
			]
		}
	]
};
