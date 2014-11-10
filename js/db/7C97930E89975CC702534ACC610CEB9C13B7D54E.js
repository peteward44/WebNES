this.NesDb = this.NesDb || {};

NesDb[ '7C97930E89975CC702534ACC610CEB9C13B7D54E' ] = {
	"$": {
		"name": "Section Z",
		"class": "Licensed",
		"catalog": "NES-SZ-USA",
		"publisher": "Capcom",
		"developer": "Capcom",
		"region": "USA",
		"players": "1",
		"date": "1987-07"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "0FEC90D2",
				"sha1": "7C97930E89975CC702534ACC610CEB9C13B7D54E",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-03-10"
			},
			"board": [
				{
					"$": {
						"type": "NES-UNROM",
						"pcb": "NES-UN-ROM-04",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "NES-SZ-0 PRG",
								"size": "128k",
								"crc": "0FEC90D2",
								"sha1": "7C97930E89975CC702534ACC610CEB9C13B7D54E"
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
								"type": "3193A"
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
