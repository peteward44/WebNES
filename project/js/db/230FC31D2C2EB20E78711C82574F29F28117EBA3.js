this.NesDb = this.NesDb || {};

NesDb[ '230FC31D2C2EB20E78711C82574F29F28117EBA3' ] = {
	"$": {
		"name": "Arkanoid",
		"class": "Licensed",
		"catalog": "NES-AR-USA",
		"publisher": "Taito",
		"developer": "Taito",
		"region": "USA",
		"players": "1",
		"date": "1987-08"
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
				"system": "NES-NTSC",
				"crc": "32FB0583",
				"sha1": "230FC31D2C2EB20E78711C82574F29F28117EBA3",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-12-31"
			},
			"board": [
				{
					"$": {
						"type": "NES-CNROM",
						"pcb": "NES-CN-ROM-256-02",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"name": "NES-AR-0 PRG",
								"size": "32k",
								"crc": "B8BB48D3",
								"sha1": "4CB24E72FA59DB0CB1F2E947C73A29F1D35772A0"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-AR-0 CHR",
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
					"cic": [
						{
							"$": {
								"type": "3193A"
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
		},
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "32FB0583",
				"sha1": "230FC31D2C2EB20E78711C82574F29F28117EBA3",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-03-31"
			},
			"board": [
				{
					"$": {
						"type": "NES-CNROM",
						"pcb": "NES-CN-ROM-256-03",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"name": "NES-AR-0 PRG",
								"size": "32k",
								"crc": "B8BB48D3",
								"sha1": "4CB24E72FA59DB0CB1F2E947C73A29F1D35772A0"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-AR-0 CHR",
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
					"cic": [
						{
							"$": {
								"type": "6113"
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
