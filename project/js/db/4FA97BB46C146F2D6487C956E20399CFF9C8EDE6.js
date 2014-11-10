this.NesDb = this.NesDb || {};

NesDb[ '4FA97BB46C146F2D6487C956E20399CFF9C8EDE6' ] = {
	"$": {
		"name": "Quarter Back Scramble",
		"altname": "クォーターバックスクランブル",
		"class": "Licensed",
		"catalog": "PNF-QS (R59V5925)",
		"publisher": "Pony Canyon",
		"developer": "Natsume",
		"region": "Japan",
		"players": "2",
		"date": "1989-12-19"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "3FEA656A",
				"sha1": "4FA97BB46C146F2D6487C956E20399CFF9C8EDE6",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-01"
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
								"name": "PNF-QS-0 PRG",
								"size": "128k",
								"crc": "45111A7F",
								"sha1": "F990AA7ACE9316136ECD54673F6BC45CB45BBCFF"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PNF-QS-0 CHR",
								"size": "128k",
								"crc": "72E809DE",
								"sha1": "870A1A2B021BCC3ADCFFA7504275C504CEF0ECBA"
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
