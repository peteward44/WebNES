this.NesDb = this.NesDb || {};

NesDb[ '68C692CEBA716168DCB361AD79A2F4C985CDE32C' ] = {
	"$": {
		"name": "Kickle Cubicle",
		"class": "Licensed",
		"catalog": "NES-QC-UKV",
		"publisher": "Nintendo",
		"developer": "Irem",
		"region": "United Kingdom",
		"players": "1",
		"date": "1990"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-A",
				"crc": "E5901A99",
				"sha1": "68C692CEBA716168DCB361AD79A2F4C985CDE32C",
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
								"name": "PAL-QC-0 PRG",
								"size": "128k",
								"crc": "DF411CF0",
								"sha1": "A0AAE437F9B3DE8734E62287591A65D094246734"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PAL-QC-0 CHR",
								"size": "128k",
								"crc": "A30639BD",
								"sha1": "CD4413D340F71554A8700028DEABC9D33E48BF8E"
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
			"name": "Infinite lives",
			"codes": [
				[
					"SXEAATVG"
				]
			]
		},
		{
			"name": "Stop timer",
			"codes": [
				[
					"SXNGSVVK"
				]
			]
		},
		{
			"name": "Faster timer",
			"codes": [
				[
					"YENKXVZA"
				]
			]
		},
		{
			"name": "Slower timer",
			"codes": [
				[
					"YENKXVZE"
				]
			]
		},
		{
			"name": "Start on land 2",
			"codes": [
				[
					"GZKATXSE",
					"GZUISOSE",
					"PAUIOPAA"
				]
			]
		},
		{
			"name": "Start on land 3",
			"codes": [
				[
					"GZKATXSE",
					"GZUISOSE",
					"ZAUIOPAA"
				]
			]
		},
		{
			"name": "Start on land 4",
			"codes": [
				[
					"GZKATXSE",
					"GZUISOSE",
					"LAUIOPAA"
				]
			]
		}
	]
};
