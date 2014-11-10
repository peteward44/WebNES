this.NesDb = this.NesDb || {};

NesDb[ '6DDCD59DC386A2E6A69C32BF0CEB9A9FE3E80BFC' ] = {
	"$": {
		"name": "Romancia",
		"altname": "ロマンシア",
		"class": "Licensed",
		"catalog": "TKS-G2",
		"publisher": "Tokyo Shoseki",
		"developer": "Nihon Falcom",
		"portdeveloper": "Compile",
		"region": "Japan",
		"players": "1",
		"date": "1987-10-30"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "CF9CF7A2",
				"sha1": "6DDCD59DC386A2E6A69C32BF0CEB9A9FE3E80BFC",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-04-28"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SGROM",
						"pcb": "HVC-SGROM-02",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "TKS-G2-0 PRG",
								"size": "128k",
								"crc": "CF9CF7A2",
								"sha1": "6DDCD59DC386A2E6A69C32BF0CEB9A9FE3E80BFC"
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
								"type": "MMC1"
							}
						}
					]
				}
			]
		}
	]
};
