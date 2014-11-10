this.NesDb = this.NesDb || {};

NesDb[ '35E34C7F7370A1CCB34014A62AD526BCC5F2B48B' ] = {
	"$": {
		"name": "Aoki Ookami to Shiroki Mejika: Genghis Khan",
		"altname": "蒼き狼と白き牝鹿 ジンギスカン",
		"class": "Licensed",
		"catalog": "KOE-GX",
		"publisher": "Koei",
		"developer": "Koei",
		"region": "Japan",
		"players": "4",
		"date": "1989-04-20"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "FB69743A",
				"sha1": "35E34C7F7370A1CCB34014A62AD526BCC5F2B48B",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-04-29"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SOROM",
						"pcb": "HVC-SOROM-03",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "KOE-GX-0 PRG",
								"size": "256k",
								"crc": "FB69743A",
								"sha1": "35E34C7F7370A1CCB34014A62AD526BCC5F2B48B"
							}
						}
					],
					"wram": [
						{
							"$": {
								"id": "0",
								"size": "8k",
								"battery": "1"
							}
						},
						{
							"$": {
								"id": "1",
								"size": "8k"
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
								"type": "MMC1A"
							}
						}
					]
				}
			]
		}
	]
};
