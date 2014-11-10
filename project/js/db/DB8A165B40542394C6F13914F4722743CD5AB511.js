this.NesDb = this.NesDb || {};

NesDb[ 'DB8A165B40542394C6F13914F4722743CD5AB511' ] = {
	"$": {
		"name": "Solstice: The Quest for the Staff of Demnos",
		"class": "Licensed",
		"catalog": "NES-LX-USA",
		"publisher": "Sony (CSG) Imagesoft",
		"developer": "Software Creations",
		"region": "USA",
		"players": "1",
		"date": "1990-06"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"prototype": "1",
				"crc": "EDCF1B71",
				"sha1": "DB8A165B40542394C6F13914F4722743CD5AB511",
				"dump": "ok",
				"dumper": "Skrybe",
				"datedumped": "2012-04-22"
			},
			"board": [
				{
					"$": {
						"type": "NES-ANROM",
						"pcb": "NES-ANROM-01",
						"mapper": "7"
					},
					"prg": [
						{
							"$": {
								"size": "128k",
								"crc": "EDCF1B71",
								"sha1": "DB8A165B40542394C6F13914F4722743CD5AB511"
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
								"type": "74xx02"
							}
						},
						{
							"$": {
								"type": "74xx161"
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
		},
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "EDCF1B71",
				"sha1": "DB8A165B40542394C6F13914F4722743CD5AB511",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-12-17"
			},
			"board": [
				{
					"$": {
						"type": "NES-ANROM",
						"pcb": "NES-ANROM-03",
						"mapper": "7"
					},
					"prg": [
						{
							"$": {
								"name": "NES-LX-0 PRG",
								"size": "128k",
								"crc": "EDCF1B71",
								"sha1": "DB8A165B40542394C6F13914F4722743CD5AB511"
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
								"type": "74xx02"
							}
						},
						{
							"$": {
								"type": "74xx161"
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
