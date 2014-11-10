this.NesDb = this.NesDb || {};

NesDb[ 'E7D6AF180962EEF5121D6A319985ACD33142C946' ] = {
	"$": {
		"name": "Labyrinth",
		"altname": "ラビリンス 魔王の迷宮",
		"class": "Licensed",
		"catalog": "GTS-LA",
		"publisher": "Tokuma Shoten",
		"developer": "",
		"region": "Japan",
		"players": "1",
		"date": "1987-01-07"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "F6139EE9",
				"sha1": "E7D6AF180962EEF5121D6A319985ACD33142C946",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-06-21"
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
								"name": "GTS-LA-0 PRG",
								"size": "128k",
								"crc": "F6139EE9",
								"sha1": "E7D6AF180962EEF5121D6A319985ACD33142C946"
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
