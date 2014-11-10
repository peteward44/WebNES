this.NesDb = this.NesDb || {};

NesDb[ '2C56A7823DB3B963DE82BDFBC057E9BD5DFA77A8' ] = {
	"$": {
		"name": "Family Quiz: 4-nin wa Rival",
		"altname": "ファミリークイズ ４人はライバル",
		"class": "Licensed",
		"catalog": "ATH-FQ",
		"publisher": "Athena",
		"developer": "Athena",
		"region": "Japan",
		"players": "1",
		"date": "1988-11-16"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "07910BF9",
				"sha1": "2C56A7823DB3B963DE82BDFBC057E9BD5DFA77A8",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-06-21"
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
								"name": "ATH-FQ-0 PRG",
								"size": "128k",
								"crc": "07910BF9",
								"sha1": "2C56A7823DB3B963DE82BDFBC057E9BD5DFA77A8"
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
