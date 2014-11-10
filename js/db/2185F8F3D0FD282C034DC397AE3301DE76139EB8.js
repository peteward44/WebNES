this.NesDb = this.NesDb || {};

NesDb[ '2185F8F3D0FD282C034DC397AE3301DE76139EB8' ] = {
	"$": {
		"name": "Top Striker",
		"altname": "トップストライカー",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "NAM-FTS-5800",
		"publisher": "Namco",
		"developer": "Namco",
		"region": "Japan",
		"players": "2",
		"date": "1992-10-22"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "2447E03B",
				"sha1": "2185F8F3D0FD282C034DC397AE3301DE76139EB8",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-10-03"
			},
			"board": [
				{
					"$": {
						"type": "NAMCOT-340",
						"pcb": "CS 0003",
						"mapper": "19"
					},
					"prg": [
						{
							"$": {
								"name": "NAMCOTFTSP",
								"size": "128k",
								"crc": "9227180C",
								"sha1": "55D7BA8BDB50AF005323EB5B10B680DCD76AAB1A"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NAMCOTFTSC",
								"size": "128k",
								"crc": "DF4B2618",
								"sha1": "3935479470CC9E8E68D9A67D9CF7FCDFE5D39A68"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "340"
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
