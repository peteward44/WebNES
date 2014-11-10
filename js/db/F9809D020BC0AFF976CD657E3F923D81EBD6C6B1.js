this.NesDb = this.NesDb || {};

NesDb[ 'F9809D020BC0AFF976CD657E3F923D81EBD6C6B1' ] = {
	"$": {
		"name": "Fist of the North Star",
		"class": "Licensed",
		"catalog": "NES-HO-USA",
		"publisher": "Taxan",
		"developer": "Shouei System",
		"region": "USA",
		"players": "1",
		"date": "1989-04"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "06D72C83",
				"sha1": "F9809D020BC0AFF976CD657E3F923D81EBD6C6B1",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-03-23"
			},
			"board": [
				{
					"$": {
						"type": "NES-UNROM",
						"pcb": "NES-UN-ROM-07",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "NES-HO-0 PRG",
								"size": "128k",
								"crc": "06D72C83",
								"sha1": "F9809D020BC0AFF976CD657E3F923D81EBD6C6B1"
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
								"h": "1",
								"v": "0"
							}
						}
					]
				}
			]
		}
	],
	"gameGenieCodes": [
		{
			"name": "Infinite lives",
			"codes": [
				[
					"SXKKYPVG"
				]
			]
		},
		{
			"name": "Start with 1 life",
			"codes": [
				[
					"PEKKGALA"
				]
			]
		},
		{
			"name": "Start with 6 lives",
			"codes": [
				[
					"TEKKGALA"
				]
			]
		},
		{
			"name": "Start with 9 lives",
			"codes": [
				[
					"PEKKGALE"
				]
			]
		},
		{
			"name": "Freeze timer",
			"codes": [
				[
					"SZSVGTVG"
				]
			]
		},
		{
			"name": "For pro's--one hit kills you!",
			"codes": [
				[
					"OTSGOGSV"
				]
			]
		},
		{
			"name": "Sweep kick damages enemies more",
			"codes": [
				[
					"TEELTPPA"
				]
			]
		},
		{
			"name": "Straight kick damages enemies more",
			"codes": [
				[
					"AEOLGPLE"
				]
			]
		},
		{
			"name": "Can't be knocked back by big thugs",
			"codes": [
				[
					"AAUKVGGA"
				]
			]
		},
		{
			"name": "Pogo stick",
			"codes": [
				[
					"EISGUPEY"
				]
			]
		},
		{
			"name": "Take minimum damage from all enemies",
			"codes": [
				[
					"OTSGOGSV",
					"PASGXKOI"
				]
			]
		},
		{
			"name": "Any attack mega-damages enemies",
			"codes": [
				[
					"OVOUZPSV",
					"ZEOULOOS"
				]
			]
		}
	]
};
