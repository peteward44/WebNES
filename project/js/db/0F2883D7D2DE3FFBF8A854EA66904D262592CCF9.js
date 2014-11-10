this.NesDb = this.NesDb || {};

NesDb[ '0F2883D7D2DE3FFBF8A854EA66904D262592CCF9' ] = {
	"$": {
		"name": "Kirby's Adventure",
		"class": "Licensed",
		"catalog": "NES-KR-SCN",
		"publisher": "Nintendo",
		"developer": "HAL Laboratory",
		"region": "Scandinavia",
		"players": "1",
		"date": "1993-12-09"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "2C088DC5",
				"sha1": "0F2883D7D2DE3FFBF8A854EA66904D262592CCF9",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2007-12-03"
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
								"name": "PAL-KR-0 PRG",
								"size": "512k",
								"crc": "014A755A",
								"sha1": "80C419D49CC13B60D1D52E4DD043EDC0E4D93A0C"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PAL-KR-0 CHR",
								"size": "256k",
								"crc": "7EDAE6F3",
								"sha1": "9D769FD0D5E0D4804AC7CB41C201E65B8301393D"
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
								"type": "3195A"
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
