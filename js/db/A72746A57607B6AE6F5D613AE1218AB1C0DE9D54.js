this.NesDb = this.NesDb || {};

NesDb[ 'A72746A57607B6AE6F5D613AE1218AB1C0DE9D54' ] = {
	"$": {
		"name": "James Bond Jr.",
		"class": "Licensed",
		"catalog": "NES-JB-USA",
		"publisher": "THQ",
		"developer": "Eurocom",
		"region": "USA",
		"players": "1",
		"date": "1992-11"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "F6898A59",
				"sha1": "A72746A57607B6AE6F5D613AE1218AB1C0DE9D54",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-02-19"
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
								"name": "NES-JB-0 PRG",
								"size": "128k",
								"crc": "E12BB5FB",
								"sha1": "91C0190F1A98CE73853BBEA5F969409DE32BEDE8"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-JB-0 CHR",
								"size": "128k",
								"crc": "07CD3EB3",
								"sha1": "C13641D0B70D4418FFCC27368837608E48419DBE"
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
			"name": "Start with 2 lives",
			"codes": [
				[
					"PANTTATA"
				]
			]
		},
		{
			"name": "Start with 15 lives",
			"codes": [
				[
					"TANTTATE"
				]
			]
		},
		{
			"name": "Infinite lives",
			"codes": [
				[
					"SXEKSOVK"
				]
			]
		},
		{
			"name": "Start with some weapons",
			"codes": [
				[
					"XVOTAEXE"
				]
			]
		},
		{
			"name": "Unlimited weapons (bombs, flares, nukes, bullets)",
			"codes": [
				[
					"AANNSLPA"
				]
			]
		},
		{
			"name": "Slow down rate of air loss (scuba mode)",
			"codes": [
				[
					"YUSOENYO"
				]
			]
		},
		{
			"name": "Speed up rate of air loss",
			"codes": [
				[
					"YESOENYO"
				]
			]
		},
		{
			"name": "Shield doesn't take damage from bullets",
			"codes": [
				[
					"GZUYZIST"
				]
			]
		},
		{
			"name": "Immune to most damage",
			"codes": [
				[
					"GZVYPIST"
				]
			]
		}
	]
};
