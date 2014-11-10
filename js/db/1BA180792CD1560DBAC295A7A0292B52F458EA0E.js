this.NesDb = this.NesDb || {};

NesDb[ '1BA180792CD1560DBAC295A7A0292B52F458EA0E' ] = {
	"$": {
		"name": "Aigiina no Yogen: From the Legend of Balubalouk",
		"altname": "アイギーナの予言 バルバルークの伝説より",
		"class": "Licensed",
		"catalog": "VIC-AY",
		"publisher": "Vic Tokai",
		"developer": "Vic Tokai",
		"region": "Japan",
		"players": "1",
		"date": "1986-11-21"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "37F59450",
				"sha1": "1BA180792CD1560DBAC295A7A0292B52F458EA0E",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-04-28"
			},
			"board": [
				{
					"$": {
						"type": "HVC-UNROM",
						"pcb": "HVC-UNROM-01",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "VIC-AY-0 PRG",
								"size": "128k",
								"crc": "37F59450",
								"sha1": "1BA180792CD1560DBAC295A7A0292B52F458EA0E"
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
