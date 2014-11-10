this.NesDb = this.NesDb || {};

NesDb[ '761BA83F7E90C11F8FBE35AEC510D33D8BB6F024' ] = {
	"$": {
		"name": "Solstice: Die Suche nach dem Zauberstab von Demnos",
		"altname": "Solstice: The Quest for the Staff of Demnos",
		"class": "Licensed",
		"catalog": "NES-LX-FRG",
		"publisher": "Nintendo",
		"developer": "Software Creations",
		"region": "Germany",
		"players": "1",
		"date": "1991-09-26"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "7CB0D70D",
				"sha1": "761BA83F7E90C11F8FBE35AEC510D33D8BB6F024",
				"dump": "ok",
				"dumper": "Bregalad",
				"datedumped": "2007-06-09"
			},
			"board": [
				{
					"$": {
						"type": "NES-ANROM",
						"pcb": "NES-ANROM-03",
						"mapper": "7"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-LX-0 PRG",
								"size": "128k",
								"crc": "7CB0D70D",
								"sha1": "761BA83F7E90C11F8FBE35AEC510D33D8BB6F024"
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
								"type": "74xx02"
							}
						},
						{
							"$": {
								"type": "74xx161"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "3195A"
							}
						}
					]
				}
			]
		}
	]
};
