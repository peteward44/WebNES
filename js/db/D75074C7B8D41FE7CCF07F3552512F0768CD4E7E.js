this.NesDb = this.NesDb || {};

NesDb[ 'D75074C7B8D41FE7CCF07F3552512F0768CD4E7E' ] = {
	"$": {
		"name": "Maison Ikkoku",
		"altname": "めぞん一刻",
		"class": "Licensed",
		"catalog": "BTC-M1",
		"publisher": "Bothtec (Quest)",
		"developer": "Bothtec (Quest)",
		"region": "Japan",
		"players": "1",
		"date": "1988-07-21"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "46F30F2D",
				"sha1": "D75074C7B8D41FE7CCF07F3552512F0768CD4E7E",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2010-07-22"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SNROM",
						"pcb": "HVC-SNROM-06",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "BTC-M1-0 PRG",
								"size": "256k",
								"crc": "46F30F2D",
								"sha1": "D75074C7B8D41FE7CCF07F3552512F0768CD4E7E"
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
