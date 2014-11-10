this.NesDb = this.NesDb || {};

NesDb[ '5B90DA517234E576358A278C4F36076EF57232F2' ] = {
	"$": {
		"name": "Taito Grand Prix: Eikou e no License",
		"altname": "タイトーグランプリ 栄光へのライセンス",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "TFC-TG-5500-15",
		"publisher": "Taito",
		"developer": "Now Production",
		"region": "Japan",
		"players": "1",
		"date": "1987-12-18"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "10B0F8B0",
				"sha1": "5B90DA517234E576358A278C4F36076EF57232F2",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-06-29"
			},
			"board": [
				{
					"$": {
						"type": "TAITO-X1-005",
						"pcb": "P3-33A",
						"mapper": "80"
					},
					"prg": [
						{
							"$": {
								"name": "PR0 X3-018",
								"size": "128k",
								"crc": "17627D4B",
								"sha1": "5A8680DCE5F2F2ECB28EF592B7418B2371FE98F4"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "CH X3-019",
								"size": "128k",
								"crc": "505AA340",
								"sha1": "8890E530E9B1485BFEB7E73669104EDCE8FA625F"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx32"
							}
						},
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
