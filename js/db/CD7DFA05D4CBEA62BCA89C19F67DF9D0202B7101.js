this.NesDb = this.NesDb || {};

NesDb[ 'CD7DFA05D4CBEA62BCA89C19F67DF9D0202B7101' ] = {
	"$": {
		"name": "Phantom Fighter",
		"class": "Licensed",
		"catalog": "NES-KY-USA",
		"publisher": "FCI",
		"developer": "Marionette",
		"region": "USA",
		"players": "1",
		"date": "1990-04"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "CC37094C",
				"sha1": "CD7DFA05D4CBEA62BCA89C19F67DF9D0202B7101",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-01-25"
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
								"name": "NES-KY-0 PRG",
								"size": "256k",
								"crc": "CC37094C",
								"sha1": "CD7DFA05D4CBEA62BCA89C19F67DF9D0202B7101"
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
			"name": "Infinite energy",
			"codes": [
				[
					"SXSZLUSE"
				]
			]
		},
		{
			"name": "Start with Sword",
			"codes": [
				[
					"VTVKEGSA",
					"KAVKOGNA"
				]
			]
		},
		{
			"name": "Start with Bell",
			"codes": [
				[
					"VTVKEGSA",
					"SAVKOGNA"
				]
			]
		},
		{
			"name": "Start with Tonten",
			"codes": [
				[
					"VTVKEGSA",
					"UAVKOGNA"
				]
			]
		},
		{
			"name": "Start with Talisman",
			"codes": [
				[
					"VTVKEGSA",
					"XAVKOGNA"
				]
			]
		},
		{
			"name": "Start with 3 Scrolls",
			"codes": [
				[
					"LASKNGAA",
					"VAVKOGNA"
				]
			]
		},
		{
			"name": "Start with 6 Scrolls",
			"codes": [
				[
					"TASKNGAA",
					"VAVKOGNA"
				]
			]
		},
		{
			"name": "Take less damage when attacked",
			"codes": [
				[
					"OVSZPLSV",
					"PESZZLAA"
				]
			]
		}
	]
};
