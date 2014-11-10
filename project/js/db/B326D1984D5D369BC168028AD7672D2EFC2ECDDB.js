this.NesDb = this.NesDb || {};

NesDb[ 'B326D1984D5D369BC168028AD7672D2EFC2ECDDB' ] = {
	"$": {
		"name": "L'Empereur",
		"altname": "ランペルール",
		"class": "Licensed",
		"catalog": "KOE-QV",
		"publisher": "Koei",
		"developer": "Koei",
		"region": "Japan",
		"players": "1",
		"date": "1991-05-23"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "6396B988",
				"sha1": "B326D1984D5D369BC168028AD7672D2EFC2ECDDB",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2011-01-22"
			},
			"board": [
				{
					"$": {
						"type": "HVC-ETROM",
						"pcb": "HVC-ETROM-02",
						"mapper": "5"
					},
					"prg": [
						{
							"$": {
								"name": "KOE-QV-0 PRG",
								"size": "256k",
								"crc": "57E3218B",
								"sha1": "8D21B6D59C15C61B00038E73E281B42B566DDCF5"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "KOE-QV-0 CHR",
								"size": "128k",
								"crc": "508A2ACC",
								"sha1": "E8CB6D9D887452D50265231B633C651BF4CB0893"
							}
						}
					],
					"wram": [
						{
							"$": {
								"id": "0",
								"size": "8k",
								"battery": "1"
							}
						},
						{
							"$": {
								"id": "1",
								"size": "8k"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC5"
							}
						}
					]
				}
			]
		}
	]
};
