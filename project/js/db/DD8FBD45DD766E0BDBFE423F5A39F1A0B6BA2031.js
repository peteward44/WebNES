this.NesDb = this.NesDb || {};

NesDb[ 'DD8FBD45DD766E0BDBFE423F5A39F1A0B6BA2031' ] = {
	"$": {
		"name": "Darkwing Duck, Disney's",
		"class": "Licensed",
		"catalog": "NES-DZ-NOE",
		"publisher": "Capcom",
		"developer": "Capcom",
		"region": "Germany",
		"players": "1",
		"date": "1993-07-18"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "443FC6CD",
				"sha1": "DD8FBD45DD766E0BDBFE423F5A39F1A0B6BA2031",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2007-08-11"
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
								"name": "FRG-DZ-0 PRG",
								"size": "128k",
								"crc": "FA6F93ED",
								"sha1": "1A1FCD763CA8C8327C43E79B38125747FCA90F64"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "FRG-DZ-0 CHR",
								"size": "128k",
								"crc": "AA9664D0",
								"sha1": "0D566832FEFC4979BBAF77BBA1B370EB40482744"
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
