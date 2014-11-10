this.NesDb = this.NesDb || {};

NesDb[ '084AC1E599F1BE679EEEBD5D51D604DC9E5708F3' ] = {
	"$": {
		"name": "Tamura Koushou Mahjong Seminar",
		"altname": "田村光昭の麻雀ゼミナール",
		"class": "Licensed",
		"catalog": "PNF-ZR (R58V5931)",
		"publisher": "Pony Canyon",
		"developer": "Atelier Double",
		"region": "Japan",
		"players": "1",
		"date": "1990-09-21"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "34DEBDFD",
				"sha1": "084AC1E599F1BE679EEEBD5D51D604DC9E5708F3",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-05-27"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SNROM",
						"pcb": "HVC-SNROM-09",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "PNF-ZR-0 PRG",
								"size": "128k",
								"crc": "34DEBDFD",
								"sha1": "084AC1E599F1BE679EEEBD5D51D604DC9E5708F3"
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
								"type": "MMC1B2"
							}
						}
					]
				}
			]
		}
	]
};
