this.NesDb = this.NesDb || {};

NesDb[ '3C011E4EA5EB7E93299347F8009E5BDF51E223EB' ] = {
	"$": {
		"name": "Tiny Toon Adventures",
		"class": "Licensed",
		"catalog": "NES-NI-USA",
		"publisher": "Konami",
		"developer": "Konami",
		"region": "USA",
		"players": "2",
		"date": "1991-12"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "99DDDB04",
				"sha1": "3C011E4EA5EB7E93299347F8009E5BDF51E223EB",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-12-31"
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
								"name": "NES-NI-0 PRG",
								"size": "128k",
								"crc": "9CB55B96",
								"sha1": "437C326A4575895B9D7E567CAB4F70B2F44ED8DD"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-NI-0 CHR",
								"size": "128k",
								"crc": "A024AE14",
								"sha1": "2E797A173161A61C14CE299E3C5A31C6029F2B50"
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
