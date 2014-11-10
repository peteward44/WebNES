this.NesDb = this.NesDb || {};

NesDb[ '62A1FE0392FFD226D954CA1A02109DA58E394F1F' ] = {
	"$": {
		"name": "G.I. Joe: The Atlantis Factor",
		"class": "Licensed",
		"catalog": "NES-6I-USA",
		"publisher": "Capcom",
		"developer": "KID",
		"region": "USA",
		"players": "1",
		"date": "1992-03"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "8C8DEDB6",
				"sha1": "62A1FE0392FFD226D954CA1A02109DA58E394F1F",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-07-03"
			},
			"board": [
				{
					"$": {
						"type": "NES-TLROM",
						"pcb": "NES-TLROM-03",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "NES-6I-0 PRG",
								"size": "128k",
								"crc": "EB71A6C5",
								"sha1": "0631A3719EE6E066876A9E719113805DF54FD1E2"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-6I-0 CHR",
								"size": "256k",
								"crc": "8AFCBF07",
								"sha1": "AA4128268DE80E78577D26CB89F455A941FC2BA6"
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
			"name": "Start with 500 bullets",
			"codes": [
				[
					"IAEELGPA"
				]
			]
		},
		{
			"name": "Start with 1 life",
			"codes": [
				[
					"PENVSYIA"
				]
			]
		},
		{
			"name": "Infinite energy",
			"codes": [
				[
					"OUSTLSOO"
				]
			]
		},
		{
			"name": "Don't flash after getting hit",
			"codes": [
				[
					"AESVPSAY"
				]
			]
		},
		{
			"name": "Flash about half as long after getting hit",
			"codes": [
				[
					"PUSVPSAN"
				]
			]
		},
		{
			"name": "Infinite time",
			"codes": [
				[
					"AASEZIPA"
				]
			]
		},
		{
			"name": "Each Pow worth increases player level by one",
			"codes": [
				[
					"GAXPPYPA"
				]
			]
		},
		{
			"name": "Infinite bullets after you collect a power up shell",
			"codes": [
				[
					"GXSUZVSE",
					"GXVLTVSE"
				]
			]
		}
	]
};
