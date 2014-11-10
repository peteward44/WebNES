this.NesDb = this.NesDb || {};

NesDb[ 'F85050E16EE37A1092DF8CEF697BBEF284884C53' ] = {
	"$": {
		"name": "Seirei Gari",
		"altname": "星霊狩り",
		"class": "Licensed",
		"catalog": "HFC-V1",
		"publisher": "Hudson Soft",
		"developer": "Hudson Soft",
		"region": "Japan",
		"players": "1",
		"date": "1989-12-08"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "D8F651E2",
				"sha1": "F85050E16EE37A1092DF8CEF697BBEF284884C53",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-11-12"
			},
			"board": [
				{
					"$": {
						"type": "HVC-UOROM",
						"pcb": "HVC-UOROM-01",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "HFC-V1-0 PRG",
								"size": "256k",
								"crc": "D8F651E2",
								"sha1": "F85050E16EE37A1092DF8CEF697BBEF284884C53"
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
