this.NesDb = this.NesDb || {};

NesDb[ '48100033895E83877F554AB539CB028ACAAC44AC' ] = {
	"$": {
		"name": "Wheel of Fortune: Family Edition",
		"class": "Licensed",
		"catalog": "NES-W3-USA",
		"publisher": "GameTek",
		"developer": "Rare",
		"region": "USA",
		"players": "3",
		"date": "1990-03"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "009AF6BE",
				"sha1": "48100033895E83877F554AB539CB028ACAAC44AC",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-10-15"
			},
			"board": [
				{
					"$": {
						"type": "NES-ANROM",
						"pcb": "NES-ANROM-03",
						"mapper": "7"
					},
					"prg": [
						{
							"$": {
								"name": "NES-W3-0 PRG",
								"size": "128k",
								"crc": "009AF6BE",
								"sha1": "48100033895E83877F554AB539CB028ACAAC44AC"
							}
						}
					],
					"vram": [
						{
							"$": {
								"size": "8k"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx02"
							}
						},
						{
							"$": {
								"type": "74xx161"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "6113B1"
							}
						}
					]
				}
			]
		}
	]
};
