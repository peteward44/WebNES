this.NesDb = this.NesDb || {};

NesDb[ '13D2E9997C02462214FA789BC939F4DDAB6D65A1' ] = {
	"$": {
		"name": "Hatris",
		"class": "Licensed",
		"catalog": "NES-JZ-USA",
		"publisher": "Bullet-Proof Software",
		"developer": "Bullet-Proof Software",
		"region": "USA",
		"players": "1",
		"date": "1992-04"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "841B69B6",
				"sha1": "13D2E9997C02462214FA789BC939F4DDAB6D65A1",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-12-24"
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
								"name": "NES-JZ-0 PRG",
								"size": "128k",
								"crc": "841B69B6",
								"sha1": "13D2E9997C02462214FA789BC939F4DDAB6D65A1"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "8k"
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
								"type": "MMC1B3"
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
