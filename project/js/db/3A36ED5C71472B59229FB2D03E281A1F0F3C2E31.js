this.NesDb = this.NesDb || {};

NesDb[ '3A36ED5C71472B59229FB2D03E281A1F0F3C2E31' ] = {
	"$": {
		"name": "Mighty Bomb Jack",
		"altname": "マイティボンジャック",
		"class": "Licensed",
		"catalog": "TCF-MB",
		"publisher": "Tecmo",
		"developer": "Tecmo",
		"region": "Japan",
		"players": "1",
		"date": "1986-04-24"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "9C521240",
				"sha1": "3A36ED5C71472B59229FB2D03E281A1F0F3C2E31",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-12-24"
			},
			"board": [
				{
					"$": {
						"type": "HVC-CNROM+SECURITY",
						"pcb": "HVC-CNROM-256K-01",
						"mapper": "185"
					},
					"prg": [
						{
							"$": {
								"name": "TCF-MB-0 PRG",
								"size": "32k",
								"crc": "AA755715",
								"sha1": "AE5CC14F59A7E484B3D05471A2C31D2273C9398D"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "TCF-MB-0 CHR",
								"size": "8k",
								"crc": "5425A4D0",
								"sha1": "09EB9D93B680C9EEFDE5EE6E16CF81DE931CCCB9"
							},
							"pin": [
								{
									"$": {
										"number": "26",
										"function": "CE"
									}
								},
								{
									"$": {
										"number": "27",
										"function": "/CE"
									}
								}
							]
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx161"
							}
						}
					],
					"pad": [
						{
							"$": {
								"h": "0",
								"v": "1"
							}
						}
					]
				}
			]
		}
	],
	"gameGenieCodes": [
		{
			"name": "1 life",
			"codes": [
				[
					"PAOEZZLA"
				]
			]
		},
		{
			"name": "6 lives",
			"codes": [
				[
					"TAOEZZLA"
				]
			]
		},
		{
			"name": "9 lives",
			"codes": [
				[
					"PAOEZZLE"
				]
			]
		},
		{
			"name": "Infinite lives",
			"codes": [
				[
					"VZUEZNVK"
				]
			]
		},
		{
			"name": "Less time in game",
			"codes": [
				[
					"AKOEGYAT"
				]
			]
		},
		{
			"name": "More time in game",
			"codes": [
				[
					"EEOEGYAT"
				]
			]
		},
		{
			"name": "Stop timer",
			"codes": [
				[
					"SXXALNVK"
				]
			]
		},
		{
			"name": "Enemies don't return from coin transformation",
			"codes": [
				[
					"SXOESEVK"
				]
			]
		},
		{
			"name": "Power coins are not used up",
			"codes": [
				[
					"SZEEXUVK"
				]
			]
		},
		{
			"name": "Disable torture room",
			"codes": [
				[
					"OESPNTLA"
				]
			]
		},
		{
			"name": "Jump through walls",
			"codes": [
				[
					"ZEUOUAPA"
				]
			]
		}
	]
};
