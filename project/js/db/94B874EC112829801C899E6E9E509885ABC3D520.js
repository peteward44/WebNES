this.NesDb = this.NesDb || {};

NesDb[ '94B874EC112829801C899E6E9E509885ABC3D520' ] = {
	"$": {
		"name": "Sukeban Deka III",
		"altname": "スケバン刑事Ⅲ",
		"class": "Licensed",
		"catalog": "TDF-KJ",
		"publisher": "Toei Animation",
		"developer": "Shouei System",
		"region": "Japan",
		"players": "1",
		"date": "1988-01-22"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "02863604",
				"sha1": "94B874EC112829801C899E6E9E509885ABC3D520",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-01"
			},
			"board": [
				{
					"$": {
						"type": "HVC-UNROM",
						"pcb": "HVC-UNROM-03",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "TDF-KJ-0 PRG",
								"size": "128k",
								"crc": "02863604",
								"sha1": "94B874EC112829801C899E6E9E509885ABC3D520"
							}
						}
					],
					"vram": [
						{
							"$": {
								"size": "8k"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx161"
							}
						},
						{
							"$": {
								"type": "74xx32"
							}
						}
					],
					"pad": [
						{
							"$": {
								"h": "1",
								"v": "0"
							}
						}
					]
				}
			]
		}
	]
};
