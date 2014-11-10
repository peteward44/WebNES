this.NesDb = this.NesDb || {};

NesDb[ 'A497608C4638413BCD38E321F257C84BB6FE8DB8' ] = {
	"$": {
		"name": "Obocchama-kun",
		"altname": "おぼっちゃまくん",
		"class": "Licensed",
		"catalog": "TCF-3Q",
		"publisher": "Tecmo",
		"developer": "Tecmo",
		"region": "Japan",
		"players": "1",
		"date": "1991-04-05"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "E24483B1",
				"sha1": "A497608C4638413BCD38E321F257C84BB6FE8DB8",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-11-12"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SKROM",
						"pcb": "HVC-SKROM-05",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "TCF-3Q-0 PRG",
								"size": "128k",
								"crc": "09EEFDE3",
								"sha1": "947A431FC81BA08A7A334C95CDFFEA95CF0DE8C6"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "TCF-3Q-0 CHR",
								"size": "128k",
								"crc": "3EF8C92F",
								"sha1": "0A543152B1E791B0A9F82BEE049E2CE8C38D9A54"
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
