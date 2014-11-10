this.NesDb = this.NesDb || {};

NesDb[ '559C8EECF3FB93582407A100BCF78B6B6729B656' ] = {
	"$": {
		"name": "Jekyll Hakase no Houma ga Toki",
		"altname": "ジキール博士の彷魔が刻",
		"class": "Licensed",
		"catalog": "THF-TK",
		"publisher": "Toho",
		"developer": "Advance Communication",
		"region": "Japan",
		"players": "1",
		"date": "1988-04-08"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "96BA90B0",
				"sha1": "559C8EECF3FB93582407A100BCF78B6B6729B656",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-06-21"
			},
			"board": [
				{
					"$": {
						"type": "HVC-UNROM",
						"pcb": "HVC-UNROM-05",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "THF-TK-0 PRG",
								"size": "128k",
								"crc": "96BA90B0",
								"sha1": "559C8EECF3FB93582407A100BCF78B6B6729B656"
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
								"type": "74xx161"
							}
						},
						{
							"$": {
								"type": "74xx32"
							}
						}
					],
					"pad": [
						{
							"$": {
								"h": "1",
								"v": "0"
							}
						}
					]
				}
			]
		}
	]
};
