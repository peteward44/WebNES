this.NesDb = this.NesDb || {};

NesDb[ '8F0C529E2ABEC1F3C8ABF1A214E47AEAFFC5EED2' ] = {
	"$": {
		"name": "White Lion Densetsu: Pyramid no Kanata ni",
		"altname": "ホワイトライオン伝説 ピラミッドの彼方に",
		"class": "Licensed",
		"catalog": "KSC-WE",
		"publisher": "Kemco",
		"developer": "Kemco",
		"region": "Japan",
		"players": "1",
		"date": "1989-07-14"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "850090BC",
				"sha1": "8F0C529E2ABEC1F3C8ABF1A214E47AEAFFC5EED2",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2012-05-06"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SKROM",
						"pcb": "HVC-SKROM-03",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "KSC-WE-0 PRG",
								"size": "128k",
								"crc": "0CB8D92D",
								"sha1": "A54D0AF5121ED7512FB538845BA4B5F829C8EF61"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "KSC-WE-0 CHR",
								"size": "128k",
								"crc": "0859BFDB",
								"sha1": "90EF664FECA68752BE083D6F3520A36547AEBF44"
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
								"type": "MMC1B2"
							}
						}
					]
				}
			]
		}
	]
};
