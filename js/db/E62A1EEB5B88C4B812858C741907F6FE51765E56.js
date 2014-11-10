this.NesDb = this.NesDb || {};

NesDb[ 'E62A1EEB5B88C4B812858C741907F6FE51765E56' ] = {
	"$": {
		"name": "Beetlejuice",
		"class": "Licensed",
		"catalog": "NES-4B-USA",
		"publisher": "LJN",
		"developer": "Rare",
		"region": "USA",
		"players": "1",
		"date": "1991-05"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "EB84C54C",
				"sha1": "E62A1EEB5B88C4B812858C741907F6FE51765E56",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-09-17"
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
								"name": "NES-4B-0 PRG",
								"size": "128k",
								"crc": "EB84C54C",
								"sha1": "E62A1EEB5B88C4B812858C741907F6FE51765E56"
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
			"name": "Infinite lives",
			"codes": [
				[
					"SZOIYKVK"
				]
			]
		},
		{
			"name": "1 life",
			"codes": [
				[
					"PEOAAALA"
				]
			]
		},
		{
			"name": "6 lives",
			"codes": [
				[
					"TEOAAALA"
				]
			]
		},
		{
			"name": "9 lives",
			"codes": [
				[
					"PEOAAALE"
				]
			]
		},
		{
			"name": "Infinite hits",
			"codes": [
				[
					"AAOITYPA"
				]
			]
		},
		{
			"name": "Take fewer hits to die",
			"codes": [
				[
					"PEOAIAZA",
					"PENSYLZA"
				]
			]
		}
	]
};
