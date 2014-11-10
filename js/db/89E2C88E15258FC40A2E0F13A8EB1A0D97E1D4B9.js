this.NesDb = this.NesDb || {};

NesDb[ '89E2C88E15258FC40A2E0F13A8EB1A0D97E1D4B9' ] = {
	"$": {
		"name": "Gauntlet II",
		"class": "Licensed",
		"catalog": "NES-2U-EEC",
		"publisher": "Mindscape",
		"developer": "Tengen",
		"region": "Europe",
		"players": "4",
		"date": "1991-04-25"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "fourplayer",
						"name": "4-Player Adapter"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "79F688BC",
				"sha1": "89E2C88E15258FC40A2E0F13A8EB1A0D97E1D4B9",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2008-03-09"
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
								"name": "PAL-2U-0 PRG",
								"size": "128k",
								"crc": "3B997543",
								"sha1": "155CE05C2927510486D6F163034218806AC3E212"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-2U-0 CHR",
								"size": "128k",
								"crc": "FD61C9FE",
								"sha1": "1C3EA17A37555E106A302EA20811285C1FF6AA2E"
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
								"type": "MMC3B"
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
			"name": "Don't take damage from monsters",
			"codes": [
				[
					"OTXSSYSV"
				]
			]
		},
		{
			"name": "Weaker poison",
			"codes": [
				[
					"ZLVVVIGT"
				]
			]
		},
		{
			"name": "Stronger poison",
			"codes": [
				[
					"EGVVVIGV"
				]
			]
		},
		{
			"name": "5 super shots picked up",
			"codes": [
				[
					"IAUTEUZA"
				]
			]
		},
		{
			"name": "20 super shots picked up",
			"codes": [
				[
					"GPUTEUZA"
				]
			]
		},
		{
			"name": "Invincibility lasts longer",
			"codes": [
				[
					"AYETVUGU"
				]
			]
		},
		{
			"name": "Invincibility doesn't last as long",
			"codes": [
				[
					"LPETVUGU"
				]
			]
		},
		{
			"name": "Repulsiveness lasts longer",
			"codes": [
				[
					"ANNTUXGU"
				]
			]
		},
		{
			"name": "Repulsiveness doesn't last as long",
			"codes": [
				[
					"LONTUXGU"
				]
			]
		},
		{
			"name": "Invisibility lasts longer",
			"codes": [
				[
					"AYOTKUGU"
				]
			]
		},
		{
			"name": "Invisibility doesn't last as long",
			"codes": [
				[
					"LPOTKUGU"
				]
			]
		},
		{
			"name": "Take less damage from monsters",
			"codes": [
				[
					"OTXSSYSV",
					"ZAXSVYAA"
				]
			]
		}
	]
};
