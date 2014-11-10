this.NesDb = this.NesDb || {};

NesDb[ 'EAE5205928D3FA2AFEA0374B457D2BB91E414D99' ] = {
	"$": {
		"name": "Hook",
		"class": "Licensed",
		"catalog": "NES-7Q-UKV",
		"publisher": "Ocean",
		"developer": "Ocean",
		"region": "United Kingdom",
		"players": "1",
		"date": "1992"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-A",
				"crc": "BF888B75",
				"sha1": "EAE5205928D3FA2AFEA0374B457D2BB91E414D99",
				"dump": "ok",
				"dumper": "Mark_K",
				"datedumped": "2011-12-05"
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
								"name": "PAL-7Q-0 PRG",
								"size": "128k",
								"crc": "80638505",
								"sha1": "A3B6115CF1E344CD64940D7C6B9C88407F05B472"
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
								"type": "MMC1B2"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "3197A"
							}
						}
					]
				}
			]
		},
		{
			"$": {
				"system": "NES-PAL-A",
				"prototype": "1",
				"crc": "BF888B75",
				"sha1": "EAE5205928D3FA2AFEA0374B457D2BB91E414D99",
				"dump": "ok",
				"dumper": "Mark_K",
				"datedumped": "2011-12-14"
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
								"name": "HPP",
								"size": "128k",
								"crc": "80638505",
								"sha1": "A3B6115CF1E344CD64940D7C6B9C88407F05B472"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "HC",
								"size": "128k",
								"crc": "9C1762A5",
								"sha1": "643171E03A6CD3C58EF415C58B5C5B9514647652"
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
								"type": "3197A"
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
