this.NesDb = this.NesDb || {};

NesDb[ '0711BC8D0BF42A0829391C2320393A0D3DF2DD1F' ] = {
	"$": {
		"name": "Faxanadu",
		"class": "Licensed",
		"catalog": "NES-FX-UKV",
		"publisher": "Nintendo",
		"developer": "Hudson Soft",
		"region": "United Kingdom",
		"players": "1",
		"date": "1990-12-28"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-A",
				"crc": "76C161E3",
				"sha1": "0711BC8D0BF42A0829391C2320393A0D3DF2DD1F",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2011-06-23"
			},
			"board": [
				{
					"$": {
						"type": "NES-SGROM",
						"pcb": "NES-SGROM-04",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-FX-0 PRG",
								"size": "256k",
								"crc": "76C161E3",
								"sha1": "0711BC8D0BF42A0829391C2320393A0D3DF2DD1F"
							}
						}
					],
					"vram": [
						{
							"$": {
								"size": "8k"
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
			"name": "Double starting power",
			"codes": [
				[
					"AXXSNTAP"
				]
			]
		},
		{
			"name": "Triple starting power",
			"codes": [
				[
					"AUXSNTAP"
				]
			]
		},
		{
			"name": "Half normal amount of Gold",
			"codes": [
				[
					"IASEPSZA"
				]
			]
		},
		{
			"name": "Double normal amount of Gold",
			"codes": [
				[
					"GPSEPSZA"
				]
			]
		},
		{
			"name": "Infinite magic",
			"codes": [
				[
					"AEENEZZA"
				]
			]
		},
		{
			"name": "Jump in direction you are facing",
			"codes": [
				[
					"AVXVGPSZ"
				]
			]
		},
		{
			"name": "Infinite power",
			"codes": [
				[
					"GXOGZESV",
					"GXOKLESV"
				]
			]
		},
		{
			"name": "Slow mode",
			"codes": [
				[
					"AAUTAEOY",
					"AAKTPAKY",
					"AAUTZAPA"
				]
			]
		},
		{
			"name": "Infinite Gold",
			"codes": [
				[
					"SXXNUOSE",
					"SXUYUOSE",
					"SXUNUOSE"
				]
			]
		}
	]
};
