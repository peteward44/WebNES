this.NesDb = this.NesDb || {};

NesDb[ '2ADF1ECDD66937A5FF1BA7DF666BDC14E1326A80' ] = {
	"$": {
		"name": "Gradius",
		"class": "Licensed",
		"catalog": "NES-GR-EEC",
		"publisher": "Konami",
		"developer": "Konami",
		"region": "Europe",
		"players": "2",
		"date": "1988-11-30"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "51C51C35",
				"sha1": "2ADF1ECDD66937A5FF1BA7DF666BDC14E1326A80",
				"dump": "ok",
				"dumper": "piteta",
				"datedumped": "2007-08-04"
			},
			"board": [
				{
					"$": {
						"type": "NES-CNROM",
						"pcb": "NES-CN-ROM-256-05",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-GR-0 PRG",
								"size": "32k",
								"crc": "D52EBAA6",
								"sha1": "BA9B8971965195EFF20D77BFF58D5128267941AA"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-GR-0 CHR",
								"size": "32k",
								"crc": "0DDDD32E",
								"sha1": "1C3A41F53A57F7B6767CE0F788735EB9AE6EE071"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx161"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "3195A"
							}
						}
					],
					"pad": [
						{
							"$": {
								"h": "1",
								"v": "0"
							}
						}
					]
				}
			]
		}
	],
	"gameGenieCodes": [
		{
			"name": "Both players have infinite lives",
			"codes": [
				[
					"SXOOYYVI"
				]
			]
		},
		{
			"name": "Both players start with 1 life",
			"codes": [
				[
					"AENELZLA"
				]
			]
		},
		{
			"name": "Both players start with 6 lives",
			"codes": [
				[
					"IENELZLA"
				]
			]
		},
		{
			"name": "Both players start with 9 lives",
			"codes": [
				[
					"AENELZLE"
				]
			]
		},
		{
			"name": "Keep power capsules",
			"codes": [
				[
					"KOXOLYSP"
				]
			]
		},
		{
			"name": "Increase force field protection",
			"codes": [
				[
					"NNOEKPIE"
				]
			]
		},
		{
			"name": "Never lose weapons",
			"codes": [
				[
					"YGUONUZS",
					"YGKPUUIL"
				]
			]
		}
	]
};
