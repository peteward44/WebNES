this.NesDb = this.NesDb || {};

NesDb[ '644B0B587B1DA22989EFC5E4FC1B62222A9CCE05' ] = {
	"$": {
		"name": "Matsumoto Tooru no Kabushiki Hisshou Gaku",
		"altname": "松本亨の株式必勝学",
		"class": "Licensed",
		"catalog": "IMA-KB",
		"publisher": "Imagineer",
		"developer": "",
		"region": "Japan",
		"players": "1",
		"date": "1988-02-18"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "ABAA6F78",
				"sha1": "644B0B587B1DA22989EFC5E4FC1B62222A9CCE05",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-03"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SNROM",
						"pcb": "HVC-SNROM-04",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "IMA-KB-0 PRG",
								"size": "256k",
								"crc": "ABAA6F78",
								"sha1": "644B0B587B1DA22989EFC5E4FC1B62222A9CCE05"
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
