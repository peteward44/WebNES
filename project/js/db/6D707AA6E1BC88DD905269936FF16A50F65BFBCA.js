this.NesDb = this.NesDb || {};

NesDb[ '6D707AA6E1BC88DD905269936FF16A50F65BFBCA' ] = {
	"$": {
		"name": "Tetris 2 + BomBliss",
		"altname": "テトリス２＋ボンブリス",
		"class": "Licensed",
		"catalog": "BPS-52",
		"publisher": "Bullet-Proof Software",
		"developer": "Chunsoft",
		"region": "Japan",
		"players": "2",
		"date": "1991-12-13"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "3FF44F87",
				"sha1": "6D707AA6E1BC88DD905269936FF16A50F65BFBCA",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-04-29"
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
								"name": "BPS-52-0 PRG",
								"size": "128k",
								"crc": "3FF44F87",
								"sha1": "6D707AA6E1BC88DD905269936FF16A50F65BFBCA"
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
