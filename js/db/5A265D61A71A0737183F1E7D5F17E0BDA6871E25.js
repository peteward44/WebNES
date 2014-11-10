this.NesDb = this.NesDb || {};

NesDb[ '5A265D61A71A0737183F1E7D5F17E0BDA6871E25' ] = {
	"$": {
		"name": "Hook",
		"class": "Licensed",
		"catalog": "NES-7Q-USA",
		"publisher": "Sony (CSG) Imagesoft",
		"developer": "Ocean",
		"region": "USA",
		"players": "1",
		"date": "1992-04"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "D8230D0E",
				"sha1": "5A265D61A71A0737183F1E7D5F17E0BDA6871E25",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-12-27"
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
								"name": "NES-7Q-0 PRG",
								"size": "128k",
								"crc": "A2BAC574",
								"sha1": "AB4F80B640A20AB2A9007C80AE8B9F6B88AA5BBA"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-7Q-0 CHR",
								"size": "128k",
								"crc": "9C1762A5",
								"sha1": "643171E03A6CD3C58EF415C58B5C5B9514647652"
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
					"AEXVNTZA"
				]
			]
		},
		{
			"name": "Start with 6 lives",
			"codes": [
				[
					"IEXVNTZA"
				]
			]
		},
		{
			"name": "Start with 9 lives",
			"codes": [
				[
					"AEXVNTZE"
				]
			]
		},
		{
			"name": "Infinite lives-player 1",
			"codes": [
				[
					"SZONIEVK"
				]
			]
		},
		{
			"name": "Infinite energy-player 1",
			"codes": [
				[
					"GZVIKIST"
				]
			]
		},
		{
			"name": "Infinite energy-player 2",
			"codes": [
				[
					"GZNSNIST"
				]
			]
		},
		{
			"name": "Get maximum energy from food-player 1",
			"codes": [
				[
					"AENIOIIA"
				]
			]
		},
		{
			"name": "Get maximum energy from food-player 2",
			"codes": [
				[
					"AAEINTIA"
				]
			]
		},
		{
			"name": "No energy from food!",
			"codes": [
				[
					"AVVIXSGZ"
				]
			]
		}
	]
};
