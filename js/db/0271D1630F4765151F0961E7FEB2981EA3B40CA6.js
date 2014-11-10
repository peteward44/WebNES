this.NesDb = this.NesDb || {};

NesDb[ '0271D1630F4765151F0961E7FEB2981EA3B40CA6' ] = {
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
				"prototype": "1",
				"crc": "B30599A1",
				"sha1": "0271D1630F4765151F0961E7FEB2981EA3B40CA6",
				"dump": "ok",
				"dumper": "TheRedEye",
				"datedumped": "2012-04-22"
			},
			"board": [
				{
					"$": {
						"type": "NES-TKEPROM",
						"pcb": "NES-TKEPROM-01",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "STAR WARS 6/14/91 PROGRAM",
								"size": "128k",
								"crc": "6526EA5F",
								"sha1": "A9D3778A930907BD58501A6F74FE0EAC368987FD"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "STAR WARS 6/14/91 GRAPHICS",
								"size": "128k",
								"crc": "4FD41AC1",
								"sha1": "8F40165EE7DD74F8898FC8782A669AE34E4A24C1"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "8k",
								"battery": "1"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx139"
							}
						},
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
