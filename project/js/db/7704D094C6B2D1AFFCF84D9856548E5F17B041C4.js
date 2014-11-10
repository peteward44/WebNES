this.NesDb = this.NesDb || {};

NesDb[ '7704D094C6B2D1AFFCF84D9856548E5F17B041C4' ] = {
	"$": {
		"name": "Ripple Island",
		"altname": "リップルアイランド",
		"class": "Licensed",
		"catalog": "TEC-RI",
		"publisher": "Sunsoft",
		"developer": "Sunsoft",
		"region": "Japan",
		"players": "1",
		"date": "1988-01-23"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "A38857EB",
				"sha1": "7704D094C6B2D1AFFCF84D9856548E5F17B041C4",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2011-01-22"
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
								"name": "TEC-RI-0 PRG",
								"size": "128k",
								"crc": "A38857EB",
								"sha1": "7704D094C6B2D1AFFCF84D9856548E5F17B041C4"
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
