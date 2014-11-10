this.NesDb = this.NesDb || {};

NesDb[ '2BE4ADD0035AC8E5669E3E3B4B6C47F94291F555' ] = {
	"$": {
		"name": "Ultima: Seija e no Michi",
		"altname": "ウルティマ　聖者への道",
		"class": "Licensed",
		"catalog": "PNF-US (R59V5922)",
		"publisher": "Pony Canyon",
		"developer": "Origin Systems",
		"portdeveloper": "Infinity",
		"region": "Japan",
		"players": "1",
		"date": "1989-09-20"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "71D8C6E9",
				"sha1": "2BE4ADD0035AC8E5669E3E3B4B6C47F94291F555",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-01"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SNROM",
						"pcb": "HVC-SNROM-08",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "PNF-US-0 PRG",
								"size": "256k",
								"crc": "71D8C6E9",
								"sha1": "2BE4ADD0035AC8E5669E3E3B4B6C47F94291F555"
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
								"type": "MMC1B2"
							}
						}
					]
				}
			]
		}
	]
};
