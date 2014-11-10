this.NesDb = this.NesDb || {};

NesDb[ '23D302B901C2B6C1E969BAB7B2A45C392C06FB5B' ] = {
	"$": {
		"name": "Uchuusen: Cosmo Carrier",
		"altname": "宇宙船コスモキャリア",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "JF-16",
		"publisher": "Jaleco",
		"developer": "TOSE Software",
		"region": "Japan",
		"players": "1",
		"date": "1987-11-06"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "3D1C3137",
				"sha1": "23D302B901C2B6C1E969BAB7B2A45C392C06FB5B",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-03"
			},
			"board": [
				{
					"$": {
						"type": "JALECO-JF-16",
						"pcb": "JF-16",
						"mapper": "78"
					},
					"prg": [
						{
							"$": {
								"name": "JF-16 PRG",
								"size": "128k",
								"crc": "42392440",
								"sha1": "106BBFC52DD54051CF63E4D4CFA78E03ED15A4E5"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "JF-16 CHR",
								"size": "128k",
								"crc": "CFFEE642",
								"sha1": "305173A3676BE730F43105E888088EE17BF9785A"
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
								"type": "74xx161"
							}
						},
						{
							"$": {
								"type": "74xx32"
							}
						}
					]
				}
			]
		}
	]
};
