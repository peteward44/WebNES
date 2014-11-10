this.NesDb = this.NesDb || {};

NesDb[ 'AA511B101CD5E32F27E20A901E40D90A270FD980' ] = {
	"$": {
		"name": "Family Trainer 2: Running Stadium",
		"altname": "ファミリートレーナー② ランニングスタジアム",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "FT-02",
		"publisher": "Bandai",
		"developer": "Human Entertainment",
		"region": "Japan",
		"players": "2",
		"date": "1986-12-23"
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
				"crc": "EA90F3E2",
				"sha1": "AA511B101CD5E32F27E20A901E40D90A270FD980",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-12-06"
			},
			"board": [
				{
					"$": {
						"type": "BANDAI-CNROM",
						"pcb": "BA-ランニング",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"name": "BANDAI 86 RUNP",
								"size": "32k",
								"crc": "8A5B72C0",
								"sha1": "796122DB71ECF4CC639D5C45B6B824B1F8B02957"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "BANDAI 86 RUNC",
								"size": "32k",
								"crc": "36FB98CF",
								"sha1": "CAC033E5FA16AAA57C473336156E14581A57512E"
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
