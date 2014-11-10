this.NesDb = this.NesDb || {};

NesDb[ '0EE24D0A864845449EF7434822C12FA0F063DE56' ] = {
	"$": {
		"name": "F-15 City War",
		"class": "Unlicensed",
		"catalog": "AVE-FC",
		"publisher": "AVE",
		"developer": "Idea-Tek",
		"region": "USA",
		"players": "1",
		"date": "1990"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"revision": "1.1",
				"crc": "F3841DCD",
				"sha1": "0EE24D0A864845449EF7434822C12FA0F063DE56",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-07-04"
			},
			"board": [
				{
					"$": {
						"type": "AVE-NINA-06",
						"pcb": "NINA-06",
						"mapper": "79"
					},
					"prg": [
						{
							"$": {
								"name": "F-15 PGM REV 11 DB78",
								"size": "32k",
								"crc": "E1B511CF",
								"sha1": "DE66004BD0D88AEE42C9EFE6C65FB1937AB6B9BB"
							}
						}
					],
					"chr": [
						{
							"$": {
								"size": "32k",
								"crc": "C470FADC",
								"sha1": "AB8634DF0BDCE15934291E66FEA0C1CE4D69835C"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx138"
							}
						},
						{
							"$": {
								"type": "74xx174"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "CIC Stun"
							}
						}
					],
					"pad": [
						{
							"$": {
								"h": "0",
								"v": "1"
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
					"PEVYGPIA"
				]
			]
		},
		{
			"name": "Start with 9 lives",
			"codes": [
				[
					"PEVYGPIE"
				]
			]
		},
		{
			"name": "Infinite lives for 3-D sections",
			"codes": [
				[
					"SZOYYLVG"
				]
			]
		},
		{
			"name": "Infinite lives for top-view sections",
			"codes": [
				[
					"SXOIYIVG"
				]
			]
		},
		{
			"name": "No forward movement on top-view sections",
			"codes": [
				[
					"GXEETVVS"
				]
			]
		},
		{
			"name": "Slower left and right movement on 3-D sections",
			"codes": [
				[
					"GXOEIUVN",
					"GXVALUVS"
				]
			]
		}
	]
};
