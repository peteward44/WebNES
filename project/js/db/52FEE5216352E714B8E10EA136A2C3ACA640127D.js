this.NesDb = this.NesDb || {};

NesDb[ '52FEE5216352E714B8E10EA136A2C3ACA640127D' ] = {
	"$": {
		"name": "Rush'n Attack",
		"class": "Licensed",
		"catalog": "NES-RA-EEC",
		"publisher": "Konami",
		"developer": "Konami",
		"region": "Europe",
		"players": "2",
		"date": "1989-06-08"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "E0AC6242",
				"sha1": "52FEE5216352E714B8E10EA136A2C3ACA640127D",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2007-12-17"
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
								"name": "PAL-RA-0 PRG",
								"size": "128k",
								"crc": "E0AC6242",
								"sha1": "52FEE5216352E714B8E10EA136A2C3ACA640127D"
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
								"type": "3195A"
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
			"name": "Infinite lives--player 1",
			"codes": [
				[
					"GZOEAYVG"
				]
			]
		},
		{
			"name": "Infinite lives--player 2",
			"codes": [
				[
					"GZOEIYVG"
				]
			]
		},
		{
			"name": "Start with 1 life--player 1",
			"codes": [
				[
					"PAVSTPIA"
				]
			]
		},
		{
			"name": "Start with 1 life--player 2",
			"codes": [
				[
					"PANITPIA"
				]
			]
		},
		{
			"name": "Start with 10 lives--player 1",
			"codes": [
				[
					"ZAVSTPIE"
				]
			]
		},
		{
			"name": "Start with 10 lives--player 2",
			"codes": [
				[
					"ZANITPIE"
				]
			]
		},
		{
			"name": "Never lose POW",
			"codes": [
				[
					"AENASIPA"
				]
			]
		}
	]
};
