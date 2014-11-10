this.NesDb = this.NesDb || {};

NesDb[ '70158A66CAA9C27033F4E11C4272C33E73893496' ] = {
	"$": {
		"name": "Tenchi o Kurau",
		"altname": "天地を喰らう",
		"class": "Licensed",
		"catalog": "CAP-YZ",
		"publisher": "Capcom",
		"developer": "Capcom",
		"region": "Japan",
		"players": "1",
		"date": "1989-05-19"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "1AC701B5",
				"sha1": "70158A66CAA9C27033F4E11C4272C33E73893496",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-06-24"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SNROM",
						"pcb": "HVC-SNROM-07",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "CAP-YZ-0 PRG",
								"size": "256k",
								"crc": "1AC701B5",
								"sha1": "70158A66CAA9C27033F4E11C4272C33E73893496"
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
