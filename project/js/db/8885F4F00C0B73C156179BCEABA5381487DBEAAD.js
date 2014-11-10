this.NesDb = this.NesDb || {};

NesDb[ '8885F4F00C0B73C156179BCEABA5381487DBEAAD' ] = {
	"$": {
		"name": "Spy vs. Spy",
		"altname": "スパイＶＳスパイ",
		"class": "Licensed",
		"catalog": "KSC-SP",
		"publisher": "Kemco",
		"developer": "First Star Software",
		"portdeveloper": "Kemco",
		"region": "Japan",
		"players": "2",
		"date": "1986-04-26"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "CF0C9D97",
				"sha1": "8885F4F00C0B73C156179BCEABA5381487DBEAAD",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-06-21"
			},
			"board": [
				{
					"$": {
						"type": "HVC-CNROM+SECURITY",
						"pcb": "HVC-CNROM-256K-01",
						"mapper": "185"
					},
					"prg": [
						{
							"$": {
								"name": "KSC-SP-0 PRG",
								"size": "32k",
								"crc": "B36457C7",
								"sha1": "A20C140BC84B301B4AD846E621E1B1BD67FCEF92"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "KSC-SP-0 CHR",
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
					"chip": [
						{
							"$": {
								"type": "74xx161"
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
