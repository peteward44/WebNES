this.NesDb = this.NesDb || {};

NesDb[ 'E22AE723541184ADF7A81D824AD003CFD59AB485' ] = {
	"$": {
		"name": "Bard's Tale, The: Tales of the Unknown",
		"altname": "バーズテイル",
		"class": "Licensed",
		"catalog": "PNF-ET (R68V5935)",
		"publisher": "Pony Canyon",
		"developer": "Interplay",
		"portdeveloper": "Atelier Double",
		"region": "Japan",
		"players": "1",
		"date": "1990-12-21"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "7EE02CA2",
				"sha1": "E22AE723541184ADF7A81D824AD003CFD59AB485",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-12-06"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SNROM",
						"pcb": "HVC-SNROM-09",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "PNF-ET-0 PRG",
								"size": "256k",
								"crc": "7EE02CA2",
								"sha1": "E22AE723541184ADF7A81D824AD003CFD59AB485"
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
