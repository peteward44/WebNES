this.NesDb = this.NesDb || {};

NesDb[ '6A0B6E0CA8AFF6FC78D2D28CC747CACBB5F812AE' ] = {
	"$": {
		"name": "Tecmo Cup: Football Game",
		"class": "Licensed",
		"catalog": "NES-TP-ESP",
		"publisher": "Tecmo",
		"developer": "Tecmo",
		"region": "Spain",
		"players": "1",
		"date": "1993-06-01"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "7F801368",
				"sha1": "6A0B6E0CA8AFF6FC78D2D28CC747CACBB5F812AE",
				"dump": "ok",
				"dumper": "piteta",
				"datedumped": "2006-09-18"
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
								"name": "ESP-TP-0 PRG",
								"size": "128k",
								"crc": "ABECED04",
								"sha1": "6D43A2739BB56E57857F89221B27BE3567A14BCB"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "ESP-TP-0 CHR",
								"size": "128k",
								"crc": "06629D0C",
								"sha1": "C385380E219B8BA8081204DDFDA8DA124CDABE13"
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
