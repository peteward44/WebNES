this.NesDb = this.NesDb || {};

NesDb[ 'E374E472B7071A23CA966C5F002B79C85106802E' ] = {
	"$": {
		"name": "Tiny Toon Adventures",
		"class": "Licensed",
		"catalog": "NES-NI-NOE",
		"publisher": "Konami",
		"developer": "Konami",
		"region": "Germany",
		"players": "2",
		"date": "1993-01-26"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "A038AFF2",
				"sha1": "E374E472B7071A23CA966C5F002B79C85106802E",
				"dump": "ok",
				"dumper": "piteta",
				"datedumped": "2007-08-04"
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
								"name": "PAL-NI-0 PRG",
								"size": "128k",
								"crc": "D3C7F83B",
								"sha1": "42D3C102D7CE9B90F03237F0A56F028D55831C4B"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PAL-NI-0 CHR",
								"size": "128k",
								"crc": "A6104CFD",
								"sha1": "87374414CF5D4B55A82152DC5DD67E53BA3636BF"
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
			"name": "Start with 1 life",
			"codes": [
				[
					"AAXKUYZA"
				]
			]
		},
		{
			"name": "Start with 6 lives",
			"codes": [
				[
					"IAXKUYZA"
				]
			]
		},
		{
			"name": "Start with 9 lives",
			"codes": [
				[
					"AAXKUYZE"
				]
			]
		},
		{
			"name": "1 life after continue",
			"codes": [
				[
					"AEXZNZZA"
				]
			]
		},
		{
			"name": "6 lives after continue",
			"codes": [
				[
					"IEXZNZZA"
				]
			]
		},
		{
			"name": "9 lives after continue",
			"codes": [
				[
					"AEXZNZZE"
				]
			]
		},
		{
			"name": "Slow down timer",
			"codes": [
				[
					"YYXIXXLU"
				]
			]
		},
		{
			"name": "Speed up timer",
			"codes": [
				[
					"YPXIXXLU"
				]
			]
		},
		{
			"name": "Infinite energy after collecting one heart",
			"codes": [
				[
					"SZOOSVVK"
				]
			]
		},
		{
			"name": "Infinite lives",
			"codes": [
				[
					"SZNOUNVK"
				]
			]
		},
		{
			"name": "Pick up more hearts",
			"codes": [
				[
					"AEEPPYPA"
				]
			]
		},
		{
			"name": "Start on level 2",
			"codes": [
				[
					"VASGOYSA",
					"XZXKNNOZ",
					"IAUGEYPA"
				]
			]
		},
		{
			"name": "Start on level 3",
			"codes": [
				[
					"VASGOYSA",
					"XZXKNNOZ",
					"ZAUGEYPE"
				]
			]
		},
		{
			"name": "Start on level 4",
			"codes": [
				[
					"VASGOYSA",
					"XZXKNNOZ",
					"YAUGEYPE"
				]
			]
		},
		{
			"name": "Start on level 5",
			"codes": [
				[
					"VASGOYSA",
					"XZXKNNOZ",
					"GPUGEYPA"
				]
			]
		}
	]
};
