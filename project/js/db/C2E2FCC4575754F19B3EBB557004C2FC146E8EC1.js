this.NesDb = this.NesDb || {};

NesDb[ 'C2E2FCC4575754F19B3EBB557004C2FC146E8EC1' ] = {
	"$": {
		"name": "Kyonshiizu 2",
		"altname": "キョンシーズ２",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "TFC-KR-5500-12",
		"publisher": "Taito",
		"developer": "Taito",
		"region": "Japan",
		"players": "2",
		"date": "1987-09-25"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "BA43568A",
				"sha1": "C2E2FCC4575754F19B3EBB557004C2FC146E8EC1",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-05-13"
			},
			"board": [
				{
					"$": {
						"type": "TAITO-X1-005",
						"pcb": "P3-036-1",
						"mapper": "80"
					},
					"prg": [
						{
							"$": {
								"size": "128k",
								"crc": "32E63133",
								"sha1": "B748A2744052C3CCBF9673B910D5A745C49B49F4"
							}
						}
					],
					"chr": [
						{
							"$": {
								"size": "128k",
								"crc": "608CF2E9",
								"sha1": "331BFF1E983BDA22859ED1A560DA8E7C477224FF"
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
