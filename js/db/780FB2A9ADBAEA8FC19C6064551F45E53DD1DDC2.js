this.NesDb = this.NesDb || {};

NesDb[ '780FB2A9ADBAEA8FC19C6064551F45E53DD1DDC2' ] = {
	"$": {
		"name": "Kirby's Adventure",
		"class": "Licensed",
		"catalog": "NES-K5-CAN",
		"publisher": "Nintendo",
		"developer": "HAL Laboratory",
		"region": "Canada",
		"players": "1",
		"date": "1993-09-27"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "37088EFF",
				"sha1": "780FB2A9ADBAEA8FC19C6064551F45E53DD1DDC2",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-10-28"
			},
			"board": [
				{
					"$": {
						"type": "NES-TKROM",
						"pcb": "NES-TKROM-10",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "NES-K5-0 PRG",
								"size": "512k",
								"crc": "7266B1B3",
								"sha1": "89A8C4FAE3FD0D7E70B01259D7E5F829901DBA89"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-K5-0 CHR",
								"size": "256k",
								"crc": "AF7693D2",
								"sha1": "8A92CABF47BBD732BC7EC1CD405A0BE4A1BDCE96"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "8k",
								"battery": "1"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC3C"
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
			"name": "Start with 2 lives",
			"codes": [
				[
					"PEVXIYGA"
				]
			]
		},
		{
			"name": "Start with 9 lives",
			"codes": [
				[
					"AEVXIYGE"
				]
			]
		},
		{
			"name": "Start with 17 lives",
			"codes": [
				[
					"AOVXIYGA"
				]
			]
		},
		{
			"name": "Less energy from 'pep drinks'",
			"codes": [
				[
					"ZAKLLXAA"
				]
			]
		},
		{
			"name": "More energy from 'pep drinks'",
			"codes": [
				[
					"APKLLXAA"
				]
			]
		},
		{
			"name": "Full energy from 'pep drinks'",
			"codes": [
				[
					"YZKLLXAE"
				]
			]
		},
		{
			"name": "Start with less energy",
			"codes": [
				[
					"YONZZNYX"
				]
			]
		},
		{
			"name": "Start with more energy",
			"codes": [
				[
					"YKNZZNYX"
				]
			]
		},
		{
			"name": "Infinite energy",
			"codes": [
				[
					"SZEPSVSE"
				]
			]
		}
	]
};
