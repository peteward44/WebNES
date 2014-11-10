this.NesDb = this.NesDb || {};

NesDb[ 'DC5A63F35E4869DAA30F4A21CC327DB59E39BC27' ] = {
	"$": {
		"name": "Shogun",
		"altname": "将軍",
		"class": "Licensed",
		"catalog": "HCT-HD/001",
		"publisher": "Hect",
		"developer": "Hect",
		"region": "Japan",
		"players": "1",
		"date": "1988-05-27"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "44B060DA",
				"sha1": "DC5A63F35E4869DAA30F4A21CC327DB59E39BC27",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-11-16"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SNROM",
						"pcb": "HVC-SNROM-05",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "HCT-HD-0 PRG",
								"size": "128k",
								"crc": "44B060DA",
								"sha1": "DC5A63F35E4869DAA30F4A21CC327DB59E39BC27"
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
