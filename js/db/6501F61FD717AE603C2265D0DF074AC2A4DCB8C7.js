this.NesDb = this.NesDb || {};

NesDb[ '6501F61FD717AE603C2265D0DF074AC2A4DCB8C7' ] = {
	"$": {
		"name": "Faxanadu",
		"altname": "ファザナドゥ",
		"class": "Licensed",
		"catalog": "HFC-FX",
		"publisher": "Hudson Soft",
		"developer": "Hudson Soft",
		"region": "Japan",
		"players": "1",
		"date": "1987-11-16"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "A80FA181",
				"sha1": "6501F61FD717AE603C2265D0DF074AC2A4DCB8C7",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-04-29"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SGROM",
						"pcb": "HVC-SGROM-02",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "HFC-FX-0 PRG",
								"size": "256k",
								"crc": "A80FA181",
								"sha1": "6501F61FD717AE603C2265D0DF074AC2A4DCB8C7"
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
								"type": "MMC1"
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
