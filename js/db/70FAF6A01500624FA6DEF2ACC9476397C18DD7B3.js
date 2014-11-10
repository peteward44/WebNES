this.NesDb = this.NesDb || {};

NesDb[ '70FAF6A01500624FA6DEF2ACC9476397C18DD7B3' ] = {
	"$": {
		"name": "Saiyuuki World",
		"altname": "西遊記ワールド",
		"class": "Licensed",
		"catalog": "NMK-KW",
		"publisher": "Jaleco",
		"developer": "NMK",
		"region": "Japan",
		"players": "1",
		"date": "1988-11-11"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "69D07DDB",
				"sha1": "70FAF6A01500624FA6DEF2ACC9476397C18DD7B3",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-06-27"
			},
			"board": [
				{
					"$": {
						"type": "HVC-UNROM",
						"pcb": "HVC-UNROM-09",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "NMK-KW-0 PRG",
								"size": "128k",
								"crc": "69D07DDB",
								"sha1": "70FAF6A01500624FA6DEF2ACC9476397C18DD7B3"
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
