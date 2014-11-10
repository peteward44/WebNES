this.NesDb = this.NesDb || {};

NesDb[ '8E3E1EEDFAF913658ED81BC65481FD8E18E41138' ] = {
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
				"revision": "1.1",
				"crc": "60AD090A",
				"sha1": "8E3E1EEDFAF913658ED81BC65481FD8E18E41138",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-06-28"
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
								"crc": "8C8FA83B",
								"sha1": "0AB64AB0A5629F60AEBE7FE32910A4136E99E6B0"
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
