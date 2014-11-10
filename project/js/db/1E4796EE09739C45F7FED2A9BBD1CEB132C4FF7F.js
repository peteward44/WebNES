this.NesDb = this.NesDb || {};

NesDb[ '1E4796EE09739C45F7FED2A9BBD1CEB132C4FF7F' ] = {
	"$": {
		"name": "DuckTales, Disney's",
		"class": "Licensed",
		"catalog": "NES-UK-EEC",
		"publisher": "Capcom",
		"developer": "Capcom",
		"region": "Europe",
		"players": "1",
		"date": "1990-12-14"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "D029F841",
				"sha1": "1E4796EE09739C45F7FED2A9BBD1CEB132C4FF7F",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2008-01-26"
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
								"name": "PAL-UK-0 PRG",
								"size": "128k",
								"crc": "D029F841",
								"sha1": "1E4796EE09739C45F7FED2A9BBD1CEB132C4FF7F"
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
			"name": "Infinite lives",
			"codes": [
				[
					"SXUIEKVK"
				]
			]
		},
		{
			"name": "Infinite hit points",
			"codes": [
				[
					"ATVVXLEZ"
				]
			]
		},
		{
			"name": "Start with 1 life",
			"codes": [
				[
					"AAESULZA"
				]
			]
		},
		{
			"name": "Start with 6 lives",
			"codes": [
				[
					"IAESULZA"
				]
			]
		},
		{
			"name": "Start with 9 lives",
			"codes": [
				[
					"AAESULZE"
				]
			]
		},
		{
			"name": "Lose half normal hit points (in easy game)",
			"codes": [
				[
					"LAVTNLPA"
				]
			]
		},
		{
			"name": "Freeze timer",
			"codes": [
				[
					"OVUVAZSV"
				]
			]
		},
		{
			"name": "Double usual time",
			"codes": [
				[
					"ZAXSKLIE",
					"SXNIUKOU",
					"SZNISESU"
				]
			]
		}
	]
};
