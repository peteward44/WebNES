this.NesDb = this.NesDb || {};

NesDb[ '512DAC9D8CB201C64176325FC7BD685DE14C4BD8' ] = {
	"$": {
		"name": "Thunderbirds",
		"class": "Licensed",
		"catalog": "NES-T5-USA",
		"publisher": "Activision",
		"developer": "Pack-In-Video",
		"region": "USA",
		"players": "1",
		"date": "1990-09"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "2DDC2DC3",
				"sha1": "512DAC9D8CB201C64176325FC7BD685DE14C4BD8",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-07-03"
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
								"name": "NES-T5-0 PRG",
								"size": "128k",
								"crc": "A2DA133B",
								"sha1": "7725D3D02C99CB391469FED9707F7478D0D2123B"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-T5-0 CHR",
								"size": "128k",
								"crc": "757D3DF5",
								"sha1": "971774CC60F36C05658B9734FB945D1A26496AE3"
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
			"name": "Don't lose life points when colliding with enemy",
			"codes": [
				[
					"SXNTOVVK"
				]
			]
		},
		{
			"name": "Don't lose life points when hit",
			"codes": [
				[
					"SZUVUNVK"
				]
			]
		},
		{
			"name": "Don't lose energy points when colliding with enemy",
			"codes": [
				[
					"SXNVVVVK"
				]
			]
		},
		{
			"name": "Don't lose energy points when hit",
			"codes": [
				[
					"SZKVENVK"
				]
			]
		},
		{
			"name": "81 Days to defeat Hood",
			"codes": [
				[
					"PSEKIVGL"
				]
			]
		},
		{
			"name": "30 Days to defeat Hood",
			"codes": [
				[
					"TOEKIVGU"
				]
			]
		},
		{
			"name": "Limited forward movement",
			"codes": [
				[
					"ATXEANAA",
					"ATXEGNAA"
				]
			]
		},
		{
			"name": "Faster craft",
			"codes": [
				[
					"GEXETTZA",
					"GEXEZTZA"
				]
			]
		},
		{
			"name": "Full firepower on first pick up",
			"codes": [
				[
					"EZUAETEG",
					"XTUAKVEK"
				]
			]
		}
	]
};
