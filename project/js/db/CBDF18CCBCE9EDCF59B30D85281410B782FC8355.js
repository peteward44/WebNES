this.NesDb = this.NesDb || {};

NesDb[ 'CBDF18CCBCE9EDCF59B30D85281410B782FC8355' ] = {
	"$": {
		"name": "Tecmo Cup: Soccer Game",
		"class": "Licensed",
		"catalog": "NES-TP-USA",
		"publisher": "Tecmo",
		"developer": "Tecmo",
		"region": "USA",
		"players": "1",
		"date": "1992-09"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "696D7839",
				"sha1": "CBDF18CCBCE9EDCF59B30D85281410B782FC8355",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-12-31"
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
								"name": "NES-TP-0 PRG",
								"size": "128k",
								"crc": "D4E8EC0B",
								"sha1": "53CE2F83708127FE073B494877D28D592E9B2861"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-TP-0 CHR",
								"size": "128k",
								"crc": "C72B9A0F",
								"sha1": "F9A7F557A9DF198EE40D7BE7B5887F272956B84B"
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
