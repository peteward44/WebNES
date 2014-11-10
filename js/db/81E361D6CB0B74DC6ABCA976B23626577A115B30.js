this.NesDb = this.NesDb || {};

NesDb[ '81E361D6CB0B74DC6ABCA976B23626577A115B30' ] = {
	"$": {
		"name": "Nichibutsu Mahjong III: Mahjong G Men",
		"altname": "ニチブツ麻雀III マージャンＧメン",
		"class": "Licensed",
		"catalog": "NBF-JX (10)",
		"publisher": "Nichibutsu",
		"developer": "Nichibutsu",
		"region": "Japan",
		"players": "1",
		"date": "1990-07-20"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "FA2A8A8B",
				"sha1": "81E361D6CB0B74DC6ABCA976B23626577A115B30",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-09-12"
			},
			"board": [
				{
					"$": {
						"type": "HVC-TKROM",
						"pcb": "HVC-TKROM-02",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "NBF-JX-0 PRG",
								"size": "128k",
								"crc": "2E2F9018",
								"sha1": "900C95FEF773D60DA82E63F9BBE707437DB22DDE"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NBF-JX-0 CHR",
								"size": "128k",
								"crc": "156DFCDD",
								"sha1": "A3411FF7E47761A563D794B85AC0665332C323AC"
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
