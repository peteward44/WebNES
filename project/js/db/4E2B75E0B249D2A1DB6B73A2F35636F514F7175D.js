this.NesDb = this.NesDb || {};

NesDb[ '4E2B75E0B249D2A1DB6B73A2F35636F514F7175D' ] = {
	"$": {
		"name": "Miracle Ropit's Adventure in 2100",
		"altname": "ミラクルロピット ～２１００年の冒険～",
		"class": "Licensed",
		"catalog": "KIN-GM",
		"publisher": "King Records",
		"developer": "Micronics / Khaos",
		"region": "Japan",
		"players": "2",
		"date": "1987-08-07"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "9F8336DB",
				"sha1": "4E2B75E0B249D2A1DB6B73A2F35636F514F7175D",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-06-22"
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
								"name": "KIM-GM-0 PRG",
								"size": "128k",
								"crc": "9F8336DB",
								"sha1": "4E2B75E0B249D2A1DB6B73A2F35636F514F7175D"
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
