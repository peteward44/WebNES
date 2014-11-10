this.NesDb = this.NesDb || {};

NesDb[ '4ABCBFBD83F0260F9D943F358A2FD8D5CFDA6C2E' ] = {
	"$": {
		"name": "Kyuukyoku Harikiri Stadium",
		"altname": "究極ハリキリスタジアム",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "TFC-KHS-5500-18",
		"publisher": "Taito",
		"developer": "Taito",
		"region": "Japan",
		"players": "2",
		"date": "1988-06-28"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"revision": "2.0",
				"crc": "D0E53454",
				"sha1": "4ABCBFBD83F0260F9D943F358A2FD8D5CFDA6C2E",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-02-17"
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
								"name": "PRG X3-022",
								"size": "128k",
								"crc": "6C438BB2",
								"sha1": "79FF0B10D728E4894E36456335F786C6A5177C2E"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "CHR X3-021",
								"size": "128k",
								"crc": "3CB636A4",
								"sha1": "7DAE12EF3AABB9DC16FFE91FB61F1F68381247A7"
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
		},
		{
			"$": {
				"system": "Famicom",
				"revision": "2.0",
				"crc": "D0E53454",
				"sha1": "4ABCBFBD83F0260F9D943F358A2FD8D5CFDA6C2E",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-06-30"
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
								"name": "PRG X3-022",
								"size": "128k",
								"crc": "6C438BB2",
								"sha1": "79FF0B10D728E4894E36456335F786C6A5177C2E"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "CHR X3-021B",
								"size": "128k",
								"crc": "3CB636A4",
								"sha1": "7DAE12EF3AABB9DC16FFE91FB61F1F68381247A7"
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
