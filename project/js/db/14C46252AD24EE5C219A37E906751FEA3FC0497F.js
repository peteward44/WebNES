this.NesDb = this.NesDb || {};

NesDb[ '14C46252AD24EE5C219A37E906751FEA3FC0497F' ] = {
	"$": {
		"name": "Winter Games",
		"class": "Licensed",
		"catalog": "NES-WM-USA",
		"publisher": "Acclaim",
		"developer": "Epyx",
		"portdeveloper": "Atelier Double",
		"region": "USA",
		"players": "2",
		"date": "1987-09"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "52880295",
				"sha1": "14C46252AD24EE5C219A37E906751FEA3FC0497F",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-02-14"
			},
			"board": [
				{
					"$": {
						"type": "NES-SGROM",
						"pcb": "NES-SGROM-02",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-WM-0 PRG",
								"size": "128k",
								"crc": "52880295",
								"sha1": "14C46252AD24EE5C219A37E906751FEA3FC0497F"
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
					],
					"cic": [
						{
							"$": {
								"type": "3193A"
							}
						}
					]
				}
			]
		}
	]
};
