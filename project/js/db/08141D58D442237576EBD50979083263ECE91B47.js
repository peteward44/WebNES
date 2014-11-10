this.NesDb = this.NesDb || {};

NesDb[ '08141D58D442237576EBD50979083263ECE91B47' ] = {
	"$": {
		"name": "Ganbare Goemon Gaiden: Keita Ougon Kiseru",
		"altname": "がんばれゴエモン外伝 きえた黄金キセル",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "KON-RC840",
		"publisher": "Konami",
		"developer": "Konami",
		"region": "Japan",
		"players": "1",
		"date": "1990-01-05"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "EB92B32A",
				"sha1": "08141D58D442237576EBD50979083263ECE91B47",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-09-12"
			},
			"board": [
				{
					"$": {
						"type": "KONAMI-VRC-2",
						"pcb": "351948",
						"mapper": "25"
					},
					"prg": [
						{
							"$": {
								"name": "RC840J02P",
								"size": "256k",
								"crc": "8360FA88",
								"sha1": "38C8B25900ADD11DDB92AA50E019FD92DD6FC920"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "RC840J01C",
								"size": "256k",
								"crc": "99A563FE",
								"sha1": "535D2710C24397523B790983A7C2F3A31FD09C9B"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "8k",
								"battery": "1"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx139"
							}
						},
						{
							"$": {
								"type": "74xx20"
							}
						},
						{
							"$": {
								"type": "MM1026"
							}
						},
						{
							"$": {
								"type": "VRC2"
							},
							"pin": [
								{
									"$": {
										"number": "3",
										"function": "PRG A0"
									}
								},
								{
									"$": {
										"number": "4",
										"function": "PRG A1"
									}
								},
								{
									"$": {
										"number": "21",
										"function": "CHR A10"
									}
								},
								{
									"$": {
										"number": "22",
										"function": "CHR A16"
									}
								},
								{
									"$": {
										"number": "23",
										"function": "CHR A11"
									}
								},
								{
									"$": {
										"number": "24",
										"function": "CHR A13"
									}
								},
								{
									"$": {
										"number": "25",
										"function": "CHR A14"
									}
								},
								{
									"$": {
										"number": "26",
										"function": "CHR A12"
									}
								},
								{
									"$": {
										"number": "27",
										"function": "CHR A15"
									}
								},
								{
									"$": {
										"number": "28",
										"function": "CHR A17"
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
