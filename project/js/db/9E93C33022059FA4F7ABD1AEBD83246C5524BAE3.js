this.NesDb = this.NesDb || {};

NesDb[ '9E93C33022059FA4F7ABD1AEBD83246C5524BAE3' ] = {
	"$": {
		"name": "Family Trainer 9: Totsugeki! Fuun Takeshijou 2",
		"altname": "ファミリートレーナー⑨ 風雲たけし城二",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "FT-09",
		"publisher": "Bandai",
		"developer": "",
		"region": "Japan",
		"players": "1",
		"date": "1988-12-20"
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
				"crc": "5CD5FDA4",
				"sha1": "9E93C33022059FA4F7ABD1AEBD83246C5524BAE3",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-02-17"
			},
			"board": [
				{
					"$": {
						"type": "BANDAI-GNROM",
						"pcb": "BA-TAKESHI II",
						"mapper": "66"
					},
					"prg": [
						{
							"$": {
								"name": "BA-TAKESHI 2 PRO",
								"size": "128k",
								"crc": "EE11FE78",
								"sha1": "E95B3A144D6E43F7F7D583339E1EF244F1EB08C8"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "BA-TAKESHI 2 CHR-",
								"size": "32k",
								"crc": "B49317CF",
								"sha1": "11E4189E3240332037FD4857264633C5F983528A"
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
