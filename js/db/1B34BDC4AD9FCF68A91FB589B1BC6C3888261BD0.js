this.NesDb = this.NesDb || {};

NesDb[ '1B34BDC4AD9FCF68A91FB589B1BC6C3888261BD0' ] = {
	"$": {
		"name": "Star Wars",
		"class": "Licensed",
		"catalog": "NES-7V-USA",
		"publisher": "JVC",
		"developer": "LucasFilm Games",
		"portdeveloper": "Beam Software",
		"region": "USA",
		"players": "1",
		"date": "1991-11"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "C1C3636B",
				"sha1": "1B34BDC4AD9FCF68A91FB589B1BC6C3888261BD0",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-04-11"
			},
			"board": [
				{
					"$": {
						"type": "NES-TSROM",
						"pcb": "NES-TSROM-08",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "NES-7V-0 PRG",
								"size": "128k",
								"crc": "B00B4EB8",
								"sha1": "4569C8349056C0B8D6209255395D5AD08CB5F3C7"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-7V-0 CHR",
								"size": "128k",
								"crc": "4FD41AC1",
								"sha1": "8F40165EE7DD74F8898FC8782A669AE34E4A24C1"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "8k"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC3B"
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
			"name": "Start with 1 life",
			"codes": [
				[
					"AAXAGAZA"
				]
			]
		},
		{
			"name": "Start with 6 lives",
			"codes": [
				[
					"IAXAGAZA"
				]
			]
		},
		{
			"name": "Start with 9 lives",
			"codes": [
				[
					"AAXAGAZE"
				]
			]
		},
		{
			"name": "Infinite lives",
			"codes": [
				[
					"SZEAYXVK"
				]
			]
		},
		{
			"name": "Immune to spikes, you can get stuck on them",
			"codes": [
				[
					"GZSYLSSO"
				]
			]
		},
		{
			"name": "Immune to most bullets",
			"codes": [
				[
					"SLVUYNSO"
				]
			]
		},
		{
			"name": "Full energy on big energy pick-ups",
			"codes": [
				[
					"AAKLNGZA"
				]
			]
		},
		{
			"name": "Less energy on big energy pick-ups",
			"codes": [
				[
					"AAKLUGAX"
				]
			]
		},
		{
			"name": "More energy on big energy pick-ups",
			"codes": [
				[
					"AGKLUGAZ"
				]
			]
		},
		{
			"name": "Always running",
			"codes": [
				[
					"ZEOKOIPA",
					"ZEKKXIPA"
				]
			]
		},
		{
			"name": "Immune to most collisions",
			"codes": [
				[
					"GXNUZIST",
					"SLKLYVSO"
				]
			]
		}
	]
};
