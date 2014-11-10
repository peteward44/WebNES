this.NesDb = this.NesDb || {};

NesDb[ 'FDC5596523D3E322952388C9DAF2AECCE841B85E' ] = {
	"$": {
		"name": "Racer Mini Yonku: Japan Cup",
		"altname": "レーサーミニ四駆 ジャパンカップ",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "KON-RC842",
		"publisher": "Konami",
		"developer": "Konami",
		"region": "Japan",
		"players": "1",
		"date": "1989-08-25"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "F6271A51",
				"sha1": "FDC5596523D3E322952388C9DAF2AECCE841B85E",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-05-13"
			},
			"board": [
				{
					"$": {
						"type": "KONAMI-VRC-4",
						"pcb": "351406",
						"mapper": "25"
					},
					"prg": [
						{
							"$": {
								"name": "RC842J1P",
								"size": "128k",
								"crc": "A2E68DA8",
								"sha1": "F78085F072F29EC3003D315BB9C1806E58990800"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "RC842J1C",
								"size": "128k",
								"crc": "B2D960CC",
								"sha1": "6645A0BEBAACFACF95BEB360F075158424ACA38D"
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
										"function": "PRG A0"
									}
								},
								{
									"$": {
										"number": "4",
										"function": "PRG A1"
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
