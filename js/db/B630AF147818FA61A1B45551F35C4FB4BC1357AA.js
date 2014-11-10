this.NesDb = this.NesDb || {};

NesDb[ 'B630AF147818FA61A1B45551F35C4FB4BC1357AA' ] = {
	"$": {
		"name": "Super C",
		"class": "Licensed",
		"catalog": "NES-UE-USA",
		"publisher": "Konami",
		"developer": "Konami",
		"region": "USA",
		"players": "2",
		"date": "1990-04"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "305B4E62",
				"sha1": "B630AF147818FA61A1B45551F35C4FB4BC1357AA",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-10-15"
			},
			"board": [
				{
					"$": {
						"type": "KONAMI-TLROM",
						"pcb": "352026",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "RD023N0.2P",
								"size": "128k",
								"crc": "C7FBECC3",
								"sha1": "2653456C91031DFA73A50CAB3835068A7BFACE8D"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "RD023N0.1C",
								"size": "128k",
								"crc": "153295C1",
								"sha1": "4FF1CAAEDCA52FB9BB0CA6C8FAC24EDDA77308D7"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx32"
							}
						},
						{
							"$": {
								"type": "MMC3B"
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
		},
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "305B4E62",
				"sha1": "B630AF147818FA61A1B45551F35C4FB4BC1357AA",
				"dump": "ok",
				"dumper": "polarz",
				"datedumped": "2006-02-02"
			},
			"board": [
				{
					"$": {
						"type": "NES-TLROM",
						"pcb": "NES-TLROM-02",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "NES-UE-0 PRG",
								"size": "128k",
								"crc": "C7FBECC3",
								"sha1": "2653456C91031DFA73A50CAB3835068A7BFACE8D"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-UE-0 CHR",
								"size": "128k",
								"crc": "153295C1",
								"sha1": "4FF1CAAEDCA52FB9BB0CA6C8FAC24EDDA77308D7"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC3B"
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
			"name": "1 life for both players",
			"codes": [
				[
					"AEXTLIZA"
				]
			]
		},
		{
			"name": "6 lives for both players",
			"codes": [
				[
					"IEXTLIZA"
				]
			]
		},
		{
			"name": "9 lives for both players",
			"codes": [
				[
					"AEXTLIZE"
				]
			]
		},
		{
			"name": "Start at area 2",
			"codes": [
				[
					"PEETLIAA"
				]
			]
		},
		{
			"name": "Start at area 3",
			"codes": [
				[
					"ZEETLIAA"
				]
			]
		},
		{
			"name": "Start at area 4",
			"codes": [
				[
					"LEETLIAA"
				]
			]
		},
		{
			"name": "Start at area 5",
			"codes": [
				[
					"GEETLIAA"
				]
			]
		},
		{
			"name": "Start at area 6",
			"codes": [
				[
					"IEETLIAA"
				]
			]
		},
		{
			"name": "Start at area 7",
			"codes": [
				[
					"TEETLIAA"
				]
			]
		},
		{
			"name": "Bonus life for each enemy soldier shot",
			"codes": [
				[
					"AENTTTZA"
				]
			]
		},
		{
			"name": "9 continues",
			"codes": [
				[
					"TEEVIIZA"
				]
			]
		},
		{
			"name": "Infinite continues",
			"codes": [
				[
					"SZOVXZVG"
				]
			]
		},
		{
			"name": "Start game with Spray Gun",
			"codes": [
				[
					"EUUTGIYS",
					"YSXTPSEL",
					"ZEUTZIAA"
				]
			]
		},
		{
			"name": "Start game with Fireball Gun",
			"codes": [
				[
					"EUUTGIYS",
					"YSXTPSEL",
					"GEUTZIAA"
				]
			]
		}
	]
};
