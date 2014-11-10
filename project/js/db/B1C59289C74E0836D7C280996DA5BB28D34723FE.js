this.NesDb = this.NesDb || {};

NesDb[ 'B1C59289C74E0836D7C280996DA5BB28D34723FE' ] = {
	"$": {
		"name": "Taito Basketball",
		"altname": "タイトーバスケットボール",
		"class": "Licensed",
		"catalog": "DTF-UJ (36)",
		"publisher": "Taito",
		"developer": "Aicom",
		"region": "Japan",
		"players": "2",
		"date": "1991-04-26"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "4F16C504",
				"sha1": "B1C59289C74E0836D7C280996DA5BB28D34723FE",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-01"
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
								"name": "DTF-UJ-0 PRG",
								"size": "128k",
								"crc": "4DE477BE",
								"sha1": "96A90ECF17243D03609F8BDB1D72153BB109C545"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "DTF-UJ-0 CHR",
								"size": "128k",
								"crc": "97F13D4C",
								"sha1": "94AA6878A1FDAB155DB3174BD04A65FB184D182A"
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
