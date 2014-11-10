this.NesDb = this.NesDb || {};

NesDb[ '94A054C4A4C8FAF300C8A9A8EC7AB190332D6DB4' ] = {
	"$": {
		"name": "Star Wars",
		"class": "Licensed",
		"catalog": "NES-7V-NOE",
		"publisher": "JVC",
		"developer": "LucasFilm Games",
		"portdeveloper": "Beam Software",
		"region": "Germany",
		"players": "1",
		"date": "1992-07-18"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "FCD772EB",
				"sha1": "94A054C4A4C8FAF300C8A9A8EC7AB190332D6DB4",
				"dump": "ok",
				"dumper": "piteta",
				"datedumped": "2007-08-04"
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
								"name": "PAL-7V-0 PRG",
								"size": "128k",
								"crc": "70F4DADB",
								"sha1": "EF79978C46B87D86E9798A9EB6BB76A3CAD545AF"
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
								"type": "3195A"
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
