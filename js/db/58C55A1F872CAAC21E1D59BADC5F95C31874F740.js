this.NesDb = this.NesDb || {};

NesDb[ '58C55A1F872CAAC21E1D59BADC5F95C31874F740' ] = {
	"$": {
		"name": "Kirby's Adventure",
		"class": "Licensed",
		"catalog": "NES-KR-FRA",
		"publisher": "Nintendo",
		"developer": "HAL Laboratory",
		"region": "France",
		"players": "1",
		"date": "1993-12-09"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "B2EF7F4B",
				"sha1": "58C55A1F872CAAC21E1D59BADC5F95C31874F740",
				"dump": "ok",
				"dumper": "efnes",
				"datedumped": "2006-07-23"
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
								"name": "FRA-KR-0 PRG",
								"size": "512k",
								"crc": "15205A4F",
								"sha1": "A0375CCD66A90441D89804687A86E350C1BE9CE2"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "FRA-KR-0 CHR",
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
