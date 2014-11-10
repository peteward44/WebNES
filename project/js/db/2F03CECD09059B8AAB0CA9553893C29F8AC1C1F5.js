this.NesDb = this.NesDb || {};

NesDb[ '2F03CECD09059B8AAB0CA9553893C29F8AC1C1F5' ] = {
	"$": {
		"name": "Shadowgate",
		"altname": "シャドウゲイト",
		"class": "Licensed",
		"catalog": "KSC-3S",
		"publisher": "Kemco",
		"developer": "Icom Simulations",
		"region": "Japan",
		"players": "1",
		"date": "1989-03-31"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "CF40B1C5",
				"sha1": "2F03CECD09059B8AAB0CA9553893C29F8AC1C1F5",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2012-05-06"
			},
			"board": [
				{
					"$": {
						"type": "HVC-TKROM",
						"pcb": "HVC-TKROM-01",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "KSC-3S-0 PRG",
								"size": "128k",
								"crc": "6B403C04",
								"sha1": "CE98223DF426E9521A8B827063E3D717F20CD192"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "KSC-3S-0 CHR",
								"size": "128k",
								"crc": "761E8444",
								"sha1": "A128605C1BB772E8B3EBCFF16B1A172140213797"
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
								"type": "MMC3A"
							}
						}
					]
				}
			]
		}
	]
};
