this.NesDb = this.NesDb || {};

NesDb[ 'F3250A728E7A1C21E011F187B90EE553C2D7FA7C' ] = {
	"$": {
		"name": "Gumshoe",
		"class": "Licensed",
		"catalog": "NES-GS-USA",
		"publisher": "Nintendo",
		"developer": "Nintendo",
		"region": "USA",
		"players": "1",
		"date": "1986-06"
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
				"crc": "BEB8AB01",
				"sha1": "F3250A728E7A1C21E011F187B90EE553C2D7FA7C",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-04-10"
			},
			"board": [
				{
					"$": {
						"type": "NES-GNROM",
						"pcb": "NES-GN-ROM-01",
						"mapper": "66"
					},
					"prg": [
						{
							"$": {
								"name": "NES-GS-0 PRG",
								"size": "128k",
								"crc": "7B5BD2DE",
								"sha1": "2FA68BBA2D10CF6BD0E2BE61AE29173925D42165"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-GS-0 CHR",
								"size": "32k",
								"crc": "DC371E9E",
								"sha1": "BB963C1709F6ABDD7D041AC43BC25F84B6445D1E"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx161"
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
			"name": "Start with 1 life",
			"codes": [
				[
					"PAUENALA"
				]
			]
		},
		{
			"name": "Start with 6 lives",
			"codes": [
				[
					"TAUENALA"
				]
			]
		},
		{
			"name": "Start with 9 lives",
			"codes": [
				[
					"PAUENALE"
				]
			]
		},
		{
			"name": "Start with 25 bullets",
			"codes": [
				[
					"IZSEEAAI"
				]
			]
		},
		{
			"name": "Start with 150 bullets",
			"codes": [
				[
					"PASEKAAA"
				]
			]
		},
		{
			"name": "Start with 250 bullets",
			"codes": [
				[
					"ZASEKAAA"
				]
			]
		},
		{
			"name": "Gain 1 bullet on pick-up",
			"codes": [
				[
					"PASAUALA"
				]
			]
		},
		{
			"name": "Gain 6 bullets on pick-up",
			"codes": [
				[
					"TASAUALA"
				]
			]
		},
		{
			"name": "Timer set to 04:00",
			"codes": [
				[
					"LAKEGYTA"
				]
			]
		},
		{
			"name": "Timer set to 10:00",
			"codes": [
				[
					"PAKEGYTE"
				]
			]
		},
		{
			"name": "Different attack waves",
			"codes": [
				[
					"SAKAVEKE"
				]
			]
		}
	]
};
