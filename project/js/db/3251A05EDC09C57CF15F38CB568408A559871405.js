this.NesDb = this.NesDb || {};

NesDb[ '3251A05EDC09C57CF15F38CB568408A559871405' ] = {
	"$": {
		"name": "Formula 1 Sensation",
		"class": "Licensed",
		"catalog": "NES-FL-NOE",
		"publisher": "Palcom",
		"developer": "Konami",
		"region": "Germany",
		"players": "1",
		"date": "1993-02-23"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "256392F1",
				"sha1": "3251A05EDC09C57CF15F38CB568408A559871405",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2007-11-01"
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
								"name": "PAL-FL-0 PRG",
								"size": "128k",
								"crc": "A369AA0F",
								"sha1": "454B27DCBA3C8F1478A04C46CAFACAC8E10E8350"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PAL-FL-0 CHR",
								"size": "128k",
								"crc": "C95116AD",
								"sha1": "E676FA54B7A6E287AD5239664C36843A9885C4C5"
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
