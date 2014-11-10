this.NesDb = this.NesDb || {};

NesDb[ '3A75FB6966ED9D3793B8ACDC6FA9AEC7C2B3FE46' ] = {
	"$": {
		"name": "Cosmo Genesis",
		"altname": "コスモジェネシス",
		"class": "Licensed",
		"catalog": "HSP-06",
		"publisher": "ASCII",
		"developer": "ASCII",
		"region": "Japan",
		"players": "1",
		"date": "1986-12-23"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "0CD79B71",
				"sha1": "3A75FB6966ED9D3793B8ACDC6FA9AEC7C2B3FE46",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-01"
			},
			"board": [
				{
					"$": {
						"type": "HVC-CNROM",
						"pcb": "N04",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"size": "32k",
								"crc": "35D8B101",
								"sha1": "B8237A2A22D93182385FDC3B746DDBD74A7340FF"
							}
						}
					],
					"chr": [
						{
							"$": {
								"size": "32k",
								"crc": "68445363",
								"sha1": "5132D39EFDF28635AA15510AA95740CC20C87663"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx161"
							}
						}
					],
					"pad": [
						{
							"$": {
								"h": "0",
								"v": "1"
							}
						}
					]
				}
			]
		}
	]
};
