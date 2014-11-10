this.NesDb = this.NesDb || {};

NesDb[ '8CE91505EE9C61D006D77D83F75146012389E62D' ] = {
	"$": {
		"name": "ASO: Armored Scrum Object",
		"altname": "エー エス オー",
		"class": "Licensed",
		"catalog": "SFX-AO",
		"publisher": "SNK",
		"developer": "SNK",
		"region": "Japan",
		"players": "1",
		"date": "1986-09-03"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "E3E2C3BF",
				"sha1": "8CE91505EE9C61D006D77D83F75146012389E62D",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2011-09-08"
			},
			"board": [
				{
					"$": {
						"type": "HVC-CNROM",
						"pcb": "N04",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"size": "32k",
								"crc": "72C39B9E",
								"sha1": "0927702C291072E5367795E46A61675672630CE1"
							}
						}
					],
					"chr": [
						{
							"$": {
								"size": "32k",
								"crc": "A2F0D57C",
								"sha1": "F6D5C8AB5C3822B1658D020497715C85B6A20B56"
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
