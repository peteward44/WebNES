this.NesDb = this.NesDb || {};

NesDb[ '49E7B12A17E9C339F93069895D5A98D10A43E266' ] = {
	"$": {
		"name": "Fire Emblem Gaiden",
		"altname": "ファイアーエムブレム外伝",
		"class": "Licensed",
		"catalog": "HVC-2I",
		"publisher": "Nintendo",
		"developer": "Nintendo",
		"region": "Japan",
		"players": "1",
		"date": "1992-03-14"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "A98046B8",
				"sha1": "49E7B12A17E9C339F93069895D5A98D10A43E266",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-12-24"
			},
			"board": [
				{
					"$": {
						"type": "HVC-FKROM",
						"pcb": "HVC-FKROM-01",
						"mapper": "10"
					},
					"prg": [
						{
							"$": {
								"name": "HVC-2I-0 PRG",
								"size": "256k",
								"crc": "E8456051",
								"sha1": "0F8EBC52516E028011E43FAB2550D37C60C1B28D"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "HVC-2I-0 CHR",
								"size": "128k",
								"crc": "963FD7C5",
								"sha1": "6C90BDD9D37317961E67A98961D0677AECF2DA25"
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
								"type": "MM1026"
							}
						},
						{
							"$": {
								"type": "MMC-4"
							}
						}
					]
				}
			]
		}
	]
};
