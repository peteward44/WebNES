this.NesDb = this.NesDb || {};

NesDb[ '5E5F21581AE75A9460E1AE9987B67B095AC8E4A6' ] = {
	"$": {
		"name": "SD Gundam Gachapon Senshi 4: New Type Story",
		"altname": "ＳＤガンダム ガチャポン戦士４ ニュータイプストーリー",
		"class": "Licensed",
		"catalog": "SHI-45",
		"publisher": "Yutaka",
		"developer": "TOSE Software",
		"region": "Japan",
		"players": "1",
		"date": "1991-12-21"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "67555417",
				"sha1": "5E5F21581AE75A9460E1AE9987B67B095AC8E4A6",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-04-28"
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
								"name": "SHI-45-0 PRG",
								"size": "256k",
								"crc": "92B07FD9",
								"sha1": "5733E5122AD0CD57B824DB7F843F07C9B66B71CF"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "SHI-45-0 CHR",
								"size": "256k",
								"crc": "2A4EFFB3",
								"sha1": "76BE3A89336268F2F1B213A407EEE8B8F4A5DC8E"
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
								"type": "MMC3B"
							}
						}
					]
				}
			]
		}
	]
};
