this.NesDb = this.NesDb || {};

NesDb[ '196F0CC52131AD059F26322EBD0CE68D9A8727D3' ] = {
	"$": {
		"name": "Mother",
		"altname": "ＭＯＴＨＥＲ",
		"class": "Licensed",
		"catalog": "HVC-MX",
		"publisher": "Nintendo",
		"developer": "Nintendo",
		"region": "Japan",
		"players": "1",
		"date": "1989-07-27"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "20CC079D",
				"sha1": "196F0CC52131AD059F26322EBD0CE68D9A8727D3",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-05-31"
			},
			"board": [
				{
					"$": {
						"type": "HVC-TKROM",
						"pcb": "HVC-TKROM-01",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "HVC-MX-0 PRG",
								"size": "256k",
								"crc": "5C707AC4",
								"sha1": "EE8F09B5E10DD03FBF1E7B683C8DE23CF4CE2D98"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "HVC-MX-0 CHR",
								"size": "128k",
								"crc": "31F457C6",
								"sha1": "63E9BB3AABB370FDC0227C1215B9A7AB1232A4AD"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "8k",
								"battery": "1"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC3A"
							}
						}
					]
				}
			]
		}
	]
};
