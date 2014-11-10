this.NesDb = this.NesDb || {};

NesDb[ '98CBF6D8D410C6725B59C08C35A22F29C3531AA8' ] = {
	"$": {
		"name": "Wizardry: Knight of Diamonds",
		"class": "Licensed",
		"catalog": "NES-32-USA",
		"publisher": "ASCII",
		"developer": "Sir-Tech Software",
		"portdeveloper": "Game Studio",
		"region": "USA",
		"players": "1",
		"date": "1992-04"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "6BC33D2F",
				"sha1": "98CBF6D8D410C6725B59C08C35A22F29C3531AA8",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-11-05"
			},
			"board": [
				{
					"$": {
						"type": "NES-TKROM",
						"pcb": "NES-TKROM-10",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "NES-32-0 PRG",
								"size": "128k",
								"crc": "D9736A6D",
								"sha1": "35AB4B6490C7731DF404A2B2B781DBF1BEA83208"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-32-0 CHR",
								"size": "128k",
								"crc": "9852CA8E",
								"sha1": "815F1BEDE7A7FE8C6A635B926C33774F52A4187D"
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
					"chip": [
						{
							"$": {
								"type": "MMC3B"
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
