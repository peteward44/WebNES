this.NesDb = this.NesDb || {};

NesDb[ 'D0C6AF83C44F2DC90BCB0792A69C93F8D167F988' ] = {
	"$": {
		"name": "Faxanadu",
		"class": "Licensed",
		"catalog": "NES-FX-USA",
		"publisher": "Nintendo",
		"developer": "Hudson Soft",
		"region": "USA",
		"players": "1",
		"date": "1989-08"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"revision": "A",
				"crc": "E71DB268",
				"sha1": "D0C6AF83C44F2DC90BCB0792A69C93F8D167F988",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-03-10"
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
								"name": "NES-FX-1 PRG",
								"size": "256k",
								"crc": "E71DB268",
								"sha1": "D0C6AF83C44F2DC90BCB0792A69C93F8D167F988"
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
