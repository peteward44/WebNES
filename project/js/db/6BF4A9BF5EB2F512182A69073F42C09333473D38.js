this.NesDb = this.NesDb || {};

NesDb[ '6BF4A9BF5EB2F512182A69073F42C09333473D38' ] = {
	"$": {
		"name": "Harlem Globetrotters",
		"class": "Licensed",
		"catalog": "NES-QH-USA",
		"publisher": "GameTek",
		"developer": "Softie",
		"region": "USA",
		"players": "2",
		"date": "1991-03"
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
				"crc": "2E6EE98D",
				"sha1": "6BF4A9BF5EB2F512182A69073F42C09333473D38",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-04-11"
			},
			"board": [
				{
					"$": {
						"type": "NES-SLROM",
						"pcb": "NES-SLROM-06",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-QH-0 PRG",
								"size": "128k",
								"crc": "B33BC971",
								"sha1": "7E6C6FFB28DFDA74DF91965BB8DEF5A40D438E12"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-QH-0 CHR",
								"size": "128k",
								"crc": "D553E49F",
								"sha1": "652183954C9519A829D53ED63C72EE5A702FBC8A"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1B2"
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
			"name": "Slower timer",
			"codes": [
				[
					"IIUGSOIZ"
				]
			]
		},
		{
			"name": "Faster timer",
			"codes": [
				[
					"GPUGSOIX"
				]
			]
		},
		{
			"name": "Slower shot clock",
			"codes": [
				[
					"IIVGKOIZ"
				]
			]
		},
		{
			"name": "Faster shot clock",
			"codes": [
				[
					"GPVGKOIX"
				]
			]
		}
	]
};
