this.NesDb = this.NesDb || {};

NesDb[ '841499E9E87E24AD0AFDC0C6A6F3152ABE4E8643' ] = {
	"$": {
		"name": "Playbox BASIC",
		"altname": "ＰＬＡＹＢＯＸベーシック",
		"class": "Licensed",
		"subclass": "Unreleased",
		"catalog": "UNR-HVC-PB",
		"publisher": "Sharp",
		"developer": "Hudson Soft",
		"region": "Japan",
		"players": "1",
		"date": "0000"
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
				"prototype": "1",
				"crc": "912989DC",
				"sha1": "841499E9E87E24AD0AFDC0C6A6F3152ABE4E8643",
				"dump": "ok",
				"dumper": "kevtris",
				"datedumped": "2012-04-16"
			},
			"board": [
				{
					"$": {
						"type": "HVC-FAMILYBASIC",
						"pcb": "HVC-FB1-128",
						"mapper": "0"
					},
					"prg": [
						{
							"$": {
								"id": "0",
								"name": "2",
								"size": "16k",
								"crc": "C8C15B11",
								"sha1": "EBA73A34E44191E60B4411886B83F53CC92D69B1"
							}
						},
						{
							"$": {
								"id": "1",
								"name": "1",
								"size": "16k",
								"crc": "2A5E0348",
								"sha1": "AA09440F89B0ECD6A4A6E00A90B79E0D313C753E"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "3",
								"size": "8k",
								"crc": "C06BB289",
								"sha1": "FF3170D94677CA05D34A194120D4CDB7E6C1081C"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "2k",
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
