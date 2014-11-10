this.NesDb = this.NesDb || {};

NesDb[ '28DD1998DA8816EDEEA1C093087EC8C6916A359D' ] = {
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
				"crc": "184C2124",
				"sha1": "28DD1998DA8816EDEEA1C093087EC8C6916A359D",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-04-29"
			},
			"board": [
				{
					"$": {
						"type": "HVC-EWROM",
						"pcb": "HVC-EWROM-01",
						"mapper": "5"
					},
					"prg": [
						{
							"$": {
								"name": "KOE-XL-0 PRG",
								"size": "256k",
								"crc": "95BA5733",
								"sha1": "124339F341FE40324444DA1D57BD094FD0B03DB8"
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
