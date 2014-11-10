this.NesDb = this.NesDb || {};

NesDb[ 'E83443C990D36DD3C851A317FAFC87F2ABF4A944' ] = {
	"$": {
		"name": "Super Off Road, Ivan \"Ironman\" Stewart's",
		"class": "Licensed",
		"catalog": "NES-WU-EEC",
		"publisher": "Nintendo",
		"developer": "Leland",
		"portdeveloper": "Rare",
		"region": "Europe",
		"players": "4",
		"date": "1991-03-14"
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
				"crc": "05104517",
				"sha1": "E83443C990D36DD3C851A317FAFC87F2ABF4A944",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2008-03-15"
			},
			"board": [
				{
					"$": {
						"type": "NES-AMROM",
						"pcb": "NES-AMROM-01",
						"mapper": "7"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-WU-0 PRG",
								"size": "128k",
								"crc": "05104517",
								"sha1": "E83443C990D36DD3C851A317FAFC87F2ABF4A944"
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
			"name": "Computer starts with no nitro boosts",
			"codes": [
				[
					"AAUEIEPP"
				]
			]
		},
		{
			"name": "Computer starts with double nitro boosts",
			"codes": [
				[
					"ZLUEIEPP"
				]
			]
		},
		{
			"name": "Players start with double nitro boosts",
			"codes": [
				[
					"ZLEVZSPP"
				]
			]
		},
		{
			"name": "Players have infinite nitro boosts",
			"codes": [
				[
					"AEKISPPA"
				]
			]
		},
		{
			"name": "Players have only 1 life",
			"codes": [
				[
					"PENTYGLA"
				]
			]
		},
		{
			"name": "Lots of money and full equipment",
			"codes": [
				[
					"TEKTYGAA"
				]
			]
		},
		{
			"name": "Infinite money",
			"codes": [
				[
					"GGUTGGOU",
					"GGUTIGAV",
					"KTUTTKAL"
				]
			]
		}
	]
};
