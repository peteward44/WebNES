this.NesDb = this.NesDb || {};

NesDb[ '3256127D9069DA4A94DB51DAB3DF931A9AFC6048' ] = {
	"$": {
		"name": "Star Force",
		"class": "Licensed",
		"catalog": "NES-FO-USA",
		"publisher": "Tecmo",
		"developer": "Tecmo",
		"region": "USA",
		"players": "1",
		"date": "1987-11"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"prototype": "1",
				"crc": "E81C71E9",
				"sha1": "3256127D9069DA4A94DB51DAB3DF931A9AFC6048",
				"dump": "ok",
				"dumper": "Skrybe",
				"datedumped": "2008-03-02"
			},
			"board": [
				{
					"$": {
						"type": "HVC-CNROM",
						"pcb": "HVC-CNROM-256K-01",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"name": "NES STAR FORCE PRG",
								"size": "32k",
								"crc": "B6007625",
								"sha1": "2E546B9378A43E0A7997A61573F1E3C568B435DB"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES STAR FORCE CHR",
								"size": "32k",
								"crc": "3765E173",
								"sha1": "DD625DBAC584DF99C2354DD9AA6260448B0824FE"
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
					"SZKEVTVG"
				]
			]
		},
		{
			"name": "Start with 1 life",
			"codes": [
				[
					"AEUAUIZA"
				]
			]
		},
		{
			"name": "Start with 6 lives",
			"codes": [
				[
					"IEUAUIZA"
				]
			]
		},
		{
			"name": "Start with 9 lives",
			"codes": [
				[
					"AEUAUIZE"
				]
			]
		},
		{
			"name": "Turbo speed",
			"codes": [
				[
					"VYVEGONN"
				]
			]
		}
	]
};
