this.NesDb = this.NesDb || {};

NesDb[ '89E72D6D1BD0F7B13DF664151C7EA0F65F81799D' ] = {
	"$": {
		"name": "Little League Baseball Championship Series",
		"class": "Licensed",
		"catalog": "NES-KQ-USA",
		"publisher": "SNK",
		"developer": "SNK",
		"region": "USA",
		"players": "2",
		"date": "1990-07"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "859C65E1",
				"sha1": "89E72D6D1BD0F7B13DF664151C7EA0F65F81799D",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-10-09"
			},
			"board": [
				{
					"$": {
						"type": "NES-SLROM",
						"pcb": "NES-SLROM-06",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-KQ-0 PRG",
								"size": "128k",
								"crc": "B3440357",
								"sha1": "FFACAEB300AE0F2D8BA3819380543E1E934DDBFA"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-KQ-0 CHR",
								"size": "128k",
								"crc": "2E60F8EE",
								"sha1": "963CD582ADEC3E14543A505B99C163C2FD150C16"
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
