this.NesDb = this.NesDb || {};

NesDb[ '042B6C21E7C895D2810463C4C3BFBFC52B839B3B' ] = {
	"$": {
		"name": "Kaguya Hime Densetsu",
		"altname": "かぐや姫伝説",
		"class": "Licensed",
		"catalog": "VFR-K1-06",
		"publisher": "Victor",
		"developer": "Micronics / Khaos",
		"region": "Japan",
		"players": "1",
		"date": "1988-12-16"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "26CEC726",
				"sha1": "042B6C21E7C895D2810463C4C3BFBFC52B839B3B",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2012-05-06"
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
								"name": "VFR-K1-0 PRG",
								"size": "256k",
								"crc": "26CEC726",
								"sha1": "042B6C21E7C895D2810463C4C3BFBFC52B839B3B"
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
