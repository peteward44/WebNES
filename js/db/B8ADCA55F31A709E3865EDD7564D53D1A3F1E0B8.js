this.NesDb = this.NesDb || {};

NesDb[ 'B8ADCA55F31A709E3865EDD7564D53D1A3F1E0B8' ] = {
	"$": {
		"name": "Hana no Star Kaidou",
		"altname": "花のスター街道",
		"class": "Licensed",
		"catalog": "VFR-H1-02",
		"publisher": "Victor",
		"developer": "",
		"region": "Japan",
		"players": "1",
		"date": "1987-03-17"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "6A6B7239",
				"sha1": "B8ADCA55F31A709E3865EDD7564D53D1A3F1E0B8",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-06-23"
			},
			"board": [
				{
					"$": {
						"type": "HVC-UNROM",
						"pcb": "HVC-UNROM-02",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "VFR-H1-0 PRG",
								"size": "128k",
								"crc": "6A6B7239",
								"sha1": "B8ADCA55F31A709E3865EDD7564D53D1A3F1E0B8"
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
