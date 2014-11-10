this.NesDb = this.NesDb || {};

NesDb[ '89FFDFEE0EBAE0F3E31AD55E9621CBEBB16B8829' ] = {
	"$": {
		"name": "Sangokushi",
		"altname": "三國志",
		"class": "Licensed",
		"catalog": "KOE-IS",
		"publisher": "Koei",
		"developer": "Koei",
		"region": "Japan",
		"players": "8",
		"date": "1988-10-30"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"revision": "A",
				"crc": "CCF35C02",
				"sha1": "89FFDFEE0EBAE0F3E31AD55E9621CBEBB16B8829",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-02-18"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SOROM",
						"pcb": "HVC-SOROM-05",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "KOE-IS-1 PRG",
								"size": "256k",
								"crc": "CCF35C02",
								"sha1": "89FFDFEE0EBAE0F3E31AD55E9621CBEBB16B8829"
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
								"type": "MMC1B2"
							}
						}
					]
				}
			]
		}
	]
};
