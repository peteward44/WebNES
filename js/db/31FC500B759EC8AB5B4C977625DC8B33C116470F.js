this.NesDb = this.NesDb || {};

NesDb[ '31FC500B759EC8AB5B4C977625DC8B33C116470F' ] = {
	"$": {
		"name": "Bio Miracle Bokutte Upa",
		"altname": "バイオミラクル ぼくってウパ",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "KON-RV102",
		"publisher": "Konami",
		"developer": "Konami",
		"region": "Japan",
		"players": "1",
		"date": "1993-02-26"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "6DC28B5A",
				"sha1": "31FC500B759EC8AB5B4C977625DC8B33C116470F",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-03"
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
								"name": "RV102J00P",
								"size": "128k",
								"crc": "0BBD85FF",
								"sha1": "5A498912C2C133089699AD4F67B50B75F444F6F8"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "RV102J00C",
								"size": "128k",
								"crc": "B8168EFA",
								"sha1": "D3099CD1B216D8B8DE5AE4B39257CDC82B72133C"
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
