this.NesDb = this.NesDb || {};

NesDb[ '46C0B521B3C595409C05972388909CCB0D5F6369' ] = {
	"$": {
		"name": "Ishin no Arashi",
		"altname": "維新の嵐",
		"class": "Licensed",
		"catalog": "KOE-XK",
		"publisher": "Koei",
		"developer": "Koei",
		"region": "Japan",
		"players": "1",
		"date": "1990-09-15"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "1CED086F",
				"sha1": "46C0B521B3C595409C05972388909CCB0D5F6369",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-10-03"
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
								"name": "KOE-XK-0 PRG",
								"size": "256k",
								"crc": "8FA95456",
								"sha1": "A8B46771C1D848DA3CA7CC203901AD001598489B"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "KOE-XK-0 CHR",
								"size": "128k",
								"crc": "97C0735F",
								"sha1": "95D1E4BDCF0EDB1980DF4BE1118D110CDAFD8166"
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
