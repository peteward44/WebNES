this.NesDb = this.NesDb || {};

NesDb[ '57F755C6A10C6681761070B0350DA72432A534E9' ] = {
	"$": {
		"name": "Jurassic Park",
		"class": "Licensed",
		"catalog": "NES-J9-USA",
		"publisher": "Ocean",
		"developer": "Ocean",
		"region": "USA",
		"players": "1",
		"date": "1993-06"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "3B7F5B3B",
				"sha1": "57F755C6A10C6681761070B0350DA72432A534E9",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-09-17"
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
								"name": "NES-J9-0 PRG",
								"size": "128k",
								"crc": "75CE31C0",
								"sha1": "E5CED7124F8A3A9F0FA4B32FEF7900DF04595503"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-J9-0 CHR",
								"size": "128k",
								"crc": "E24AE999",
								"sha1": "9BA581E2287A3879FD58F98F458FF08874722623"
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
