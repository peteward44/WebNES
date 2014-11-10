this.NesDb = this.NesDb || {};

NesDb[ '6EAFE44984FC52E27E55818534ECF84C8877C752' ] = {
	"$": {
		"name": "Kick Master",
		"class": "Licensed",
		"catalog": "NES-8K-USA",
		"publisher": "Taito",
		"developer": "KID",
		"region": "USA",
		"players": "1",
		"date": "1992-01"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "5104833E",
				"sha1": "6EAFE44984FC52E27E55818534ECF84C8877C752",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-07-03"
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
								"name": "NES-8K-0 PRG",
								"size": "128k",
								"crc": "D88D48D7",
								"sha1": "49DD9C50AA7D087D515F045F5FC8F37F0522DA3C"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-8K-0 CHR",
								"size": "128k",
								"crc": "5B03178D",
								"sha1": "32C7B25CF6395DDD2B33CF0FCF5B917BD2857CD7"
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
					"PAXSGLLA"
				]
			]
		},
		{
			"name": "Start with 5 lives",
			"codes": [
				[
					"IAXSGLLA"
				]
			]
		},
		{
			"name": "Start with 9 lives",
			"codes": [
				[
					"PAXSGLLE"
				]
			]
		},
		{
			"name": "Start with half energy",
			"codes": [
				[
					"AXVYEIAG"
				]
			]
		},
		{
			"name": "Start with twice as much energy",
			"codes": [
				[
					"EEVYEIAG"
				]
			]
		},
		{
			"name": "Start with very little energy",
			"codes": [
				[
					"LEVYEIAG"
				]
			]
		},
		{
			"name": "Infinite energy",
			"codes": [
				[
					"SZOIOVSE"
				]
			]
		},
		{
			"name": "One hit and you're invincible",
			"codes": [
				[
					"OZVZOLEN"
				]
			]
		},
		{
			"name": "Don't flash at all after getting hit",
			"codes": [
				[
					"AAOSOVGL"
				]
			]
		},
		{
			"name": "Barely flash at all after getting hit",
			"codes": [
				[
					"IAOSOVGL"
				]
			]
		},
		{
			"name": "Don't flash as long after getting hit",
			"codes": [
				[
					"IPOSOVGL"
				]
			]
		},
		{
			"name": "Infinite magic points",
			"codes": [
				[
					"SUELOISP"
				]
			]
		},
		{
			"name": "Start with more experience and magic points",
			"codes": [
				[
					"ITUSLLAT"
				]
			]
		},
		{
			"name": "Infinite lives",
			"codes": [
				[
					"SXULYUVK",
					"OXUSZLEN"
				]
			]
		}
	]
};
