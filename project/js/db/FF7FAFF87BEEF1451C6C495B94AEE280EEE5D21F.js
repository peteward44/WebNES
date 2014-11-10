this.NesDb = this.NesDb || {};

NesDb[ 'FF7FAFF87BEEF1451C6C495B94AEE280EEE5D21F' ] = {
	"$": {
		"name": "Shoukoushi Ceddie",
		"altname": "小公子セディ",
		"class": "Licensed",
		"catalog": "FMI-CD",
		"publisher": "Fuji TV",
		"developer": "Graphic Research",
		"region": "Japan",
		"players": "1",
		"date": "1988-12-24"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "C30C9EC9",
				"sha1": "FF7FAFF87BEEF1451C6C495B94AEE280EEE5D21F",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-01"
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
								"name": "FMI-CD-0 PRG",
								"size": "256k",
								"crc": "C30C9EC9",
								"sha1": "FF7FAFF87BEEF1451C6C495B94AEE280EEE5D21F"
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
