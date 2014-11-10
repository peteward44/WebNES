this.NesDb = this.NesDb || {};

NesDb[ 'D3431F1B7B6B3389271BDD0A7066A5147C957370' ] = {
	"$": {
		"name": "Bucky O'Hare",
		"class": "Licensed",
		"catalog": "NES-56-UKV",
		"publisher": "Palcom",
		"developer": "Konami",
		"region": "United Kingdom",
		"players": "1",
		"date": "1993-02-18"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-A",
				"crc": "6720ABAC",
				"sha1": "D3431F1B7B6B3389271BDD0A7066A5147C957370",
				"dump": "ok",
				"dumper": "Mark_K",
				"datedumped": "2011-12-05"
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
								"name": "PAL-56-0 PRG",
								"size": "128k",
								"crc": "32C4B857",
								"sha1": "85E70F11357419D1BE23EEB76282449B190F9BAE"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PAL-56-0 CHR",
								"size": "128k",
								"crc": "E2917B27",
								"sha1": "A7782703E45BBE7DFC9B59A7587AE1BAA50D6647"
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
