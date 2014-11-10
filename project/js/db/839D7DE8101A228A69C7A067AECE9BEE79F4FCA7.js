this.NesDb = this.NesDb || {};

NesDb[ '839D7DE8101A228A69C7A067AECE9BEE79F4FCA7' ] = {
	"$": {
		"name": "Great Battle Cyber",
		"altname": "グレイトバトルサイバー",
		"class": "Licensed",
		"catalog": "BAP-GC",
		"publisher": "Banpresto",
		"developer": "Arc System Works",
		"region": "Japan",
		"players": "1",
		"date": "1992-12-25"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "1D89610E",
				"sha1": "839D7DE8101A228A69C7A067AECE9BEE79F4FCA7",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-01"
			},
			"board": [
				{
					"$": {
						"type": "HVC-TSROM",
						"pcb": "HVC-TSROM-04",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "BAP-GC-0 PRG",
								"size": "128k",
								"crc": "37A4552F",
								"sha1": "3CFF24F2D5DA882961493DCDBAC699778B345B37"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "BAP-GC-0 CHR",
								"size": "256k",
								"crc": "C2AC0271",
								"sha1": "F13AB4D1C12ECE5C06CA472E8DF50CDB3EC7AF3E"
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
								"type": "MMC3C"
							}
						}
					]
				}
			]
		}
	]
};
