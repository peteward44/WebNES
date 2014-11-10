this.NesDb = this.NesDb || {};

NesDb[ '29392A9709C089F0063030B8908ED23108A487EB' ] = {
	"$": {
		"name": "Chester Field: Ankoku Shin e no Chousen",
		"altname": "チェスター・フィールド  箱・説明書無し",
		"class": "Licensed",
		"catalog": "VIC-CF",
		"publisher": "Vic Tokai",
		"developer": "Vic Tokai",
		"region": "Japan",
		"players": "1",
		"date": "1987-07-30"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "6C70A17B",
				"sha1": "29392A9709C089F0063030B8908ED23108A487EB",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-09-12"
			},
			"board": [
				{
					"$": {
						"type": "HVC-UNROM",
						"pcb": "HVC-UNROM-03",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "VIC-CF-0 PRG",
								"size": "128k",
								"crc": "6C70A17B",
								"sha1": "29392A9709C089F0063030B8908ED23108A487EB"
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
