this.NesDb = this.NesDb || {};

NesDb[ '57690BE45879AA00DD825B89FC525E31FDC041FF' ] = {
	"$": {
		"name": "720°",
		"class": "Licensed",
		"catalog": "NES-72-USA",
		"publisher": "Mindscape",
		"developer": "Tengen",
		"region": "USA",
		"players": "1",
		"date": "1989-11"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "49F745E0",
				"sha1": "57690BE45879AA00DD825B89FC525E31FDC041FF",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-01-21"
			},
			"board": [
				{
					"$": {
						"type": "NES-SGROM",
						"pcb": "NES-SGROM-03",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-72-0 PRG",
								"size": "128k",
								"crc": "49F745E0",
								"sha1": "57690BE45879AA00DD825B89FC525E31FDC041FF"
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
	],
	"gameGenieCodes": [
		{
			"name": "Infinite continues",
			"codes": [
				[
					"SZUYASVK"
				]
			]
		},
		{
			"name": "9 continues",
			"codes": [
				[
					"PEXKLZLE"
				]
			]
		},
		{
			"name": "6 continues",
			"codes": [
				[
					"TEXKLZLA"
				]
			]
		},
		{
			"name": "No continues, instead of usual 2",
			"codes": [
				[
					"PEXKLZLA"
				]
			]
		},
		{
			"name": "Start with all equipment",
			"codes": [
				[
					"GEKKYZAA"
				]
			]
		},
		{
			"name": "Start with half equipment",
			"codes": [
				[
					"ZEKKYZAA"
				]
			]
		},
		{
			"name": "Start on level 2",
			"codes": [
				[
					"XVXGGXSX",
					"OXXGIXTE",
					"ZEXGTZZA"
				]
			]
		},
		{
			"name": "Start on level 3",
			"codes": [
				[
					"XVXGGXSX",
					"OXXGIXTE",
					"LEXGTZZA"
				]
			]
		},
		{
			"name": "Start on level 4",
			"codes": [
				[
					"XVXGGXSX",
					"OXXGIXTE",
					"GEXGTZZA"
				]
			]
		}
	]
};
