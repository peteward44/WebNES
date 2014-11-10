this.NesDb = this.NesDb || {};

NesDb[ '8DD5D662B835305CAB7659CBF50E7FA149D867A2' ] = {
	"$": {
		"name": "Super Sprint",
		"class": "Unlicensed",
		"catalog": "TGN-005-SS",
		"publisher": "Tengen",
		"developer": "Tengen",
		"region": "USA",
		"players": "2",
		"date": "1988"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "5F2C3195",
				"sha1": "8DD5D662B835305CAB7659CBF50E7FA149D867A2",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-04-03"
			},
			"board": [
				{
					"$": {
						"type": "TENGEN-800002",
						"pcb": "800002-01 REV D",
						"mapper": "206"
					},
					"prg": [
						{
							"$": {
								"name": "335005-1011",
								"size": "64k",
								"crc": "314790C9",
								"sha1": "5A77116CDF8C351494D0CEEA593C45DD33FBECDB"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "335005-1012",
								"size": "64k",
								"crc": "8370F9C9",
								"sha1": "769DBB0427D4AFD30C8878286054AEDB70154C0E"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "337001"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "337002"
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
			"name": "Infinite continues",
			"codes": [
				[
					"SZETVUVK"
				]
			]
		},
		{
			"name": "6 continues",
			"codes": [
				[
					"YASSPALA"
				]
			]
		},
		{
			"name": "No continues",
			"codes": [
				[
					"PASSPALA"
				]
			]
		},
		{
			"name": "More obstacles on tracks",
			"codes": [
				[
					"IEKKNTAA",
					"GXSGUVSE"
				]
			]
		},
		{
			"name": "Even more obstacles on tracks",
			"codes": [
				[
					"ZEKKNTAE",
					"GXSGUVSE"
				]
			]
		},
		{
			"name": "Lots and lots of obstacles on tracks",
			"codes": [
				[
					"YEKKNTAE",
					"GXSGUVSE"
				]
			]
		}
	]
};
