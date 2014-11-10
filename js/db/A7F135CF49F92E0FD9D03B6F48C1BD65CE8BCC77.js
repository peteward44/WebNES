this.NesDb = this.NesDb || {};

NesDb[ 'A7F135CF49F92E0FD9D03B6F48C1BD65CE8BCC77' ] = {
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
				"revision": "A",
				"crc": "D074653D",
				"sha1": "A7F135CF49F92E0FD9D03B6F48C1BD65CE8BCC77",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-03-17"
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
								"crc": "B5B29375",
								"sha1": "615706A0AAA9D2E2F6D57182890EE9DBEC711159"
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
				"revision": "A",
				"crc": "D074653D",
				"sha1": "A7F135CF49F92E0FD9D03B6F48C1BD65CE8BCC77",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-06-24"
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
								"name": "BPS-T0-1 PRG",
								"size": "32k",
								"crc": "B5B29375",
								"sha1": "615706A0AAA9D2E2F6D57182890EE9DBEC711159"
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
