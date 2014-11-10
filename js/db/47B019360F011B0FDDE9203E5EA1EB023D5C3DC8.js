this.NesDb = this.NesDb || {};

NesDb[ '47B019360F011B0FDDE9203E5EA1EB023D5C3DC8' ] = {
	"$": {
		"name": "Tanigawa Kouji no Shougi Shinan II",
		"altname": "谷川浩司の将棋指南Ⅱ",
		"class": "Licensed",
		"catalog": "PNF-T2 (R55V5914)",
		"publisher": "Pony Canyon",
		"developer": "Pony Canyon",
		"region": "Japan",
		"players": "1",
		"date": "1988-03-18"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "3836EEAC",
				"sha1": "47B019360F011B0FDDE9203E5EA1EB023D5C3DC8",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-04-28"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SNROM",
						"pcb": "HVC-SNROM-05",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "PNF-T2-0 PRG",
								"size": "128k",
								"crc": "3836EEAC",
								"sha1": "47B019360F011B0FDDE9203E5EA1EB023D5C3DC8"
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
