this.NesDb = this.NesDb || {};

NesDb[ 'A6B1A2ACAE1E4034C5E048D1318541D67A86F17C' ] = {
	"$": {
		"name": "Mashou",
		"altname": "魔鐘",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "IF-05",
		"publisher": "Irem",
		"developer": "Lenar",
		"region": "Japan",
		"players": "1",
		"date": "1986-12-15"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "A21E675C",
				"sha1": "A6B1A2ACAE1E4034C5E048D1318541D67A86F17C",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-11-27"
			},
			"board": [
				{
					"$": {
						"type": "IREM-BNROM",
						"pcb": "IREM-I-IM",
						"mapper": "34"
					},
					"prg": [
						{
							"$": {
								"name": "IREM-MS",
								"size": "128k",
								"crc": "A21E675C",
								"sha1": "A6B1A2ACAE1E4034C5E048D1318541D67A86F17C"
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
