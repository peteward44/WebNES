this.NesDb = this.NesDb || {};

NesDb[ '8D8D5A3BF2776FAE34C752899B8AA49173A9C868' ] = {
	"$": {
		"name": "Family Trainer 1: Athletic World",
		"altname": "ファミリートレーナー① アスレチックワールド",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "FT-01",
		"publisher": "Bandai",
		"developer": "Human Entertainment",
		"region": "Japan",
		"players": "1",
		"date": "1986-11-12"
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
				"crc": "0354868A",
				"sha1": "8D8D5A3BF2776FAE34C752899B8AA49173A9C868",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2010-07-22"
			},
			"board": [
				{
					"$": {
						"type": "BANDAI-CNROM",
						"pcb": "BA-アスレチックス",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"name": "BANDAI 86 SP P",
								"size": "32k",
								"crc": "87738F85",
								"sha1": "5C8A3081990E6A9EF127E70E05B38C5C37CD58C6"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "BANDAI 86 SP C",
								"size": "32k",
								"crc": "8ADAECB2",
								"sha1": "AA3E23CC990397AF0AAC44F77835757C96CBAF61"
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
