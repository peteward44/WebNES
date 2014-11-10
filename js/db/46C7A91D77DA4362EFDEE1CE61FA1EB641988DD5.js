this.NesDb = this.NesDb || {};

NesDb[ '46C7A91D77DA4362EFDEE1CE61FA1EB641988DD5' ] = {
	"$": {
		"name": "Deep Dungeon IV: Kuro no Youjutsushi",
		"altname": "ディープダンジョンⅣ　黒の妖術師",
		"class": "Licensed",
		"catalog": "ASM-4D",
		"publisher": "Asmik",
		"developer": "HummingBird Soft",
		"region": "Japan",
		"players": "1",
		"date": "1990-04-06"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "FE364BE5",
				"sha1": "46C7A91D77DA4362EFDEE1CE61FA1EB641988DD5",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-01"
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
								"name": "ASM-4D-0 PRG",
								"size": "256k",
								"crc": "FE364BE5",
								"sha1": "46C7A91D77DA4362EFDEE1CE61FA1EB641988DD5"
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
