this.NesDb = this.NesDb || {};

NesDb[ '70925EF783A6716FAD9C6706BA9751D721250FCE' ] = {
	"$": {
		"name": "STED: Iseki Wakusei no Yabou",
		"altname": "ＳＴＥＤ 遺跡惑星の野望",
		"class": "Licensed",
		"catalog": "KAC-3E",
		"publisher": "KAC",
		"developer": "Alpha Denshi",
		"region": "Japan",
		"players": "1",
		"date": "1990-07-27"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "F19A11AF",
				"sha1": "70925EF783A6716FAD9C6706BA9751D721250FCE",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2011-09-08"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SKROM",
						"pcb": "HVC-SKROM-05",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "KAC-3E-0 PRG",
								"size": "128k",
								"crc": "33159EAC",
								"sha1": "0B76F18297A4AF950E767CE0CC645157FEFAAD56"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "KAC-3E-0 CHR",
								"size": "128k",
								"crc": "38B7B503",
								"sha1": "C7D9D42147C20B7BB2E53B937309E393795860DE"
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
								"type": "MMC1B2"
							}
						}
					]
				}
			]
		}
	]
};
