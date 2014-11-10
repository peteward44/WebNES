this.NesDb = this.NesDb || {};

NesDb[ 'DCFC2EB1BC346FE7E8026E845E8711344696B1A6' ] = {
	"$": {
		"name": "Bases Loaded 3, Ryne Sandberg Plays",
		"class": "Licensed",
		"catalog": "NES-3L-USA",
		"publisher": "Jaleco",
		"developer": "TOSE Software",
		"region": "USA",
		"players": "2",
		"date": "1991-09"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "3ECA3DDA",
				"sha1": "DCFC2EB1BC346FE7E8026E845E8711344696B1A6",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-04-03"
			},
			"board": [
				{
					"$": {
						"type": "NES-TLROM",
						"pcb": "NES-TLROM-03",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "NES-3L-0 PRG",
								"size": "256k",
								"crc": "55A7321E",
								"sha1": "B3C376EE34CE6B25024A79B5645570DDE6C43CD4"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-3L-0 CHR",
								"size": "128k",
								"crc": "B07A32F1",
								"sha1": "F85E0B2D5CB3AAE2BABA4FEECAF2D75EDB012D8A"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC3B"
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
			"name": "Some strikes aren't counted",
			"codes": [
				[
					"SXOPSEVV"
				]
			]
		},
		{
			"name": "1 strike and you're out",
			"codes": [
				[
					"AEOPXAZA"
				]
			]
		},
		{
			"name": "2 strikes and you're out",
			"codes": [
				[
					"PEOPXAZA"
				]
			]
		},
		{
			"name": "Balls aren't counted",
			"codes": [
				[
					"SXKOXEVV"
				]
			]
		},
		{
			"name": "Strike outs aren't counted",
			"codes": [
				[
					"SXOAIUVV"
				]
			]
		},
		{
			"name": "Each strike out counts as 3 outs",
			"codes": [
				[
					"PEOEGLLA"
				]
			]
		},
		{
			"name": "Each strike out counts as 2 outs",
			"codes": [
				[
					"ZEOEGLLA"
				]
			]
		},
		{
			"name": "5 strike outs allowed",
			"codes": [
				[
					"IEOEGLLA"
				]
			]
		},
		{
			"name": "9 strike outs allowed",
			"codes": [
				[
					"PEOEGLLA"
				]
			]
		},
		{
			"name": "Computer can't score",
			"codes": [
				[
					"SZSYGNVV",
					"SZSNTNVN"
				]
			]
		}
	]
};
