this.NesDb = this.NesDb || {};

NesDb[ 'F8D8B86A80BA2E1AB6B95E587498CCC08549290D' ] = {
	"$": {
		"name": "Hokuto no Ken 2: Seikimatsu Kyuuseishu Densetsu",
		"altname": "北斗の拳2 世紀末救世主伝説",
		"class": "Licensed",
		"catalog": "TDF-HO",
		"publisher": "Toei Animation",
		"developer": "Shouei System",
		"region": "Japan",
		"players": "1",
		"date": "1987-04-17"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "D1F7DF3A",
				"sha1": "F8D8B86A80BA2E1AB6B95E587498CCC08549290D",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-11-11"
			},
			"board": [
				{
					"$": {
						"type": "HVC-UNROM",
						"pcb": "HVC-UNROM-02",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "TDF-HO-0 PRG",
								"size": "128k",
								"crc": "D1F7DF3A",
								"sha1": "F8D8B86A80BA2E1AB6B95E587498CCC08549290D"
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
