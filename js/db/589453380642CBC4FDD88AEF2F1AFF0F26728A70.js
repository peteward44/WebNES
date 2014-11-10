this.NesDb = this.NesDb || {};

NesDb[ '589453380642CBC4FDD88AEF2F1AFF0F26728A70' ] = {
	"$": {
		"name": "Kid Kool and the Quest for the Seven Wonder Herbs",
		"class": "Licensed",
		"catalog": "NES-KX-USA",
		"publisher": "Vic Tokai",
		"developer": "Vic Tokai",
		"region": "USA",
		"players": "1",
		"date": "1990-03"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "AA6BB985",
				"sha1": "589453380642CBC4FDD88AEF2F1AFF0F26728A70",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-01-26"
			},
			"board": [
				{
					"$": {
						"type": "NES-UNROM",
						"pcb": "NES-UNROM-09",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "NES-KX-0 PRG",
								"size": "128k",
								"crc": "AA6BB985",
								"sha1": "589453380642CBC4FDD88AEF2F1AFF0F26728A70"
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
								"type": "6113B1"
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
			"name": "Start with one life",
			"codes": [
				[
					"PAVGIALA"
				]
			]
		},
		{
			"name": "Start with double lives",
			"codes": [
				[
					"TAVGIALA"
				]
			]
		},
		{
			"name": "Start with triple lives",
			"codes": [
				[
					"PAVGIALE"
				]
			]
		},
		{
			"name": "One life after continue",
			"codes": [
				[
					"PASKOILA"
				]
			]
		},
		{
			"name": "Infinite lives",
			"codes": [
				[
					"SZKKXIVG"
				]
			]
		},
		{
			"name": "Stop the clock!",
			"codes": [
				[
					"VZOEOGVT"
				]
			]
		}
	]
};
