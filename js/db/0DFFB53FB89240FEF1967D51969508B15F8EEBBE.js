this.NesDb = this.NesDb || {};

NesDb[ '0DFFB53FB89240FEF1967D51969508B15F8EEBBE' ] = {
	"$": {
		"name": "Navy Blue",
		"altname": "ネイビーブルー",
		"class": "Licensed",
		"catalog": "IMX-NB",
		"publisher": "I'Max",
		"developer": "Use",
		"region": "Japan",
		"players": "1",
		"date": "1992-02-14"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "69BCDB8B",
				"sha1": "0DFFB53FB89240FEF1967D51969508B15F8EEBBE",
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
								"name": "IMX-NB-0 PRG",
								"size": "128k",
								"crc": "69BCDB8B",
								"sha1": "0DFFB53FB89240FEF1967D51969508B15F8EEBBE"
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
