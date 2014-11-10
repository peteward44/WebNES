this.NesDb = this.NesDb || {};

NesDb[ '88919310A4B5433562AB5DF0E3F5FE8FE0A61403' ] = {
	"$": {
		"name": "Rainbow Islands: The Story of Bubble Bobble 2",
		"altname": "レインボーアイランド",
		"class": "Licensed",
		"catalog": "DTF-RL (19)",
		"publisher": "Taito",
		"developer": "Taito",
		"region": "Japan",
		"players": "2",
		"date": "1988-07-26"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "FA704C86",
				"sha1": "88919310A4B5433562AB5DF0E3F5FE8FE0A61403",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-04-28"
			},
			"board": [
				{
					"$": {
						"type": "HVC-UNROM",
						"pcb": "HVC-UNROM-08",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "DTF-RL-0 PRG",
								"size": "128k",
								"crc": "FA704C86",
								"sha1": "88919310A4B5433562AB5DF0E3F5FE8FE0A61403"
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
								"h": "0",
								"v": "1"
							}
						}
					]
				}
			]
		}
	]
};
