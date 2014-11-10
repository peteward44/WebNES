this.NesDb = this.NesDb || {};

NesDb[ '3B6E0EF1458C883799923F6B86D106B488B5C6A3' ] = {
	"$": {
		"name": "Zoids 2: Zenebasu no Gyakushuu",
		"altname": "ゾイド2　ゼネバスの逆襲",
		"class": "Licensed",
		"catalog": "TFS-Z2",
		"publisher": "Toemiland",
		"developer": "Micronics / Khaos",
		"region": "Japan",
		"players": "1",
		"date": "1989-01-27"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "89E085FE",
				"sha1": "3B6E0EF1458C883799923F6B86D106B488B5C6A3",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-07-22"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SNROM",
						"pcb": "HVC-SNROM-07",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "TFS-Z2-0 PRG",
								"size": "256k",
								"crc": "89E085FE",
								"sha1": "3B6E0EF1458C883799923F6B86D106B488B5C6A3"
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
								"type": "MMC1A"
							}
						}
					]
				}
			]
		}
	]
};
