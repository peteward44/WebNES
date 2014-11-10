this.NesDb = this.NesDb || {};

NesDb[ '215D399EE058D3BE160916ED7596BCAA12F9ADEA' ] = {
	"$": {
		"name": "Final Fantasy I & II",
		"altname": "ファイナルファンタジーⅠ・Ⅱ",
		"class": "Licensed",
		"catalog": "SQF-FO",
		"publisher": "Square",
		"developer": "Square",
		"region": "Japan",
		"players": "1",
		"date": "1994-02-27"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "C9556B36",
				"sha1": "215D399EE058D3BE160916ED7596BCAA12F9ADEA",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2009-06-23"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SXROM",
						"pcb": "HVC-SXROM-01",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "SQF-FO-0 PRG",
								"size": "512k",
								"crc": "C9556B36",
								"sha1": "215D399EE058D3BE160916ED7596BCAA12F9ADEA"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "32k",
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
								"type": "74xx04"
							}
						},
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
