this.NesDb = this.NesDb || {};

NesDb[ '844F12CDAEF0A3E62D24BB23277EB5B63805E2C8' ] = {
	"$": {
		"name": "Power Blazer",
		"altname": "パワーブレイザー",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "TFC-PB-5900-31",
		"publisher": "Taito",
		"developer": "Natsume",
		"region": "Japan",
		"players": "1",
		"date": "1990-04-20"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "AEB7FCE9",
				"sha1": "844F12CDAEF0A3E62D24BB23277EB5B63805E2C8",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-02"
			},
			"board": [
				{
					"$": {
						"type": "TAITO-TC0190FMC",
						"pcb": "J9100205A",
						"mapper": "33"
					},
					"prg": [
						{
							"$": {
								"name": "C37-01",
								"size": "128k",
								"crc": "07EE6D8F",
								"sha1": "867FE2BC7DEE2ED92E439A0278DB364BEF1F2C72"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "C37-02",
								"size": "128k",
								"crc": "8C7B2E41",
								"sha1": "BE15E98C4296F0BFE2F7BC943354710DF0B96EC6"
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
