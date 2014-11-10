this.NesDb = this.NesDb || {};

NesDb[ 'E777176ABF8D118EBAB9B7A64AC69FF9F93DCC8A' ] = {
	"$": {
		"name": "Shuffle Fight",
		"altname": "シャッフルファイト",
		"class": "Licensed",
		"catalog": "BAP-CB",
		"publisher": "Banpresto",
		"developer": "Pandora Box Creative Office",
		"region": "Japan",
		"players": "1",
		"date": "1992-10-09"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "BDC124E5",
				"sha1": "E777176ABF8D118EBAB9B7A64AC69FF9F93DCC8A",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2012-05-06"
			},
			"board": [
				{
					"$": {
						"type": "HVC-TNROM",
						"pcb": "HVC-TNROM-02",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "BAP-CB-0 PRG",
								"size": "256k",
								"crc": "BDC124E5",
								"sha1": "E777176ABF8D118EBAB9B7A64AC69FF9F93DCC8A"
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
								"type": "MMC3C"
							}
						}
					]
				}
			]
		}
	]
};
