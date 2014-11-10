this.NesDb = this.NesDb || {};

NesDb[ 'A7324E0A32800734AF4F02B0E85AC063C3736A31' ] = {
	"$": {
		"name": "Eliminator Boat Duel",
		"class": "Licensed",
		"catalog": "NES-6R-USA",
		"publisher": "Electro Brain",
		"developer": "Sculptured Software",
		"region": "USA",
		"players": "2",
		"date": "1991-11"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "059E0CDF",
				"sha1": "A7324E0A32800734AF4F02B0E85AC063C3736A31",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-01-25"
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
								"name": "NES-6R-0 PRG",
								"size": "128k",
								"crc": "9BF99C3A",
								"sha1": "57EEB18C1F24234ADBA51444C4550ACA1F9096C1"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-6R-0 CHR",
								"size": "128k",
								"crc": "3EC62C43",
								"sha1": "51D2C929F34A84A0832C7B97AE913BA3C00D396A"
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
			"name": "Start with 36 nitros",
			"codes": [
				[
					"IZEEZZGA"
				]
			]
		},
		{
			"name": "Start with 0 nitros",
			"codes": [
				[
					"AAEEZZGA"
				]
			]
		},
		{
			"name": "Almost infinite nitros--no on buoy stage",
			"codes": [
				[
					"SZVSVNVS"
				]
			]
		},
		{
			"name": "Boat starts with full turbo, steering, hull, max engine power",
			"codes": [
				[
					"IENEYPPA"
				]
			]
		},
		{
			"name": "Have full hull strength",
			"codes": [
				[
					"SXUGOEVS"
				]
			]
		}
	]
};
