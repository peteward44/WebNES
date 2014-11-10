this.NesDb = this.NesDb || {};

NesDb[ '847D56E43754E402666A91188520737094E9ECFA' ] = {
	"$": {
		"name": "Castelian",
		"class": "Licensed",
		"catalog": "NES-4C-USA",
		"publisher": "Triffix",
		"developer": "Hewson",
		"portdeveloper": "BITS Studios",
		"region": "USA",
		"players": "1",
		"date": "1991-06"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "0AE6C9E2",
				"sha1": "847D56E43754E402666A91188520737094E9ECFA",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-03-19"
			},
			"board": [
				{
					"$": {
						"type": "NES-UNROM",
						"pcb": "NES-UNROM-09",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "NES-4C-0 PRG",
								"size": "128k",
								"crc": "0AE6C9E2",
								"sha1": "847D56E43754E402666A91188520737094E9ECFA"
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
								"type": "6113B1"
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
					"PEVGYPLA"
				]
			]
		},
		{
			"name": "Start with 6 lives",
			"codes": [
				[
					"TEVGYPLA"
				]
			]
		},
		{
			"name": "Start with 9 lives",
			"codes": [
				[
					"PEVGYPLE"
				]
			]
		},
		{
			"name": "Infinite lives",
			"codes": [
				[
					"SLOKZLVI"
				]
			]
		},
		{
			"name": "5 continues",
			"codes": [
				[
					"IAOGTZZA"
				]
			]
		},
		{
			"name": "8 continues",
			"codes": [
				[
					"AAOGTZZE"
				]
			]
		},
		{
			"name": "Infinite time",
			"codes": [
				[
					"SZNXYAVG"
				]
			]
		}
	]
};
