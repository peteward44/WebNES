this.NesDb = this.NesDb || {};

NesDb[ '03A111AC0FA78E566814D6F9296454BFC34E7B3C' ] = {
	"$": {
		"name": "Muppet Adventure: Chaos at the Carnival",
		"class": "Licensed",
		"catalog": "NES-UA-USA",
		"publisher": "Hi Tech Expressions",
		"developer": "Mind's Eye",
		"region": "USA",
		"players": "1",
		"date": "1990-11"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "7156CB4D",
				"sha1": "03A111AC0FA78E566814D6F9296454BFC34E7B3C",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-03-18"
			},
			"board": [
				{
					"$": {
						"type": "NES-SGROM",
						"pcb": "NES-SGROM-04",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-UA-0 PRG",
								"size": "128k",
								"crc": "7156CB4D",
								"sha1": "03A111AC0FA78E566814D6F9296454BFC34E7B3C"
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
