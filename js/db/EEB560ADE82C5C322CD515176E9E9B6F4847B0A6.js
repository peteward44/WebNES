this.NesDb = this.NesDb || {};

NesDb[ 'EEB560ADE82C5C322CD515176E9E9B6F4847B0A6' ] = {
	"$": {
		"name": "Saint Seiya: Ougon Densetsu",
		"altname": "聖闘士星矢　黄金伝説",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "BA-SEIYA",
		"publisher": "Bandai",
		"developer": "TOSE Software",
		"region": "Japan",
		"players": "1",
		"date": "1987-08-10"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "026C5FCA",
				"sha1": "EEB560ADE82C5C322CD515176E9E9B6F4847B0A6",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-06-28"
			},
			"board": [
				{
					"$": {
						"type": "BANDAI-74*161/161/32",
						"pcb": "BA ワラ",
						"mapper": "152"
					},
					"prg": [
						{
							"$": {
								"name": "BANDAI 87 SEIYA P",
								"size": "128k",
								"crc": "3BF15767",
								"sha1": "1CA2EE893FE00C942822E00DBDC3D0093380A5BA"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "BANDAI 87 SEIYA C",
								"size": "128k",
								"crc": "E7C63C56",
								"sha1": "788A455EC75B54686B0CA50A3AADEFC43CBE7B4F"
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
					]
				}
			]
		}
	]
};
