this.NesDb = this.NesDb || {};

NesDb[ '1DCA84FC0AA70AA7FBA8384585C4B82D0778BFF4' ] = {
	"$": {
		"name": "Fire'n Ice",
		"class": "Licensed",
		"catalog": "NES-K2-USA",
		"publisher": "Tecmo",
		"developer": "Tecmo",
		"region": "USA",
		"players": "1",
		"date": "1993-03"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "D534C98E",
				"sha1": "1DCA84FC0AA70AA7FBA8384585C4B82D0778BFF4",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-07-03"
			},
			"board": [
				{
					"$": {
						"type": "NES-TLROM",
						"pcb": "NES-TLROM-03",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "NES-K2-0 PRG",
								"size": "128k",
								"crc": "81D9F17C",
								"sha1": "D0E924CD2E6C17B68982A75F6B4E7FFB17A9AA2B"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-K2-0 CHR",
								"size": "128k",
								"crc": "A3104BEE",
								"sha1": "A4DBB9C3C87686C71A625BFEA9D571C22388DDA1"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC3C"
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
