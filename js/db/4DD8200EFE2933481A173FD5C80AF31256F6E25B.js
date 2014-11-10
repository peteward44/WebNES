this.NesDb = this.NesDb || {};

NesDb[ '4DD8200EFE2933481A173FD5C80AF31256F6E25B' ] = {
	"$": {
		"name": "Hudson Hawk",
		"class": "Licensed",
		"catalog": "NES-Y4-FRA",
		"publisher": "Ocean",
		"developer": "Ocean",
		"region": "France",
		"players": "1",
		"date": "1991"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "AC3E5677",
				"sha1": "4DD8200EFE2933481A173FD5C80AF31256F6E25B",
				"dump": "ok",
				"dumper": "efnes",
				"datedumped": "2006-07-23"
			},
			"board": [
				{
					"$": {
						"type": "NES-SLROM",
						"pcb": "NES-SLROM-06",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-Y4-0 PRG",
								"size": "128k",
								"crc": "16F4A933",
								"sha1": "B4ED49FF344C6EE77EC983CC4B753CBBCF9E1144"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-Y4-0 CHR",
								"size": "128k",
								"crc": "391AC219",
								"sha1": "D7C71807ACB79450F2C03901AC112C0ABBE3686E"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1B2"
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
					"PEVGTTIA"
				]
			]
		},
		{
			"name": "Start with 3 lives",
			"codes": [
				[
					"LEVGTTIA"
				]
			]
		},
		{
			"name": "Start with 9 lives",
			"codes": [
				[
					"PEVGTTIE"
				]
			]
		},
		{
			"name": "Infinite energy",
			"codes": [
				[
					"SXETGYSA"
				]
			]
		},
		{
			"name": "Start with very little energy--first life only",
			"codes": [
				[
					"PEVKZVNY"
				]
			]
		},
		{
			"name": "Start with 1/4 energy--first life only",
			"codes": [
				[
					"AKVKZVNY"
				]
			]
		},
		{
			"name": "Start with 1/2 energy--first life only",
			"codes": [
				[
					"ANVKZVNY"
				]
			]
		},
		{
			"name": "Start with 3/4 energy--first life only",
			"codes": [
				[
					"EUVKZVNY"
				]
			]
		},
		{
			"name": "Start with 1 continue",
			"codes": [
				[
					"PESKPTLA"
				]
			]
		},
		{
			"name": "Start with 5 continues",
			"codes": [
				[
					"IESKPTLA"
				]
			]
		},
		{
			"name": "Start with 9 continues",
			"codes": [
				[
					"PESKPTLE"
				]
			]
		},
		{
			"name": "Infinite continues",
			"codes": [
				[
					"OZKKEAAU",
					"OZKGVAVK"
				]
			]
		},
		{
			"name": "Infinite lives",
			"codes": [
				[
					"OZSKYYUK",
					"OZVGZYEN"
				]
			]
		}
	]
};
