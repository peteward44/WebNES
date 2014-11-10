this.NesDb = this.NesDb || {};

NesDb[ '146432B03E8351D3128394AAA62A24E01C548C7E' ] = {
	"$": {
		"name": "Contra Force",
		"class": "Licensed",
		"catalog": "NES-CR-USA",
		"publisher": "Konami",
		"developer": "Konami",
		"region": "USA",
		"players": "2",
		"date": "1992-09"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "A94591B0",
				"sha1": "146432B03E8351D3128394AAA62A24E01C548C7E",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-11-05"
			},
			"board": [
				{
					"$": {
						"type": "NES-TLROM",
						"pcb": "NES-TLROM-03",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "NES-CR-0 PRG",
								"size": "128k",
								"crc": "1FF7FC0D",
								"sha1": "BBF1FB616C13795C9C8E447A72F009EE3746BD90"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-CR-0 CHR",
								"size": "128k",
								"crc": "7FF2A7F8",
								"sha1": "234041D4C880CCD4ACD295C9B2A3D6E37089BEDA"
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
			"name": "Start all characters with 9 lives",
			"codes": [
				[
					"PAUYTTLE"
				]
			]
		},
		{
			"name": "Start all characters with 6 lives",
			"codes": [
				[
					"TAUYTTLA"
				]
			]
		},
		{
			"name": "Start all characters with 1 life",
			"codes": [
				[
					"PAUYTTLA"
				]
			]
		},
		{
			"name": "Infinite lives--all characters",
			"codes": [
				[
					"AANVIAPA"
				]
			]
		}
	]
};
