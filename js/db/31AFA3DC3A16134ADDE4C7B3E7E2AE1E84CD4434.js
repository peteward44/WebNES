this.NesDb = this.NesDb || {};

NesDb[ '31AFA3DC3A16134ADDE4C7B3E7E2AE1E84CD4434' ] = {
	"$": {
		"name": "Fudou Myouou Den",
		"altname": "不動明王伝",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "TFC-FM-5900-17",
		"publisher": "Taito",
		"developer": "TOSE Software",
		"region": "Japan",
		"players": "1",
		"date": "1988-03-29"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "7678F1D5",
				"sha1": "31AFA3DC3A16134ADDE4C7B3E7E2AE1E84CD4434",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-06-30"
			},
			"board": [
				{
					"$": {
						"type": "TAITO-X1-005",
						"pcb": "アシユラー",
						"mapper": "207"
					},
					"prg": [
						{
							"$": {
								"size": "256k",
								"crc": "9832D15A",
								"sha1": "AA4C51A72A5564447EF227DFA56511024CBA625E"
							}
						}
					],
					"chr": [
						{
							"$": {
								"size": "128k",
								"crc": "AAA9ACDD",
								"sha1": "4D39604B139E5802F541EE3C0033BD326195731E"
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
										"function": "CIRAM A10"
									}
								},
								{
									"$": {
										"number": "31",
										"function": "NC"
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
