this.NesDb = this.NesDb || {};

NesDb[ '094E30B8F9E59EEA7FEDDA6DC972370B4312EEB6' ] = {
	"$": {
		"name": "Daisenryaku",
		"altname": "大戦略",
		"class": "Licensed",
		"catalog": "BTC-DY",
		"publisher": "Bothtec (Quest)",
		"developer": "SystemSoft",
		"portdeveloper": "Bothtec (Quest)",
		"region": "Japan",
		"players": "2",
		"date": "1988-10-11"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "5A5A0CD9",
				"sha1": "094E30B8F9E59EEA7FEDDA6DC972370B4312EEB6",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-05-31"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SJROM",
						"pcb": "HVC-SJROM-03",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "BTC-DY-0 PRG",
								"size": "128k",
								"crc": "53A94738",
								"sha1": "DF5C08B075687B1177524CF06C9F7401B3A7CBE9"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "BTC-DY-0 CHR",
								"size": "32k",
								"crc": "C0948F45",
								"sha1": "446E71732E57D445F73442CCD35F852B88F1D6DF"
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
								"type": "MMC1A"
							}
						}
					]
				}
			]
		}
	]
};
