this.NesDb = this.NesDb || {};

NesDb[ '487904836E6A4EB0D2F46BCA5EC1E634D1A93348' ] = {
	"$": {
		"name": "Hatris",
		"altname": "ハットリス",
		"class": "Licensed",
		"catalog": "BPS-JZ",
		"publisher": "Bullet-Proof Software",
		"developer": "Bullet-Proof Software",
		"region": "Japan",
		"players": "1",
		"date": "1990-07-06"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "B4113F3C",
				"sha1": "487904836E6A4EB0D2F46BCA5EC1E634D1A93348",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-11-11"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SNROM",
						"pcb": "HVC-SNROM-09",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "BPS-JZ-0 PRG",
								"size": "128k",
								"crc": "B4113F3C",
								"sha1": "487904836E6A4EB0D2F46BCA5EC1E634D1A93348"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "8k"
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
