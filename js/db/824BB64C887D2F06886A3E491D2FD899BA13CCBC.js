this.NesDb = this.NesDb || {};

NesDb[ '824BB64C887D2F06886A3E491D2FD899BA13CCBC' ] = {
	"$": {
		"name": "Super Black Onyx",
		"altname": "スーパーブラックオニキス",
		"class": "Licensed",
		"catalog": "BPS-OX",
		"publisher": "Bullet-Proof Software",
		"developer": "Bullet-Proof Software",
		"region": "Japan",
		"players": "1",
		"date": "1988-07-14"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "DFC0CE21",
				"sha1": "824BB64C887D2F06886A3E491D2FD899BA13CCBC",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-01"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SNROM",
						"pcb": "HVC-SNROM-06",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "BPS-OX-0 PRG",
								"size": "256k",
								"crc": "DFC0CE21",
								"sha1": "824BB64C887D2F06886A3E491D2FD899BA13CCBC"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "8k",
								"battery": "1"
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
								"type": "MMC1A"
							}
						}
					]
				}
			]
		}
	]
};
