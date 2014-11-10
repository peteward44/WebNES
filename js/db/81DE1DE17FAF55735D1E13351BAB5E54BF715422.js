this.NesDb = this.NesDb || {};

NesDb[ '81DE1DE17FAF55735D1E13351BAB5E54BF715422' ] = {
	"$": {
		"name": "Time Lord",
		"class": "Licensed",
		"catalog": "NES-LZ-UKV",
		"publisher": "Milton Bradley",
		"developer": "Rare",
		"region": "United Kingdom",
		"players": "1",
		"date": "1990"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-A",
				"crc": "9198279E",
				"sha1": "81DE1DE17FAF55735D1E13351BAB5E54BF715422",
				"dump": "ok",
				"dumper": "Mark_K",
				"datedumped": "2011-12-06"
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
								"name": "PAL-LZ-0 PRG",
								"size": "128k",
								"crc": "9198279E",
								"sha1": "81DE1DE17FAF55735D1E13351BAB5E54BF715422"
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
								"type": "3197A"
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
