this.NesDb = this.NesDb || {};

NesDb[ '76B3C6118C1B9186F692068A5C5B969917951B96' ] = {
	"$": {
		"name": "Wally Bear and the No! Gang",
		"class": "Unlicensed",
		"catalog": "AVE-WB",
		"publisher": "AVE",
		"developer": "AGCI",
		"region": "USA",
		"players": "2",
		"date": "1990"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "81ECDA0D",
				"sha1": "76B3C6118C1B9186F692068A5C5B969917951B96",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-07-04"
			},
			"board": [
				{
					"$": {
						"type": "AVE-NINA-07",
						"pcb": "NINA-07",
						"mapper": "11"
					},
					"prg": [
						{
							"$": {
								"name": "WALLY BEAR",
								"size": "128k",
								"crc": "81ECDA0D",
								"sha1": "76B3C6118C1B9186F692068A5C5B969917951B96"
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
								"type": "74xx377"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "CIC Stun"
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
