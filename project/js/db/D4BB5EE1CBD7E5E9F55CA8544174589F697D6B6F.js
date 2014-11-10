this.NesDb = this.NesDb || {};

NesDb[ 'D4BB5EE1CBD7E5E9F55CA8544174589F697D6B6F' ] = {
	"$": {
		"name": "Gauntlet II",
		"class": "Licensed",
		"catalog": "NES-2U-USA",
		"publisher": "Mindscape",
		"developer": "Tengen",
		"region": "USA",
		"players": "4",
		"date": "1990-09"
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
				"system": "NES-NTSC",
				"crc": "1B71CCDB",
				"sha1": "D4BB5EE1CBD7E5E9F55CA8544174589F697D6B6F",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-10-08"
			},
			"board": [
				{
					"$": {
						"type": "NES-TSROM",
						"pcb": "NES-TSROM-07",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "NES-2U-0 PRG",
								"size": "128k",
								"crc": "2C609B52",
								"sha1": "D14D06E2CA92560890A04055703B0BE77A84FBA5"
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
