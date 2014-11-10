this.NesDb = this.NesDb || {};

NesDb[ '020061B780EFB8CD71AE29F1944E3FD2D9D18172' ] = {
	"$": {
		"name": "Jaws",
		"class": "Licensed",
		"catalog": "NES-JA-USA",
		"publisher": "LJN",
		"developer": "Westone",
		"region": "USA",
		"players": "1",
		"date": "1987-11"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "27D14A54",
				"sha1": "020061B780EFB8CD71AE29F1944E3FD2D9D18172",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-04-11"
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
								"name": "NES-JA-0 PRG",
								"size": "32k",
								"crc": "5EE5A942",
								"sha1": "7381AB194FC895CE042708DA4A37B754EA2D0FD2"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-JA-0 CHR",
								"size": "32k",
								"crc": "072424A2",
								"sha1": "D5F36E0498FE84091499CB74C6408DCB55EC1736"
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
			"name": "Infinite lives",
			"codes": [
				[
					"SZSATSVK"
				]
			]
		},
		{
			"name": "Infinite shells",
			"codes": [
				[
					"SZVEYNSE"
				]
			]
		},
		{
			"name": "Start with 1 life",
			"codes": [
				[
					"PEOAGZLA"
				]
			]
		},
		{
			"name": "Start with double lives",
			"codes": [
				[
					"TEOAGZLA"
				]
			]
		},
		{
			"name": "Don't lose shells on dying",
			"codes": [
				[
					"SZSELSTK"
				]
			]
		},
		{
			"name": "Don't lose power on dying",
			"codes": [
				[
					"SZSETSVK"
				]
			]
		}
	]
};
