this.NesDb = this.NesDb || {};

NesDb[ '3EA83DB139C7E92ED1F7FF72DDBBA038A9A22EA6' ] = {
	"$": {
		"name": "Nobunaga no Yabou: Zenkokuban",
		"altname": "信長の野望　全国版",
		"class": "Licensed",
		"catalog": "KOE-NZ",
		"publisher": "Koei",
		"developer": "Koei",
		"region": "Japan",
		"players": "8",
		"date": "1988-03-18"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "3F7AD415",
				"sha1": "3EA83DB139C7E92ED1F7FF72DDBBA038A9A22EA6",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-04-29"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SOROM",
						"pcb": "HVC-SOROM-01",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "KOE-NZ-0 PRG",
								"size": "256k",
								"crc": "3F7AD415",
								"sha1": "3EA83DB139C7E92ED1F7FF72DDBBA038A9A22EA6"
							}
						}
					],
					"wram": [
						{
							"$": {
								"id": "0",
								"size": "8k",
								"battery": "1"
							}
						},
						{
							"$": {
								"id": "1",
								"size": "8k"
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
