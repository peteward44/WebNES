this.NesDb = this.NesDb || {};

NesDb[ 'A2D029E51A8E3D92BA17CB2E0A7D96FBC91D96CF' ] = {
	"$": {
		"name": "Time Lord",
		"class": "Licensed",
		"catalog": "NES-LZ-USA",
		"publisher": "Milton Bradley",
		"developer": "Rare",
		"region": "USA",
		"players": "1",
		"date": "1990-09"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "13D5B1A4",
				"sha1": "A2D029E51A8E3D92BA17CB2E0A7D96FBC91D96CF",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-12-17"
			},
			"board": [
				{
					"$": {
						"type": "NES-AMROM",
						"pcb": "NES-AMROM-01",
						"mapper": "7"
					},
					"prg": [
						{
							"$": {
								"name": "NES-LZ-0 PRG",
								"size": "128k",
								"crc": "13D5B1A4",
								"sha1": "A2D029E51A8E3D92BA17CB2E0A7D96FBC91D96CF"
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
			"name": "Infinite lives",
			"codes": [
				[
					"SZUKSKVK"
				]
			]
		},
		{
			"name": "Start with 1 life",
			"codes": [
				[
					"PEEKYPLA"
				]
			]
		},
		{
			"name": "Start with 6 lives",
			"codes": [
				[
					"TEEKYPLA"
				]
			]
		},
		{
			"name": "Start with 9 lives",
			"codes": [
				[
					"PEEKYPLE"
				]
			]
		},
		{
			"name": "Moonwalking (do not use with super speed)",
			"codes": [
				[
					"AAXKXTPA",
					"PAUGVTAA"
				]
			]
		},
		{
			"name": "Super speed (do not use with Moonwalking)",
			"codes": [
				[
					"PESKOTAA",
					"PEOGSTAA"
				]
			]
		}
	]
};
