this.NesDb = this.NesDb || {};

NesDb[ '8E90D9A6A6090307A7E408D1C1704D09BA8F94FC' ] = {
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
				"revision": "A1",
				"crc": "895037BC",
				"sha1": "8E90D9A6A6090307A7E408D1C1704D09BA8F94FC",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-07-30"
			},
			"board": [
				{
					"$": {
						"type": "HVC-FAMILYBASIC",
						"pcb": "FB-N-128-02",
						"mapper": "0"
					},
					"prg": [
						{
							"$": {
								"id": "0",
								"name": "HVC-FB1-2 A",
								"size": "16k",
								"crc": "1048E43D",
								"sha1": "D50B0352A358E73E29199B981456F33F6CC78131"
							}
						},
						{
							"$": {
								"id": "1",
								"name": "HVC-FB1-2 B",
								"size": "16k",
								"crc": "9FBFB6BA",
								"sha1": "39E7D7EDE468036D04DB0BF40F34A07C958F874A"
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
