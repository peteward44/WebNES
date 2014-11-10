this.NesDb = this.NesDb || {};

NesDb[ '3B5614A315F41DC19C2ED41F9924433314719799' ] = {
	"$": {
		"name": "WWF WrestleMania Challenge",
		"class": "Licensed",
		"catalog": "NES-W9-UKV",
		"publisher": "LJN",
		"developer": "Rare",
		"region": "United Kingdom",
		"players": "2",
		"date": "1991-12-20"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-A",
				"crc": "138862C5",
				"sha1": "3B5614A315F41DC19C2ED41F9924433314719799",
				"dump": "ok",
				"dumper": "piteta",
				"datedumped": "2007-08-04"
			},
			"board": [
				{
					"$": {
						"type": "NES-UNROM",
						"pcb": "NES-UNROM-09",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-W9-0 PRG",
								"size": "128k",
								"crc": "138862C5",
								"sha1": "3B5614A315F41DC19C2ED41F9924433314719799"
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
					"cic": [
						{
							"$": {
								"type": "3197A"
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
