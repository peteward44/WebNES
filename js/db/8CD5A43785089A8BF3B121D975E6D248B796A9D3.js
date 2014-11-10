this.NesDb = this.NesDb || {};

NesDb[ '8CD5A43785089A8BF3B121D975E6D248B796A9D3' ] = {
	"$": {
		"name": "Zelda no Densetsu 1: The Hyrule Fantasy",
		"altname": "ゼルダの伝説1",
		"class": "Licensed",
		"catalog": "HVC-ZL",
		"publisher": "Nintendo",
		"developer": "Nintendo",
		"region": "Japan",
		"players": "1",
		"date": "1994-02-19"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "7AE0BF3C",
				"sha1": "8CD5A43785089A8BF3B121D975E6D248B796A9D3",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-02"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SNROM",
						"pcb": "HVC-SNROM-09",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "HVC-ZL-0 PRG",
								"size": "128k",
								"crc": "7AE0BF3C",
								"sha1": "8CD5A43785089A8BF3B121D975E6D248B796A9D3"
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
								"type": "MMC1B3"
							}
						}
					]
				}
			]
		}
	]
};
