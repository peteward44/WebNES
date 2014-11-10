this.NesDb = this.NesDb || {};

NesDb[ '0708F250DC4093EDD4B715F660E2F67B5777CBCD' ] = {
	"$": {
		"name": "Swords and Serpents",
		"class": "Licensed",
		"catalog": "NES-WP-AUS",
		"publisher": "Acclaim",
		"developer": "Interplay",
		"region": "Australia",
		"players": "4",
		"date": "1993"
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
				"system": "NES-PAL-A",
				"crc": "D153CAF6",
				"sha1": "0708F250DC4093EDD4B715F660E2F67B5777CBCD",
				"dump": "ok",
				"dumper": "B00daW",
				"datedumped": "2008-10-21"
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
								"name": "PAL-WP-0 PRG",
								"size": "128k",
								"crc": "D153CAF6",
								"sha1": "0708F250DC4093EDD4B715F660E2F67B5777CBCD"
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
								"type": "3197A"
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
