this.NesDb = this.NesDb || {};

NesDb[ 'DC65B02ADCFA5DEFCAE46E8E27DF8E3C5D7B56C7' ] = {
	"$": {
		"name": "Mechanized Attack",
		"class": "Licensed",
		"catalog": "NES-A6-USA",
		"publisher": "SNK",
		"developer": "SNK",
		"region": "USA",
		"players": "1",
		"date": "1990-06"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "zapper",
						"name": "Zapper Light Gun"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "5EE6008E",
				"sha1": "DC65B02ADCFA5DEFCAE46E8E27DF8E3C5D7B56C7",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-12-06"
			},
			"board": [
				{
					"$": {
						"type": "NES-SCROM",
						"pcb": "NES-SCROM-03",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-A6-0 PRG",
								"size": "64k",
								"crc": "9EEF47AA",
								"sha1": "B2420FAB662C48B853BC01C53051F3A3BD7B52E2"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-A6-0 CHR",
								"size": "128k",
								"crc": "F50AE4EB",
								"sha1": "377C7D5B933CCF7FF7FFFB1A52B1254128653CAE"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1B2"
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
			"name": "Infinite lives",
			"codes": [
				[
					"SXUNPEVK"
				]
			]
		},
		{
			"name": "Infinite grenades",
			"codes": [
				[
					"SZUNTOVK"
				]
			]
		},
		{
			"name": "Infinite bullets",
			"codes": [
				[
					"SZEYIOVK"
				]
			]
		},
		{
			"name": "Reduce damage by half",
			"codes": [
				[
					"AEVOAPLA"
				]
			]
		},
		{
			"name": "Start with only 1 life",
			"codes": [
				[
					"EZOKIAXZ",
					"PAOKTAAA",
					"KANKPEVE"
				]
			]
		},
		{
			"name": "Start with 6 lives",
			"codes": [
				[
					"EZOKIAXZ",
					"TAOKTAAA",
					"KANKPEVE"
				]
			]
		},
		{
			"name": "Start with 9 lives",
			"codes": [
				[
					"EZOKIAXZ",
					"PAOKTAAE",
					"KANKPEVE"
				]
			]
		},
		{
			"name": "Start with only 1 magazine",
			"codes": [
				[
					"EZOKIAXZ",
					"AAOKTAAA",
					"KANKTEVE"
				]
			]
		},
		{
			"name": "Start with 8 magazines",
			"codes": [
				[
					"EZOKIAXZ",
					"YAOKTAAA",
					"KANKTEVE"
				]
			]
		},
		{
			"name": "Magazine holds only half bullets",
			"codes": [
				[
					"GPONAOAZ",
					"GPEYLEAZ"
				]
			]
		},
		{
			"name": "Start with only 1 grenade",
			"codes": [
				[
					"EZOKIAXZ",
					"PAOKTAAA",
					"KEEGZEVE"
				]
			]
		},
		{
			"name": "Start with 8 grenades",
			"codes": [
				[
					"EZOKIAXZ",
					"AAOKTAAE",
					"KEEGZEVE"
				]
			]
		}
	]
};
