this.NesDb = this.NesDb || {};

NesDb[ '3473FD11551A399041DDEEF6ADB45AE9D8D08B7D' ] = {
	"$": {
		"name": "Mirai Senshi: Lios",
		"altname": "未来戦史ライオス",
		"class": "Licensed",
		"catalog": "PAC-R6",
		"publisher": "Pack-In-Video",
		"developer": "Pack-In-Video",
		"region": "Japan",
		"players": "1",
		"date": "1989-12-01"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "E94D5181",
				"sha1": "3473FD11551A399041DDEEF6ADB45AE9D8D08B7D",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-01"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SNROM",
						"pcb": "HVC-SNROM-09",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "PAC-R6-0 PRG",
								"size": "256k",
								"crc": "E94D5181",
								"sha1": "3473FD11551A399041DDEEF6ADB45AE9D8D08B7D"
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
								"type": "MMC1B2"
							}
						}
					]
				}
			]
		}
	]
};
