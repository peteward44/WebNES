this.NesDb = this.NesDb || {};

NesDb[ '4026DA3BDAC8E539E2D90E86E3B5B13957B6F309' ] = {
	"$": {
		"name": "Moulin Rouge Senki: Melville no Honoo",
		"altname": "ムーランルージュ戦記 メルヴィルの炎",
		"class": "Licensed",
		"catalog": "GAT-M6",
		"publisher": "Gakken",
		"developer": "Interlink",
		"region": "Japan",
		"players": "1",
		"date": "1989-08-11"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "F7E07B83",
				"sha1": "4026DA3BDAC8E539E2D90E86E3B5B13957B6F309",
				"dump": "ok",
				"dumper": "aodinets",
				"datedumped": "2012-03-05"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SKROM",
						"pcb": "HVC-SKROM-04",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "GAT-M6-0 PRG",
								"size": "128k",
								"crc": "005682D5",
								"sha1": "B5DA663270B4E9B772B7CA50B188D9849EB82A34"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "GAT-M6-0 CHR",
								"size": "128k",
								"crc": "4F55317F",
								"sha1": "BD1690C5F77ACBA4502531C1061E45E3C81541F6"
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
								"type": "MMC1B2"
							}
						}
					]
				}
			]
		}
	]
};
