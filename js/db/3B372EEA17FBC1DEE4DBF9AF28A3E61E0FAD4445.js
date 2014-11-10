this.NesDb = this.NesDb || {};

NesDb[ '3B372EEA17FBC1DEE4DBF9AF28A3E61E0FAD4445' ] = {
	"$": {
		"name": "Jeopardy!",
		"class": "Licensed",
		"catalog": "NES-JP-USA",
		"publisher": "GameTek",
		"developer": "Rare",
		"region": "USA",
		"players": "3",
		"date": "1988-09"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"revision": "A",
				"crc": "2A662AC7",
				"sha1": "3B372EEA17FBC1DEE4DBF9AF28A3E61E0FAD4445",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-07-03"
			},
			"board": [
				{
					"$": {
						"type": "NES-AOROM",
						"pcb": "NES-AOROM-01",
						"mapper": "7"
					},
					"prg": [
						{
							"$": {
								"name": "NES-JP-1 PRG",
								"size": "128k",
								"crc": "2A662AC7",
								"sha1": "3B372EEA17FBC1DEE4DBF9AF28A3E61E0FAD4445"
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
