this.NesDb = this.NesDb || {};

NesDb[ '9DF474AC357D05FC9AA86AE270CF561A025909EE' ] = {
	"$": {
		"name": "Swords and Serpents",
		"class": "Licensed",
		"catalog": "NES-WP-USA",
		"publisher": "Acclaim",
		"developer": "Interplay",
		"region": "USA",
		"players": "4",
		"date": "1990-08"
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
				"crc": "3417EC46",
				"sha1": "9DF474AC357D05FC9AA86AE270CF561A025909EE",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-03-18"
			},
			"board": [
				{
					"$": {
						"type": "NES-UNROM",
						"pcb": "NES-UNROM-09",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "NES-WP-0 PRG",
								"size": "128k",
								"crc": "3417EC46",
								"sha1": "9DF474AC357D05FC9AA86AE270CF561A025909EE"
							}
						}
					],
					"vram": [
						{
							"$": {
								"size": "8k"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx161"
							}
						},
						{
							"$": {
								"type": "74xx32"
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
			"name": "All characters have Scale Armor",
			"codes": [
				[
					"VANGKTVE"
				]
			]
		},
		{
			"name": "Warriors start with a Great Sword",
			"codes": [
				[
					"UEEKSTOE"
				]
			]
		},
		{
			"name": "Warriors start with a Great Axe",
			"codes": [
				[
					"KEEKSTOE"
				]
			]
		},
		{
			"name": "Magicians start with a Wizard's Wand",
			"codes": [
				[
					"SEEGETSE"
				]
			]
		},
		{
			"name": "Magicians start with more spells",
			"codes": [
				[
					"YPKGSTLE"
				]
			]
		},
		{
			"name": "Magicians have greater spells",
			"codes": [
				[
					"LAKKXTAA"
				]
			]
		},
		{
			"name": "Spells use up no magic points",
			"codes": [
				[
					"GZKYLGOY"
				]
			]
		},
		{
			"name": "Thieves start with a Long Sword",
			"codes": [
				[
					"XEOGVTXE"
				]
			]
		},
		{
			"name": "Thieves start with an Axe",
			"codes": [
				[
					"KEOGVTXA"
				]
			]
		},
		{
			"name": "Start with 30 health points each",
			"codes": [
				[
					"TPXGNVZE",
					"TPXKSVZE"
				]
			]
		},
		{
			"name": "Start with 50 health points each",
			"codes": [
				[
					"ZLXGNVZA",
					"ZLXKSVZA"
				]
			]
		}
	]
};
