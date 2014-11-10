this.NesDb = this.NesDb || {};

NesDb[ '61DF677041A4899A8CD6EEEB1F789A2C70ADB482' ] = {
	"$": {
		"name": "Super Off Road, Ivan \"Ironman\" Stewart's",
		"class": "Licensed",
		"catalog": "NES-WU-USA",
		"publisher": "Tradewest",
		"developer": "Leland",
		"portdeveloper": "Rare",
		"region": "USA",
		"players": "4",
		"date": "1990-04"
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
				"crc": "4B041B6B",
				"sha1": "61DF677041A4899A8CD6EEEB1F789A2C70ADB482",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-04-12"
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
								"name": "NES-WU-0 PRG",
								"size": "128k",
								"crc": "4B041B6B",
								"sha1": "61DF677041A4899A8CD6EEEB1F789A2C70ADB482"
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
