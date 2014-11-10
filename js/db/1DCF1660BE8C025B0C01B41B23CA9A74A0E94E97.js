this.NesDb = this.NesDb || {};

NesDb[ '1DCF1660BE8C025B0C01B41B23CA9A74A0E94E97' ] = {
	"$": {
		"name": "Double Dragon",
		"altname": "双載龍",
		"class": "Licensed",
		"catalog": "TJC-WD",
		"publisher": "Technos",
		"developer": "Technos",
		"region": "Japan",
		"players": "2",
		"date": "1988-04-08"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "6DCE4B23",
				"sha1": "1DCF1660BE8C025B0C01B41B23CA9A74A0E94E97",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-10-31"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SLROM",
						"pcb": "HVC-SLROM-02",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "TJC-WD-0 PRG",
								"size": "128k",
								"crc": "87BAD69B",
								"sha1": "B19E9E93E67D57CA4AE1C491B38BD96D966B7EBB"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "TJC-WD-0 CHR",
								"size": "128k",
								"crc": "17CF68A0",
								"sha1": "3A0D6F897081955308DB5834A2B88FE8272921AE"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1A"
							}
						}
					]
				}
			]
		}
	],
	"gameGenieCodes": [
		{
			"name": "Freeze the timer countdown",
			"codes": [
				[
					"AAUNYLPA"
				]
			]
		},
		{
			"name": "Start game with 1 life",
			"codes": [
				[
					"AEUTLZZA"
				]
			]
		},
		{
			"name": "Start game with 6 lives",
			"codes": [
				[
					"IEUTLZZA"
				]
			]
		},
		{
			"name": "Start game with 9 lives",
			"codes": [
				[
					"AEUTLZZE"
				]
			]
		},
		{
			"name": "More energy for player 2 or the CPU",
			"codes": [
				[
					"XTKNXEZK"
				]
			]
		},
		{
			"name": "More energy for player 1",
			"codes": [
				[
					"XTKYOEZK"
				]
			]
		},
		{
			"name": "Timer will count down fast",
			"codes": [
				[
					"AZUYZLAL"
				]
			]
		},
		{
			"name": "Timer will count down super-fast",
			"codes": [
				[
					"APUYZLAL"
				]
			]
		}
	]
};
