this.NesDb = this.NesDb || {};

NesDb[ '5AAD6D1022C7EA13F69056A5A64FCF4C7BB737A6' ] = {
	"$": {
		"name": "Darkwing Duck, Disney's",
		"class": "Licensed",
		"catalog": "NES-DZ-USA",
		"publisher": "Capcom",
		"developer": "Capcom",
		"region": "USA",
		"players": "1",
		"date": "1992-06"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "5DCE2EEA",
				"sha1": "5AAD6D1022C7EA13F69056A5A64FCF4C7BB737A6",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-02-07"
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
								"name": "NES-DZ-0 PRG",
								"size": "128k",
								"crc": "950AA028",
								"sha1": "503CB83C806BB78889A2A772B44766DB669CD933"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-DZ-0 CHR",
								"size": "128k",
								"crc": "DB32ADEC",
								"sha1": "822FE8B45427EDFC76B4F513BE867D6F18A28CA3"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1B2"
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
