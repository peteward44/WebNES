this.NesDb = this.NesDb || {};

NesDb[ '1D7417D31E19B590AFCEB6A8A6E7B9CAB9F9B475' ] = {
	"$": {
		"name": "Famicom Jump II: Saikyou no 7 Nin",
		"altname": "ファミコンジャンプⅡ 最強の７人",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "BA-FJ2",
		"publisher": "Bandai",
		"developer": "Chunsoft",
		"region": "Japan",
		"players": "1",
		"date": "1991-12-02"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "3F15D20D",
				"sha1": "1D7417D31E19B590AFCEB6A8A6E7B9CAB9F9B475",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-06-28"
			},
			"board": [
				{
					"$": {
						"type": "BANDAI-JUMP2",
						"pcb": "BA-JUMP2",
						"mapper": "16"
					},
					"prg": [
						{
							"$": {
								"name": "BANDAI'91 JUMP-2",
								"size": "512k",
								"crc": "3F15D20D",
								"sha1": "1D7417D31E19B590AFCEB6A8A6E7B9CAB9F9B475"
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
								"type": "FCG-3"
							}
						}
					]
				}
			]
		}
	]
};
