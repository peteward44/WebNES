this.NesDb = this.NesDb || {};

NesDb[ '31E7A573CB6409774901EBBE8F09B056D34D0225' ] = {
	"$": {
		"name": "Gambler Jiko Chuushinha",
		"altname": "ぎゅわんぶらあ自己中心派",
		"class": "Licensed",
		"catalog": "ASM-GJ",
		"publisher": "Asmik",
		"developer": "Bits Laboratory",
		"region": "Japan",
		"players": "1",
		"date": "1988-11-11"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "2E2ACAE9",
				"sha1": "31E7A573CB6409774901EBBE8F09B056D34D0225",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-01"
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
								"name": "ASM-GJ-0 PRG",
								"size": "256k",
								"crc": "2E2ACAE9",
								"sha1": "31E7A573CB6409774901EBBE8F09B056D34D0225"
							}
						}
					],
					"wram": [
						{
							"$": {
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
