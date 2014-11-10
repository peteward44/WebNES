this.NesDb = this.NesDb || {};

NesDb[ '4AFCADA217C73BE2242CBFD1D2CF11D9AA26D88A' ] = {
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
				"revision": "A",
				"crc": "3368F7FB",
				"sha1": "4AFCADA217C73BE2242CBFD1D2CF11D9AA26D88A",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-03-10"
			},
			"board": [
				{
					"$": {
						"type": "NES-AOROM",
						"pcb": "NES-AOROM-03",
						"mapper": "7"
					},
					"prg": [
						{
							"$": {
								"name": "NES-WF-1 PRG",
								"size": "128k",
								"crc": "3368F7FB",
								"sha1": "4AFCADA217C73BE2242CBFD1D2CF11D9AA26D88A"
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
