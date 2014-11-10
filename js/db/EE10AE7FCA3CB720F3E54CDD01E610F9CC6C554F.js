this.NesDb = this.NesDb || {};

NesDb[ 'EE10AE7FCA3CB720F3E54CDD01E610F9CC6C554F' ] = {
	"$": {
		"name": "City Connection",
		"class": "Licensed",
		"catalog": "NES-CI-ESP",
		"publisher": "Jaleco",
		"developer": "Hect",
		"region": "Spain",
		"players": "2",
		"date": "1985"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "681798A8",
				"sha1": "EE10AE7FCA3CB720F3E54CDD01E610F9CC6C554F",
				"dump": "ok",
				"dumper": "piteta",
				"datedumped": "2011-09-03"
			},
			"board": [
				{
					"$": {
						"type": "NES-CNROM",
						"pcb": "NES-CNROM-07",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-CI-0 PRG",
								"size": "32k",
								"crc": "BBB3DE0A",
								"sha1": "AA247C87BDFA04B95921679608043B9DBD37FEEC"
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
