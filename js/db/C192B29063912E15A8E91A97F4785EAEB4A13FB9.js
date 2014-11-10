this.NesDb = this.NesDb || {};

NesDb[ 'C192B29063912E15A8E91A97F4785EAEB4A13FB9' ] = {
	"$": {
		"name": "Top Gun",
		"class": "Licensed",
		"catalog": "NES-TG-USA",
		"publisher": "Konami",
		"developer": "Konami",
		"region": "USA",
		"players": "1",
		"date": "1987-11"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "4E22368D",
				"sha1": "C192B29063912E15A8E91A97F4785EAEB4A13FB9",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-10-05"
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
								"name": "NES-TG-0 PRG",
								"size": "128k",
								"crc": "4E22368D",
								"sha1": "C192B29063912E15A8E91A97F4785EAEB4A13FB9"
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
								"h": "0",
								"v": "1"
							}
						}
					]
				}
			]
		}
	],
	"gameGenieCodes": [
		{
			"name": "Infinite missiles",
			"codes": [
				[
					"GXKIKIVG"
				]
			]
		},
		{
			"name": "Take off with double Hound missiles",
			"codes": [
				[
					"ASEKTOAZ"
				]
			]
		},
		{
			"name": "Take off with double Wolf missiles",
			"codes": [
				[
					"AXEKYPGO"
				]
			]
		},
		{
			"name": "Take off with double Tiger missiles",
			"codes": [
				[
					"GOOGAOZA"
				]
			]
		},
		{
			"name": "Infinite fuel",
			"codes": [
				[
					"GXUSNGVG"
				]
			]
		},
		{
			"name": "Start with half fuel",
			"codes": [
				[
					"IANKLOZA"
				]
			]
		},
		{
			"name": "Immune to bullets (but not missiles!)",
			"codes": [
				[
					"AEKSNLLA"
				]
			]
		},
		{
			"name": "Start on mission 2",
			"codes": [
				[
					"ZAEGLPPA"
				]
			]
		},
		{
			"name": "Start on mission 3",
			"codes": [
				[
					"LAEGLPPA"
				]
			]
		},
		{
			"name": "Start on mission 4",
			"codes": [
				[
					"GAEGLPPA"
				]
			]
		}
	]
};
