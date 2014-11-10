this.NesDb = this.NesDb || {};

NesDb[ '17720AE1AFC6A3750384D6B082391C0C2F8A0699' ] = {
	"$": {
		"name": "Family BASIC",
		"altname": "ファミリーベーシック",
		"class": "Licensed",
		"catalog": "HVC-BS",
		"publisher": "Nintendo",
		"developer": "Hudson Soft",
		"region": "Japan",
		"players": "1",
		"date": "1984-06-21"
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
				"revision": "A",
				"crc": "F7606810",
				"sha1": "17720AE1AFC6A3750384D6B082391C0C2F8A0699",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-02-17"
			},
			"board": [
				{
					"$": {
						"type": "HVC-FAMILYBASIC",
						"pcb": "FB-R-128-01",
						"mapper": "0"
					},
					"prg": [
						{
							"$": {
								"id": "0",
								"name": "HVC-FB1-1 A",
								"size": "16k",
								"crc": "12B97208",
								"sha1": "2FC97BDB035D308F0ECD7B58E44FA1571B99FE27"
							}
						},
						{
							"$": {
								"id": "1",
								"name": "HVC-FB1-1 B",
								"size": "16k",
								"crc": "B099376C",
								"sha1": "17FB9644DC23173D77D288C1428E560EA8A7A9EF"
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
