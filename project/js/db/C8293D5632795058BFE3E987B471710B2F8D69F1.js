this.NesDb = this.NesDb || {};

NesDb[ 'C8293D5632795058BFE3E987B471710B2F8D69F1' ] = {
	"$": {
		"name": "Swords and Serpents",
		"class": "Licensed",
		"catalog": "NES-WP-FRA",
		"publisher": "Acclaim",
		"developer": "Interplay",
		"region": "France",
		"players": "4",
		"date": "1993-04-11"
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
				"crc": "46135141",
				"sha1": "C8293D5632795058BFE3E987B471710B2F8D69F1",
				"dump": "ok",
				"dumper": "B00daW",
				"datedumped": "2008-10-20"
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
								"name": "FRA-WP-0 PRG",
								"size": "128k",
								"crc": "46135141",
								"sha1": "C8293D5632795058BFE3E987B471710B2F8D69F1"
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
								"type": "3195A"
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
