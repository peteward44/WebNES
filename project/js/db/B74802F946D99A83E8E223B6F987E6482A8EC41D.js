this.NesDb = this.NesDb || {};

NesDb[ 'B74802F946D99A83E8E223B6F987E6482A8EC41D' ] = {
	"$": {
		"name": "MIG-29 Soviet Fighter",
		"class": "Unlicensed",
		"catalog": "CAM-MG",
		"publisher": "Camerica",
		"developer": "Codemasters",
		"region": "USA",
		"players": "1",
		"date": "1992"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "E62E3382",
				"sha1": "B74802F946D99A83E8E223B6F987E6482A8EC41D",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-12-26"
			},
			"board": [
				{
					"$": {
						"type": "CAMERICA-BF9093",
						"pcb": "BIC-48",
						"mapper": "71"
					},
					"prg": [
						{
							"$": {
								"name": "COBIC MG-V1",
								"size": "128k",
								"crc": "E62E3382",
								"sha1": "B74802F946D99A83E8E223B6F987E6482A8EC41D"
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
								"type": "BF9093"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "CIC Stun"
							}
						}
					],
					"pad": [
						{
							"$": {
								"h": "1",
								"v": "0"
							}
						}
					]
				}
			]
		}
	],
	"gameGenieCodes": [
		{
			"name": "Start with 1 life",
			"codes": [
				[
					"AANGGPLA"
				]
			]
		},
		{
			"name": "Start with 6 lives",
			"codes": [
				[
					"IANGGPLA"
				]
			]
		},
		{
			"name": "Start with 9 lives",
			"codes": [
				[
					"AANGGPLE"
				]
			]
		},
		{
			"name": "Start with 255 lives",
			"codes": [
				[
					"VYNGGPLE"
				]
			]
		},
		{
			"name": "Keep weapon after death",
			"codes": [
				[
					"SZSSOLVG"
				]
			]
		},
		{
			"name": "Start with best weapon",
			"codes": [
				[
					"LANKPPAA"
				]
			]
		},
		{
			"name": "More time to refuel",
			"codes": [
				[
					"NNEOZAAE"
				]
			]
		},
		{
			"name": "Less time to refuel",
			"codes": [
				[
					"LEEOZAAA"
				]
			]
		},
		{
			"name": "Start on mission 2",
			"codes": [
				[
					"OZOOYPSX",
					"PAXPAPIP",
					"XIXPZPPS"
				]
			]
		},
		{
			"name": "Start on mission 3",
			"codes": [
				[
					"OZOOYPSX",
					"ZAXPAPIP",
					"XIXPZPPS"
				]
			]
		},
		{
			"name": "Start on mission 4",
			"codes": [
				[
					"OZOOYPSX",
					"LAXPAPIP",
					"XIXPZPPS"
				]
			]
		},
		{
			"name": "Start on mission 5",
			"codes": [
				[
					"OZOOYPSX",
					"GAXPAPIP",
					"XIXPZPPS"
				]
			]
		},
		{
			"name": "Start on mission 6",
			"codes": [
				[
					"OZOOYPSX",
					"IAXPAPIP",
					"XIXPZPPS"
				]
			]
		}
	]
};
