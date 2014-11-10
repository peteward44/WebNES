this.NesDb = this.NesDb || {};

NesDb[ '688768E19662F2A81B67EAE8BECC90D4A289E536' ] = {
	"$": {
		"name": "Radia Senki: Reimei-hen",
		"altname": "ラディア戦記 黎明篇",
		"class": "Licensed",
		"catalog": "TCF-8R",
		"publisher": "Tecmo",
		"developer": "Tecmo",
		"region": "Japan",
		"players": "1",
		"date": "1991-11-15"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "332C47E0",
				"sha1": "688768E19662F2A81B67EAE8BECC90D4A289E536",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2011-01-22"
			},
			"board": [
				{
					"$": {
						"type": "HVC-TKROM",
						"pcb": "HVC-TKROM-03",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "TCF-8R-0 PRG",
								"size": "256k",
								"crc": "8B59BAC3",
								"sha1": "B9CE8D520A64F5321AD6E68E4AB1581C7B676001"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "TCF-8R-0 CHR",
								"size": "128k",
								"crc": "9A7F42B6",
								"sha1": "6D702122003AB7320A71AE4D88103992224EA7BA"
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
					"chip": [
						{
							"$": {
								"type": "MMC3C"
							}
						}
					]
				}
			]
		}
	]
};
