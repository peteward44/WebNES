this.NesDb = this.NesDb || {};

NesDb[ '4125D36CB2F1B9CFC48B5E37008A69114A7FAD8F' ] = {
	"$": {
		"name": "Karakuri Kengouden: Musashi Road: Karakuribito Hashiru!",
		"altname": "からくり剣豪伝 ムサシロード",
		"class": "Licensed",
		"catalog": "SHI-98",
		"publisher": "Yutaka",
		"developer": "",
		"region": "Japan",
		"players": "1",
		"date": "1991-10-05"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "9D9A4A26",
				"sha1": "4125D36CB2F1B9CFC48B5E37008A69114A7FAD8F",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-06-27"
			},
			"board": [
				{
					"$": {
						"type": "HVC-TKROM",
						"pcb": "HVC-TKROM-03",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "SHI-98-0 PRG",
								"size": "128k",
								"crc": "1170392A",
								"sha1": "B525D6DF6AE01FB1A73BE987C19AD286ACFEF307"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "SHI-98-0 CHR",
								"size": "128k",
								"crc": "0475DA0B",
								"sha1": "DC15427793F8B2B9CC7ABD9811F93E21A4CC5273"
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
