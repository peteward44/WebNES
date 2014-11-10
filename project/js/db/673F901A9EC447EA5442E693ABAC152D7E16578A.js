this.NesDb = this.NesDb || {};

NesDb[ '673F901A9EC447EA5442E693ABAC152D7E16578A' ] = {
	"$": {
		"name": "Spy vs. Spy",
		"class": "Licensed",
		"catalog": "NES-SP-EEC",
		"publisher": "Kemco",
		"developer": "First Star Software",
		"portdeveloper": "Kemco",
		"region": "Europe",
		"players": "2",
		"date": "1990-07-27"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "C1E91D3F",
				"sha1": "673F901A9EC447EA5442E693ABAC152D7E16578A",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2008-02-13"
			},
			"board": [
				{
					"$": {
						"type": "NES-NROM-256",
						"pcb": "NES-NROM-256-06",
						"mapper": "0"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-SP-0 PRG",
								"size": "32k",
								"crc": "DC719391",
								"sha1": "2F83C8FD8171A9206648AC27981CE4078D8FD1C2"
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
