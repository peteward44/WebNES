this.NesDb = this.NesDb || {};

NesDb[ 'CFA21CC3B97794AC5083E1239751852B0B5F0194' ] = {
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
				"crc": "BAEBA201",
				"sha1": "CFA21CC3B97794AC5083E1239751852B0B5F0194",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-04-28"
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
								"name": "HVC-UG-0 PRG",
								"size": "256k",
								"crc": "BAEBA201",
								"sha1": "CFA21CC3B97794AC5083E1239751852B0B5F0194"
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
