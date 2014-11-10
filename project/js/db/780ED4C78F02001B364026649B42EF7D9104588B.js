this.NesDb = this.NesDb || {};

NesDb[ '780ED4C78F02001B364026649B42EF7D9104588B' ] = {
	"$": {
		"name": "Baken Hisshou Gaku: Gate In",
		"altname": "ゲートイン 馬券必勝学",
		"class": "Licensed",
		"catalog": "KAC-3F",
		"publisher": "KAC",
		"developer": "Graphic Research",
		"region": "Japan",
		"players": "1",
		"date": "1990-05-25"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "27C16011",
				"sha1": "780ED4C78F02001B364026649B42EF7D9104588B",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2011-09-08"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SGROM",
						"pcb": "HVC-SGROM-03",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "KAC-3F-0 PRG",
								"size": "256k",
								"crc": "27C16011",
								"sha1": "780ED4C78F02001B364026649B42EF7D9104588B"
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
								"type": "MMC1B2"
							}
						}
					]
				}
			]
		}
	]
};
