this.NesDb = this.NesDb || {};

NesDb[ '1153999DB45A7FAEDEFEBE9DA8C5448084B8AE23' ] = {
	"$": {
		"name": "Mickey Mouse III: Yume Fuusen",
		"altname": "ミッキーマウスⅢ　夢ふうせん",
		"class": "Licensed",
		"catalog": "KTB-MD",
		"publisher": "Kemco",
		"developer": "Kemco",
		"region": "Japan",
		"players": "1",
		"date": "1992-09-30"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "57D162F1",
				"sha1": "1153999DB45A7FAEDEFEBE9DA8C5448084B8AE23",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-11-12"
			},
			"board": [
				{
					"$": {
						"type": "HVC-TSROM",
						"pcb": "HVC-TSROM-04",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "KTB-MD-0 PRG",
								"size": "128k",
								"crc": "8635FED1",
								"sha1": "6BD0D65621AA568372380D7ED7742621E1E5884F"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "KTB-MD-0 CHR",
								"size": "128k",
								"crc": "5621B02C",
								"sha1": "C1C9F790613733B894CDE0D674B1E190B5477F23"
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
