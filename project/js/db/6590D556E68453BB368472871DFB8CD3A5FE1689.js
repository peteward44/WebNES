this.NesDb = this.NesDb || {};

NesDb[ '6590D556E68453BB368472871DFB8CD3A5FE1689' ] = {
	"$": {
		"name": "Bionic Commando",
		"class": "Licensed",
		"catalog": "NES-CM-EEC",
		"publisher": "Capcom",
		"developer": "Capcom",
		"region": "Europe",
		"players": "1",
		"date": "1990-10-26"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "FA7EE642",
				"sha1": "6590D556E68453BB368472871DFB8CD3A5FE1689",
				"dump": "ok",
				"dumper": "piteta",
				"datedumped": "2007-08-03"
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
								"name": "PAL-CM-0 PRG",
								"size": "256k",
								"crc": "FA7EE642",
								"sha1": "6590D556E68453BB368472871DFB8CD3A5FE1689"
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
								"type": "3195A"
							}
						}
					]
				}
			]
		}
	],
	"gameGenieCodes": [
		{
			"name": "Infinite lives in main game",
			"codes": [
				[
					"SZNUIYVG"
				]
			]
		},
		{
			"name": "Infinite lives in sub-game",
			"codes": [
				[
					"SXUEZPVG"
				]
			]
		},
		{
			"name": "Start with 1 life",
			"codes": [
				[
					"AAUGSZZA"
				]
			]
		},
		{
			"name": "Start with double lives",
			"codes": [
				[
					"IAUGSZZA"
				]
			]
		},
		{
			"name": "Start with triple lives",
			"codes": [
				[
					"AAUGSZZE"
				]
			]
		},
		{
			"name": "Start with 3-way gun",
			"codes": [
				[
					"VGKKNXUK"
				]
			]
		},
		{
			"name": "Don't take damage from bullets and collisions",
			"codes": [
				[
					"SXSTYNVK"
				]
			]
		},
		{
			"name": "Don't take damage from spikes",
			"codes": [
				[
					"VTNZXVVK"
				]
			]
		},
		{
			"name": "Don't take damage from bullets and collisions in sub-game",
			"codes": [
				[
					"SZUOAOVK"
				]
			]
		},
		{
			"name": "Autofire--main game",
			"codes": [
				[
					"XYXUUOEN"
				]
			]
		},
		{
			"name": "Use with BIO Code 11 for improved autofire with gun",
			"codes": [
				[
					"AAKUOOZA"
				]
			]
		},
		{
			"name": "Start with 3 life energy capsules",
			"codes": [
				[
					"LAUKOZAA",
					"XTUKUXVU"
				]
			]
		}
	]
};
