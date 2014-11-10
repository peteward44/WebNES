this.NesDb = this.NesDb || {};

NesDb[ '64687D063CCBCF7B4C49604E0612A4D331D2AA88' ] = {
	"$": {
		"name": "Athena",
		"class": "Licensed",
		"catalog": "NES-AN-USA",
		"publisher": "SNK",
		"developer": "SNK",
		"portdeveloper": "Micronics / Khaos",
		"region": "USA",
		"players": "1",
		"date": "1987-08"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "27DDF227",
				"sha1": "64687D063CCBCF7B4C49604E0612A4D331D2AA88",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-12-30"
			},
			"board": [
				{
					"$": {
						"type": "NES-UNROM",
						"pcb": "NES-UN-ROM-04",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "NES-AN-0 PRG",
								"size": "128k",
								"crc": "27DDF227",
								"sha1": "64687D063CCBCF7B4C49604E0612A4D331D2AA88"
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
								"type": "3193A"
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
		},
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "27DDF227",
				"sha1": "64687D063CCBCF7B4C49604E0612A4D331D2AA88",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-12-30"
			},
			"board": [
				{
					"$": {
						"type": "NES-UNROM",
						"pcb": "NES-UN-ROM-04",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "NES-AN-0 PRG",
								"size": "128k",
								"crc": "27DDF227",
								"sha1": "64687D063CCBCF7B4C49604E0612A4D331D2AA88"
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
								"type": "6113"
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
					"AEKNLPZA"
				]
			]
		},
		{
			"name": "Start with 6 lives",
			"codes": [
				[
					"IEKNLPZA"
				]
			]
		},
		{
			"name": "Start with 9 lives",
			"codes": [
				[
					"AEKNLPZE"
				]
			]
		},
		{
			"name": "Don't take any damage (after first 2 units)",
			"codes": [
				[
					"GZUZLISA"
				]
			]
		},
		{
			"name": "Start with energy boost",
			"codes": [
				[
					"AXKNYOGA"
				]
			]
		},
		{
			"name": "Freeze timer",
			"codes": [
				[
					"AAULLYPA"
				]
			]
		},
		{
			"name": "Start with extra time",
			"codes": [
				[
					"YASVAYIA"
				]
			]
		},
		{
			"name": "Start with less time",
			"codes": [
				[
					"GASVAYIA"
				]
			]
		}
	]
};
