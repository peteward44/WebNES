this.NesDb = this.NesDb || {};

NesDb[ '08625DB56BA9A2A66E636590C51044C6726C5B26' ] = {
	"$": {
		"name": "Shadowgate",
		"class": "Licensed",
		"catalog": "NES-3S-NOE",
		"publisher": "Kemco",
		"developer": "Icom Simulations",
		"region": "Germany",
		"players": "1",
		"date": "1992-01-03"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "B64078F3",
				"sha1": "08625DB56BA9A2A66E636590C51044C6726C5B26",
				"dump": "ok",
				"dumper": "piteta",
				"datedumped": "2007-08-04"
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
								"name": "FRG-3S-0 PRG",
								"size": "128k",
								"crc": "C3D9302B",
								"sha1": "552F57C507DA43915F1E11FF019972B1D88030DD"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "FRG-3S-0 CHR",
								"size": "128k",
								"crc": "D14067A6",
								"sha1": "6ED715F596C9D07C8297C01A7B05802F6EEE3EAE"
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
