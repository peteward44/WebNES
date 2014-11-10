this.NesDb = this.NesDb || {};

NesDb[ 'EFA19C34C9DC95F7511AF979CAD72884A6746A3B' ] = {
	"$": {
		"name": "Arkanoid",
		"altname": "アルカノイド",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "TFC-AN-5400-10",
		"publisher": "Taito",
		"developer": "Taito",
		"region": "Japan",
		"players": "1",
		"date": "1986-12-26"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "arkanoid",
						"name": "Vaus Controller"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "D89E5A67",
				"sha1": "EFA19C34C9DC95F7511AF979CAD72884A6746A3B",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-06-29"
			},
			"board": [
				{
					"$": {
						"type": "TAITO-CNROM",
						"pcb": "FC-010",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"size": "32k",
								"crc": "35893B67",
								"sha1": "7BB46BD1070F09DBBBA3AA9A05E6265FCF9A3376"
							}
						}
					],
					"chr": [
						{
							"$": {
								"size": "16k",
								"crc": "C5789B20",
								"sha1": "58551085A755781030EAFA8C0E9238C9B1A50F5B"
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
			"name": "Player 1 start with 1 life",
			"codes": [
				[
					"PAOPUGLA"
				]
			]
		},
		{
			"name": "Player 1 start with 6 lives",
			"codes": [
				[
					"TAOPUGLA"
				]
			]
		},
		{
			"name": "Player 1 start with 9 lives",
			"codes": [
				[
					"PAOPUGLE"
				]
			]
		},
		{
			"name": "Infinite lives, players 1 & 2",
			"codes": [
				[
					"OZNEATVK"
				]
			]
		},
		{
			"name": "Player 1 start at level 5",
			"codes": [
				[
					"IAOONGPA"
				]
			]
		},
		{
			"name": "Player 1 start at level 10",
			"codes": [
				[
					"ZAOONGPE"
				]
			]
		},
		{
			"name": "Player 1 start at level 15",
			"codes": [
				[
					"YAOONGPE"
				]
			]
		},
		{
			"name": "Player 1 start at level 20",
			"codes": [
				[
					"GPOONGPA"
				]
			]
		},
		{
			"name": "Player 1 start at level 25",
			"codes": [
				[
					"PPOONGPE"
				]
			]
		},
		{
			"name": "Player 1 start at level 30",
			"codes": [
				[
					"TPOONGPE"
				]
			]
		},
		{
			"name": "No bat enhancement capsules",
			"codes": [
				[
					"SXNAIAAX"
				]
			]
		},
		{
			"name": "No lasers",
			"codes": [
				[
					"SXVATAAX"
				]
			]
		}
	]
};
