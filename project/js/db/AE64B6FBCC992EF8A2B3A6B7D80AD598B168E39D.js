this.NesDb = this.NesDb || {};

NesDb[ 'AE64B6FBCC992EF8A2B3A6B7D80AD598B168E39D' ] = {
	"$": {
		"name": "Bloody Warriors: Shan-Go no Gyakushuu",
		"altname": "ブラッディ ウォーリアーズ　シャンゴーの逆襲",
		"class": "Licensed",
		"catalog": "TDF-94",
		"publisher": "Toei Animation",
		"developer": "Micronics / Khaos",
		"region": "Japan",
		"players": "1",
		"date": "1990-10-19"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "391AA1B8",
				"sha1": "AE64B6FBCC992EF8A2B3A6B7D80AD598B168E39D",
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
								"name": "TDF-94-0 PRG",
								"size": "256k",
								"crc": "391AA1B8",
								"sha1": "AE64B6FBCC992EF8A2B3A6B7D80AD598B168E39D"
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
