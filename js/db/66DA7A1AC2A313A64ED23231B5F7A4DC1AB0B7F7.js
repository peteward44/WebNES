this.NesDb = this.NesDb || {};

NesDb[ '66DA7A1AC2A313A64ED23231B5F7A4DC1AB0B7F7' ] = {
	"$": {
		"name": "Kakefu-kun no Jump Tengoku: Speed Jigoku",
		"altname": "カケフくんのジャンプ天国 スピード地獄",
		"class": "Licensed",
		"catalog": "VIC-KX",
		"publisher": "Vic Tokai",
		"developer": "Vic Tokai",
		"region": "Japan",
		"players": "1",
		"date": "1988-07-22"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "8324A464",
				"sha1": "66DA7A1AC2A313A64ED23231B5F7A4DC1AB0B7F7",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-05-31"
			},
			"board": [
				{
					"$": {
						"type": "HVC-UNROM",
						"pcb": "HVC-UNROM-08",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "VIC-KX-0 PRG",
								"size": "128k",
								"crc": "8324A464",
								"sha1": "66DA7A1AC2A313A64ED23231B5F7A4DC1AB0B7F7"
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
