this.NesDb = this.NesDb || {};

NesDb[ 'FC2427FB8D4A33B5C1B9BE11D21EA2ED724DC57F' ] = {
	"$": {
		"name": "Gremlins 2: The New Batch",
		"class": "Licensed",
		"catalog": "NES-2Z-USA",
		"publisher": "Sunsoft",
		"developer": "Sunsoft",
		"region": "USA",
		"players": "1",
		"date": "1990-10"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"prototype": "1",
				"crc": "DCEC4A59",
				"sha1": "FC2427FB8D4A33B5C1B9BE11D21EA2ED724DC57F",
				"dump": "ok",
				"dumper": "Skrybe",
				"datedumped": "2012-04-04"
			},
			"board": [
				{
					"$": {
						"type": "NES-TKEPROM",
						"pcb": "NES-TKEPROM-01",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "GREMLINS 2 P",
								"size": "128k",
								"crc": "4D04E95B",
								"sha1": "3056B7D5212D8645815D744FA892AA2F80AB6BC7"
							}
						}
					],
					"chr": [
						{
							"$": {
								"id": "0",
								"name": "GREMLINS 2 C1",
								"size": "128k",
								"crc": "04118A24",
								"sha1": "1200C3DBA791606EEB19AEFC569121125CEF1124"
							}
						},
						{
							"$": {
								"id": "1",
								"name": "GREMLINS 2 C0",
								"size": "128k",
								"crc": "70F2E9D5",
								"sha1": "5A262CC2ECB8F760D1BFA4F6DCFD4BF07AC037D1"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx139"
							}
						},
						{
							"$": {
								"type": "MMC3A"
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
		}
	],
	"gameGenieCodes": [
		{
			"name": "Start with 5 lives",
			"codes": [
				[
					"GAEGEAAA"
				]
			]
		},
		{
			"name": "Start with 10 lives",
			"codes": [
				[
					"PAEGEAAE"
				]
			]
		},
		{
			"name": "Start with 3 balloons",
			"codes": [
				[
					"LAEGSAPA"
				]
			]
		},
		{
			"name": "Start with 6 balloons",
			"codes": [
				[
					"TAEGSAPA"
				]
			]
		},
		{
			"name": "Infinite lives",
			"codes": [
				[
					"SZNETEVK"
				]
			]
		},
		{
			"name": "Infinite balloons",
			"codes": [
				[
					"SZXEUXVK"
				]
			]
		},
		{
			"name": "Don't take damage from monsters (or harmful surfaces)",
			"codes": [
				[
					"SXKEZPVG"
				]
			]
		},
		{
			"name": "Start with only 1 heart",
			"codes": [
				[
					"ZAEKXATA",
					"ZEEELATA"
				]
			]
		},
		{
			"name": "Start with 4 hearts",
			"codes": [
				[
					"AAEKXATE",
					"AEEELATE"
				]
			]
		}
	]
};
