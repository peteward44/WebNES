this.NesDb = this.NesDb || {};

NesDb[ '41D2B5A54D498AAFC883B273330407B3A664CA84' ] = {
	"$": {
		"name": "Heroes of the Lance, Advanced Dungeons & Dragons",
		"class": "Licensed",
		"catalog": "NES-LQ-USA",
		"publisher": "FCI",
		"developer": "Strategic Simulations",
		"region": "USA",
		"players": "1",
		"date": "1991-01"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"prototype": "1",
				"crc": "C22F3E9F",
				"sha1": "41D2B5A54D498AAFC883B273330407B3A664CA84",
				"dump": "ok",
				"dumper": "Skrybe",
				"datedumped": "2012-04-16"
			},
			"board": [
				{
					"$": {
						"type": "NES-SKEPROM",
						"pcb": "NES-SKEPROM-01",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"size": "128k",
								"crc": "21598F85",
								"sha1": "DFC0865BF8B684C6D4BF68DFC4A6147F85ADD7F3"
							}
						}
					],
					"chr": [
						{
							"$": {
								"size": "128k",
								"crc": "95773F32",
								"sha1": "12B2EE774F7ACAE70FE54675E323B47CAE94A0CE"
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
