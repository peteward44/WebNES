this.NesDb = this.NesDb || {};

NesDb[ '1C05D3734EAAC1390638A9FDB22192F0A53FAFB9' ] = {
	"$": {
		"name": "Solomon no Kagi 2: Coolmintou Kyuushutsu Sakusen",
		"altname": "ソロモンの鍵２　クールミン島救出作戦",
		"class": "Licensed",
		"catalog": "TCF-SZ",
		"publisher": "Tecmo",
		"developer": "Tecmo",
		"region": "Japan",
		"players": "1",
		"date": "1992-01-24"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "EEE6314E",
				"sha1": "1C05D3734EAAC1390638A9FDB22192F0A53FAFB9",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2010-07-22"
			},
			"board": [
				{
					"$": {
						"type": "HVC-TKROM",
						"pcb": "HVC-TKROM-03",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "TCF-SZ-0 PRG",
								"size": "128k",
								"crc": "C71E77CA",
								"sha1": "0D018D7DFC25BCE2B83CDB08B5BE6A6938F36542"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "TCF-SZ-0 CHR",
								"size": "128k",
								"crc": "3E1D8F0D",
								"sha1": "4C0781F5977F6A4B90C4E6E723A792E70C108A0F"
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
								"type": "MMC3B"
							}
						}
					]
				}
			]
		}
	]
};
