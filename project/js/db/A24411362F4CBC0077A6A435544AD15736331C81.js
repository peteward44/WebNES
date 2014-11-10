this.NesDb = this.NesDb || {};

NesDb[ 'A24411362F4CBC0077A6A435544AD15736331C81' ] = {
	"$": {
		"name": "Alpha Mission",
		"class": "Licensed",
		"catalog": "NES-AM-EEC",
		"publisher": "SNK",
		"developer": "SNK",
		"region": "Europe",
		"players": "1",
		"date": "1989-04-22"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "976893D2",
				"sha1": "A24411362F4CBC0077A6A435544AD15736331C81",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2007-12-03"
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
								"name": "PAL-AM-0 PRG",
								"size": "32k",
								"crc": "3F8FCCF9",
								"sha1": "1293D08A7A5690AEB08F15B5E4ECEC7703B9668B"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-AM-0 CHR",
								"size": "32k",
								"crc": "A6A1A853",
								"sha1": "B7C11B3C29E562771AAE856BD949C3AAF8FAF36F"
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
								"h": "0",
								"v": "1"
							}
						}
					]
				}
			]
		},
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "976893D2",
				"sha1": "A24411362F4CBC0077A6A435544AD15736331C81",
				"dump": "ok",
				"dumper": "efnes",
				"datedumped": "2006-07-23"
			},
			"board": [
				{
					"$": {
						"type": "NES-CNROM",
						"pcb": "NES-CNROM-06",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-AM-0 PRG",
								"size": "32k",
								"crc": "3F8FCCF9",
								"sha1": "1293D08A7A5690AEB08F15B5E4ECEC7703B9668B"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-AM-0 CHR",
								"size": "32k",
								"crc": "A6A1A853",
								"sha1": "B7C11B3C29E562771AAE856BD949C3AAF8FAF36F"
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
			"name": "Infinite lives",
			"codes": [
				[
					"SXSPYZVG"
				]
			]
		},
		{
			"name": "Start with 1 life",
			"codes": [
				[
					"PASATLLA"
				]
			]
		},
		{
			"name": "Start with double lives",
			"codes": [
				[
					"TASATLLA"
				]
			]
		},
		{
			"name": "Start with triple lives",
			"codes": [
				[
					"PASATLLE"
				]
			]
		},
		{
			"name": "Start with all weapons available",
			"codes": [
				[
					"NYKAYLLE"
				]
			]
		},
		{
			"name": "Keep power up after death",
			"codes": [
				[
					"GZNAILSA"
				]
			]
		},
		{
			"name": "Keep energy after death",
			"codes": [
				[
					"GZNAYLSA"
				]
			]
		},
		{
			"name": "Thunder uses 25% normal energy",
			"codes": [
				[
					"GAEOUEAA"
				]
			]
		},
		{
			"name": "Triple energy gained on 'E' pick-up",
			"codes": [
				[
					"TEXLPTZA"
				]
			]
		},
		{
			"name": "Less energy lost on 'Bad E' pick-ups",
			"codes": [
				[
					"ZEULGTGA"
				]
			]
		},
		{
			"name": "Shield doesn't use energy",
			"codes": [
				[
					"SZEGGASA"
				]
			]
		},
		{
			"name": "You can re-use weapon after selecting",
			"codes": [
				[
					"IZNAEGSA"
				]
			]
		}
	]
};
