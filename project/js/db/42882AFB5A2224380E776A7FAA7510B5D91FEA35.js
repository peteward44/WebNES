this.NesDb = this.NesDb || {};

NesDb[ '42882AFB5A2224380E776A7FAA7510B5D91FEA35' ] = {
	"$": {
		"name": "SD Gundam Gaiden: Knight Gundam Monogatari",
		"altname": "ＳＤガンダム外伝 ナイトガンダム物語",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "BA-KGD",
		"publisher": "Bandai",
		"developer": "TOSE Software",
		"region": "Japan",
		"players": "1",
		"date": "1990-08-11"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"revision": "2.0",
				"crc": "276AC722",
				"sha1": "42882AFB5A2224380E776A7FAA7510B5D91FEA35",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-11-22"
			},
			"board": [
				{
					"$": {
						"type": "BANDAI-LZ93D50+24C01",
						"pcb": "DRAGON BALL Z",
						"mapper": "159"
					},
					"prg": [
						{
							"$": {
								"name": "BANDAI 90 KNIGHT-GUNDAM PRG VER.2",
								"size": "256k",
								"crc": "95F24E53",
								"sha1": "EE1B98147C7C616AC06F7BF9CA49760314767355"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "BANDAI 90 KNIGHT-GUNDAM CHR",
								"size": "128k",
								"crc": "9E066029",
								"sha1": "3B129CE4B9C0CB47FD96B3EFCF2DF092DA05015C"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "24C01"
							}
						},
						{
							"$": {
								"type": "FCG-3"
							}
						}
					]
				}
			]
		}
	]
};
