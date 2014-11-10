this.NesDb = this.NesDb || {};

NesDb[ '9B51A9D91380D10DF03DA29788809F6024ECE485' ] = {
	"$": {
		"name": "Bucky O'Hare",
		"class": "Licensed",
		"catalog": "NES-56-USA",
		"publisher": "Konami",
		"developer": "Konami",
		"region": "USA",
		"players": "1",
		"date": "1992-01"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "E19EE99C",
				"sha1": "9B51A9D91380D10DF03DA29788809F6024ECE485",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-01-27"
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
								"name": "NES-56-0 PRG",
								"size": "128k",
								"crc": "AE286904",
								"sha1": "6C1D9BF4BF824B8F7850BA90321CC6A8CAD64221"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-56-0 CHR",
								"size": "128k",
								"crc": "0FDAF4E3",
								"sha1": "8DEB8C2528047D8AFF6320A8403993F2F7302272"
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
			"name": "Start with 1 life",
			"codes": [
				[
					"AAELXYZA"
				]
			]
		},
		{
			"name": "Start with 6 lives",
			"codes": [
				[
					"IAELXYZA"
				]
			]
		},
		{
			"name": "Start with 10 lives",
			"codes": [
				[
					"PAELXYZE"
				]
			]
		},
		{
			"name": "1 life after continue",
			"codes": [
				[
					"AEXGVYZA"
				]
			]
		},
		{
			"name": "6 lives after continue",
			"codes": [
				[
					"IEXGVYZA"
				]
			]
		},
		{
			"name": "10 lives after continue",
			"codes": [
				[
					"PEXGVYZE"
				]
			]
		},
		{
			"name": "Infinite lives",
			"codes": [
				[
					"SZVKOTVG"
				]
			]
		},
		{
			"name": "Start with 1/2 energy",
			"codes": [
				[
					"TAOLKYGP"
				]
			]
		},
		{
			"name": "Double Bucky's special energy",
			"codes": [
				[
					"EPELVNKE"
				]
			]
		},
		{
			"name": "Triple Bucky's special energy",
			"codes": [
				[
					"KZELVNKA"
				]
			]
		},
		{
			"name": "All characters start with normal special energy",
			"codes": [
				[
					"KAEUXNGE"
				]
			]
		},
		{
			"name": "All characters start with 2x special energy",
			"codes": [
				[
					"EPEUXNGE"
				]
			]
		},
		{
			"name": "All characters start with 3x special energy",
			"codes": [
				[
					"KZEUXNGA"
				]
			]
		}
	]
};
