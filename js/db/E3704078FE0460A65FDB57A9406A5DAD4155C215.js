this.NesDb = this.NesDb || {};

NesDb[ 'E3704078FE0460A65FDB57A9406A5DAD4155C215' ] = {
	"$": {
		"name": "Nightmare on Elm Street, A",
		"class": "Licensed",
		"catalog": "NES-ES-USA",
		"publisher": "LJN",
		"developer": "Rare",
		"region": "USA",
		"players": "4",
		"date": "1990-10"
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
				"crc": "DA2CB59A",
				"sha1": "E3704078FE0460A65FDB57A9406A5DAD4155C215",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-10-10"
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
								"name": "NES-ES-0 PRG",
								"size": "128k",
								"crc": "DA2CB59A",
								"sha1": "E3704078FE0460A65FDB57A9406A5DAD4155C215"
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
					"SUELSUVS"
				]
			]
		},
		{
			"name": "1 continue",
			"codes": [
				[
					"PAUVEZLA"
				]
			]
		},
		{
			"name": "6 continues",
			"codes": [
				[
					"TAUVEZLA"
				]
			]
		},
		{
			"name": "9 continues",
			"codes": [
				[
					"PAUVEZLE"
				]
			]
		},
		{
			"name": "Don't lose 'zzz' when hit",
			"codes": [
				[
					"AESSLAEA"
				]
			]
		},
		{
			"name": "Don't lose 'zzz' when standing still",
			"codes": [
				[
					"AAXOLAPA"
				]
			]
		},
		{
			"name": "Lose 'zzz' quicker",
			"codes": [
				[
					"ZAXOLAPA"
				]
			]
		},
		{
			"name": "Mega-jumping teenagers",
			"codes": [
				[
					"IEULIGLA"
				]
			]
		}
	]
};
