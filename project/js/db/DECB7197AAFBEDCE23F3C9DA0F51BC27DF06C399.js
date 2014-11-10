this.NesDb = this.NesDb || {};

NesDb[ 'DECB7197AAFBEDCE23F3C9DA0F51BC27DF06C399' ] = {
	"$": {
		"name": "Ballblazer",
		"altname": "ボールブレイザー",
		"class": "Licensed",
		"catalog": "PNF-BZ (R55V5911)",
		"publisher": "Pony Canyon",
		"developer": "LucasFilm Games",
		"region": "Japan",
		"players": "2",
		"date": "1988-03-04"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "484A60DB",
				"sha1": "DECB7197AAFBEDCE23F3C9DA0F51BC27DF06C399",
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
								"name": "PNF-BZ-0 PRG",
								"size": "128k",
								"crc": "484A60DB",
								"sha1": "DECB7197AAFBEDCE23F3C9DA0F51BC27DF06C399"
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
