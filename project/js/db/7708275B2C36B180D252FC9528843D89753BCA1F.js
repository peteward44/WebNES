this.NesDb = this.NesDb || {};

NesDb[ '7708275B2C36B180D252FC9528843D89753BCA1F' ] = {
	"$": {
		"name": "Family Trainer 4: Jogging Race",
		"altname": "ファミリートレーナー④ ジョギングレース",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "FT-04",
		"publisher": "Bandai",
		"developer": "Human Entertainment",
		"region": "Japan",
		"players": "1",
		"date": "1987-05-28"
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
				"crc": "2F128512",
				"sha1": "7708275B2C36B180D252FC9528843D89753BCA1F",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2010-07-23"
			},
			"board": [
				{
					"$": {
						"type": "BANDAI-74*161/32",
						"pcb": "BA-ジョギング",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"name": "BANDAI87 JG PR",
								"size": "32k",
								"crc": "7E704A14",
								"sha1": "4B5AF9B5622E1CEC310E8CB741DB642AC38126EF"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "BANDAI 87 JOGC",
								"size": "128k",
								"crc": "F2DC2EFD",
								"sha1": "E26098C422B39B17263A51B170CF5315AAF50556"
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
