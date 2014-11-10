this.NesDb = this.NesDb || {};

NesDb[ '76218A9A6CCAC652ACD182153FCFEA45E9ED4369' ] = {
	"$": {
		"name": "Hissatsu Doujou Yaburi",
		"altname": "必殺道場破り",
		"class": "Licensed",
		"catalog": "SEI-1A",
		"publisher": "Sigma Enterprises",
		"developer": "",
		"region": "Japan",
		"players": "1",
		"date": "1989-07-18"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "565A4681",
				"sha1": "76218A9A6CCAC652ACD182153FCFEA45E9ED4369",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-01"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SNROM",
						"pcb": "HVC-SNROM-08",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "SEI-1A-0 PRG",
								"size": "256k",
								"crc": "565A4681",
								"sha1": "76218A9A6CCAC652ACD182153FCFEA45E9ED4369"
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
								"type": "MMC1B1-H"
							}
						}
					]
				}
			]
		}
	]
};
