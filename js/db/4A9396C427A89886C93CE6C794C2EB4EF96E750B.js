this.NesDb = this.NesDb || {};

NesDb[ '4A9396C427A89886C93CE6C794C2EB4EF96E750B' ] = {
	"$": {
		"name": "F-15 Strike Eagle",
		"class": "Licensed",
		"catalog": "NES-8F-FRA",
		"publisher": "Microprose",
		"developer": "Microprose",
		"region": "France",
		"players": "1",
		"date": "1993-02-18"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "BBB710D9",
				"sha1": "4A9396C427A89886C93CE6C794C2EB4EF96E750B",
				"dump": "ok",
				"dumper": "efnes",
				"datedumped": "2006-07-23"
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
								"name": "FRA-8F-0 PRG",
								"size": "256k",
								"crc": "DB5ED3A1",
								"sha1": "8DF1D70041B6FE46D6CD5293E8385303568FA3E4"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "FRA-8F-0 CHR",
								"size": "256k",
								"crc": "7293CECC",
								"sha1": "2C00422E93865043693C630C21E6953D28504D11"
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
								"type": "3195A"
							}
						}
					]
				}
			]
		}
	]
};
