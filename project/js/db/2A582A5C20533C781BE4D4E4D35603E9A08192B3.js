this.NesDb = this.NesDb || {};

NesDb[ '2A582A5C20533C781BE4D4E4D35603E9A08192B3' ] = {
	"$": {
		"name": "Jeopardy!: Junior Edition",
		"class": "Licensed",
		"catalog": "NES-J2-USA",
		"publisher": "GameTek",
		"developer": "Rare",
		"region": "USA",
		"players": "3",
		"date": "1989-10"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "6A88579F",
				"sha1": "2A582A5C20533C781BE4D4E4D35603E9A08192B3",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-01-25"
			},
			"board": [
				{
					"$": {
						"type": "NES-ANROM",
						"pcb": "NES-ANROM-04",
						"mapper": "7"
					},
					"prg": [
						{
							"$": {
								"name": "NES-J2-0 PRG",
								"size": "128k",
								"crc": "6A88579F",
								"sha1": "2A582A5C20533C781BE4D4E4D35603E9A08192B3"
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
								"type": "74xx02"
							}
						},
						{
							"$": {
								"type": "74xx161"
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
