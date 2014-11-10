this.NesDb = this.NesDb || {};

NesDb[ '89736BEB224B5C044DE00F04EC7C37CED329B6AC' ] = {
	"$": {
		"name": "Yamamura Misa Suspense: Kyouto Ryuu no Tera Satsujin Jiken",
		"altname": "山村美紗サスペンス 京都龍の寺殺人事件",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "TFC-KR-5500-14",
		"publisher": "Taito",
		"developer": "TOSE Software",
		"region": "Japan",
		"players": "1",
		"date": "1987-12-11"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "342727B1",
				"sha1": "89736BEB224B5C044DE00F04EC7C37CED329B6AC",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-02"
			},
			"board": [
				{
					"$": {
						"type": "TAITO-X1-005",
						"pcb": "UNK-TAITO-KR-14",
						"mapper": "80"
					},
					"prg": [
						{
							"$": {
								"size": "128k",
								"crc": "435313C3",
								"sha1": "74683A411FCFA269D644A6CAF5AB498DAB356406"
							}
						}
					],
					"chr": [
						{
							"$": {
								"size": "128k",
								"crc": "426C3651",
								"sha1": "3C7C75AB4303B02D644FFDA6F0BF287800364705"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "X1-005"
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
