this.NesDb = this.NesDb || {};

NesDb[ '76E71F32551D60D3AF26EB4AD15F4BDE7C6CA29B' ] = {
	"$": {
		"name": "Snow Brothers",
		"class": "Licensed",
		"catalog": "NES-7L-USA",
		"publisher": "Capcom",
		"developer": "Toaplan",
		"region": "USA",
		"players": "2",
		"date": "1991-11"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "1DAC6208",
				"sha1": "76E71F32551D60D3AF26EB4AD15F4BDE7C6CA29B",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-12-24"
			},
			"board": [
				{
					"$": {
						"type": "NES-SLROM",
						"pcb": "NES-SLROM-06",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-7L-0 PRG",
								"size": "128k",
								"crc": "D27B7E36",
								"sha1": "6C2C12DAF637D0622DDD7D35D3F4FFFD51DC75BF"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-7L-0 CHR",
								"size": "128k",
								"crc": "2426980C",
								"sha1": "4D7CE2535F316EB2A33C7660B757C2F40600A536"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1B3"
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
			"name": "Infinite number of chances",
			"codes": [
				[
					"SXNEUYVI"
				]
			]
		},
		{
			"name": "Start game with 10 chances instead of 3",
			"codes": [
				[
					"PAXXPLZE"
				]
			]
		},
		{
			"name": "Start game with 1 chance (count starts at 0)",
			"codes": [
				[
					"AAXXPLZA"
				]
			]
		},
		{
			"name": "Always get 10 chances after a continue (count restarts at 9)",
			"codes": [
				[
					"PAOAYLZE"
				]
			]
		},
		{
			"name": "Always get 1 chance after a continue (count restarts at 0)",
			"codes": [
				[
					"AAOAYLZA"
				]
			]
		},
		{
			"name": "Don't lose super ability after you lose a chance",
			"codes": [
				[
					"OUOOGEOO"
				]
			]
		},
		{
			"name": "Start with Speed Skates, Power Shots and super snow-throwing",
			"codes": [
				[
					"YAEEYAAE"
				]
			]
		},
		{
			"name": "Start with Speed Skates (Dont use with Power Shots, super snow-throwing ability)",
			"codes": [
				[
					"PAEEYAAA"
				]
			]
		},
		{
			"name": "Start with Power Shots (Dont use with Speed Skates, super snow-throwing ability)",
			"codes": [
				[
					"ZAEEYAAA"
				]
			]
		},
		{
			"name": "Start with super snow-throwing ability (Dont use with Speed Skates, Power Shots)",
			"codes": [
				[
					"GAEEYAAA"
				]
			]
		}
	]
};
