this.NesDb = this.NesDb || {};

NesDb[ 'B10594E7CBB7CE95BD57667E2DB62CC9B4810432' ] = {
	"$": {
		"name": "Secret Ties",
		"class": "Licensed",
		"subclass": "Unreleased",
		"catalog": "UNR-S4-USA",
		"publisher": "Vic Tokai",
		"developer": "Vic Tokai",
		"region": "USA",
		"players": "1",
		"date": "0000"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"prototype": "1",
				"crc": "B4801882",
				"sha1": "B10594E7CBB7CE95BD57667E2DB62CC9B4810432",
				"dump": "ok",
				"dumper": "TheRedEye",
				"datedumped": "2012-04-22"
			},
			"board": [
				{
					"$": {
						"type": "HVC-TLROM",
						"pcb": "HVC-TLROM-04",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "SECRET TIES PRG",
								"size": "128k",
								"crc": "D9F58221",
								"sha1": "5ED65ACF6C6C42D5B25952F58B78FA5034860FFD"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "SECRET TIES CHR",
								"size": "128k",
								"crc": "0E7E78DA",
								"sha1": "5520166499E7DD8072FE042F710EB9FA3F0F3BF2"
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
