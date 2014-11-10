this.NesDb = this.NesDb || {};

NesDb[ '9A5628DFB31B4E8F07079A30B58100884B5590A9' ] = {
	"$": {
		"name": "Mario Open Golf",
		"altname": "マリオオープンゴルフ",
		"class": "Licensed",
		"catalog": "HVC-UG",
		"publisher": "Nintendo",
		"developer": "Nintendo",
		"region": "Japan",
		"players": "2",
		"date": "1991-09-20"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"revision": "A",
				"crc": "DB564628",
				"sha1": "9A5628DFB31B4E8F07079A30B58100884B5590A9",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-06-21"
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
								"name": "HVC-UG-1 PRG",
								"size": "256k",
								"crc": "DB564628",
								"sha1": "9A5628DFB31B4E8F07079A30B58100884B5590A9"
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
								"type": "MMC1B3"
							}
						}
					]
				}
			]
		}
	]
};
