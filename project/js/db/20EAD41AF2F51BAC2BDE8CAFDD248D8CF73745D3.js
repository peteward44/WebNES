this.NesDb = this.NesDb || {};

NesDb[ '20EAD41AF2F51BAC2BDE8CAFDD248D8CF73745D3' ] = {
	"$": {
		"name": "Ferrari Grand Prix Challenge",
		"altname": "フェラーリ グランプリチャレンジ",
		"class": "Licensed",
		"catalog": "CDS-FS",
		"publisher": "Coconuts",
		"developer": "System 3",
		"region": "Japan",
		"players": "1",
		"date": "1992-11-13"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "A485ABED",
				"sha1": "20EAD41AF2F51BAC2BDE8CAFDD248D8CF73745D3",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2011-01-22"
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
								"name": "CDS-FS-0 PRG",
								"size": "128k",
								"crc": "1995AC4E",
								"sha1": "58E42BDBE4CD1254328F5EFB67281728FCA3CF1F"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "CDS-FS-0 CHR",
								"size": "128k",
								"crc": "ED6C25BC",
								"sha1": "FF45BCF21ED1492810BFB766A3B02C5CBB9FDB21"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1B3"
							}
						}
					]
				}
			]
		}
	]
};
