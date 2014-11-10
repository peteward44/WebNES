this.NesDb = this.NesDb || {};

NesDb[ '3F57551528B29C674D2ED928562BF991A8FE2E1F' ] = {
	"$": {
		"name": "Kirby's Adventure",
		"class": "Licensed",
		"catalog": "NES-KR-NOE",
		"publisher": "Nintendo",
		"developer": "HAL Laboratory",
		"region": "Germany",
		"players": "1",
		"date": "1993-06-27"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "127D76F4",
				"sha1": "3F57551528B29C674D2ED928562BF991A8FE2E1F",
				"dump": "ok",
				"dumper": "piteta",
				"datedumped": "2007-08-03"
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
								"name": "FRG-KR-0 PRG",
								"size": "512k",
								"crc": "F287FA05",
								"sha1": "38E2F2C7D2F935766243BC0B97C944C806B77E72"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "FRG-KR-0 CHR",
								"size": "256k",
								"crc": "B7D7676B",
								"sha1": "4708E81417FAFBD4A150B726D282814B4C338A4B"
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
