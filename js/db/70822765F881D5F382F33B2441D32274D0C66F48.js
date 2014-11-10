this.NesDb = this.NesDb || {};

NesDb[ '70822765F881D5F382F33B2441D32274D0C66F48' ] = {
	"$": {
		"name": "Castle Quest",
		"altname": "キャッスルクエスト",
		"class": "Licensed",
		"catalog": "HFC-V4",
		"publisher": "Hudson Soft",
		"developer": "Hudson Soft",
		"region": "Japan",
		"players": "1",
		"date": "1990-05-18"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "BF4F4BA6",
				"sha1": "70822765F881D5F382F33B2441D32274D0C66F48",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-11-11"
			},
			"board": [
				{
					"$": {
						"type": "HVC-TLROM",
						"pcb": "HVC-TLROM-03",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "HFC-V4-0 PRG",
								"size": "128k",
								"crc": "CBF4CDF6",
								"sha1": "157274AEC4412EEC7C3B6AFB974129383872E007"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "HFC-V4-0 CHR",
								"size": "128k",
								"crc": "8B66A720",
								"sha1": "6D4862D1428633D36AAFFAF464A620880887FE13"
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
