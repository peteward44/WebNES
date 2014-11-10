this.NesDb = this.NesDb || {};

NesDb[ '317FB395B4D408F3A4BEF73DD54C92FBB7748F4D' ] = {
	"$": {
		"name": "Jeopardy!: 25th Anniversary Edition",
		"class": "Licensed",
		"catalog": "NES-J3-USA",
		"publisher": "GameTek",
		"developer": "Rare",
		"region": "USA",
		"players": "3",
		"date": "1990-06"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "0BDD8DD9",
				"sha1": "317FB395B4D408F3A4BEF73DD54C92FBB7748F4D",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-01-29"
			},
			"board": [
				{
					"$": {
						"type": "NES-ANROM",
						"pcb": "NES-ANROM-03",
						"mapper": "7"
					},
					"prg": [
						{
							"$": {
								"name": "NES-J3-0 PRG",
								"size": "128k",
								"crc": "0BDD8DD9",
								"sha1": "317FB395B4D408F3A4BEF73DD54C92FBB7748F4D"
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
