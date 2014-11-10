this.NesDb = this.NesDb || {};

NesDb[ '1C155F37B098ACC963D1EE181854AED47D2EA107' ] = {
	"$": {
		"name": "Fun House",
		"class": "Licensed",
		"catalog": "NES-FS-USA",
		"publisher": "Hi Tech Expressions",
		"developer": "Realtime Associates",
		"region": "USA",
		"players": "1",
		"date": "1991-01"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "576A0DE8",
				"sha1": "1C155F37B098ACC963D1EE181854AED47D2EA107",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-07-03"
			},
			"board": [
				{
					"$": {
						"type": "NES-UNROM",
						"pcb": "NES-UNROM-09",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "NES-FS-0 PRG",
								"size": "128k",
								"crc": "576A0DE8",
								"sha1": "1C155F37B098ACC963D1EE181854AED47D2EA107"
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
			"name": "Start with 1 turn",
			"codes": [
				[
					"PEOGXALA"
				]
			]
		},
		{
			"name": "Start with 9 turns",
			"codes": [
				[
					"PEOGXALE"
				]
			]
		},
		{
			"name": "Slower timer",
			"codes": [
				[
					"EAXOLVGL"
				]
			]
		},
		{
			"name": "Faster timer",
			"codes": [
				[
					"YPXOLVGU"
				]
			]
		},
		{
			"name": "Quicker turning",
			"codes": [
				[
					"ZESXVGGA"
				]
			]
		},
		{
			"name": "More time from Large Glop Clocks",
			"codes": [
				[
					"TOVOUEYE"
				]
			]
		},
		{
			"name": "Less time from Large Glop Clocks",
			"codes": [
				[
					"YEVOUEYA"
				]
			]
		},
		{
			"name": "Infinite turns",
			"codes": [
				[
					"SXNKSKVK"
				]
			]
		},
		{
			"name": "1 turn after continuing",
			"codes": [
				[
					"PAXGSILA"
				]
			]
		},
		{
			"name": "9 turns after continuing",
			"codes": [
				[
					"PAXGSILE"
				]
			]
		},
		{
			"name": "Start on Floor 2",
			"codes": [
				[
					"YEEKSAPA"
				]
			]
		},
		{
			"name": "Start on Floor 4",
			"codes": [
				[
					"LOEKSAPA"
				]
			]
		},
		{
			"name": "Start on Floor 6",
			"codes": [
				[
					"YOEKSAPE"
				]
			]
		},
		{
			"name": "Start on Floor 8",
			"codes": [
				[
					"LXEKSAPE"
				]
			]
		}
	]
};
