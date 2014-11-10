this.NesDb = this.NesDb || {};

NesDb[ '2BD0F4B345D8ECCDED95C1899099E8CEE0ADF967' ] = {
	"$": {
		"name": "Titan",
		"altname": "タイタン",
		"class": "Licensed",
		"catalog": "SFL-NL",
		"publisher": "Sofel",
		"developer": "Titus",
		"portdeveloper": "Sofel",
		"region": "Japan",
		"players": "2",
		"date": "1990-08-10"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "75901B18",
				"sha1": "2BD0F4B345D8ECCDED95C1899099E8CEE0ADF967",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-12-06"
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
								"name": "SFL-NL-0 PRG",
								"size": "128k",
								"crc": "75901B18",
								"sha1": "2BD0F4B345D8ECCDED95C1899099E8CEE0ADF967"
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
