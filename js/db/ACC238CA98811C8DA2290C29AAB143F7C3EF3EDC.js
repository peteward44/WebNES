this.NesDb = this.NesDb || {};

NesDb[ 'ACC238CA98811C8DA2290C29AAB143F7C3EF3EDC' ] = {
	"$": {
		"name": "Sugoro Quest: Dice no Senshi-tachi",
		"altname": "すごろクエスト　ダイスの戦士たち",
		"class": "Licensed",
		"catalog": "TJC-Q7",
		"publisher": "Technos",
		"developer": "Technos",
		"region": "Japan",
		"players": "1",
		"date": "1991-06-28"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "1411005B",
				"sha1": "ACC238CA98811C8DA2290C29AAB143F7C3EF3EDC",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-07-22"
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
								"name": "TJC-Q7-0 PRG",
								"size": "128k",
								"crc": "E19A2473",
								"sha1": "BA88EFDFD86850694B8B071EC66A345A9FEDC502"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "TJC-Q7-0 CHR",
								"size": "128k",
								"crc": "784AFCB0",
								"sha1": "09B51325373C0ED9F68DE61002A4C5CD6B43CF84"
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
