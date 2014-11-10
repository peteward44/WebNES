this.NesDb = this.NesDb || {};

NesDb[ 'CCB306A328E6905D72A2E11C9F86A303D51D5A04' ] = {
	"$": {
		"name": "Spy vs. Spy",
		"class": "Licensed",
		"catalog": "NES-SP-USA",
		"publisher": "Kemco",
		"developer": "First Star Software",
		"portdeveloper": "Kemco",
		"region": "USA",
		"players": "2",
		"date": "1988-10"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "C4A02712",
				"sha1": "CCB306A328E6905D72A2E11C9F86A303D51D5A04",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-02-27"
			},
			"board": [
				{
					"$": {
						"type": "NES-NROM-256",
						"pcb": "NES-NROM-256-04",
						"mapper": "0"
					},
					"prg": [
						{
							"$": {
								"name": "NES-SP-0 PRG",
								"size": "32k",
								"crc": "C0DD00E0",
								"sha1": "61965019E8D3DE5F9A3D9A6D8392F32F25EDBD21"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-SP-0 CHR",
								"size": "8k",
								"crc": "883790C8",
								"sha1": "AB26714F73AC998B846780CA660257FC5ADC3F3E"
							},
							"pin": [
								{
									"$": {
										"number": "26",
										"function": "CE"
									}
								},
								{
									"$": {
										"number": "27",
										"function": "/CE"
									}
								}
							]
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
			"name": "Stop black spy's clock",
			"codes": [
				[
					"SZVAYUVK"
				]
			]
		},
		{
			"name": "Stop white spy's clock",
			"codes": [
				[
					"SXUELUVK"
				]
			]
		},
		{
			"name": "Black spy has 100 seconds in a minute",
			"codes": [
				[
					"PUEAPLIU"
				]
			]
		},
		{
			"name": "White spy has 100 seconds in a minute",
			"codes": [
				[
					"PUSAILIU"
				]
			]
		},
		{
			"name": "Black spy has deadly punches",
			"codes": [
				[
					"ONVZYNUT"
				]
			]
		},
		{
			"name": "White spy has deadly punches",
			"codes": [
				[
					"IEVZLYIE"
				]
			]
		}
	]
};
