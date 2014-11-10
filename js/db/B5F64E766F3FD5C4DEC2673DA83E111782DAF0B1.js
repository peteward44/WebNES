this.NesDb = this.NesDb || {};

NesDb[ 'B5F64E766F3FD5C4DEC2673DA83E111782DAF0B1' ] = {
	"$": {
		"name": "Golf Grand Slam",
		"class": "Licensed",
		"catalog": "NES-7G-USA",
		"publisher": "Atlus",
		"developer": "TOSE Software",
		"region": "USA",
		"players": "4",
		"date": "1991-12"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "CF5F8AF0",
				"sha1": "B5F64E766F3FD5C4DEC2673DA83E111782DAF0B1",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-02-19"
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
								"name": "NES-7G-0 PRG",
								"size": "128k",
								"crc": "2FDEDCB5",
								"sha1": "9C7E44D0B76174E124CEA9145929ADB4169186C4"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-7G-0 CHR",
								"size": "128k",
								"crc": "759C55CA",
								"sha1": "2C735424B0DB55E01A8A51FE59DAA2E68EE9F3E5"
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
			"name": "Strokes aren't recorded",
			"codes": [
				[
					"SXEZGYSA"
				]
			]
		},
		{
			"name": "Some shots can be done more accurately",
			"codes": [
				[
					"PEXTETIA"
				]
			]
		},
		{
			"name": "Wind always at 9",
			"codes": [
				[
					"OZOIPGIX",
					"PAOIZKAX",
					"SXSZZYSA"
				]
			]
		}
	]
};
