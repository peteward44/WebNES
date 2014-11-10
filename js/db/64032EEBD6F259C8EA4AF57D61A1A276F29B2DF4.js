this.NesDb = this.NesDb || {};

NesDb[ '64032EEBD6F259C8EA4AF57D61A1A276F29B2DF4' ] = {
	"$": {
		"name": "Sangokushi II",
		"altname": "三國志Ⅱ",
		"class": "Licensed",
		"catalog": "KOE-XL",
		"publisher": "Koei",
		"developer": "Koei",
		"region": "Japan",
		"players": "12",
		"date": "1990-11-02"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"revision": "B",
				"crc": "EE8E6553",
				"sha1": "64032EEBD6F259C8EA4AF57D61A1A276F29B2DF4",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-02-18"
			},
			"board": [
				{
					"$": {
						"type": "HVC-EWROM",
						"pcb": "HVC-EWROM-02",
						"mapper": "5"
					},
					"prg": [
						{
							"$": {
								"name": "KOE-XL-1 PRG",
								"size": "256k",
								"crc": "135D21F9",
								"sha1": "B6ECC49D3A83B14B5594EE0C2EAF744D4FFAA072"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "KOE-XL-0 CHR",
								"size": "256k",
								"crc": "2D8DAAC3",
								"sha1": "899D7E346DCE2D3CEE8437CBB2F69E83E6B0DCA3"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "32k",
								"battery": "1"
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
