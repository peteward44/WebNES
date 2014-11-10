this.NesDb = this.NesDb || {};

NesDb[ '29A9FC3DA955D368FDDB1BBA929652DB7BE9BA48' ] = {
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
				"prototype": "1",
				"crc": "8DB43824",
				"sha1": "29A9FC3DA955D368FDDB1BBA929652DB7BE9BA48",
				"dump": "ok",
				"dumper": "kevtris",
				"datedumped": "2012-04-16"
			},
			"board": [
				{
					"$": {
						"type": "NES-SKEPROM",
						"pcb": "NES-SKEPROM-01",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "DWDK PRG 28 CAPCOM",
								"size": "128k",
								"crc": "67AE2C8A",
								"sha1": "E04CB85581FE91C0635952F3513E998FA0C1973A"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "DWDK CHR 28 CAPCOM",
								"size": "128k",
								"crc": "A2CBEBD5",
								"sha1": "9F3D7403975D05A1A8601233054034B3B159FD53"
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
