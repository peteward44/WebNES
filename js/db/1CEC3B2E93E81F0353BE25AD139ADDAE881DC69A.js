this.NesDb = this.NesDb || {};

NesDb[ '1CEC3B2E93E81F0353BE25AD139ADDAE881DC69A' ] = {
	"$": {
		"name": "Wario's Woods",
		"class": "Licensed",
		"catalog": "NES-WB-NOE",
		"publisher": "Nintendo",
		"developer": "Nintendo",
		"region": "Germany",
		"players": "2",
		"date": "1995-02-02"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "668D1715",
				"sha1": "1CEC3B2E93E81F0353BE25AD139ADDAE881DC69A",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2007-11-02"
			},
			"board": [
				{
					"$": {
						"type": "NES-TKROM",
						"pcb": "NES-TKROM-10",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-WB-0 PRG",
								"size": "256k",
								"crc": "B24F0357",
								"sha1": "B868E2AE26643ECAFD689DA2500B6562B3BBB37C"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PAL-WB-0 CHR",
								"size": "256k",
								"crc": "0146D148",
								"sha1": "F4D90D96B8DD4192774DFCF44BBC4BD957CC4C07"
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
