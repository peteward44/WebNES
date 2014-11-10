this.NesDb = this.NesDb || {};

NesDb[ '8D7CA48394996EF45AB1094B582D00AD7B028F21' ] = {
	"$": {
		"name": "Elite",
		"class": "Licensed",
		"catalog": "NES-EL-UKV",
		"publisher": "Imagineer",
		"developer": "Braben & Bell",
		"region": "United Kingdom",
		"players": "1",
		"date": "1991"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-A",
				"crc": "A4BDCC1D",
				"sha1": "8D7CA48394996EF45AB1094B582D00AD7B028F21",
				"dump": "ok",
				"dumper": "Mark_K",
				"datedumped": "2011-12-05"
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
								"name": "PAL-EL-0 PRG",
								"size": "128k",
								"crc": "A4BDCC1D",
								"sha1": "8D7CA48394996EF45AB1094B582D00AD7B028F21"
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
								"type": "MMC1B3"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "3197A"
							}
						}
					]
				}
			]
		}
	]
};
