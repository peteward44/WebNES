this.NesDb = this.NesDb || {};

NesDb[ '689AD264345C45D8F5316901DC1D7AAE3117A3DE' ] = {
	"$": {
		"name": "Kurogane Hiroshi no Yosou Daisuki! Kachiuma Densetsu",
		"altname": "黒鉄ヒロシの予想大好き！勝馬伝説",
		"class": "Licensed",
		"catalog": "NBF-R7 (09)",
		"publisher": "Nichibutsu",
		"developer": "Nichibutsu",
		"region": "Japan",
		"players": "1",
		"date": "1990-04-20"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "8F011713",
				"sha1": "689AD264345C45D8F5316901DC1D7AAE3117A3DE",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-12-06"
			},
			"board": [
				{
					"$": {
						"type": "HVC-TKROM",
						"pcb": "HVC-TKROM-02",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "NBF-R7-0 PRG",
								"size": "128k",
								"crc": "A2C79EC5",
								"sha1": "8DAA0547841256CFAB04A9256A05BA4EA780EF7C"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NBF-R7-0 CHR",
								"size": "128k",
								"crc": "DEB519D9",
								"sha1": "FCBF8EE79E7FD5D85AC8DD046815CADAF46A56E4"
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
