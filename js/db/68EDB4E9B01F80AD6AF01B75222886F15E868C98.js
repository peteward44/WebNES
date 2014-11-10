this.NesDb = this.NesDb || {};

NesDb[ '68EDB4E9B01F80AD6AF01B75222886F15E868C98' ] = {
	"$": {
		"name": "Hydlide",
		"class": "Licensed",
		"catalog": "NES-HS-USA",
		"publisher": "FCI",
		"developer": "T & E Soft",
		"region": "USA",
		"players": "1",
		"date": "1989-06"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "77BF8B23",
				"sha1": "68EDB4E9B01F80AD6AF01B75222886F15E868C98",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-04-12"
			},
			"board": [
				{
					"$": {
						"type": "NES-NROM-256",
						"pcb": "NES-NROM-256-05",
						"mapper": "0"
					},
					"prg": [
						{
							"$": {
								"name": "NES-HS-0 PRG",
								"size": "32k",
								"crc": "47F77A4C",
								"sha1": "E15475C21F3C8BA8DA893DE7098B90BEDEF557BC"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-HS-0 CHR",
								"size": "8k",
								"crc": "C1F950C6",
								"sha1": "5C928D98348B25EA51271A5313E61C2D91996943"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "6113B1"
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
			"name": "Boost strength, life, magic",
			"codes": [
				[
					"AZKAAVZE"
				]
			]
		},
		{
			"name": "Super boost strength, life, magic",
			"codes": [
				[
					"GTKAAVZA"
				]
			]
		},
		{
			"name": "Don't take damage from most monsters",
			"codes": [
				[
					"SXSGYYSA"
				]
			]
		},
		{
			"name": "Rapid healing",
			"codes": [
				[
					"AEUEKVIA"
				]
			]
		},
		{
			"name": "Rapid magic healing",
			"codes": [
				[
					"AANOVZZA"
				]
			]
		}
	]
};
