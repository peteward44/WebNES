this.NesDb = this.NesDb || {};

NesDb[ '29FB71F936A6A4FF8BFF8F8EBBAFE986B4A18CD3' ] = {
	"$": {
		"name": "Spot",
		"class": "Licensed",
		"catalog": "NES-3P-USA",
		"publisher": "Arcadia",
		"developer": "Trilobyte",
		"region": "USA",
		"players": "4",
		"date": "1990-09"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "fourplayer",
						"name": "4-Player Adapter"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "CFAE9DFA",
				"sha1": "29FB71F936A6A4FF8BFF8F8EBBAFE986B4A18CD3",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-03-25"
			},
			"board": [
				{
					"$": {
						"type": "NES-SNROM",
						"pcb": "NES-SNROM-05",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-3P-0 PRG",
								"size": "128k",
								"crc": "CFAE9DFA",
								"sha1": "29FB71F936A6A4FF8BFF8F8EBBAFE986B4A18CD3"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "8k"
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
