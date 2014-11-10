this.NesDb = this.NesDb || {};

NesDb[ '627D4F20667EDED6F26A379C8477669348F3ECAB' ] = {
	"$": {
		"name": "Arkanoid II",
		"altname": "アルカノイドII リベンジ オブ ＤＯＨ",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "TFC-ANII-5900-16",
		"publisher": "Taito",
		"developer": "Taito",
		"region": "Japan",
		"players": "1",
		"date": "1988-03-08"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "0F141525",
				"sha1": "627D4F20667EDED6F26A379C8477669348F3ECAB",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-11-26"
			},
			"board": [
				{
					"$": {
						"type": "TAITO-74*161/161/32",
						"pcb": "ARKANOID2",
						"mapper": "152"
					},
					"prg": [
						{
							"$": {
								"size": "64k",
								"crc": "6267FBD1",
								"sha1": "4094905BBB6AABAD2DB67D6641504A43682A4757"
							}
						}
					],
					"chr": [
						{
							"$": {
								"size": "128k",
								"crc": "7D66D22D",
								"sha1": "F4E4DB5A3951031DA671783DC26CF058BEDE1EED"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx161"
							}
						},
						{
							"$": {
								"type": "74xx161"
							}
						},
						{
							"$": {
								"type": "74xx32"
							}
						}
					]
				}
			]
		}
	]
};
