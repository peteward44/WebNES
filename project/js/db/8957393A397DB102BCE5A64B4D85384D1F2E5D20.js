this.NesDb = this.NesDb || {};

NesDb[ '8957393A397DB102BCE5A64B4D85384D1F2E5D20' ] = {
	"$": {
		"name": "Jimmy Connors Tennis",
		"class": "Licensed",
		"catalog": "NES-JT-USA",
		"publisher": "UBI Soft",
		"developer": "NMS Software",
		"region": "USA",
		"players": "2",
		"date": "1993-11"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "00E95D86",
				"sha1": "8957393A397DB102BCE5A64B4D85384D1F2E5D20",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-10-08"
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
								"name": "NES-JT-0 PRG",
								"size": "128k",
								"crc": "00E95D86",
								"sha1": "8957393A397DB102BCE5A64B4D85384D1F2E5D20"
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
