this.NesDb = this.NesDb || {};

NesDb[ 'A4A60000249DE76D2D4100CDB5C3DAE0C7137F15' ] = {
	"$": {
		"name": "Trojan",
		"class": "Licensed",
		"catalog": "NES-TJ-EEC",
		"publisher": "Capcom",
		"developer": "Capcom",
		"region": "Europe",
		"players": "2",
		"date": "1989-03-23"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "4F48B240",
				"sha1": "A4A60000249DE76D2D4100CDB5C3DAE0C7137F15",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2008-02-11"
			},
			"board": [
				{
					"$": {
						"type": "NES-UNROM",
						"pcb": "NES-UN-ROM-07",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-TJ-0 PRG",
								"size": "128k",
								"crc": "4F48B240",
								"sha1": "A4A60000249DE76D2D4100CDB5C3DAE0C7137F15"
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
								"type": "74xx161"
							}
						},
						{
							"$": {
								"type": "74xx32"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "3195A"
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
			"name": "Start with 1 life--player 1",
			"codes": [
				[
					"PENKXPLA"
				]
			]
		},
		{
			"name": "Start with 1 life--player 2",
			"codes": [
				[
					"PAOKNZLA"
				]
			]
		},
		{
			"name": "Start with 6 lives--player 1",
			"codes": [
				[
					"TENKXPLA"
				]
			]
		},
		{
			"name": "Start with 6 lives--player 2",
			"codes": [
				[
					"TAOKNZLA"
				]
			]
		},
		{
			"name": "Start with 9 lives--player 1",
			"codes": [
				[
					"PENKXPLE"
				]
			]
		},
		{
			"name": "Start with 9 lives--player 2",
			"codes": [
				[
					"PAOKNZLE"
				]
			]
		},
		{
			"name": "Start with an energy boost",
			"codes": [
				[
					"YASGUUAE"
				]
			]
		},
		{
			"name": "Start with a super energy boost",
			"codes": [
				[
					"TPSGUUAE"
				]
			]
		},
		{
			"name": "Start with half usual energy",
			"codes": [
				[
					"GASGUUAA"
				]
			]
		},
		{
			"name": "Set timer to 1:00",
			"codes": [
				[
					"PASKELZA"
				]
			]
		},
		{
			"name": "Freeze timer",
			"codes": [
				[
					"GXEPGKVS"
				]
			]
		}
	]
};
