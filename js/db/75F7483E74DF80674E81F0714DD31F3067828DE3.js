this.NesDb = this.NesDb || {};

NesDb[ '75F7483E74DF80674E81F0714DD31F3067828DE3' ] = {
	"$": {
		"name": "Hudson Hawk",
		"class": "Licensed",
		"catalog": "NES-Y4-USA",
		"publisher": "Sony (CSG) Imagesoft",
		"developer": "Ocean",
		"region": "USA",
		"players": "1",
		"date": "1992-02"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "5A4F156D",
				"sha1": "75F7483E74DF80674E81F0714DD31F3067828DE3",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-12-30"
			},
			"board": [
				{
					"$": {
						"type": "NES-SLROM",
						"pcb": "NES-SLROM-06",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-Y4-0 PRG",
								"size": "128k",
								"crc": "916913D2",
								"sha1": "5BEB3C3EC9142E40675CF65CBD436BDF358B3A1F"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-Y4-0 CHR",
								"size": "128k",
								"crc": "391AC219",
								"sha1": "D7C71807ACB79450F2C03901AC112C0ABBE3686E"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1B3"
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
			"name": "Start with 1 life",
			"codes": [
				[
					"PEVGTTIA"
				]
			]
		},
		{
			"name": "Start with 3 lives",
			"codes": [
				[
					"LEVGTTIA"
				]
			]
		},
		{
			"name": "Start with 9 lives",
			"codes": [
				[
					"PEVGTTIE"
				]
			]
		},
		{
			"name": "Infinite energy",
			"codes": [
				[
					"SXETGYSA"
				]
			]
		},
		{
			"name": "Start with very little energy--first life only",
			"codes": [
				[
					"PEVKZVNY"
				]
			]
		},
		{
			"name": "Start with 1/4 energy--first life only",
			"codes": [
				[
					"AKVKZVNY"
				]
			]
		},
		{
			"name": "Start with 1/2 energy--first life only",
			"codes": [
				[
					"ANVKZVNY"
				]
			]
		},
		{
			"name": "Start with 3/4 energy--first life only",
			"codes": [
				[
					"EUVKZVNY"
				]
			]
		},
		{
			"name": "Start with 1 continue",
			"codes": [
				[
					"PESKPTLA"
				]
			]
		},
		{
			"name": "Start with 5 continues",
			"codes": [
				[
					"IESKPTLA"
				]
			]
		},
		{
			"name": "Start with 9 continues",
			"codes": [
				[
					"PESKPTLE"
				]
			]
		},
		{
			"name": "Infinite continues",
			"codes": [
				[
					"OZKKEAAU",
					"OZKGVAVK"
				]
			]
		},
		{
			"name": "Infinite lives",
			"codes": [
				[
					"OZSKYYUK",
					"OZVGZYEN"
				]
			]
		}
	]
};
