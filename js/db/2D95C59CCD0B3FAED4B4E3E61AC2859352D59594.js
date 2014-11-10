this.NesDb = this.NesDb || {};

NesDb[ '2D95C59CCD0B3FAED4B4E3E61AC2859352D59594' ] = {
	"$": {
		"name": "Oeka Kids: Anpanman to Oekaki Shiyou!!",
		"altname": "おえかキッズ アンパンマンとおえかきしよう!!",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "BA-OEKA1",
		"publisher": "Bandai",
		"developer": "TOSE Software",
		"region": "Japan",
		"players": "1",
		"date": "1990-10-25"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "oekakids",
						"name": "Oeka Kids Tablet"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "9D048EA4",
				"sha1": "2D95C59CCD0B3FAED4B4E3E61AC2859352D59594",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2010-07-22"
			},
			"board": [
				{
					"$": {
						"type": "BANDAI-74*161/02/74",
						"pcb": "UNK-BANDAI-OEKAKIDS",
						"mapper": "96"
					},
					"prg": [
						{
							"$": {
								"name": "BANDAI'90 OEKAKIDS-1",
								"size": "128k",
								"crc": "9D048EA4",
								"sha1": "2D95C59CCD0B3FAED4B4E3E61AC2859352D59594"
							}
						}
					],
					"vram": [
						{
							"$": {
								"size": "32k"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx02"
							}
						},
						{
							"$": {
								"type": "74xx161"
							}
						},
						{
							"$": {
								"type": "74xx74"
							}
						}
					]
				}
			]
		}
	]
};
