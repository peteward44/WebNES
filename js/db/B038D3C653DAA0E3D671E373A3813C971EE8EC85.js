this.NesDb = this.NesDb || {};

NesDb[ 'B038D3C653DAA0E3D671E373A3813C971EE8EC85' ] = {
	"$": {
		"name": "Wild Gunman",
		"class": "Licensed",
		"catalog": "NES-WG-USA",
		"publisher": "Nintendo",
		"developer": "Nintendo",
		"region": "USA",
		"players": "1",
		"date": "1985-10"
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
				"system": "NES-NTSC",
				"crc": "B8B9ACA3",
				"sha1": "B038D3C653DAA0E3D671E373A3813C971EE8EC85",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-12-31"
			},
			"board": [
				{
					"$": {
						"type": "NES-NROM-128",
						"pcb": "NES-NROM-128-01",
						"mapper": "0"
					},
					"prg": [
						{
							"$": {
								"name": "HVC-WG-0 PRG",
								"size": "16k",
								"crc": "0D3CF705",
								"sha1": "2C6A0D239BF0140830A96A343871FFB207B3095C"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "HVC-WG-0 CHR",
								"size": "8k",
								"crc": "A5E04856",
								"sha1": "9194D89A34F687742216889CBB3E717A9AE81C92"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "3193"
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
