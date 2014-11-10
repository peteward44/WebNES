this.NesDb = this.NesDb || {};

NesDb[ 'C002BE9213E53221C247B38BA27F4CF6C9D15796' ] = {
	"$": {
		"name": "Tenchi o Kurau II: Shokatsu Koumei Den",
		"altname": "天地を喰らうII　諸葛孔明伝",
		"class": "Licensed",
		"catalog": "CAP-2V",
		"publisher": "Capcom",
		"developer": "Capcom",
		"region": "Japan",
		"players": "1",
		"date": "1991-04-05"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "CB32E243",
				"sha1": "C002BE9213E53221C247B38BA27F4CF6C9D15796",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-06-24"
			},
			"board": [
				{
					"$": {
						"type": "HVC-TNROM",
						"pcb": "HVC-TNROM-02",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "CAP-2V-0 PRG",
								"size": "512k",
								"crc": "CB32E243",
								"sha1": "C002BE9213E53221C247B38BA27F4CF6C9D15796"
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
								"type": "MMC3B"
							}
						}
					]
				}
			]
		}
	]
};
