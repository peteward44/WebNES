this.NesDb = this.NesDb || {};

NesDb[ 'EE65317597D28B1B1207C6BE4DF18EC73DA9FD1C' ] = {
	"$": {
		"name": "Jurassic Park",
		"class": "Licensed",
		"catalog": "NES-J9-SCN",
		"publisher": "Ocean",
		"developer": "Ocean",
		"region": "Scandinavia",
		"players": "1",
		"date": "1993-12-28"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "6C1AB645",
				"sha1": "EE65317597D28B1B1207C6BE4DF18EC73DA9FD1C",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2008-02-11"
			},
			"board": [
				{
					"$": {
						"type": "NES-TSROM",
						"pcb": "NES-TSROM-08",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-J9-0 PRG",
								"size": "128k",
								"crc": "10574E54",
								"sha1": "0CAF586ABE0FE54EC75DA085AFB14BBA40FDCD15"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PAL-J9-0 CHR",
								"size": "128k",
								"crc": "2C2A1012",
								"sha1": "AC279EB4C490F5B91E9BC4A307A33ED07C45440F"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "8k"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC3C"
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
			"name": "Infinite ammo on pick-up",
			"codes": [
				[
					"GZUXXKVS"
				]
			]
		},
		{
			"name": "More bullets picked up from small dinosaurs",
			"codes": [
				[
					"PAVPAGZE"
				]
			]
		},
		{
			"name": "Fewer bullets picked up from small dinosaurs",
			"codes": [
				[
					"PAVPAGZA"
				]
			]
		},
		{
			"name": "Infinite lives--1st 2 Levels only",
			"codes": [
				[
					"GZEULOVK"
				]
			]
		},
		{
			"name": "Immune to most attacks",
			"codes": [
				[
					"ATVGZOSA"
				]
			]
		},
		{
			"name": "3-ball bolas picked up (from small dionsaurs, instead of normal bullets)",
			"codes": [
				[
					"VEXASASA",
					"VEUAXASA"
				]
			]
		},
		{
			"name": "Explosive multi-shots (from small dionsaurs, instead of normal bullets)",
			"codes": [
				[
					"NEXASASA",
					"NEUAXASA"
				]
			]
		}
	]
};
