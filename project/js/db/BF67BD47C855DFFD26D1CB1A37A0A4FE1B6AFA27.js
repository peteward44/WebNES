this.NesDb = this.NesDb || {};

NesDb[ 'BF67BD47C855DFFD26D1CB1A37A0A4FE1B6AFA27' ] = {
	"$": {
		"name": "Klax",
		"altname": "クラックス",
		"class": "Licensed",
		"catalog": "HFC-V6",
		"publisher": "Hudson Soft",
		"developer": "Tengen",
		"region": "Japan",
		"players": "2",
		"date": "1990-12-14"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "3CCB5D57",
				"sha1": "BF67BD47C855DFFD26D1CB1A37A0A4FE1B6AFA27",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-01"
			},
			"board": [
				{
					"$": {
						"type": "HVC-TLROM",
						"pcb": "HVC-TLROM-04",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "HFC-V6-0 PRG",
								"size": "128k",
								"crc": "0B7F1947",
								"sha1": "B83CFEFF83CADDE911173B1B02C950E672C5D0BE"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "HFC-V6-0 CHR",
								"size": "64k",
								"crc": "B18294E3",
								"sha1": "B3F04C00D3C45FB89AEED3EC3E6384865111E0C6"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC3B"
							}
						}
					]
				}
			]
		}
	],
	"gameGenieCodes": [
		{
			"name": "Start with 0 drops allowed",
			"codes": [
				[
					"PAVESGLA"
				]
			]
		},
		{
			"name": "Start with 5 drops allowed",
			"codes": [
				[
					"IAVESGLA"
				]
			]
		},
		{
			"name": "When starting on level 6: 0 drops allowed",
			"codes": [
				[
					"PANENGGA"
				]
			]
		},
		{
			"name": "When starting on level 6: 5 drops allowed",
			"codes": [
				[
					"IANENGGA"
				]
			]
		},
		{
			"name": "When starting on level 11: 0 drops allowed",
			"codes": [
				[
					"PEOAXGIA"
				]
			]
		},
		{
			"name": "When starting on level 11: 3 drops allowed",
			"codes": [
				[
					"LEOAXGIA"
				]
			]
		},
		{
			"name": "Infinite drops!",
			"codes": [
				[
					"SXXLUGVT"
				]
			]
		}
	]
};
