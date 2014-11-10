this.NesDb = this.NesDb || {};

NesDb[ '9D5560DA31B39C3A14F5E671B1090489E31C5FF1' ] = {
	"$": {
		"name": "McDonaldland",
		"class": "Licensed",
		"catalog": "NES-4Q-SCN",
		"publisher": "Ocean",
		"developer": "Virgin Games",
		"region": "Scandinavia",
		"players": "2",
		"date": "1993-05-19"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "FC2F9B2D",
				"sha1": "9D5560DA31B39C3A14F5E671B1090489E31C5FF1",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2008-03-09"
			},
			"board": [
				{
					"$": {
						"type": "NES-TSROM",
						"pcb": "NES-TSROM-08",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-4Q-0 PRG",
								"size": "128k",
								"crc": "F5C527B7",
								"sha1": "0A71078FBBDA868C8D081CC4F26132BBBDCEF3FF"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PAL-4Q-0 CHR",
								"size": "128k",
								"crc": "2F3EC4E2",
								"sha1": "431E8FC660274B7279977B38D4A65D831896C2EE"
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
								"type": "MMC3C"
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
