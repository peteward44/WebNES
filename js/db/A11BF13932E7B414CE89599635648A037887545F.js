this.NesDb = this.NesDb || {};

NesDb[ 'A11BF13932E7B414CE89599635648A037887545F' ] = {
	"$": {
		"name": "Puss 'n Boots: Pero's Great Adventure",
		"class": "Licensed",
		"catalog": "NES-UO-USA",
		"publisher": "Electro Brain",
		"developer": "Shouei System",
		"region": "USA",
		"players": "1",
		"date": "1990-06"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "6E0EB43E",
				"sha1": "A11BF13932E7B414CE89599635648A037887545F",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-01-26"
			},
			"board": [
				{
					"$": {
						"type": "NES-UNROM",
						"pcb": "NES-UNROM-09",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "NES-UO-0 PRG",
								"size": "128k",
								"crc": "6E0EB43E",
								"sha1": "A11BF13932E7B414CE89599635648A037887545F"
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
			"name": "Start with 1 life",
			"codes": [
				[
					"PEOGZALA"
				]
			]
		},
		{
			"name": "Start with 6 lives",
			"codes": [
				[
					"TEOGZALA"
				]
			]
		},
		{
			"name": "Start with 9 lives",
			"codes": [
				[
					"PEOGZALE"
				]
			]
		},
		{
			"name": "Infinite lives",
			"codes": [
				[
					"SZOKZZVG"
				]
			]
		},
		{
			"name": "Start with less energy",
			"codes": [
				[
					"GOSTNUAU"
				]
			]
		},
		{
			"name": "Infinite energy",
			"codes": [
				[
					"SZNGOISA"
				]
			]
		},
		{
			"name": "Start on stage 1",
			"codes": [
				[
					"GAEGAIAA"
				]
			]
		},
		{
			"name": "Start on stage 2",
			"codes": [
				[
					"PAEGAIAE"
				]
			]
		},
		{
			"name": "Start on stage 3",
			"codes": [
				[
					"TAEGAIAE"
				]
			]
		},
		{
			"name": "Mega-jump",
			"codes": [
				[
					"AAXGNUPA"
				]
			]
		},
		{
			"name": "Autofire and Autojump",
			"codes": [
				[
					"AAOVNENY"
				]
			]
		}
	]
};
