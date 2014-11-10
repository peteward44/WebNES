this.NesDb = this.NesDb || {};

NesDb[ '0A571E3A0130D58431E5890966805230D2820C05' ] = {
	"$": {
		"name": "Snow Brothers",
		"class": "Licensed",
		"catalog": "NES-7L-FRG",
		"publisher": "Capcom",
		"developer": "Toaplan",
		"region": "Germany",
		"players": "2",
		"date": "1991"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "A9660690",
				"sha1": "0A571E3A0130D58431E5890966805230D2820C05",
				"dump": "ok",
				"dumper": "efnes",
				"datedumped": "2007-09-23"
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
								"name": "PAL-7L-0 PRG",
								"size": "128k",
								"crc": "154B30C0",
								"sha1": "F76679C6416546B5AEB593E3878E44E689A4F33C"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PAL-7L-0 CHR",
								"size": "128k",
								"crc": "A0A7EABF",
								"sha1": "9BE5E4C92AFE355E2D9AFD5C8FFE3C4B1E03203E"
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
								"type": "3195A"
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
