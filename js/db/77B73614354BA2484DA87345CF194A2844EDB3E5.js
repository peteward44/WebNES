this.NesDb = this.NesDb || {};

NesDb[ '77B73614354BA2484DA87345CF194A2844EDB3E5' ] = {
	"$": {
		"name": "Dragon Unit",
		"altname": "ドラゴンユニット",
		"class": "Licensed",
		"catalog": "ATH-ZX",
		"publisher": "Athena",
		"developer": "Athena",
		"region": "Japan",
		"players": "1",
		"date": "1990-02-27"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "804F898A",
				"sha1": "77B73614354BA2484DA87345CF194A2844EDB3E5",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2011-01-22"
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
								"name": "ATH-ZX-0 PRG",
								"size": "128k",
								"crc": "804F898A",
								"sha1": "77B73614354BA2484DA87345CF194A2844EDB3E5"
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
