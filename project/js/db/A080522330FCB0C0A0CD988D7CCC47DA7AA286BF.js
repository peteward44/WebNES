this.NesDb = this.NesDb || {};

NesDb[ 'A080522330FCB0C0A0CD988D7CCC47DA7AA286BF' ] = {
	"$": {
		"name": "Hiryuu no Ken: Ougi no Sho",
		"altname": "飛龍の拳 奥義の書",
		"class": "Licensed",
		"catalog": "NFC-HR",
		"publisher": "Culture Brain",
		"developer": "Culture Brain",
		"region": "Japan",
		"players": "1",
		"date": "1987-02-14"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "0B8E8649",
				"sha1": "A080522330FCB0C0A0CD988D7CCC47DA7AA286BF",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-06-24"
			},
			"board": [
				{
					"$": {
						"type": "HVC-UNROM",
						"pcb": "HVC-UNROM-02",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "NFC-HR-0 PRG",
								"size": "128k",
								"crc": "0B8E8649",
								"sha1": "A080522330FCB0C0A0CD988D7CCC47DA7AA286BF"
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
