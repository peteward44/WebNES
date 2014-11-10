this.NesDb = this.NesDb || {};

NesDb[ '53406E965C5C6E846342C5ED178C4E5C242B1B72' ] = {
	"$": {
		"name": "Hyakki Yagyou",
		"altname": "百鬼夜行",
		"class": "Licensed",
		"catalog": "USE-HG",
		"publisher": "Use",
		"developer": "Use",
		"region": "Japan",
		"players": "1",
		"date": "1989-02-23"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "DC1E07D2",
				"sha1": "53406E965C5C6E846342C5ED178C4E5C242B1B72",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-01"
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
								"name": "USE-HG-0 PRG",
								"size": "128k",
								"crc": "1E2F89C8",
								"sha1": "1B1C50AB2CE156B377001EB95BA98B773EB624AC"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "USE-HG-0 CHR",
								"size": "128k",
								"crc": "02DA5432",
								"sha1": "98C1FD29250892DFB27F52358D57AF6EA326CFAF"
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
