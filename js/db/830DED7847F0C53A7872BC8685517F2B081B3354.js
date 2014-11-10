this.NesDb = this.NesDb || {};

NesDb[ '830DED7847F0C53A7872BC8685517F2B081B3354' ] = {
	"$": {
		"name": "Road Runner",
		"class": "Unlicensed",
		"catalog": "TGN-008-RR",
		"publisher": "Tengen",
		"developer": "Tengen",
		"region": "USA",
		"players": "1",
		"date": "1989"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "B19A55DD",
				"sha1": "830DED7847F0C53A7872BC8685517F2B081B3354",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-01-25"
			},
			"board": [
				{
					"$": {
						"type": "TENGEN-800032",
						"pcb": "800032 REV A",
						"mapper": "64"
					},
					"prg": [
						{
							"$": {
								"name": "335008-1011 RRPRG",
								"size": "64k",
								"crc": "C16897D2",
								"sha1": "02462BD29E961EEDCEA70964148D5839F7931A39"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "335008-1012 RRCHR",
								"size": "128k",
								"crc": "D2117B17",
								"sha1": "8BE3748C77E01CA51FCFA43D50A1369505660111"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "337006"
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
								"type": "337006"
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
					"SZOVUUVK"
				]
			]
		},
		{
			"name": "Start game with 1 life",
			"codes": [
				[
					"AAEVTGIA"
				]
			]
		},
		{
			"name": "Start game with 12 lives",
			"codes": [
				[
					"LAEVTGIE"
				]
			]
		},
		{
			"name": "Start game with 18 lives",
			"codes": [
				[
					"PPEVTGIA"
				]
			]
		},
		{
			"name": "Start at level 5",
			"codes": [
				[
					"IAOTLGPA"
				]
			]
		},
		{
			"name": "Start at level 10",
			"codes": [
				[
					"ZAOTLGPE"
				]
			]
		},
		{
			"name": "Start at level 15",
			"codes": [
				[
					"YAOTLGPE"
				]
			]
		},
		{
			"name": "Start at level 20",
			"codes": [
				[
					"GPOTLGPA"
				]
			]
		},
		{
			"name": "Start at level 25",
			"codes": [
				[
					"PPOTLGPE"
				]
			]
		},
		{
			"name": "Start at level 30",
			"codes": [
				[
					"TPOTLGPE"
				]
			]
		},
		{
			"name": "Never lose seed",
			"codes": [
				[
					"XVUGAOEK",
					"XVXTSUEK"
				]
			]
		}
	]
};
