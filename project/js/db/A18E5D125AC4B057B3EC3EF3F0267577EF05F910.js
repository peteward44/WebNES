this.NesDb = this.NesDb || {};

NesDb[ 'A18E5D125AC4B057B3EC3EF3F0267577EF05F910' ] = {
	"$": {
		"name": "Jimmy Connors Tennis",
		"class": "Licensed",
		"catalog": "NES-JT-UKV",
		"publisher": "UBI Soft",
		"developer": "NMS Software",
		"region": "United Kingdom",
		"players": "2",
		"date": "1993-08-03"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-A",
				"crc": "B80192B7",
				"sha1": "A18E5D125AC4B057B3EC3EF3F0267577EF05F910",
				"dump": "ok",
				"dumper": "piteta",
				"datedumped": "2007-08-03"
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
								"name": "PAL-JT-0 PRG",
								"size": "128k",
								"crc": "B80192B7",
								"sha1": "A18E5D125AC4B057B3EC3EF3F0267577EF05F910"
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
								"type": "3197A"
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
			"name": "Only need 15 points to win game",
			"codes": [
				[
					"AEVTIPLA"
				]
			]
		},
		{
			"name": "Only need 30 points to win game",
			"codes": [
				[
					"PEVTIPLA"
				]
			]
		},
		{
			"name": "Only need 40 points to win game",
			"codes": [
				[
					"ZEVTIPLA"
				]
			]
		},
		{
			"name": "Only need 1 game to win set instead of 6",
			"codes": [
				[
					"AEEVAZTA"
				]
			]
		},
		{
			"name": "Only need 2 games to win set",
			"codes": [
				[
					"PEEVAZTA"
				]
			]
		},
		{
			"name": "Only need 3 games to win set",
			"codes": [
				[
					"ZEEVAZTA"
				]
			]
		},
		{
			"name": "Only need 4 games to win set",
			"codes": [
				[
					"GEEVAZTA"
				]
			]
		},
		{
			"name": "Only need 5 games to win set",
			"codes": [
				[
					"IEEVAZTA"
				]
			]
		},
		{
			"name": "Must get 2 points after 40 to win and no deuces",
			"codes": [
				[
					"EEVVIPEI"
				]
			]
		},
		{
			"name": "Don't need to win by 2 to win tiebreaker",
			"codes": [
				[
					"PEKVGPZA"
				]
			]
		},
		{
			"name": "2 points needed to win tiebreaker instead of 7",
			"codes": [
				[
					"ZEUVIPYA"
				]
			]
		},
		{
			"name": "3 points needed to win tiebreaker",
			"codes": [
				[
					"LEUVIPYA"
				]
			]
		},
		{
			"name": "4 points needed to win tiebreaker",
			"codes": [
				[
					"GEUVIPYA"
				]
			]
		},
		{
			"name": "5 points needed to win tiebreaker",
			"codes": [
				[
					"IEUVIPYA"
				]
			]
		},
		{
			"name": "6 points needed to win tiebreaker",
			"codes": [
				[
					"TEUVIPYA"
				]
			]
		},
		{
			"name": "10 points needed to win tiebreaker",
			"codes": [
				[
					"ZEUVIPYE"
				]
			]
		}
	]
};
