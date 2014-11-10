this.NesDb = this.NesDb || {};

NesDb[ 'FD45A6F9710258CAA30E42B0EF792D5779610260' ] = {
	"$": {
		"name": "Mighty Bomb Jack",
		"class": "Licensed",
		"catalog": "NES-BJ-ESP",
		"publisher": "Tecmo",
		"developer": "Tecmo",
		"region": "Spain",
		"players": "1",
		"date": "1992-06-06"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "842A3FD9",
				"sha1": "FD45A6F9710258CAA30E42B0EF792D5779610260",
				"dump": "ok",
				"dumper": "piteta",
				"datedumped": "2007-11-03"
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
								"name": "PAL-BJ-0 PRG",
								"size": "32k",
								"crc": "7ECB759E",
								"sha1": "4DDA3C6B133C10213EF43BE89927B7C84D5A4A52"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PAL-BJ-0 CHR",
								"size": "32k",
								"crc": "7D1DC1A5",
								"sha1": "F680E5E70F0EB6EF422BE3E46A3680C542A796DB"
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
			"name": "1 life",
			"codes": [
				[
					"PAOEZZLA"
				]
			]
		},
		{
			"name": "6 lives",
			"codes": [
				[
					"TAOEZZLA"
				]
			]
		},
		{
			"name": "9 lives",
			"codes": [
				[
					"PAOEZZLE"
				]
			]
		},
		{
			"name": "Infinite lives",
			"codes": [
				[
					"VZUEZNVK"
				]
			]
		},
		{
			"name": "Less time in game",
			"codes": [
				[
					"AKOEGYAT"
				]
			]
		},
		{
			"name": "More time in game",
			"codes": [
				[
					"EEOEGYAT"
				]
			]
		},
		{
			"name": "Stop timer",
			"codes": [
				[
					"SXXALNVK"
				]
			]
		},
		{
			"name": "Enemies don't return from coin transformation",
			"codes": [
				[
					"SXOESEVK"
				]
			]
		},
		{
			"name": "Power coins are not used up",
			"codes": [
				[
					"SZEEXUVK"
				]
			]
		},
		{
			"name": "Disable torture room",
			"codes": [
				[
					"OESPNTLA"
				]
			]
		},
		{
			"name": "Jump through walls",
			"codes": [
				[
					"ZEUOUAPA"
				]
			]
		}
	]
};
