this.NesDb = this.NesDb || {};

NesDb[ '46C443D0EB27AF7A566E744F096F981034A06E59' ] = {
	"$": {
		"name": "Nobunaga no Yabou: Sengoku Gunyuuden",
		"altname": "信長の野望 戦国群雄伝",
		"class": "Licensed",
		"catalog": "KOE-NU",
		"publisher": "Koei",
		"developer": "Koei",
		"region": "Japan",
		"players": "1",
		"date": "1990-02-03"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "EEE9A682",
				"sha1": "46C443D0EB27AF7A566E744F096F981034A06E59",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-02-18"
			},
			"board": [
				{
					"$": {
						"type": "HVC-ETROM",
						"pcb": "HVC-ETROM-01",
						"mapper": "5"
					},
					"prg": [
						{
							"$": {
								"name": "KOE-NU-0 PRG",
								"size": "256k",
								"crc": "98C8E090",
								"sha1": "E95A668EE2D39720C7A7B216C2FDA2068353A4D8"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "KOE-NU-0 CHR",
								"size": "128k",
								"crc": "5CC0DBF5",
								"sha1": "150899D897DA06BAB6210BDD94DFEE5ECF078B80"
							}
						}
					],
					"wram": [
						{
							"$": {
								"id": "0",
								"size": "8k",
								"battery": "1"
							}
						},
						{
							"$": {
								"id": "1",
								"size": "8k"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC5"
							}
						}
					]
				}
			]
		}
	]
};
