this.NesDb = this.NesDb || {};

NesDb[ 'FE81F6B0EB309C5484E18FE1D0E859ADD29A8DBD' ] = {
	"$": {
		"name": "Section Z",
		"class": "Licensed",
		"catalog": "NES-SZ-EEC",
		"publisher": "Capcom",
		"developer": "Capcom",
		"region": "Europe",
		"players": "1",
		"date": "1989-09-27"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "45A9DB6F",
				"sha1": "FE81F6B0EB309C5484E18FE1D0E859ADD29A8DBD",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2008-02-28"
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
								"name": "PAL-SZ-0 PRG",
								"size": "128k",
								"crc": "45A9DB6F",
								"sha1": "FE81F6B0EB309C5484E18FE1D0E859ADD29A8DBD"
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
					"SXOPUIVG"
				]
			]
		},
		{
			"name": "Start with 1 life",
			"codes": [
				[
					"PEXSIZLA"
				]
			]
		},
		{
			"name": "Start with 6 lives",
			"codes": [
				[
					"TEXSIZLA"
				]
			]
		},
		{
			"name": "Start with 9 lives",
			"codes": [
				[
					"PEXSIZLE"
				]
			]
		},
		{
			"name": "Energy tube gives full energy boost",
			"codes": [
				[
					"ZAUNUZAE"
				]
			]
		},
		{
			"name": "Autofiring capability",
			"codes": [
				[
					"NNNOUTSY"
				]
			]
		}
	]
};
