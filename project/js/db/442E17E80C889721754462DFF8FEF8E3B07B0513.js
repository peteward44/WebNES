this.NesDb = this.NesDb || {};

NesDb[ '442E17E80C889721754462DFF8FEF8E3B07B0513' ] = {
	"$": {
		"name": "Hector '87",
		"altname": "ヘクター８７",
		"class": "Licensed",
		"catalog": "HFC-HH",
		"publisher": "Hudson Soft",
		"developer": "Hudson Soft",
		"region": "Japan",
		"players": "1",
		"date": "1987-07-16"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "784272F2",
				"sha1": "442E17E80C889721754462DFF8FEF8E3B07B0513",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-11-16"
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
								"name": "HFC-HH-0 PRG",
								"size": "128k",
								"crc": "784272F2",
								"sha1": "442E17E80C889721754462DFF8FEF8E3B07B0513"
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
