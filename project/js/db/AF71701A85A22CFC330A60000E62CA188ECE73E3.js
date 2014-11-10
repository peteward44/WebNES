this.NesDb = this.NesDb || {};

NesDb[ 'AF71701A85A22CFC330A60000E62CA188ECE73E3' ] = {
	"$": {
		"name": "North & South",
		"class": "Licensed",
		"catalog": "NES-N5-USA",
		"publisher": "Kemco",
		"developer": "Kemco",
		"region": "USA",
		"players": "2",
		"date": "1990-12"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "AE9F33D0",
				"sha1": "AF71701A85A22CFC330A60000E62CA188ECE73E3",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-05-28"
			},
			"board": [
				{
					"$": {
						"type": "NES-TSROM",
						"pcb": "NES-TSROM-07",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "NES-N5-0 PRG",
								"size": "128k",
								"crc": "DFA2980E",
								"sha1": "34106C25D5C3212A0257F520CCC9A536E81A6A5B"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-N5-0 CHR",
								"size": "128k",
								"crc": "36A6BF0E",
								"sha1": "08EB011C5A6D414CDECD6F021C5D5DBE21BA205F"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "8k"
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
			"name": "Cannon has 5 shots",
			"codes": [
				[
					"IEUATOPA"
				]
			]
		},
		{
			"name": "Cannon has 15 shots",
			"codes": [
				[
					"YEUATOPE"
				]
			]
		},
		{
			"name": "Cannon has infinite shots",
			"codes": [
				[
					"SZXPYUVS"
				]
			]
		},
		{
			"name": "No cannons allowed!",
			"codes": [
				[
					"GXXATOSO"
				]
			]
		},
		{
			"name": "Only 2 daggers in the fortress",
			"codes": [
				[
					"ZAUAGPGA"
				]
			]
		},
		{
			"name": "Infinite daggers in the fortress",
			"codes": [
				[
					"GXXPLKVS"
				]
			]
		},
		{
			"name": "2 men in the fortress",
			"codes": [
				[
					"ZAUETOZA"
				]
			]
		},
		{
			"name": "5 men in the fortress",
			"codes": [
				[
					"IAUETOZA"
				]
			]
		},
		{
			"name": "2 men on the train",
			"codes": [
				[
					"ZASAGOZA"
				]
			]
		},
		{
			"name": "5 men on the train",
			"codes": [
				[
					"IASAGOZA"
				]
			]
		}
	]
};
