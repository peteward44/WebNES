this.NesDb = this.NesDb || {};

NesDb[ '4BE8094AF62FB61CA492D8B1DF800FDDB8F92F0C' ] = {
	"$": {
		"name": "Darkwing Duck, Disney's",
		"class": "Licensed",
		"catalog": "NES-DZ-UKV",
		"publisher": "Capcom",
		"developer": "Capcom",
		"region": "United Kingdom",
		"players": "1",
		"date": "1993-12-09"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-A",
				"crc": "66F6A39E",
				"sha1": "4BE8094AF62FB61CA492D8B1DF800FDDB8F92F0C",
				"dump": "ok",
				"dumper": "piteta",
				"datedumped": "2007-08-03"
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
								"name": "PAL-DZ-0 PRG",
								"size": "128k",
								"crc": "895CBAF8",
								"sha1": "B627120F2E9F2A41A3452250829C5C0CA3BF9543"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PAL-DZ-0 CHR",
								"size": "128k",
								"crc": "DB32ADEC",
								"sha1": "822FE8B45427EDFC76B4F513BE867D6F18A28CA3"
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
								"type": "3197A"
							}
						}
					]
				}
			]
		}
	],
	"gameGenieCodes": [
		{
			"name": "Start with 2 lives",
			"codes": [
				[
					"PYSKXPLY"
				]
			]
		},
		{
			"name": "Start with 6 lives",
			"codes": [
				[
					"IYSKXPLY"
				]
			]
		},
		{
			"name": "Start with 9 lives",
			"codes": [
				[
					"AYSKXPLN"
				]
			]
		},
		{
			"name": "Infinite lives",
			"codes": [
				[
					"GZOGSUVK"
				]
			]
		},
		{
			"name": "Infinite gas--if you avoid the \"Go\" missions",
			"codes": [
				[
					"AVUEUOSZ"
				]
			]
		},
		{
			"name": "Infinite strength",
			"codes": [
				[
					"AVVNSOOG"
				]
			]
		},
		{
			"name": "More gas picked up",
			"codes": [
				[
					"IYEAKPAY"
				]
			]
		}
	]
};
