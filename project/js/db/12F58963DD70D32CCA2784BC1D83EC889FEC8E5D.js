this.NesDb = this.NesDb || {};

NesDb[ '12F58963DD70D32CCA2784BC1D83EC889FEC8E5D' ] = {
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
				"crc": "88A6B192",
				"sha1": "12F58963DD70D32CCA2784BC1D83EC889FEC8E5D",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-03-01"
			},
			"board": [
				{
					"$": {
						"type": "AVE-NINA-03",
						"pcb": "NINA-03 REV. A",
						"mapper": "79"
					},
					"prg": [
						{
							"$": {
								"size": "32k",
								"crc": "50322DFD",
								"sha1": "F9AECD119F631AC68B5D7B92DE87C5B5870F7ED4"
							}
						}
					],
					"chr": [
						{
							"$": {
								"size": "32k",
								"crc": "E9721551",
								"sha1": "6125D4465B9C8032B9D92FA31F1ECB3B4001DD46"
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
								"type": "74xx175"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "MX8018"
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
