this.NesDb = this.NesDb || {};

NesDb[ '932FC59188F00A3C99A5C4C65294295ABF075B0E' ] = {
	"$": {
		"name": "Wanpaku Duck Yume Bouken",
		"altname": "わんぱくダック夢冒険",
		"class": "Licensed",
		"catalog": "CAP-UK",
		"publisher": "Capcom",
		"developer": "Capcom",
		"region": "Japan",
		"players": "1",
		"date": "1990-01-26"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "DCB7C0A1",
				"sha1": "932FC59188F00A3C99A5C4C65294295ABF075B0E",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-07-22"
			},
			"board": [
				{
					"$": {
						"type": "HVC-UNROM",
						"pcb": "HVC-UNROM-09",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "CAP-UK-0 PRG",
								"size": "128k",
								"crc": "DCB7C0A1",
								"sha1": "932FC59188F00A3C99A5C4C65294295ABF075B0E"
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
