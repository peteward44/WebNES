this.NesDb = this.NesDb || {};

NesDb[ '2FFA0582F4B7755C18D4973F3CC4A1ABFF9C1E6C' ] = {
	"$": {
		"name": "Family Trainer 3: Aerobics Studio",
		"altname": "ファミリートレーナー③ エアロビスタジオ",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "FT-03",
		"publisher": "Bandai",
		"developer": "Human Entertainment",
		"region": "Japan",
		"players": "1",
		"date": "1987-02-26"
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
				"crc": "29DE87AF",
				"sha1": "2FFA0582F4B7755C18D4973F3CC4A1ABFF9C1E6C",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-02"
			},
			"board": [
				{
					"$": {
						"type": "BANDAI-PT-554",
						"pcb": "BA-エアロビ",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"name": "BA 87 AEROB PR",
								"size": "32k",
								"crc": "F8DA2506",
								"sha1": "C14075B1B7C98B684870E8D85B7FF2B462E3CD10"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "BA 87 AEROB CH",
								"size": "32k",
								"crc": "FF1D2BFD",
								"sha1": "C41872D3C28230F3A907DB9BF46568CA8A789E22"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx139"
							}
						},
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
								"type": "M50805"
							}
						}
					],
					"pad": [
						{
							"$": {
								"h": "0",
								"v": "1"
							}
						}
					]
				}
			]
		}
	]
};
