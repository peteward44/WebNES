this.NesDb = this.NesDb || {};

NesDb[ '69D7C4BAB3B678D7527CE85A5CB29BB36481B924' ] = {
	"$": {
		"name": "Amagon",
		"class": "Licensed",
		"catalog": "NES-M5-USA",
		"publisher": "Sammy",
		"developer": "Aicom",
		"region": "USA",
		"players": "1",
		"date": "1989-04"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "E2B43A68",
				"sha1": "69D7C4BAB3B678D7527CE85A5CB29BB36481B924",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-07-03"
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
								"name": "NES-M5-0 PRG",
								"size": "128k",
								"crc": "E2B43A68",
								"sha1": "69D7C4BAB3B678D7527CE85A5CB29BB36481B924"
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
			"name": "Start with infinite lives",
			"codes": [
				[
					"AAXGNYPA"
				]
			]
		},
		{
			"name": "Start with 1 life",
			"codes": [
				[
					"PEOVIZGA"
				]
			]
		},
		{
			"name": "Start with 8 lives",
			"codes": [
				[
					"AEOVIZGE"
				]
			]
		},
		{
			"name": "Infinite mega-power",
			"codes": [
				[
					"GZSZIZSP"
				]
			]
		},
		{
			"name": "Start with no bullets!",
			"codes": [
				[
					"PEOVPZGA"
				]
			]
		},
		{
			"name": "Start with 600 bullets",
			"codes": [
				[
					"YEOVPZGA"
				]
			]
		},
		{
			"name": "Start with infinite bullets",
			"codes": [
				[
					"AAVYLTPA"
				]
			]
		},
		{
			"name": "Gain 10 bullets on pick-up",
			"codes": [
				[
					"PAVKUIZA"
				]
			]
		},
		{
			"name": "Gain 30 bullets on pick-up",
			"codes": [
				[
					"LAVKUIZA"
				]
			]
		}
	]
};
