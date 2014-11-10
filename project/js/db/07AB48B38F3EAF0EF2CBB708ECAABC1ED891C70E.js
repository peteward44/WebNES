this.NesDb = this.NesDb || {};

NesDb[ '07AB48B38F3EAF0EF2CBB708ECAABC1ED891C70E' ] = {
	"$": {
		"name": "Happy Birthday Bugs",
		"altname": "ハッピーバースディバックス",
		"class": "Licensed",
		"catalog": "KSC-H8",
		"publisher": "Kemco",
		"developer": "Kemco",
		"region": "Japan",
		"players": "1",
		"date": "1990-08-03"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "B47569E2",
				"sha1": "07AB48B38F3EAF0EF2CBB708ECAABC1ED891C70E",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2012-05-06"
			},
			"board": [
				{
					"$": {
						"type": "HVC-TSROM",
						"pcb": "HVC-TSROM-03",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "KSC-H8-0 PRG",
								"size": "128k",
								"crc": "19B1A2E7",
								"sha1": "32BAA2EC65B258DD893F38BC3FB3E8B7D78702DB"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "KSC-H8-0 CHR",
								"size": "128k",
								"crc": "86883E59",
								"sha1": "C05131340A3ED9B8A7324F3AD9D733A381C837C5"
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
