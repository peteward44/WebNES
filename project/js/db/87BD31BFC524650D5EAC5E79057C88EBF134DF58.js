this.NesDb = this.NesDb || {};

NesDb[ '87BD31BFC524650D5EAC5E79057C88EBF134DF58' ] = {
	"$": {
		"name": "Hostages: The Embassy Mission",
		"altname": "ホステージ",
		"class": "Licensed",
		"catalog": "KSC-HZ",
		"publisher": "Kemco",
		"developer": "Kemco",
		"region": "Japan",
		"players": "1",
		"date": "1989-12-01"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "85C5953F",
				"sha1": "87BD31BFC524650D5EAC5E79057C88EBF134DF58",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2010-07-22"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SLROM",
						"pcb": "HVC-SLROM-03",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "KSC-HZ-0 PRG",
								"size": "128k",
								"crc": "D554C455",
								"sha1": "956CE75716C7F28CC8E495BAB2174A1A79A85688"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "KSC-HZ-0 CHR",
								"size": "128k",
								"crc": "AA07696E",
								"sha1": "DA3435D9B6A3A10258D33C87904E6430E16C82DF"
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
