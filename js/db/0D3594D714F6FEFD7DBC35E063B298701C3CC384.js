this.NesDb = this.NesDb || {};

NesDb[ '0D3594D714F6FEFD7DBC35E063B298701C3CC384' ] = {
	"$": {
		"name": "Thundercade",
		"class": "Licensed",
		"catalog": "NES-UD-USA",
		"publisher": "Sammy",
		"developer": "Seta",
		"portdeveloper": "Micronics / Khaos",
		"region": "USA",
		"players": "2",
		"date": "1989-07"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "AFB46DD6",
				"sha1": "0D3594D714F6FEFD7DBC35E063B298701C3CC384",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-01-27"
			},
			"board": [
				{
					"$": {
						"type": "NES-UNROM",
						"pcb": "NES-UNROM-08",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "NES-UD-0 PRG",
								"size": "128k",
								"crc": "AFB46DD6",
								"sha1": "0D3594D714F6FEFD7DBC35E063B298701C3CC384"
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
								"h": "0",
								"v": "1"
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
					"GXVYPZVI"
				]
			]
		},
		{
			"name": "Start with 1 life",
			"codes": [
				[
					"PAOYIILA"
				]
			]
		},
		{
			"name": "Start with 6 lives",
			"codes": [
				[
					"TAOYIILA"
				]
			]
		},
		{
			"name": "Start with 9 lives",
			"codes": [
				[
					"PAOYIILE"
				]
			]
		},
		{
			"name": "Infinite missiles",
			"codes": [
				[
					"AAUNLIPP"
				]
			]
		},
		{
			"name": "Infinite bombs",
			"codes": [
				[
					"GZXYZTVI"
				]
			]
		},
		{
			"name": "Start with double bombs",
			"codes": [
				[
					"TENNPZLA"
				]
			]
		},
		{
			"name": "Start with triple bombs",
			"codes": [
				[
					"PENNPZLE"
				]
			]
		},
		{
			"name": "Autofire!",
			"codes": [
				[
					"ZANYGSZA"
				]
			]
		}
	]
};
