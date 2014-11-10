this.NesDb = this.NesDb || {};

NesDb[ 'CDEA0B7036243E10C4E5455BE5A726B7D6A4D258' ] = {
	"$": {
		"name": "Mike Tyson's Punch-Out!!",
		"class": "Licensed",
		"catalog": "NES-PT-GBR",
		"publisher": "Nintendo",
		"developer": "Nintendo",
		"region": "United Kingdom",
		"players": "1",
		"date": "1987-12-15"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-A",
				"crc": "3A4D4D10",
				"sha1": "CDEA0B7036243E10C4E5455BE5A726B7D6A4D258",
				"dump": "ok",
				"dumper": "Mark_K",
				"datedumped": "2011-12-18"
			},
			"board": [
				{
					"$": {
						"type": "NES-PEEOROM",
						"pcb": "NES-PEEOROM-02",
						"mapper": "9"
					},
					"prg": [
						{
							"$": {
								"name": "NES PT",
								"size": "128k",
								"crc": "4C09E6B8",
								"sha1": "389C55695CAF74A2FC817838288EAF4ED036BA1C"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-PT-0 CHR",
								"size": "128k",
								"crc": "570B48EA",
								"sha1": "33DE517B16B61625909D2EB5307C08B337B542C4"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC2"
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
