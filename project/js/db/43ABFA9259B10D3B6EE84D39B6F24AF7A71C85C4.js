this.NesDb = this.NesDb || {};

NesDb[ '43ABFA9259B10D3B6EE84D39B6F24AF7A71C85C4' ] = {
	"$": {
		"name": "Family Trainer 5: Meiro Daisakusen",
		"altname": "ファミリートレーナー⑤ 迷路大作戦",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "FT-05",
		"publisher": "Bandai",
		"developer": "Human Entertainment",
		"region": "Japan",
		"players": "1",
		"date": "1987-07-31"
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
				"crc": "370CEB65",
				"sha1": "43ABFA9259B10D3B6EE84D39B6F24AF7A71C85C4",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2010-07-23"
			},
			"board": [
				{
					"$": {
						"type": "BANDAI-74*161/161/32",
						"pcb": "BA 迷路",
						"mapper": "70"
					},
					"prg": [
						{
							"$": {
								"name": "BA-87 MD-C",
								"size": "128k",
								"crc": "AD3DF455",
								"sha1": "A8A5D1E7CC7D8A726A8EDC66D947EF0DE9F94BA4"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "BA-87 MD-P",
								"size": "128k",
								"crc": "EE89A6B0",
								"sha1": "E7DDBB58605A42B00801323F5C980F8E983D0D8D"
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
