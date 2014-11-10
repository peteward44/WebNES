this.NesDb = this.NesDb || {};

NesDb[ '6BBA730E2D3B30DECAA4D89EE4DC27EEDCE08F9A' ] = {
	"$": {
		"name": "Bakushou!! Jinsei Gekijou",
		"altname": "爆笑！！人生劇場",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "TFC-BZG-5900-23",
		"publisher": "Taito",
		"developer": "Taito",
		"region": "Japan",
		"players": "4",
		"date": "1989-03-17"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "ADF606F6",
				"sha1": "6BBA730E2D3B30DECAA4D89EE4DC27EEDCE08F9A",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-05-13"
			},
			"board": [
				{
					"$": {
						"type": "TAITO-TC0190FMC",
						"pcb": "J9100181A",
						"mapper": "33"
					},
					"prg": [
						{
							"$": {
								"name": "B71-01",
								"size": "256k",
								"crc": "ECDBAFA4",
								"sha1": "3AE1F9AF6EC6C799C47A394CE933822D28DA84C6"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "B71-02",
								"size": "128k",
								"crc": "F33EE273",
								"sha1": "2519AD3DAE5FC3FBEC2E0DD35D001F51115B9ECC"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx245"
							}
						},
						{
							"$": {
								"type": "TC0190FMC"
							}
						}
					]
				}
			]
		}
	]
};
