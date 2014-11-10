this.NesDb = this.NesDb || {};

NesDb[ '875AD0494FB6C6E37A119A5F0811B9A31F3E2B8B' ] = {
	"$": {
		"name": "Dynamite Batman",
		"altname": "ダイナマイトバットマン",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "SUN-DBT-6500",
		"publisher": "Sunsoft",
		"developer": "Sunsoft",
		"region": "Japan",
		"players": "1",
		"date": "1991-12-20"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "0FF6A3B5",
				"sha1": "875AD0494FB6C6E37A119A5F0811B9A31F3E2B8B",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-10-04"
			},
			"board": [
				{
					"$": {
						"type": "SUNSOFT-FME-7",
						"pcb": "FC-DBT-1",
						"mapper": "69"
					},
					"prg": [
						{
							"$": {
								"name": "ROJ-PRG",
								"size": "128k",
								"crc": "AD28AEF6",
								"sha1": "AE8E0536389D1FDCD30046100A3E5A52A69F1303"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "DBT-CHR",
								"size": "256k",
								"crc": "1B752E6B",
								"sha1": "99CB5840892D44B8375B6EA845E30E422782670E"
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
								"type": "FME-7"
							}
						}
					]
				}
			]
		}
	]
};
