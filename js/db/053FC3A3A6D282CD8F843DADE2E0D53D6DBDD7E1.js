this.NesDb = this.NesDb || {};

NesDb[ '053FC3A3A6D282CD8F843DADE2E0D53D6DBDD7E1' ] = {
	"$": {
		"name": "Gyruss",
		"class": "Licensed",
		"catalog": "NES-YS-USA",
		"publisher": "Ultra Games",
		"developer": "Konami",
		"region": "USA",
		"players": "1",
		"date": "1989-02"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "1D41CC8C",
				"sha1": "053FC3A3A6D282CD8F843DADE2E0D53D6DBDD7E1",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-04-10"
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
								"name": "NES-YS-0 PRG",
								"size": "32k",
								"crc": "48ECC48A",
								"sha1": "0AFDB50A07AE9610F5C62DC8CCA661CA359352BE"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-YS-0 CHR",
								"size": "32k",
								"crc": "3EB77902",
								"sha1": "2419437AD701F5E165778AF02B888DA268C9A74D"
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
			"name": "Infinite lives",
			"codes": [
				[
					"AEEOIEZA"
				]
			]
		},
		{
			"name": "Start with 1 ship",
			"codes": [
				[
					"PAXEGLGA"
				]
			]
		},
		{
			"name": "Start with 10 ships",
			"codes": [
				[
					"ZAXEGLGE"
				]
			]
		},
		{
			"name": "Start with 4 phasers",
			"codes": [
				[
					"GAKEATPA"
				]
			]
		},
		{
			"name": "Start with 8 phasers",
			"codes": [
				[
					"AAKEATPE"
				]
			]
		},
		{
			"name": "Gain 2 phasers when you die with none",
			"codes": [
				[
					"ZEEPYAPA"
				]
			]
		},
		{
			"name": "Gain 4 phasers when you die with none",
			"codes": [
				[
					"GEEPYAPA"
				]
			]
		},
		{
			"name": "Start with twin shots + 1 phaser",
			"codes": [
				[
					"OAKEATPA"
				]
			]
		},
		{
			"name": "Start with twin shots + 4 phasers",
			"codes": [
				[
					"KAKEATPA"
				]
			]
		},
		{
			"name": "Start with twin shots + 8 phasers",
			"codes": [
				[
					"EAKEATPE"
				]
			]
		},
		{
			"name": "Never lose twin shots",
			"codes": [
				[
					"GEEPIAZA",
					"OEEPYAPA"
				]
			]
		}
	]
};
