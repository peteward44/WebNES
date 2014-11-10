this.NesDb = this.NesDb || {};

NesDb[ '1453664EF61ED1F4C1EA49F0956362472704BB73' ] = {
	"$": {
		"name": "Rollerball",
		"class": "Licensed",
		"catalog": "NES-RH-USA",
		"publisher": "HAL Laboratory",
		"developer": "HAL Laboratory",
		"region": "USA",
		"players": "2",
		"date": "1990-02"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "69635A6E",
				"sha1": "1453664EF61ED1F4C1EA49F0956362472704BB73",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-01-25"
			},
			"board": [
				{
					"$": {
						"type": "NES-SFROM",
						"pcb": "NES-SFROM-03",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-RH-0 PRG",
								"size": "128k",
								"crc": "AAAA17BD",
								"sha1": "34AEB2548A98049149156CAB078507373535329D"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-RH-0 CHR",
								"size": "32k",
								"crc": "B2E145A5",
								"sha1": "13D614BDB021FEC01D49FB4AF72A207942000055"
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
	],
	"gameGenieCodes": [
		{
			"name": "All players start with only 1 ball",
			"codes": [
				[
					"PANGIPLA"
				]
			]
		},
		{
			"name": "Infinite balls for all players",
			"codes": [
				[
					"SZKGPXVS"
				]
			]
		}
	]
};
