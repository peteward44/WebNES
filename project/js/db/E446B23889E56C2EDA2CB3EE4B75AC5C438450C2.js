this.NesDb = this.NesDb || {};

NesDb[ 'E446B23889E56C2EDA2CB3EE4B75AC5C438450C2' ] = {
	"$": {
		"name": "Super Pitfall",
		"altname": "スーパーピットフォール",
		"class": "Licensed",
		"catalog": "PNF-PF (R55V5903)",
		"publisher": "Pony Canyon",
		"developer": "Micronics / Khaos",
		"region": "Japan",
		"players": "2",
		"date": "1986-09-05"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "1C66BAF6",
				"sha1": "E446B23889E56C2EDA2CB3EE4B75AC5C438450C2",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-04-28"
			},
			"board": [
				{
					"$": {
						"type": "HVC-UNROM",
						"pcb": "HVC-UNROM-01",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "PNF-PF-0 PRG",
								"size": "128k",
								"crc": "1C66BAF6",
								"sha1": "E446B23889E56C2EDA2CB3EE4B75AC5C438450C2"
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
			"name": "Infinite lives--1-player game",
			"codes": [
				[
					"SZKSASVK"
				]
			]
		},
		{
			"name": "Infinite lives--player 1",
			"codes": [
				[
					"SXESTSVK"
				]
			]
		},
		{
			"name": "Infinite lives--player 2",
			"codes": [
				[
					"SXXSZSVK"
				]
			]
		},
		{
			"name": "Both players start with 1 life",
			"codes": [
				[
					"PAVIPALA"
				]
			]
		},
		{
			"name": "Both players start with 6 lives",
			"codes": [
				[
					"TAVIPALA"
				]
			]
		},
		{
			"name": "Both players start with 9 lives",
			"codes": [
				[
					"PAVIPALE"
				]
			]
		},
		{
			"name": "Start with 30 bullets",
			"codes": [
				[
					"LEXKNYZA"
				]
			]
		},
		{
			"name": "Start with 10 bullets",
			"codes": [
				[
					"PEXKNYZA"
				]
			]
		},
		{
			"name": "Infinite bullets",
			"codes": [
				[
					"AEOYILPA"
				]
			]
		},
		{
			"name": "30 bullets gained on pick-up",
			"codes": [
				[
					"LENLELZA"
				]
			]
		},
		{
			"name": "10 bullets gained on pick-up",
			"codes": [
				[
					"PENLELZA"
				]
			]
		}
	]
};
