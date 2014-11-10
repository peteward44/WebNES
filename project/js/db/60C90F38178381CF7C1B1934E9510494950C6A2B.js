this.NesDb = this.NesDb || {};

NesDb[ '60C90F38178381CF7C1B1934E9510494950C6A2B' ] = {
	"$": {
		"name": "Batsu & Terii: Makyou no Tetsujin Race",
		"altname": "バツ＆テリー 魔境の鉄人レース",
		"class": "Licensed",
		"catalog": "USE-BC",
		"publisher": "Use",
		"developer": "Use",
		"region": "Japan",
		"players": "1",
		"date": "1987-07-22"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "F989296C",
				"sha1": "60C90F38178381CF7C1B1934E9510494950C6A2B",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-01"
			},
			"board": [
				{
					"$": {
						"type": "HVC-UNROM",
						"pcb": "HVC-UNROM-03",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "USE-BC-0 PRG",
								"size": "128k",
								"crc": "F989296C",
								"sha1": "60C90F38178381CF7C1B1934E9510494950C6A2B"
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
								"h": "1",
								"v": "0"
							}
						}
					]
				}
			]
		}
	]
};
