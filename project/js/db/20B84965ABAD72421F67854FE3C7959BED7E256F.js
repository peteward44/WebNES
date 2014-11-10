this.NesDb = this.NesDb || {};

NesDb[ '20B84965ABAD72421F67854FE3C7959BED7E256F' ] = {
	"$": {
		"name": "Twin Eagle",
		"class": "Licensed",
		"catalog": "NES-2E-USA",
		"publisher": "Romstar",
		"developer": "Seta",
		"region": "USA",
		"players": "2",
		"date": "1989-10"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "CF26A149",
				"sha1": "20B84965ABAD72421F67854FE3C7959BED7E256F",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-10-10"
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
								"name": "NES-2E-0 PRG",
								"size": "128k",
								"crc": "CF26A149",
								"sha1": "20B84965ABAD72421F67854FE3C7959BED7E256F"
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
			"name": "Infinite lives--player 1",
			"codes": [
				[
					"SXOSVPVG"
				]
			]
		},
		{
			"name": "Start with 7 lives--both players",
			"codes": [
				[
					"YEETIPLA"
				]
			]
		},
		{
			"name": "Start with 4 lives--both players",
			"codes": [
				[
					"GEETIPLA"
				]
			]
		},
		{
			"name": "Start with 1 life--both players",
			"codes": [
				[
					"PEETIPLA"
				]
			]
		},
		{
			"name": "Infinite bombs on pick-up--player 1",
			"codes": [
				[
					"SXNSXSVK"
				]
			]
		},
		{
			"name": "Infinite bombs on pick-up--player 2",
			"codes": [
				[
					"SZSIXNVK"
				]
			]
		},
		{
			"name": "Player 1 has 1 life after a continue",
			"codes": [
				[
					"PAEKXTLA"
				]
			]
		},
		{
			"name": "Player 1 has 4 lives after a continue",
			"codes": [
				[
					"GAEKXTLA"
				]
			]
		},
		{
			"name": "Player 1 has 7 lives after a continue",
			"codes": [
				[
					"YAEKXTLA"
				]
			]
		},
		{
			"name": "Never lose weapons--player 1",
			"codes": [
				[
					"EYKVVUSA",
					"YAKVNLKZ"
				]
			]
		},
		{
			"name": "Never lose weapons--player 2",
			"codes": [
				[
					"ENXVKUSA",
					"YEXVSLSZ"
				]
			]
		}
	]
};
