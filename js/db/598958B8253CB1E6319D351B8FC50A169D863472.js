this.NesDb = this.NesDb || {};

NesDb[ '598958B8253CB1E6319D351B8FC50A169D863472' ] = {
	"$": {
		"name": "Wild Gunman",
		"altname": "ワイルドガンマン",
		"class": "Licensed",
		"catalog": "HVC-WG",
		"publisher": "Nintendo",
		"developer": "Nintendo",
		"region": "Japan",
		"players": "1",
		"date": "1984-02-18"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "zapper",
						"name": "Zapper Light Gun"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"revision": "A",
				"crc": "5112DC21",
				"sha1": "598958B8253CB1E6319D351B8FC50A169D863472",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-03-18"
			},
			"board": [
				{
					"$": {
						"type": "HVC-NROM-128",
						"pcb": "2I",
						"mapper": "0"
					},
					"prg": [
						{
							"$": {
								"size": "16k",
								"crc": "389960DB",
								"sha1": "6B38F2C86EF27F653A2BDB9C682AC0BC981C7DB6"
							}
						}
					],
					"chr": [
						{
							"$": {
								"size": "8k",
								"crc": "A5E04856",
								"sha1": "9194D89A34F687742216889CBB3E717A9AE81C92"
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
			"name": "Infinite lives",
			"codes": [
				[
					"GZOGVYVG"
				]
			]
		},
		{
			"name": "Infinite bullets",
			"codes": [
				[
					"GZNIPAVG"
				]
			]
		},
		{
			"name": "Start with double normal bullets",
			"codes": [
				[
					"AXVIEOYA"
				]
			]
		},
		{
			"name": "Start with triple normal bullets",
			"codes": [
				[
					"AUVIEOYA"
				]
			]
		},
		{
			"name": "Start with half normal bullets",
			"codes": [
				[
					"AEVIEOYE"
				]
			]
		},
		{
			"name": "Start with 1 life",
			"codes": [
				[
					"YEUISPLE",
					"PENGVALA"
				]
			]
		},
		{
			"name": "Start with 10 lives",
			"codes": [
				[
					"ZEUISPLE",
					"ZENGVALE"
				]
			]
		},
		{
			"name": "Start with 15 lives",
			"codes": [
				[
					"YEUISPLE",
					"YENGVALE"
				]
			]
		},
		{
			"name": "Shoot 5 baddies to finish level",
			"codes": [
				[
					"IENSUOZA",
					"IEUSSUZA"
				]
			]
		}
	]
};
