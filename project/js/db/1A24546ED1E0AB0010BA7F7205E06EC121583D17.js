this.NesDb = this.NesDb || {};

NesDb[ '1A24546ED1E0AB0010BA7F7205E06EC121583D17' ] = {
	"$": {
		"name": "Motor City Patrol",
		"class": "Licensed",
		"catalog": "NES-5M-USA",
		"publisher": "Matchbox",
		"developer": "Source",
		"region": "USA",
		"players": "1",
		"date": "1992-01"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "0A0926BD",
				"sha1": "1A24546ED1E0AB0010BA7F7205E06EC121583D17",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-09-17"
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
								"name": "NES-5M-0 PRG",
								"size": "128k",
								"crc": "7884B56E",
								"sha1": "B17529FAE693198CE42A6E2B4C872699FC1C1D65"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-5M-0 CHR",
								"size": "128k",
								"crc": "DDCC6E8D",
								"sha1": "ADFA2AD4847E05DC3D2F1EF52E98E463A522C481"
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
			"name": "Slow down timer",
			"codes": [
				[
					"ANOEIOGL"
				]
			]
		},
		{
			"name": "Speed up timer",
			"codes": [
				[
					"YOOEIOGU"
				]
			]
		},
		{
			"name": "Start with 5 merits",
			"codes": [
				[
					"IAOXILAA"
				]
			]
		},
		{
			"name": "Don't take damage",
			"codes": [
				[
					"AEEXGTPA"
				]
			]
		},
		{
			"name": "Free equipment",
			"codes": [
				[
					"GXUESKVK",
					"APUAUGEI"
				]
			]
		}
	]
};
