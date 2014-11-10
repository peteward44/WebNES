this.NesDb = this.NesDb || {};

NesDb[ 'D3C4B6BA78D0405AD95D5D5C17C10F0D4DB27C6A' ] = {
	"$": {
		"name": "Cobra Triangle",
		"class": "Licensed",
		"catalog": "NES-CU-EEC",
		"publisher": "Nintendo",
		"developer": "Rare",
		"region": "Europe",
		"players": "1",
		"date": "1989-10-25"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "898E4232",
				"sha1": "D3C4B6BA78D0405AD95D5D5C17C10F0D4DB27C6A",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2008-02-05"
			},
			"board": [
				{
					"$": {
						"type": "NES-ANROM",
						"pcb": "NES-ANROM-02",
						"mapper": "7"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-CU-0 PRG",
								"size": "128k",
								"crc": "898E4232",
								"sha1": "D3C4B6BA78D0405AD95D5D5C17C10F0D4DB27C6A"
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
								"type": "74xx02"
							}
						},
						{
							"$": {
								"type": "74xx161"
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
			"name": "Infinite continue options",
			"codes": [
				[
					"SZUXZVVK"
				]
			]
		},
		{
			"name": "Don't lose life for damage",
			"codes": [
				[
					"SZEVNOVK"
				]
			]
		},
		{
			"name": "Don't lose life for Time Out",
			"codes": [
				[
					"SZVTSOVK"
				]
			]
		},
		{
			"name": "Never lose your power-ups",
			"codes": [
				[
					"ENXTPVSA",
					"LEXTZVAX"
				]
			]
		},
		{
			"name": "Gain an extra minute",
			"codes": [
				[
					"VVXEAUSE",
					"LOXEPLIP"
				]
			]
		},
		{
			"name": "Infinite lives",
			"codes": [
				[
					"SZEVNOVK",
					"SZVTSOVK"
				]
			]
		}
	]
};
