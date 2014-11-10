this.NesDb = this.NesDb || {};

NesDb[ '920B7E56F917690B89258A627EDACF2A4650685D' ] = {
	"$": {
		"name": "Kid Icarus",
		"class": "Licensed",
		"catalog": "NES-KI-CAN",
		"publisher": "Nintendo",
		"developer": "Nintendo",
		"region": "Canada",
		"players": "1",
		"date": "1987-12-15"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "D9F0749F",
				"sha1": "920B7E56F917690B89258A627EDACF2A4650685D",
				"dump": "ok",
				"dumper": "_zane",
				"datedumped": "2007-12-30"
			},
			"board": [
				{
					"$": {
						"type": "NES-SNROM",
						"pcb": "NES-SNROM-02",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-KI-0 PRG",
								"size": "128k",
								"crc": "D9F0749F",
								"sha1": "920B7E56F917690B89258A627EDACF2A4650685D"
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
								"type": "MMC1A"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "6113"
							}
						}
					]
				}
			]
		}
	],
	"gameGenieCodes": [
		{
			"name": "Small hearts worth 2 energy points",
			"codes": [
				[
					"ZAKSXTPA"
				]
			]
		},
		{
			"name": "Small hearts worth 5 energy points",
			"codes": [
				[
					"IAKSXTPA"
				]
			]
		},
		{
			"name": "Big hearts worth 20 energy points",
			"codes": [
				[
					"GPKSSVZA"
				]
			]
		}
	]
};
