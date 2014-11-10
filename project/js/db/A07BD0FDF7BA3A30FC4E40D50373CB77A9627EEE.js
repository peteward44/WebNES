this.NesDb = this.NesDb || {};

NesDb[ 'A07BD0FDF7BA3A30FC4E40D50373CB77A9627EEE' ] = {
	"$": {
		"name": "Sweet Home",
		"altname": "スウィートホーム",
		"class": "Licensed",
		"catalog": "CAP-EH",
		"publisher": "Capcom",
		"developer": "Capcom",
		"region": "Japan",
		"players": "1",
		"date": "1989-12-15"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "252FFD12",
				"sha1": "A07BD0FDF7BA3A30FC4E40D50373CB77A9627EEE",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-02"
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
								"name": "CAP-EH-0 PRG",
								"size": "256k",
								"crc": "252FFD12",
								"sha1": "A07BD0FDF7BA3A30FC4E40D50373CB77A9627EEE"
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
								"type": "MMC1B2"
							}
						}
					]
				}
			]
		}
	]
};
