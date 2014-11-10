this.NesDb = this.NesDb || {};

NesDb[ '9D22023F55E608687776B53E27E016BB5F81CAA6' ] = {
	"$": {
		"name": "Tanigawa Kouji no Shougi Shinan III",
		"altname": "谷川浩司の将棋指南Ⅲ",
		"class": "Licensed",
		"catalog": "PNF-T3 (R58V5921)",
		"publisher": "Pony Canyon",
		"developer": "Pony Canyon",
		"region": "Japan",
		"players": "1",
		"date": "1989-09-14"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "E63D9193",
				"sha1": "9D22023F55E608687776B53E27E016BB5F81CAA6",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-06-21"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SNROM",
						"pcb": "HVC-SNROM-08",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "PNF-T3-0 PRG",
								"size": "128k",
								"crc": "E63D9193",
								"sha1": "9D22023F55E608687776B53E27E016BB5F81CAA6"
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
