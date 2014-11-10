this.NesDb = this.NesDb || {};

NesDb[ '1CECA69E9EB7D6164C3A4B20F356C5FC1F6DB1D2' ] = {
	"$": {
		"name": "Hiryuu no Ken Special: Fighting Wars",
		"altname": "飛龍の拳スペシャル ファイティングウォーズ",
		"class": "Licensed",
		"catalog": "CBF-4N",
		"publisher": "Culture Brain",
		"developer": "Culture Brain",
		"region": "Japan",
		"players": "1",
		"date": "1991-06-21"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"prototype": "1",
				"crc": "14374128",
				"sha1": "1CECA69E9EB7D6164C3A4B20F356C5FC1F6DB1D2",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-07-22"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SKEPROM",
						"pcb": "HVC-SKEPROM-01",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "カルチヤ PRG",
								"size": "128k",
								"crc": "770C360A",
								"sha1": "5C38F60A98AC8452206562C7EEA2C18BD66E2C57"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "カルチヤ CHR",
								"size": "128k",
								"crc": "5482F0C6",
								"sha1": "F92A4FA4635A66A82A4E5B64F893075993DF1181"
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
