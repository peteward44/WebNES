this.NesDb = this.NesDb || {};

NesDb[ '2E3F613B2918D253D893E5210FE2E43543C88C59' ] = {
	"$": {
		"name": "Young Indiana Jones Chronicles, The",
		"class": "Licensed",
		"catalog": "NES-YJ-USA",
		"publisher": "Jaleco",
		"developer": "Jaleco",
		"region": "USA",
		"players": "1",
		"date": "1992-12"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "35C6F574",
				"sha1": "2E3F613B2918D253D893E5210FE2E43543C88C59",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-03-25"
			},
			"board": [
				{
					"$": {
						"type": "NES-TLROM",
						"pcb": "NES-TLROM-03",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "NES-YJ-0 PRG",
								"size": "128k",
								"crc": "1E0A01EA",
								"sha1": "30F342056E776F86F955C0C3BA32885FE967C61B"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-YJ-0 CHR",
								"size": "128k",
								"crc": "39930DCB",
								"sha1": "8B5A257BEB309498814E8C9DDC784D154BD2E523"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC3C"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "6113B1"
							}
						}
					]
				}
			]
		}
	],
	"gameGenieCodes": [
		{
			"name": "Start with 2",
			"codes": [
				[
					"PEKSVGLA"
				]
			]
		},
		{
			"name": "Start with 7 lives",
			"codes": [
				[
					"TEKSVGLA"
				]
			]
		},
		{
			"name": "Start with 10 lives",
			"codes": [
				[
					"PEKSVGLE"
				]
			]
		},
		{
			"name": "Infinite lives",
			"codes": [
				[
					"SZEOUGVG"
				]
			]
		}
	]
};
