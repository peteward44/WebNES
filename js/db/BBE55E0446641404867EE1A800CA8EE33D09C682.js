this.NesDb = this.NesDb || {};

NesDb[ 'BBE55E0446641404867EE1A800CA8EE33D09C682' ] = {
	"$": {
		"name": "Family Trainer 7: Famitre Daiundoukai",
		"altname": "ファミリートレーナー⑦ ファミトレ大運動会",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "FT-07",
		"publisher": "Bandai",
		"developer": "Human Entertainment",
		"region": "Japan",
		"players": "1",
		"date": "1987-11-27"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "familytrainer",
						"name": "Family Trainer Mat"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "6CCA1C1F",
				"sha1": "BBE55E0446641404867EE1A800CA8EE33D09C682",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2010-07-23"
			},
			"board": [
				{
					"$": {
						"type": "BANDAI-CNROM",
						"pcb": "BA-ウンドウカイ",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"name": "BA-87 FT7-PRG",
								"size": "32k",
								"crc": "CA26A0F1",
								"sha1": "F4BCD81E2EBA429E0C4BD829BA034A8F1A05FF42"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "BA-87 FT7-CHR",
								"size": "32k",
								"crc": "64E5D76F",
								"sha1": "CD7246B242A1BF8B46B92DF55B9FE92B677C3CE0"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx161"
							}
						}
					],
					"pad": [
						{
							"$": {
								"h": "1",
								"v": "0"
							}
						}
					]
				}
			]
		}
	]
};
