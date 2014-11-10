this.NesDb = this.NesDb || {};

NesDb[ '3DCB69A8C861C041AEB56C04E39ADF6D332EDA3A' ] = {
	"$": {
		"name": "Castlevania",
		"class": "Licensed",
		"catalog": "NES-CV-USA",
		"publisher": "Konami",
		"developer": "Konami",
		"region": "USA",
		"players": "1",
		"date": "1987-05"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"revision": "A",
				"crc": "B668C7FC",
				"sha1": "3DCB69A8C861C041AEB56C04E39ADF6D332EDA3A",
				"dump": "ok",
				"dumper": "polarz",
				"datedumped": "2006-04-12"
			},
			"board": [
				{
					"$": {
						"type": "NES-UNROM",
						"pcb": "NES-UN-ROM-06",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "NES-CV-1 PRG",
								"size": "128k",
								"crc": "B668C7FC",
								"sha1": "3DCB69A8C861C041AEB56C04E39ADF6D332EDA3A"
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
								"type": "6113"
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
					"OXNGLZVK"
				]
			]
		},
		{
			"name": "Start with 40 power hearts",
			"codes": [
				[
					"AXOGOPIE"
				]
			]
		},
		{
			"name": "Start with 80 power hearts",
			"codes": [
				[
					"ASOGOPIA"
				]
			]
		},
		{
			"name": "Infinite time",
			"codes": [
				[
					"SXXXYAAX"
				]
			]
		},
		{
			"name": "Keep weapons after losing a life",
			"codes": [
				[
					"GZOGYUSE"
				]
			]
		},
		{
			"name": "Gain rapid fire shots on weapon pick-up",
			"codes": [
				[
					"ZEUTAYAA"
				]
			]
		},
		{
			"name": "Weapons don't use power hearts",
			"codes": [
				[
					"KZSSEZKA",
					"KXESUZKA"
				]
			]
		},
		{
			"name": "Start with 1 life",
			"codes": [
				[
					"PANKXPGA",
					"PANGSAGA"
				]
			]
		},
		{
			"name": "Start with 8 lives",
			"codes": [
				[
					"AANKXPGE",
					"AANGSAGE"
				]
			]
		}
	]
};
