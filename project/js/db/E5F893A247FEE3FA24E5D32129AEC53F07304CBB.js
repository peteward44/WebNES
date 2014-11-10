this.NesDb = this.NesDb || {};

NesDb[ 'E5F893A247FEE3FA24E5D32129AEC53F07304CBB' ] = {
	"$": {
		"name": "Parodius Da!",
		"altname": "パロディウスだ！",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "KON-RC849",
		"publisher": "Konami",
		"developer": "Konami",
		"region": "Japan",
		"players": "2",
		"date": "1990-11-30"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "D467C0CC",
				"sha1": "E5F893A247FEE3FA24E5D32129AEC53F07304CBB",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-07-26"
			},
			"board": [
				{
					"$": {
						"type": "KONAMI-VRC-4",
						"pcb": "352396",
						"mapper": "23"
					},
					"prg": [
						{
							"$": {
								"name": "RC849J00P",
								"size": "128k",
								"crc": "E4CEEAD1",
								"sha1": "446AE9A995262A08FCEE1D4039D2D6A4328FDC28"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "RC849J0.0C",
								"size": "128k",
								"crc": "54DA5DC8",
								"sha1": "657E9D70DB1734BC171EDF43451550E2CA77D7DC"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "2k"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "VRC4"
							},
							"pin": [
								{
									"$": {
										"number": "3",
										"function": "PRG A3"
									}
								},
								{
									"$": {
										"number": "4",
										"function": "PRG A2"
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
