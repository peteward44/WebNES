this.NesDb = this.NesDb || {};

NesDb[ '760F2447E0AABDFDCA2C4F58A380CBC291FDAF47' ] = {
	"$": {
		"name": "Kujaku Ou",
		"altname": "孔雀王",
		"class": "Licensed",
		"catalog": "PNF-KZ (R58V5916)",
		"publisher": "Pony Canyon",
		"developer": "Graphic Research",
		"region": "Japan",
		"players": "1",
		"date": "1988-09-21"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "71C9ED1E",
				"sha1": "760F2447E0AABDFDCA2C4F58A380CBC291FDAF47",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-01"
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
								"name": "PNF-KZ-0 PRG",
								"size": "256k",
								"crc": "71C9ED1E",
								"sha1": "760F2447E0AABDFDCA2C4F58A380CBC291FDAF47"
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
