this.NesDb = this.NesDb || {};

NesDb[ '9FE2047809314F14FC1CCDA622782BC02D35110F' ] = {
	"$": {
		"name": "Maniac Mansion",
		"class": "Licensed",
		"catalog": "NES-JM-SWE",
		"publisher": "Jaleco",
		"developer": "LucasFilm Games",
		"region": "Sweden",
		"players": "1",
		"date": "1992-10-22"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "3F2BDA65",
				"sha1": "9FE2047809314F14FC1CCDA622782BC02D35110F",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2008-03-07"
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
								"name": "SWE-JM-0 PRG",
								"size": "256k",
								"crc": "3F2BDA65",
								"sha1": "9FE2047809314F14FC1CCDA622782BC02D35110F"
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
	]
};
