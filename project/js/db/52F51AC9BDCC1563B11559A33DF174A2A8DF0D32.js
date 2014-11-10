this.NesDb = this.NesDb || {};

NesDb[ '52F51AC9BDCC1563B11559A33DF174A2A8DF0D32' ] = {
	"$": {
		"name": "Akuma no Shoutaijou",
		"altname": "悪魔の招待状",
		"class": "Licensed",
		"catalog": "KSC-UV",
		"publisher": "Kemco",
		"developer": "Icom Simulations",
		"region": "Japan",
		"players": "1",
		"date": "1989-09-29"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "1248326D",
				"sha1": "52F51AC9BDCC1563B11559A33DF174A2A8DF0D32",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2010-07-22"
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
								"name": "KSC-UV-0 PRG",
								"size": "128k",
								"crc": "BF8C1116",
								"sha1": "D661301C5498096D1DCE65333C4953ED0C1A6A24"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "KSC-UV-0 CHR",
								"size": "128k",
								"crc": "EBE60D7E",
								"sha1": "0629B145D06308C1CAFC4779C9985270D0242FFB"
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
