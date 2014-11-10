this.NesDb = this.NesDb || {};

NesDb[ '77272C0C0E821E9BB1EA416EF1C983BD46188D68' ] = {
	"$": {
		"name": "Last Armageddon",
		"altname": "ラストハルマゲドン",
		"class": "Licensed",
		"catalog": "SHI-LT",
		"publisher": "Yutaka",
		"developer": "Brain Grey",
		"portdeveloper": "Advance Communication",
		"region": "Japan",
		"players": "1",
		"date": "1990-11-10"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "8EEF8B76",
				"sha1": "77272C0C0E821E9BB1EA416EF1C983BD46188D68",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2012-05-06"
			},
			"board": [
				{
					"$": {
						"type": "HVC-TNROM",
						"pcb": "HVC-TNROM-01",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "SHI-LT-0 PRG",
								"size": "512k",
								"crc": "8EEF8B76",
								"sha1": "77272C0C0E821E9BB1EA416EF1C983BD46188D68"
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
								"type": "MMC3B"
							}
						}
					]
				}
			]
		}
	]
};
