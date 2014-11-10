this.NesDb = this.NesDb || {};

NesDb[ '3BAE1F0AD46CAF12838E269665E690BB7DCA9758' ] = {
	"$": {
		"name": "Wheel of Fortune",
		"class": "Licensed",
		"catalog": "NES-WF-USA",
		"publisher": "GameTek",
		"developer": "Rare",
		"region": "USA",
		"players": "3",
		"date": "1988-09"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "FBF8A785",
				"sha1": "3BAE1F0AD46CAF12838E269665E690BB7DCA9758",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-01-21"
			},
			"board": [
				{
					"$": {
						"type": "NES-AOROM",
						"pcb": "NES-AOROM-01",
						"mapper": "7"
					},
					"prg": [
						{
							"$": {
								"name": "NES-WF-0 PRG",
								"size": "128k",
								"crc": "FBF8A785",
								"sha1": "3BAE1F0AD46CAF12838E269665E690BB7DCA9758"
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
	],
	"gameGenieCodes": [
		{
			"name": "Less time to solve",
			"codes": [
				[
					"GPUUISAZ"
				]
			]
		},
		{
			"name": "More time to solve",
			"codes": [
				[
					"GLUUISAX"
				]
			]
		},
		{
			"name": "Less time for choosing",
			"codes": [
				[
					"YENOIAYA",
					"GEKPOAYA"
				]
			]
		},
		{
			"name": "More time for choosing",
			"codes": [
				[
					"YENOIAYE",
					"YEKPOAYE"
				]
			]
		}
	]
};
