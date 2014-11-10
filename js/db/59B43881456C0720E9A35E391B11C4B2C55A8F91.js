this.NesDb = this.NesDb || {};

NesDb[ '59B43881456C0720E9A35E391B11C4B2C55A8F91' ] = {
	"$": {
		"name": "Dr. Mario",
		"altname": "ドクターマリオ",
		"class": "Licensed",
		"catalog": "HVC-VU",
		"publisher": "Nintendo",
		"developer": "Nintendo",
		"region": "Japan",
		"players": "2",
		"date": "1990-07-27"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"revision": "A",
				"crc": "DE581355",
				"sha1": "59B43881456C0720E9A35E391B11C4B2C55A8F91",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-06-23"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SEROM",
						"pcb": "HVC-SEROM-01",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "HVC-VU-1 PRG",
								"size": "32k",
								"crc": "4D72A3E4",
								"sha1": "5947734BDEBB112564A9AA70513779CAA97D0D37"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "HVC-VU-0 CHR",
								"size": "32k",
								"crc": "064D4AB3",
								"sha1": "BCDC34435BF631422EA2701F00744A3606C6DCE8"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1B2"
							}
						}
					]
				}
			]
		},
		{
			"$": {
				"system": "Famicom",
				"revision": "A",
				"crc": "DE581355",
				"sha1": "59B43881456C0720E9A35E391B11C4B2C55A8F91",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-04-28"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SEROM",
						"pcb": "SE-01A",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"size": "32k",
								"crc": "4D72A3E4",
								"sha1": "5947734BDEBB112564A9AA70513779CAA97D0D37"
							}
						}
					],
					"chr": [
						{
							"$": {
								"size": "32k",
								"crc": "064D4AB3",
								"sha1": "BCDC34435BF631422EA2701F00744A3606C6DCE8"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1B2"
							}
						}
					]
				}
			]
		}
	],
	"gameGenieCodes": [
		{
			"name": "Vitamin capsules don't fall",
			"codes": [
				[
					"GZNEVIVT"
				]
			]
		},
		{
			"name": "5 in a row needed instead of 4",
			"codes": [
				[
					"GEXPYGLA"
				]
			]
		},
		{
			"name": "6 in a row needed instead of 4",
			"codes": [
				[
					"IEXPYGLA"
				]
			]
		},
		{
			"name": "7 in a row needed instead of 4",
			"codes": [
				[
					"TEXPYGLA"
				]
			]
		},
		{
			"name": "5 in a row needed instead of 4",
			"codes": [
				[
					"GAKPPZLA"
				]
			]
		},
		{
			"name": "6 in a row needed instead of 4",
			"codes": [
				[
					"IAKPPZLA"
				]
			]
		},
		{
			"name": "7 in a row needed instead of 4",
			"codes": [
				[
					"TAKPPZLA"
				]
			]
		},
		{
			"name": "When two or more rows or columns are eliminated at once in a 2-player game: More pieces sent across to other player",
			"codes": [
				[
					"AUVONUAO"
				]
			]
		},
		{
			"name": "When two or more rows or columns are eliminated at once in a 2-player game: No pieces sent across to other player",
			"codes": [
				[
					"GXXOZGVT",
					"GZKPGZVT"
				]
			]
		}
	]
};
