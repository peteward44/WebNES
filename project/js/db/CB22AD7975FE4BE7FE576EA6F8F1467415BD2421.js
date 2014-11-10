this.NesDb = this.NesDb || {};

NesDb[ 'CB22AD7975FE4BE7FE576EA6F8F1467415BD2421' ] = {
	"$": {
		"name": "Super Rugby",
		"altname": "スーパーラグビー",
		"class": "Licensed",
		"catalog": "TSS-S7",
		"publisher": "TSS",
		"developer": "Zap",
		"region": "Japan",
		"players": "2",
		"date": "1989-12-27"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "9F5138CB",
				"sha1": "CB22AD7975FE4BE7FE576EA6F8F1467415BD2421",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-03"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SLROM",
						"pcb": "HVC-SLROM-03",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "TSS-S7-0 PRG",
								"size": "128k",
								"crc": "5D6952B9",
								"sha1": "381CEA121738844A834584D56137C7C81AC8E1FA"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "TSS-S7-0 CHR",
								"size": "128k",
								"crc": "DE724898",
								"sha1": "730E6232BE0EE9EEDD85F4294F201F8FB62B11D6"
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
