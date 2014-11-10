this.NesDb = this.NesDb || {};

NesDb[ '813E6A8BC0A502BB393F8729B1BC19836D5421A5' ] = {
	"$": {
		"name": "Jackal",
		"class": "Licensed",
		"catalog": "NES-JK-USA",
		"publisher": "Konami",
		"developer": "Konami",
		"region": "USA",
		"players": "2",
		"date": "1988-09"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "1D5B03A5",
				"sha1": "813E6A8BC0A502BB393F8729B1BC19836D5421A5",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-10-01"
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
								"name": "NES-JK-0 PRG",
								"size": "128k",
								"crc": "1D5B03A5",
								"sha1": "813E6A8BC0A502BB393F8729B1BC19836D5421A5"
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
			"name": "Both players have infinite lives",
			"codes": [
				[
					"SZPTSI"
				]
			]
		},
		{
			"name": "Both players start with 1 life",
			"codes": [
				[
					"PAPKXZ"
				]
			]
		},
		{
			"name": "Both players start with 9 lives",
			"codes": [
				[
					"PAPKXX"
				]
			]
		},
		{
			"name": "Keep weapons after death",
			"codes": [
				[
					"GXZTSG"
				]
			]
		},
		{
			"name": "Full weapons after death",
			"codes": [
				[
					"LEZTKG"
				]
			]
		}
	]
};
