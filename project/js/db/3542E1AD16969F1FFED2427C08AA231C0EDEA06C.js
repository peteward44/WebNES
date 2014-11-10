this.NesDb = this.NesDb || {};

NesDb[ '3542E1AD16969F1FFED2427C08AA231C0EDEA06C' ] = {
	"$": {
		"name": "Tetris",
		"altname": "テトリス",
		"class": "Licensed",
		"catalog": "BPS-T0",
		"publisher": "Bullet-Proof Software",
		"developer": "Bullet-Proof Software",
		"region": "Japan",
		"players": "1",
		"date": "1988-12-22"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"revision": "B",
				"crc": "5C5A1AB8",
				"sha1": "3542E1AD16969F1FFED2427C08AA231C0EDEA06C",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-04-28"
			},
			"board": [
				{
					"$": {
						"type": "HVC-CNROM",
						"pcb": "CN-04B",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"size": "32k",
								"crc": "77117299",
								"sha1": "039B8BB2B35D7024523BA34BCC93F665DFE9B8D1"
							}
						}
					],
					"chr": [
						{
							"$": {
								"size": "16k",
								"crc": "A4896EEF",
								"sha1": "B99BC30C45E28BFF443B8C7DD5B56809EA2BFB04"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx161"
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
		},
		{
			"$": {
				"system": "Famicom",
				"revision": "B",
				"crc": "5C5A1AB8",
				"sha1": "3542E1AD16969F1FFED2427C08AA231C0EDEA06C",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-05-09"
			},
			"board": [
				{
					"$": {
						"type": "HVC-CNROM",
						"pcb": "UNK-BPS-T0",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"name": "BPS-T0-2 PRG",
								"size": "32k",
								"crc": "77117299",
								"sha1": "039B8BB2B35D7024523BA34BCC93F665DFE9B8D1"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "BPS-T0-1 CHR",
								"size": "16k",
								"crc": "A4896EEF",
								"sha1": "B99BC30C45E28BFF443B8C7DD5B56809EA2BFB04"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx161"
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
			"name": "Two-player interactive game!",
			"codes": [
				[
					"ENEALYNN"
				]
			]
		},
		{
			"name": "Need only complete 10 lines in game B",
			"codes": [
				[
					"APSEGYIZ"
				]
			]
		},
		{
			"name": "Must complete 50 lines in game B",
			"codes": [
				[
					"AISEGYIZ"
				]
			]
		},
		{
			"name": "Must complete 80 lines in game B",
			"codes": [
				[
					"EASEGYIZ"
				]
			]
		},
		{
			"name": "Faster 'forced' fall rate",
			"codes": [
				[
					"PASAUPPE"
				]
			]
		}
	]
};
