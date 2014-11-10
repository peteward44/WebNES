this.NesDb = this.NesDb || {};

NesDb[ 'C49A237305362970FFB6FCB858CEECFDD4FA9ECB' ] = {
	"$": {
		"name": "Dr. Chaos",
		"class": "Licensed",
		"catalog": "NES-DC-USA",
		"publisher": "FCI",
		"developer": "Marionette",
		"region": "USA",
		"players": "1",
		"date": "1988-11"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "73620901",
				"sha1": "C49A237305362970FFB6FCB858CEECFDD4FA9ECB",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-01-27"
			},
			"board": [
				{
					"$": {
						"type": "NES-UNROM",
						"pcb": "NES-UNROM-08",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "NES-DC-0 PRG",
								"size": "128k",
								"crc": "73620901",
								"sha1": "C49A237305362970FFB6FCB858CEECFDD4FA9ECB"
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
			"name": "Start with more energy",
			"codes": [
				[
					"LTKKVPZL"
				]
			]
		},
		{
			"name": "Start with less energy",
			"codes": [
				[
					"PPKKVPZU"
				]
			]
		},
		{
			"name": "Mega-jump",
			"codes": [
				[
					"AEEGUZLE"
				]
			]
		},
		{
			"name": "Immune to damage",
			"codes": [
				[
					"GXKIKIST"
				]
			]
		},
		{
			"name": "More invincibility time",
			"codes": [
				[
					"AKSSKIGP"
				]
			]
		},
		{
			"name": "Less invincibility time",
			"codes": [
				[
					"GESSKIGP"
				]
			]
		},
		{
			"name": "Infinite pistol bullets",
			"codes": [
				[
					"GZEYEEVK"
				]
			]
		},
		{
			"name": "Take minimal damage",
			"codes": [
				[
					"OVKIKISV",
					"PEKISIGY"
				]
			]
		},
		{
			"name": "Take more damage and Shield Suit has no effect",
			"codes": [
				[
					"TVOSSITG",
					"AEOSKIYA"
				]
			]
		},
		{
			"name": "Start with Shield Suit",
			"codes": [
				[
					"PASKSPAA",
					"ZISKNPLG"
				]
			]
		}
	]
};
