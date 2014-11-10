this.NesDb = this.NesDb || {};

NesDb[ '84CCB974196FA5D9AB4A15111488C9C639CCB2EA' ] = {
	"$": {
		"name": "Esper Dream 2: Aratanaru Tatakai",
		"altname": "エスパードリーム２ 新たなる戦い",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "KON-RC861",
		"publisher": "Konami",
		"developer": "Konami",
		"region": "Japan",
		"players": "1",
		"date": "1992-06-26"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "209B4BED",
				"sha1": "84CCB974196FA5D9AB4A15111488C9C639CCB2EA",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2010-01-24"
			},
			"board": [
				{
					"$": {
						"type": "KONAMI-VRC-6",
						"pcb": "351949A",
						"mapper": "26"
					},
					"prg": [
						{
							"$": {
								"name": "RC861J00P",
								"size": "256k",
								"crc": "30E64D03",
								"sha1": "D9A04750CF11B5DC2921C38C0913E599E5F859AE"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "RC861J00C",
								"size": "128k",
								"crc": "F9C6BDF7",
								"sha1": "94B52A1E487BDBBFCB63A471690A275D4F993615"
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
								"type": "MM1026"
							}
						},
						{
							"$": {
								"type": "VRC6"
							},
							"pin": [
								{
									"$": {
										"number": "9",
										"function": "PRG A0"
									}
								},
								{
									"$": {
										"number": "10",
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
