this.NesDb = this.NesDb || {};

NesDb[ '7F3228EEF529866FBE487BD0F98D002F27B94444' ] = {
	"$": {
		"name": "Satomi Hakkenden",
		"altname": "里見八犬伝",
		"class": "Licensed",
		"catalog": "SFX-S8",
		"publisher": "SNK",
		"developer": "SNK",
		"region": "Japan",
		"players": "1",
		"date": "1989-01-20"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "4C0E8BBB",
				"sha1": "7F3228EEF529866FBE487BD0F98D002F27B94444",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-11-16"
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
								"name": "SFX-S8-0 PRG",
								"size": "128k",
								"crc": "2B6D2447",
								"sha1": "530607CABCBF35F71646E899E85740B88DCD30FA"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "SFX-S8-0 CHR",
								"size": "128k",
								"crc": "424DD568",
								"sha1": "C1F96BFFBD47535C451196E419960B45410E4505"
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
