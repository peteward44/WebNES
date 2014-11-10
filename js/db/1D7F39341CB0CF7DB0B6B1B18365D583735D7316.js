this.NesDb = this.NesDb || {};

NesDb[ '1D7F39341CB0CF7DB0B6B1B18365D583735D7316' ] = {
	"$": {
		"name": "Shinsenden",
		"altname": "神仙伝",
		"class": "Licensed",
		"catalog": "TIX-Z3 (IF-16)",
		"publisher": "Irem",
		"developer": "Tamtex",
		"region": "Japan",
		"players": "1",
		"date": "1989-12-15"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "BB435255",
				"sha1": "1D7F39341CB0CF7DB0B6B1B18365D583735D7316",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-01"
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
								"name": "TIX-Z3-0 PRG",
								"size": "256k",
								"crc": "BB435255",
								"sha1": "1D7F39341CB0CF7DB0B6B1B18365D583735D7316"
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
								"type": "MMC1B2"
							}
						}
					]
				}
			]
		}
	]
};
