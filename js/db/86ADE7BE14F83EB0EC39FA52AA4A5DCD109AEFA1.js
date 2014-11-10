this.NesDb = this.NesDb || {};

NesDb[ '86ADE7BE14F83EB0EC39FA52AA4A5DCD109AEFA1' ] = {
	"$": {
		"name": "Satsui no Kaisou: Power Soft Satsujin Jiken",
		"altname": "殺意の階層 ソフトハウス連続殺人事件",
		"class": "Licensed",
		"catalog": "HAL-PB",
		"publisher": "HAL Laboratory",
		"developer": "Hyperware",
		"region": "Japan",
		"players": "1",
		"date": "1988-01-07"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "2858933B",
				"sha1": "86ADE7BE14F83EB0EC39FA52AA4A5DCD109AEFA1",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-11-16"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SNROM",
						"pcb": "HVC-SNROM-04",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "HAL-PB-0 PRG",
								"size": "256k",
								"crc": "2858933B",
								"sha1": "86ADE7BE14F83EB0EC39FA52AA4A5DCD109AEFA1"
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
