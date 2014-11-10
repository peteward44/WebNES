this.NesDb = this.NesDb || {};

NesDb[ '5B4D6EE48E2A17529AE8BC2A4922D6F0F8107D65' ] = {
	"$": {
		"name": "HeroQuest",
		"class": "Licensed",
		"subclass": "Unreleased",
		"catalog": "UNR-H5-UKV",
		"publisher": "Gremlin",
		"developer": "Gremlin",
		"region": "Europe",
		"players": "2",
		"date": "0000"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"prototype": "1",
				"crc": "F9FC0700",
				"sha1": "5B4D6EE48E2A17529AE8BC2A4922D6F0F8107D65",
				"dump": "ok",
				"dumper": "TheRedEye",
				"datedumped": "2012-04-16"
			},
			"board": [
				{
					"$": {
						"type": "NES-UNEPROM",
						"pcb": "NES-UNEPROM-01",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "HEROQUEST NES 21/8 RN0003",
								"size": "128k",
								"crc": "F9FC0700",
								"sha1": "5B4D6EE48E2A17529AE8BC2A4922D6F0F8107D65"
							}
						}
					],
					"vram": [
						{
							"$": {
								"size": "8k"
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
					"cic": [
						{
							"$": {
								"type": "3195A"
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
