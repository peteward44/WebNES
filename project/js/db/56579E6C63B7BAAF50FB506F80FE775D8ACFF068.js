this.NesDb = this.NesDb || {};

NesDb[ '56579E6C63B7BAAF50FB506F80FE775D8ACFF068' ] = {
	"$": {
		"name": "Bakushou!! Jinsei Gekijou 2",
		"altname": "爆笑！！人生劇場２",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "TFC-BJ2-5900-35",
		"publisher": "Taito",
		"developer": "Taito",
		"region": "Japan",
		"players": "1",
		"date": "1991-03-22"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "BC7B1D0F",
				"sha1": "56579E6C63B7BAAF50FB506F80FE775D8ACFF068",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-05-12"
			},
			"board": [
				{
					"$": {
						"type": "TAITO-TC0190FMC",
						"pcb": "J9100234A",
						"mapper": "33"
					},
					"prg": [
						{
							"$": {
								"name": "C79-01",
								"size": "128k",
								"crc": "54163624",
								"sha1": "47A379FB7607C589DF9F591A7BE4359620627D2C"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "C79-02",
								"size": "256k",
								"crc": "65142C2B",
								"sha1": "AFC6D23B17FB0F6A5D2E451C7FE25BD2FBCAA6D6"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "TC0190FMC"
							}
						}
					]
				}
			]
		},
		{
			"$": {
				"system": "Famicom",
				"crc": "BC7B1D0F",
				"sha1": "56579E6C63B7BAAF50FB506F80FE775D8ACFF068",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-06-30"
			},
			"board": [
				{
					"$": {
						"type": "TAITO-X1-005",
						"pcb": "J9100240A",
						"mapper": "80"
					},
					"prg": [
						{
							"$": {
								"name": "C79-01",
								"size": "128k",
								"crc": "54163624",
								"sha1": "47A379FB7607C589DF9F591A7BE4359620627D2C"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "C79-02",
								"size": "256k",
								"crc": "65142C2B",
								"sha1": "AFC6D23B17FB0F6A5D2E451C7FE25BD2FBCAA6D6"
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
