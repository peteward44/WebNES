this.NesDb = this.NesDb || {};

NesDb[ '7375E48509F05E91C9DE9B326E047C0D0C7ACFAD' ] = {
	"$": {
		"name": "Cobra Command",
		"class": "Licensed",
		"catalog": "NES-CN-USA",
		"publisher": "Data East",
		"developer": "Data East",
		"region": "USA",
		"players": "1",
		"date": "1988-11"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "2D75C7A9",
				"sha1": "7375E48509F05E91C9DE9B326E047C0D0C7ACFAD",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-03-22"
			},
			"board": [
				{
					"$": {
						"type": "NES-SLROM",
						"pcb": "NES-SLROM-03",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-CN-0 PRG",
								"size": "128k",
								"crc": "94CCBBBC",
								"sha1": "5A9F0982F6A740C07772E1F8730CF51A0C1E8F52"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-CN-0 CHR",
								"size": "128k",
								"crc": "4B026840",
								"sha1": "6B6214BB34E1039D81C76E0363BAF951E695237C"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1A"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "6113A"
							}
						}
					]
				}
			]
		}
	],
	"gameGenieCodes": [
		{
			"name": "Start with infinite lives",
			"codes": [
				[
					"SXUAAOVK"
				]
			]
		},
		{
			"name": "Start with 1 life",
			"codes": [
				[
					"AAUVGZGA"
				]
			]
		},
		{
			"name": "Start with 9 lives",
			"codes": [
				[
					"AAUVGZGE"
				]
			]
		},
		{
			"name": "Become immune to weapon damage",
			"codes": [
				[
					"GZSSNGST"
				]
			]
		}
	]
};
