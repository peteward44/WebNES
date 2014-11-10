this.NesDb = this.NesDb || {};

NesDb[ 'FAB900149946D2C61B7AFA477E372293E3B3CE70' ] = {
	"$": {
		"name": "Jumbo Ozaki no Hole in One Professional",
		"altname": "ジャンボ尾崎のホールインワン プロフェッショナル",
		"class": "Licensed",
		"catalog": "HAL-JO",
		"publisher": "HAL Laboratory",
		"developer": "HAL Laboratory",
		"region": "Japan",
		"players": "1",
		"date": "1988-02-01"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "8DCD9486",
				"sha1": "FAB900149946D2C61B7AFA477E372293E3B3CE70",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-01"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SJROM",
						"pcb": "HVC-SJROM-01",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "HAL-JO-0 PRG",
								"size": "128k",
								"crc": "FB26FF02",
								"sha1": "CDE19055AF1272A409E7226A072F48C3F6186158"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "HAL-JO-0 CHR",
								"size": "32k",
								"crc": "45B925A9",
								"sha1": "404BC9B1690A9DCF0C4AEEDCAFFBA3452D5E1F78"
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
								"type": "MMC1A"
							}
						}
					]
				}
			]
		}
	]
};
