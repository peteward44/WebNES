this.NesDb = this.NesDb || {};

NesDb[ 'C835985E31C1194073F5A843419F220D41C8AAFA' ] = {
	"$": {
		"name": "Track & Field II",
		"class": "Licensed",
		"catalog": "NES-F2-USA",
		"publisher": "Konami",
		"developer": "Konami",
		"region": "USA",
		"players": "2",
		"date": "1989-06"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"revision": "A",
				"crc": "7FA191E7",
				"sha1": "C835985E31C1194073F5A843419F220D41C8AAFA",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-10-05"
			},
			"board": [
				{
					"$": {
						"type": "KONAMI-SLROM",
						"pcb": "351908",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "RD014N3P",
								"size": "128k",
								"crc": "22EE7772",
								"sha1": "A15A6A09A83DDA95A023EFCF6A9F6EF2C6C27ABD"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "RD014N3C",
								"size": "128k",
								"crc": "B65E6472",
								"sha1": "7B0FF61C9F3D6D34255AE055839BB20A41236992"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx32"
							}
						},
						{
							"$": {
								"type": "MMC1B2"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "6113B1"
							}
						}
					]
				}
			]
		}
	]
};
