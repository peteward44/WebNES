this.NesDb = this.NesDb || {};

NesDb[ '5FB00544164DABA035D09DA075A2AE20C8294372' ] = {
	"$": {
		"name": "Majou Densetsu II: Daimashikyou Galious",
		"altname": "魔城伝説Ⅱ 大魔司教ガリウス",
		"class": "Licensed",
		"catalog": "KDS-GI",
		"publisher": "Konami",
		"developer": "Konami",
		"region": "Japan",
		"players": "1",
		"date": "1987-08-11"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "4536FE1C",
				"sha1": "5FB00544164DABA035D09DA075A2AE20C8294372",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-06-24"
			},
			"board": [
				{
					"$": {
						"type": "HVC-UNROM",
						"pcb": "HVC-UNROM-03",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "KDS-GI-0 PRG",
								"size": "128k",
								"crc": "4536FE1C",
								"sha1": "5FB00544164DABA035D09DA075A2AE20C8294372"
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
