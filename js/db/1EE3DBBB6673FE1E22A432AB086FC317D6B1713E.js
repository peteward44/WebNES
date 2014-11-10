this.NesDb = this.NesDb || {};

NesDb[ '1EE3DBBB6673FE1E22A432AB086FC317D6B1713E' ] = {
	"$": {
		"name": "Cobra Triangle",
		"class": "Licensed",
		"catalog": "NES-CU-USA",
		"publisher": "Nintendo",
		"developer": "Rare",
		"region": "USA",
		"players": "1",
		"date": "1989-07"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "C8AD4F32",
				"sha1": "1EE3DBBB6673FE1E22A432AB086FC317D6B1713E",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-05-28"
			},
			"board": [
				{
					"$": {
						"type": "NES-ANROM",
						"pcb": "NES-ANROM-01",
						"mapper": "7"
					},
					"prg": [
						{
							"$": {
								"name": "NES-CU-0 PRG",
								"size": "128k",
								"crc": "C8AD4F32",
								"sha1": "1EE3DBBB6673FE1E22A432AB086FC317D6B1713E"
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
								"type": "6113A"
							}
						}
					]
				}
			]
		},
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "C8AD4F32",
				"sha1": "1EE3DBBB6673FE1E22A432AB086FC317D6B1713E",
				"dump": "ok",
				"dumper": "polarz",
				"datedumped": "2006-05-15"
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
								"name": "NES-CU-0 PRG",
								"size": "128k",
								"crc": "C8AD4F32",
								"sha1": "1EE3DBBB6673FE1E22A432AB086FC317D6B1713E"
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
