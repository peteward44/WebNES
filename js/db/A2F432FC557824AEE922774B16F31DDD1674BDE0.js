this.NesDb = this.NesDb || {};

NesDb[ 'A2F432FC557824AEE922774B16F31DDD1674BDE0' ] = {
	"$": {
		"name": "Paperboy 2",
		"class": "Licensed",
		"catalog": "NES-Y7-USA",
		"publisher": "Mindscape",
		"developer": "Tengen",
		"region": "USA",
		"players": "2",
		"date": "1992-04"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "3A0965B1",
				"sha1": "A2F432FC557824AEE922774B16F31DDD1674BDE0",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-12-06"
			},
			"board": [
				{
					"$": {
						"type": "NES-UOROM",
						"pcb": "NES-UOROM-02",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "NES-Y7-0 PRG",
								"size": "256k",
								"crc": "3A0965B1",
								"sha1": "A2F432FC557824AEE922774B16F31DDD1674BDE0"
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
								"h": "0",
								"v": "1"
							}
						}
					]
				}
			]
		}
	],
	"gameGenieCodes": [
		{
			"name": "Start with 1 life--Paperboy only",
			"codes": [
				[
					"PEOUYGIA"
				]
			]
		},
		{
			"name": "Start with 3 lives--Paperboy only",
			"codes": [
				[
					"LEOUYGIA"
				]
			]
		},
		{
			"name": "Start with 10 lives--Paperboy only",
			"codes": [
				[
					"ZEOUYGIE"
				]
			]
		},
		{
			"name": "Infinite lives",
			"codes": [
				[
					"AAKEZLPA"
				]
			]
		},
		{
			"name": "Start with 15 papers",
			"codes": [
				[
					"YAELGVZE"
				]
			]
		},
		{
			"name": "Start with 20 papers",
			"codes": [
				[
					"GPELGVZA"
				]
			]
		},
		{
			"name": "Infinite papers",
			"codes": [
				[
					"AEVPNLPA"
				]
			]
		},
		{
			"name": "Pick up 5 papers",
			"codes": [
				[
					"IEOAEOZA"
				]
			]
		},
		{
			"name": "Pick up 15 papers",
			"codes": [
				[
					"YEOAEOZE"
				]
			]
		},
		{
			"name": "Pick up 20 papers",
			"codes": [
				[
					"GOOAEOZA"
				]
			]
		}
	]
};
