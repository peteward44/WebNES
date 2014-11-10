this.NesDb = this.NesDb || {};

NesDb[ '31C77EF1B9A5E8A4DF131F07F198A455F5AF5FC5' ] = {
	"$": {
		"name": "Times of Lore",
		"class": "Licensed",
		"catalog": "NES-5T-USA",
		"publisher": "Toho",
		"developer": "Origin Systems",
		"portdeveloper": "Toho",
		"region": "USA",
		"players": "1",
		"date": "1991-05"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "0F86FEB4",
				"sha1": "31C77EF1B9A5E8A4DF131F07F198A455F5AF5FC5",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-12-10"
			},
			"board": [
				{
					"$": {
						"type": "NES-UNROM",
						"pcb": "NES-UNROM-09",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "NES-5T-0 PRG",
								"size": "128k",
								"crc": "0F86FEB4",
								"sha1": "31C77EF1B9A5E8A4DF131F07F198A455F5AF5FC5"
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
								"type": "74xx161"
							}
						},
						{
							"$": {
								"type": "74xx32"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "6113B1"
							}
						}
					],
					"pad": [
						{
							"$": {
								"h": "1",
								"v": "0"
							}
						}
					]
				}
			]
		}
	]
};
