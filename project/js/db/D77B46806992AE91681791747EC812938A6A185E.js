this.NesDb = this.NesDb || {};

NesDb[ 'D77B46806992AE91681791747EC812938A6A185E' ] = {
	"$": {
		"name": "City Connection",
		"class": "Licensed",
		"catalog": "NES-CI-USA",
		"publisher": "Jaleco",
		"developer": "Hect",
		"region": "USA",
		"players": "2",
		"date": "1988-05"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "AE8666B4",
				"sha1": "D77B46806992AE91681791747EC812938A6A185E",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-03-23"
			},
			"board": [
				{
					"$": {
						"type": "NES-CNROM",
						"pcb": "NES-CN-ROM-256-05",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"name": "NES-CI-0 PRG",
								"size": "32k",
								"crc": "F4D70C17",
								"sha1": "3A9CEC81B51500458C51A5C5CAC5044DE7C40682"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-CI-0 CHR",
								"size": "32k",
								"crc": "EAD78010",
								"sha1": "0529254F8A8733A69C7D136C6B8CBD6EDEF129A1"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx161"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "6113A"
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
					"SZNSTPVG"
				]
			]
		},
		{
			"name": "Start with double lives",
			"codes": [
				[
					"IEKEYIZA"
				]
			]
		},
		{
			"name": "Start with triple lives",
			"codes": [
				[
					"AEKEYIZE"
				]
			]
		},
		{
			"name": "Infinite oil",
			"codes": [
				[
					"SXKPZGVG"
				]
			]
		},
		{
			"name": "Start with extra oil",
			"codes": [
				[
					"AXSAPIIA"
				]
			]
		},
		{
			"name": "Start on level 1",
			"codes": [
				[
					"PEKEIIAA"
				]
			]
		},
		{
			"name": "Start on level 2",
			"codes": [
				[
					"ZEKEIIAA"
				]
			]
		},
		{
			"name": "Start on level 3",
			"codes": [
				[
					"LEKEIIAA"
				]
			]
		},
		{
			"name": "Start on level 4",
			"codes": [
				[
					"GEKEIIAA"
				]
			]
		},
		{
			"name": "Start on level 5",
			"codes": [
				[
					"IEKEIIAA"
				]
			]
		}
	]
};
