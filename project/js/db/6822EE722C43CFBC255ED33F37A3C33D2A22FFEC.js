this.NesDb = this.NesDb || {};

NesDb[ '6822EE722C43CFBC255ED33F37A3C33D2A22FFEC' ] = {
	"$": {
		"name": "James Bond Jr.",
		"class": "Licensed",
		"catalog": "NES-JB-UKV",
		"publisher": "THQ",
		"developer": "Eurocom",
		"region": "United Kingdom",
		"players": "1",
		"date": "1992"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-A",
				"crc": "A0A5A0B9",
				"sha1": "6822EE722C43CFBC255ED33F37A3C33D2A22FFEC",
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
								"name": "PAL-JB-0 PRG",
								"size": "128k",
								"crc": "7E036525",
								"sha1": "DDE643F669851A25F1207A71A0F11B3EB5B6A934"
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
