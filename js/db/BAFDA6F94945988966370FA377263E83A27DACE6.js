this.NesDb = this.NesDb || {};

NesDb[ 'BAFDA6F94945988966370FA377263E83A27DACE6' ] = {
	"$": {
		"name": "Musashi no Bouken",
		"altname": "ムサシの冒険",
		"class": "Licensed",
		"catalog": "SEI-IC",
		"publisher": "Sigma Enterprises",
		"developer": "Bothtec (Quest)",
		"region": "Japan",
		"players": "1",
		"date": "1990-12-22"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "70F67AB7",
				"sha1": "BAFDA6F94945988966370FA377263E83A27DACE6",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2012-05-06"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SKROM",
						"pcb": "HVC-SKROM-05",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "SEI-1C-0 PRG",
								"size": "128k",
								"crc": "FA4B1D72",
								"sha1": "8177D44A74BD4A60E230A1A4E9F41081228FD258"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "SEI-1C-0 CHR",
								"size": "128k",
								"crc": "66D5D117",
								"sha1": "44E9BE262756196385C9F6608DCC457EA052D0B2"
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
