this.NesDb = this.NesDb || {};

NesDb[ '85DE67A28E01EF680F2FF6AAE80E4315491CEEE9' ] = {
	"$": {
		"name": "Kid Icarus",
		"class": "Licensed",
		"catalog": "NES-KI-EEC",
		"publisher": "Nintendo",
		"developer": "Nintendo",
		"region": "Europe",
		"players": "1",
		"date": "1987-02-15"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"revision": "A",
				"crc": "D67FD6A6",
				"sha1": "85DE67A28E01EF680F2FF6AAE80E4315491CEEE9",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2011-04-25"
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
								"name": "NES-KI-1 PRG",
								"size": "128k",
								"crc": "D67FD6A6",
								"sha1": "85DE67A28E01EF680F2FF6AAE80E4315491CEEE9"
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
								"type": "3195A"
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
