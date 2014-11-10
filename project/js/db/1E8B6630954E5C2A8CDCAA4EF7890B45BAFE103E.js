this.NesDb = this.NesDb || {};

NesDb[ '1E8B6630954E5C2A8CDCAA4EF7890B45BAFE103E' ] = {
	"$": {
		"name": "Stealth ATF",
		"class": "Licensed",
		"catalog": "NES-LH-EEC",
		"publisher": "Nintendo",
		"developer": "Imagineering",
		"region": "Europe",
		"players": "2",
		"date": "1991-11-14"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "E5A8401B",
				"sha1": "1E8B6630954E5C2A8CDCAA4EF7890B45BAFE103E",
				"dump": "ok",
				"dumper": "Bregalad",
				"datedumped": "2007-04-06"
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
								"name": "PAL-LH-0 PRG",
								"size": "128k",
								"crc": "632EDF4E",
								"sha1": "9AA7887DD62D31DE1FCCB188505136D5F02AA788"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-LH-0 CHR",
								"size": "128k",
								"crc": "BBA9A33D",
								"sha1": "4EB2F19E79DFA9D8D655BFA4D8C696161A7DB62F"
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
			"name": "Infinite missiles",
			"codes": [
				[
					"SZVZSSVK"
				]
			]
		},
		{
			"name": "Start with double missiles",
			"codes": [
				[
					"AOUXXEAA"
				]
			]
		},
		{
			"name": "No damage taken from enemy's bullets",
			"codes": [
				[
					"SZVPXNVV"
				]
			]
		},
		{
			"name": "Start with less fuel",
			"codes": [
				[
					"AVUXNAVP"
				]
			]
		},
		{
			"name": "More enemy planes on the screen",
			"codes": [
				[
					"AEKZZLZE"
				]
			]
		}
	]
};
