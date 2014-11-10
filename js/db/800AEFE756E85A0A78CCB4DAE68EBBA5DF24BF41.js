this.NesDb = this.NesDb || {};

NesDb[ '800AEFE756E85A0A78CCB4DAE68EBBA5DF24BF41' ] = {
	"$": {
		"name": "Daikoukai Jidai",
		"altname": "大航海時代",
		"class": "Licensed",
		"catalog": "KOE-QK",
		"publisher": "Koei",
		"developer": "Koei",
		"region": "Japan",
		"players": "1",
		"date": "1991-03-15"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "FE3488D1",
				"sha1": "800AEFE756E85A0A78CCB4DAE68EBBA5DF24BF41",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-12-06"
			},
			"board": [
				{
					"$": {
						"type": "HVC-ETROM",
						"pcb": "HVC-ETROM-02",
						"mapper": "5"
					},
					"prg": [
						{
							"$": {
								"name": "KOE-QK-0 PRG",
								"size": "512k",
								"crc": "F4CD4998",
								"sha1": "058493B592FCAA7EB6E1615D2E55F32946BA0C61"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "KOE-QK-0 CHR",
								"size": "128k",
								"crc": "54BEF15B",
								"sha1": "3A4B5AC6F8D002676F6D24A0AE144AA098981E75"
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
					"chip": [
						{
							"$": {
								"type": "MMC5"
							}
						}
					]
				}
			]
		}
	]
};
