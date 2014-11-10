this.NesDb = this.NesDb || {};

NesDb[ '0C925717118087C7295503B7330FBCF0C70CB177' ] = {
	"$": {
		"name": "Dai-2-ji Super Robot Taisen",
		"altname": "第２次スーパーロボット大戦",
		"class": "Licensed",
		"catalog": "BAP-N9",
		"publisher": "Banpresto",
		"developer": "Winky Soft",
		"region": "Japan",
		"players": "1",
		"date": "1991-12-19"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "C48363B4",
				"sha1": "0C925717118087C7295503B7330FBCF0C70CB177",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-12-06"
			},
			"board": [
				{
					"$": {
						"type": "HVC-TKROM",
						"pcb": "HVC-TKROM-03",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "BAP-N9-0 PRG",
								"size": "256k",
								"crc": "C5FEA9F2",
								"sha1": "C3AB67BFE59156A4ED203A9B137BD5F4CF26342C"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "BAP-N9-0 CHR",
								"size": "256k",
								"crc": "DD364EF1",
								"sha1": "DD8549C4B1710CEE0134632817E265D4A10B1A5E"
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
					]
				}
			]
		}
	]
};
