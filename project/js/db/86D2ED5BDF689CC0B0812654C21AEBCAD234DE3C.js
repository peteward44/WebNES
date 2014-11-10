this.NesDb = this.NesDb || {};

NesDb[ '86D2ED5BDF689CC0B0812654C21AEBCAD234DE3C' ] = {
	"$": {
		"name": "Minelvaton Saga: Ragon no Fukkatsu",
		"altname": "ミネルバトンサーガ ラゴンの復活",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "TFC-MS-5500-13",
		"publisher": "Taito",
		"developer": "Random House",
		"region": "Japan",
		"players": "1",
		"date": "1987-10-23"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "8EE25F78",
				"sha1": "86D2ED5BDF689CC0B0812654C21AEBCAD234DE3C",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-02"
			},
			"board": [
				{
					"$": {
						"type": "TAITO-X1-005",
						"pcb": "P3-034-C",
						"mapper": "80"
					},
					"prg": [
						{
							"$": {
								"name": "PRO X3-016",
								"size": "128k",
								"crc": "59276597",
								"sha1": "42CDB6662C59455E52F314C05B2348D9A2AA93A7"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "CH X3-017",
								"size": "128k",
								"crc": "EF6D81B9",
								"sha1": "04BDA132BADECEC649EE7EF7EB91F49E69295863"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "X1-005",
								"battery": "1"
							},
							"pin": [
								{
									"$": {
										"number": "17",
										"function": "CHR A17"
									}
								},
								{
									"$": {
										"number": "31",
										"function": "CIRAM A10"
									}
								}
							]
						}
					]
				}
			]
		}
	]
};
