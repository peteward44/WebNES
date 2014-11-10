this.NesDb = this.NesDb || {};

NesDb[ 'AADCA8DC793CD310FA0D1FE78FF1C8EFD3DDE843' ] = {
	"$": {
		"name": "Alfred Chicken",
		"class": "Licensed",
		"catalog": "NES-AC-USA",
		"publisher": "Mindscape",
		"developer": "Twilight",
		"region": "USA",
		"players": "1",
		"date": "1994-02"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "63E992AC",
				"sha1": "AADCA8DC793CD310FA0D1FE78FF1C8EFD3DDE843",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-09-17"
			},
			"board": [
				{
					"$": {
						"type": "NES-UNROM",
						"pcb": "NES-UNROM-10",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "NES-AC-0 PRG",
								"size": "128k",
								"crc": "63E992AC",
								"sha1": "AADCA8DC793CD310FA0D1FE78FF1C8EFD3DDE843"
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
					"cic": [
						{
							"$": {
								"type": "6113B1"
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
	],
	"gameGenieCodes": [
		{
			"name": "Start with 1 life",
			"codes": [
				[
					"AASGITZA"
				]
			]
		},
		{
			"name": "Start with 2 lives",
			"codes": [
				[
					"PASGITZA"
				]
			]
		},
		{
			"name": "Infinite lives",
			"codes": [
				[
					"EVKNKAPA"
				]
			]
		},
		{
			"name": "Infinite time",
			"codes": [
				[
					"AVULEESZ"
				]
			]
		},
		{
			"name": "255 points for each present collected",
			"codes": [
				[
					"NNXYKPZU"
				]
			]
		},
		{
			"name": "108 points for each present collected",
			"codes": [
				[
					"GVXYKPZL"
				]
			]
		},
		{
			"name": "Only need 1 diamond for an extra life",
			"codes": [
				[
					"PAKLTPTA"
				]
			]
		},
		{
			"name": "3 balloons needed to complete A level",
			"codes": [
				[
					"OZXKXZOU",
					"LAXKUZPI"
				]
			]
		},
		{
			"name": "2 balloons needed to complete A level",
			"codes": [
				[
					"OZXKXZOU",
					"ZAXKUZPI"
				]
			]
		},
		{
			"name": "1 balloon needed to complete A level",
			"codes": [
				[
					"OZXKXZOU",
					"PAXKUZPI"
				]
			]
		}
	]
};
