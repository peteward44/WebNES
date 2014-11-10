this.NesDb = this.NesDb || {};

NesDb[ '5C2376E02696E4170F9BD48855DB483147E7C3D8' ] = {
	"$": {
		"name": "Doraemon: Gigazombie no Gyakushuu",
		"altname": "ドラえもん　ギガゾンビの逆襲",
		"class": "Licensed",
		"catalog": "EPO-E5",
		"publisher": "Epoch",
		"developer": "Sakata SAS",
		"region": "Japan",
		"players": "1",
		"date": "1990-09-14"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "D7215873",
				"sha1": "5C2376E02696E4170F9BD48855DB483147E7C3D8",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-06-24"
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
								"name": "EPO-E5-0 PRG",
								"size": "256k",
								"crc": "D7215873",
								"sha1": "5C2376E02696E4170F9BD48855DB483147E7C3D8"
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
