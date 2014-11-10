this.NesDb = this.NesDb || {};

NesDb[ '28D346FCD44CD94ABBC02A93FA65B4DF0D4216C8' ] = {
	"$": {
		"name": "Shingen The Ruler",
		"class": "Licensed",
		"catalog": "NES-23-USA",
		"publisher": "HOT・B",
		"developer": "HOT・B",
		"region": "USA",
		"players": "1",
		"date": "1990-06"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "BE3BF3B3",
				"sha1": "28D346FCD44CD94ABBC02A93FA65B4DF0D4216C8",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-12-16"
			},
			"board": [
				{
					"$": {
						"type": "NES-SNROM",
						"pcb": "NES-SNROM-05",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-23-0 PRG",
								"size": "256k",
								"crc": "BE3BF3B3",
								"sha1": "28D346FCD44CD94ABBC02A93FA65B4DF0D4216C8"
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
