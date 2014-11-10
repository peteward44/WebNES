this.NesDb = this.NesDb || {};

NesDb[ '56B8B73045EE0B926065BB40F7F695600AC2F6E4' ] = {
	"$": {
		"name": "Higemaru Makaijima: Nanatsu no Shima Daibouken",
		"altname": "魔界島 七つの島大冒険",
		"class": "Licensed",
		"catalog": "CAP-MZ",
		"publisher": "Capcom",
		"developer": "Capcom",
		"region": "Japan",
		"players": "1",
		"date": "1987-04-14"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "F7893859",
				"sha1": "56B8B73045EE0B926065BB40F7F695600AC2F6E4",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-07-22"
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
								"name": "CAP-MZ-0 PRG",
								"size": "128k",
								"crc": "F7893859",
								"sha1": "56B8B73045EE0B926065BB40F7F695600AC2F6E4"
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
