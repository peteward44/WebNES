this.NesDb = this.NesDb || {};

NesDb[ 'BB40175966F18EFAD8D82BEBEA3D4D8444A133E6' ] = {
	"$": {
		"name": "Wit's",
		"class": "Licensed",
		"catalog": "ATH-XW",
		"publisher": "Athena",
		"developer": "Athena",
		"region": "Japan",
		"players": "2",
		"date": "1990-07-13"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "B1B16B8A",
				"sha1": "BB40175966F18EFAD8D82BEBEA3D4D8444A133E6",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2012-05-06"
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
								"name": "ATH-XW-0 PRG",
								"size": "128k",
								"crc": "B1B16B8A",
								"sha1": "BB40175966F18EFAD8D82BEBEA3D4D8444A133E6"
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
