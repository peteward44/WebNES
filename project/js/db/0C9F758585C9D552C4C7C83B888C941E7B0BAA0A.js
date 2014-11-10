this.NesDb = this.NesDb || {};

NesDb[ '0C9F758585C9D552C4C7C83B888C941E7B0BAA0A' ] = {
	"$": {
		"name": "Street Gangs",
		"class": "Licensed",
		"catalog": "NES-ST-UKV",
		"publisher": "Infogrames",
		"developer": "Technos",
		"region": "United Kingdom",
		"players": "2",
		"date": "1991"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-A",
				"crc": "F5A1B8FB",
				"sha1": "0C9F758585C9D552C4C7C83B888C941E7B0BAA0A",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2011-06-11"
			},
			"board": [
				{
					"$": {
						"type": "NES-TLROM",
						"pcb": "NES-TLROM-03",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-ST-0 PRG",
								"size": "128k",
								"crc": "30A174AC",
								"sha1": "11BE5A728B6D9857C26CE62D08C3FC92C687B7D4"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PAL-ST-0 CHR",
								"size": "128k",
								"crc": "900A639A",
								"sha1": "55FA908B5CAC762BE53478BCF55B4723C188F77F"
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
								"type": "3197A"
							}
						}
					]
				}
			]
		}
	]
};
