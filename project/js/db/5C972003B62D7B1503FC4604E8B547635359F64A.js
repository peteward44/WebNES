this.NesDb = this.NesDb || {};

NesDb[ '5C972003B62D7B1503FC4604E8B547635359F64A' ] = {
	"$": {
		"name": "Wrath of the Black Manta",
		"class": "Licensed",
		"catalog": "NES-WK-USA",
		"publisher": "Taito",
		"developer": "A.I",
		"region": "USA",
		"players": "1",
		"date": "1990-04"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "F651398D",
				"sha1": "5C972003B62D7B1503FC4604E8B547635359F64A",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-04-10"
			},
			"board": [
				{
					"$": {
						"type": "NES-SLROM",
						"pcb": "NES-SLROM-05",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-WK-0 PRG",
								"size": "128k",
								"crc": "B627254B",
								"sha1": "9C0217E4232C7E5BDA266F5E32599DB6A46FA70E"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-WK-0 CHR",
								"size": "128k",
								"crc": "5F3BB28E",
								"sha1": "4638D8ADBE585D4BA3D3FB6BF7763C95D7E19DA8"
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
			"name": "Start with extra energy",
			"codes": [
				[
					"AEOAZTLE"
				]
			]
		},
		{
			"name": "Take no damage from most enemies",
			"codes": [
				[
					"SXSLXUVK"
				]
			]
		},
		{
			"name": "Never die from falling off screen",
			"codes": [
				[
					"SZVOKEVK"
				]
			]
		},
		{
			"name": "Mega-jump when stationary",
			"codes": [
				[
					"GZUZSUSO"
				]
			]
		},
		{
			"name": "Start with 1 life",
			"codes": [
				[
					"AEOAYTZA"
				]
			]
		},
		{
			"name": "Start with 6 lives",
			"codes": [
				[
					"IEOAYTZA"
				]
			]
		},
		{
			"name": "Start with 9 lives",
			"codes": [
				[
					"AEOAYTZE"
				]
			]
		}
	]
};
