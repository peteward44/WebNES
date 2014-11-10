this.NesDb = this.NesDb || {};

NesDb[ 'E232C621BFEDBFC6B100677BFBFC50B910248282' ] = {
	"$": {
		"name": "Family BASIC v3.0",
		"altname": "ファミリーベーシックＶ３",
		"class": "Licensed",
		"catalog": "HVC-VT",
		"publisher": "Nintendo",
		"developer": "Hudson Soft",
		"region": "Japan",
		"players": "1",
		"date": "1985-02-21"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "familykeyboard",
						"name": "Family Keyboard"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "B2530AFC",
				"sha1": "E232C621BFEDBFC6B100677BFBFC50B910248282",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-12-06"
			},
			"board": [
				{
					"$": {
						"type": "HVC-FAMILYBASIC",
						"pcb": "VT-N-256-41",
						"mapper": "0"
					},
					"prg": [
						{
							"$": {
								"name": "HVC-VT-0W",
								"size": "32k",
								"crc": "3AAEED3F",
								"sha1": "DCB8E7D48AFCC0F5B4B7E98874F9C79DA419CF04"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "HVC-FB1-0 C",
								"size": "8k",
								"crc": "11848B93",
								"sha1": "04311090FCB7C46D2DF86A06575C81E09A0F77B8"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "4k",
								"battery": "1"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx20"
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
	]
};
