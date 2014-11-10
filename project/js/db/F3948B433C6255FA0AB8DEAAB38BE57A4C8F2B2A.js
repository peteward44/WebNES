this.NesDb = this.NesDb || {};

NesDb[ 'F3948B433C6255FA0AB8DEAAB38BE57A4C8F2B2A' ] = {
	"$": {
		"name": "Magic John",
		"altname": "マジックジョン",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "JF-30",
		"publisher": "Jaleco",
		"developer": "Aicom",
		"region": "Japan",
		"players": "1",
		"date": "1990-09-28"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "D8748E0A",
				"sha1": "F3948B433C6255FA0AB8DEAAB38BE57A4C8F2B2A",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-03"
			},
			"board": [
				{
					"$": {
						"type": "JALECO-JF-24",
						"pcb": "JF-24A",
						"mapper": "18"
					},
					"prg": [
						{
							"$": {
								"size": "128k",
								"crc": "EFD4837F",
								"sha1": "05E9AF206B1F382BDBEC3E45D87392DDCFB5EFEA"
							}
						}
					],
					"chr": [
						{
							"$": {
								"size": "128k",
								"crc": "89B71145",
								"sha1": "6808BA162D2FF4E59E113BD2613D40BC8098410D"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx32"
							}
						},
						{
							"$": {
								"type": "SS88006"
							}
						}
					]
				}
			]
		}
	]
};
