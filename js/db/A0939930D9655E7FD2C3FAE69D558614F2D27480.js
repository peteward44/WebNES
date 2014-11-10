this.NesDb = this.NesDb || {};

NesDb[ 'A0939930D9655E7FD2C3FAE69D558614F2D27480' ] = {
	"$": {
		"name": "Dr. Mario",
		"class": "Licensed",
		"catalog": "NES-VU-NOE",
		"publisher": "Nintendo",
		"developer": "Nintendo",
		"region": "Germany",
		"players": "2",
		"date": "1991-06-27"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "9735D267",
				"sha1": "A0939930D9655E7FD2C3FAE69D558614F2D27480",
				"dump": "ok",
				"dumper": "piteta",
				"datedumped": "2007-08-04"
			},
			"board": [
				{
					"$": {
						"type": "NES-SEROM",
						"pcb": "NES-SEROM-04",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-VU-0 PRG",
								"size": "32k",
								"crc": "6A80DE01",
								"sha1": "0B9D9C54D9F4D55FCB6C412EC005638D0ECCBC45"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-VU-0 CHR",
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
