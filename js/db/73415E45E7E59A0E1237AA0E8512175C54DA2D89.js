this.NesDb = this.NesDb || {};

NesDb[ '73415E45E7E59A0E1237AA0E8512175C54DA2D89' ] = {
	"$": {
		"name": "Joust",
		"class": "Licensed",
		"catalog": "NES-JU-USA",
		"publisher": "HAL Laboratory",
		"developer": "Williams Entertainment",
		"portdeveloper": "HAL Laboratory",
		"region": "USA",
		"players": "2",
		"date": "1988-10"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "BE387AF0",
				"sha1": "73415E45E7E59A0E1237AA0E8512175C54DA2D89",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-01-28"
			},
			"board": [
				{
					"$": {
						"type": "NES-CNROM",
						"pcb": "NES-CN-ROM-256-05",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"name": "NES-JU-0 PRG",
								"size": "16k",
								"crc": "435E9971",
								"sha1": "68DA18D14592D3EACFDFD0BC04C318C604495CCB"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-JU-0 CHR",
								"size": "16k",
								"crc": "C1E68DBF",
								"sha1": "83F04332F72A9BB0B0869744A6DCEB8B6CC541E4"
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
								"type": "6113A"
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
			"name": "Infinite lives",
			"codes": [
				[
					"SXXKKZVI"
				]
			]
		},
		{
			"name": "Start with 1 life",
			"codes": [
				[
					"PEOGLAIA"
				]
			]
		},
		{
			"name": "Start with 9 lives",
			"codes": [
				[
					"ZEOGLAIE"
				]
			]
		},
		{
			"name": "Turbo flying",
			"codes": [
				[
					"PASGKGAA"
				]
			]
		},
		{
			"name": "Heavens above?",
			"codes": [
				[
					"GXVKOZSP"
				]
			]
		},
		{
			"name": "Start on last level reached",
			"codes": [
				[
					"GXSKTASA",
					"GXSKGASA",
					"GXVGGASA"
				]
			]
		}
	]
};
