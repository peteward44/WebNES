this.NesDb = this.NesDb || {};

NesDb[ 'B8A7862C1612AD64B6ED48D6CF54D81DC467982C' ] = {
	"$": {
		"name": "DuckTales, Disney's",
		"class": "Licensed",
		"catalog": "NES-UK-USA",
		"publisher": "Capcom",
		"developer": "Capcom",
		"region": "USA",
		"players": "1",
		"date": "1989-09"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"prototype": "1",
				"crc": "FF53D73E",
				"sha1": "B8A7862C1612AD64B6ED48D6CF54D81DC467982C",
				"dump": "ok",
				"dumper": "kevtris",
				"datedumped": "2012-04-16"
			},
			"board": [
				{
					"$": {
						"type": "NES-UNROM",
						"pcb": "NES-UNROM-08",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "DUCK NEC CAPCOM",
								"size": "128k",
								"crc": "FF53D73E",
								"sha1": "B8A7862C1612AD64B6ED48D6CF54D81DC467982C"
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
			"name": "Infinite lives",
			"codes": [
				[
					"SXUIEKVK"
				]
			]
		},
		{
			"name": "Infinite hit points",
			"codes": [
				[
					"ATVVXLEZ"
				]
			]
		},
		{
			"name": "Start with 1 life",
			"codes": [
				[
					"AAESULZA"
				]
			]
		},
		{
			"name": "Start with 6 lives",
			"codes": [
				[
					"IAESULZA"
				]
			]
		},
		{
			"name": "Start with 9 lives",
			"codes": [
				[
					"AAESULZE"
				]
			]
		},
		{
			"name": "Lose half normal hit points (in easy game)",
			"codes": [
				[
					"LAVTNLPA"
				]
			]
		},
		{
			"name": "Freeze timer",
			"codes": [
				[
					"OVUVAZSV"
				]
			]
		},
		{
			"name": "Double usual time",
			"codes": [
				[
					"ZAXSKLIE",
					"SXNIUKOU",
					"SZNISESU"
				]
			]
		}
	]
};
