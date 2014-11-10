this.NesDb = this.NesDb || {};

NesDb[ 'BE9DD65BE8DB897978DD34533DD3A037784A8EE9' ] = {
	"$": {
		"name": "Contra",
		"altname": "コントラ　魂斗羅",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "KON-RC826",
		"publisher": "Konami",
		"developer": "Konami",
		"region": "Japan",
		"players": "2",
		"date": "1988-02-09"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "B27B8CF4",
				"sha1": "BE9DD65BE8DB897978DD34533DD3A037784A8EE9",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-03"
			},
			"board": [
				{
					"$": {
						"type": "KONAMI-VRC-2",
						"pcb": "LROG009-00",
						"mapper": "23"
					},
					"prg": [
						{
							"$": {
								"size": "128k",
								"crc": "919AC0FE",
								"sha1": "96F464D3DD2C731A7166B18157793E9292595F34"
							}
						}
					],
					"chr": [
						{
							"$": {
								"size": "128k",
								"crc": "C6172032",
								"sha1": "ACA9049B53DD73055F5A0AA6A8D85CF72B50BB69"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "<VRC2>"
							},
							"pin": [
								{
									"$": {
										"number": "3",
										"function": "PRG A1"
									}
								},
								{
									"$": {
										"number": "4",
										"function": "PRG A0"
									}
								},
								{
									"$": {
										"number": "21",
										"function": "CHR A10"
									}
								},
								{
									"$": {
										"number": "22",
										"function": "CHR A16"
									}
								},
								{
									"$": {
										"number": "23",
										"function": "CHR A11"
									}
								},
								{
									"$": {
										"number": "24",
										"function": "CHR A13"
									}
								},
								{
									"$": {
										"number": "25",
										"function": "CHR A14"
									}
								},
								{
									"$": {
										"number": "26",
										"function": "CHR A12"
									}
								},
								{
									"$": {
										"number": "27",
										"function": "CHR A15"
									}
								},
								{
									"$": {
										"number": "28",
										"function": "NC"
									}
								}
							]
						}
					]
				}
			]
		}
	],
	"gameGenieCodes": [
		{
			"name": "Start with infinite lives",
			"codes": [
				[
					"SLAIUZ"
				]
			]
		},
		{
			"name": "Keep weapons after losing a life",
			"codes": [
				[
					"GXIIUX"
				]
			]
		},
		{
			"name": "Become invincible-- enemies don't shoot at you",
			"codes": [
				[
					"SLTIYG"
				]
			]
		},
		{
			"name": "Start new life with machine gun",
			"codes": [
				[
					"PEIIXZ"
				]
			]
		},
		{
			"name": "Start new life with flame-thrower",
			"codes": [
				[
					"ZEIIXZ"
				]
			]
		},
		{
			"name": "Start new life with spread gun",
			"codes": [
				[
					"LEIIXZ"
				]
			]
		},
		{
			"name": "Start new life with laser",
			"codes": [
				[
					"GEIIXZ"
				]
			]
		}
	]
};
