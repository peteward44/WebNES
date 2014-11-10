this.NesDb = this.NesDb || {};

NesDb[ 'B9BE6C9D21272DD6E60B27FC081F712B5C9797A8' ] = {
	"$": {
		"name": "Ganbare Goemon Gaiden 2: Tenka no Zaihou",
		"altname": "がんばれゴエモン外伝２ 天下の財宝",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "KON-RC857",
		"publisher": "Konami",
		"developer": "Konami",
		"region": "Japan",
		"players": "1",
		"date": "1992-01-03"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "286FCD20",
				"sha1": "B9BE6C9D21272DD6E60B27FC081F712B5C9797A8",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-05-13"
			},
			"board": [
				{
					"$": {
						"type": "KONAMI-VRC-4",
						"pcb": "352889",
						"mapper": "21"
					},
					"prg": [
						{
							"$": {
								"name": "RC857J00P",
								"size": "256k",
								"crc": "7CC4778C",
								"sha1": "711929B7621A9A80743F0542C89877C8B862C32E"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "RC857J00C",
								"size": "256k",
								"crc": "D6E82485",
								"sha1": "EAAC774108D8D4C0D62E280463B2A356F4DACB00"
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
								"type": "VRC4"
							},
							"pin": [
								{
									"$": {
										"number": "3",
										"function": "PRG A7"
									}
								},
								{
									"$": {
										"number": "4",
										"function": "PRG A6"
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
