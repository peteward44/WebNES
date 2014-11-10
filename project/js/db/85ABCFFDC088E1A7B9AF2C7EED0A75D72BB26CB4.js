this.NesDb = this.NesDb || {};

NesDb[ '85ABCFFDC088E1A7B9AF2C7EED0A75D72BB26CB4' ] = {
	"$": {
		"name": "Castelian",
		"class": "Licensed",
		"catalog": "NES-4C-UKV",
		"publisher": "Storm",
		"developer": "Hewson",
		"portdeveloper": "BITS Studios",
		"region": "United Kingdom",
		"players": "1",
		"date": "1992"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-A",
				"prototype": "1",
				"crc": "CF7CA9BD",
				"sha1": "85ABCFFDC088E1A7B9AF2C7EED0A75D72BB26CB4",
				"dump": "ok",
				"dumper": "TheRedEye",
				"datedumped": "2012-04-23"
			},
			"board": [
				{
					"$": {
						"type": "NES-UNEPROM",
						"pcb": "NES-UNEPROM-01",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "CASTELIAN 2/4/92 CHK$985A",
								"size": "128k",
								"crc": "CF7CA9BD",
								"sha1": "85ABCFFDC088E1A7B9AF2C7EED0A75D72BB26CB4"
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
								"type": "3197A"
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
