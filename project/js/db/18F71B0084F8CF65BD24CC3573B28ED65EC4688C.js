this.NesDb = this.NesDb || {};

NesDb[ '18F71B0084F8CF65BD24CC3573B28ED65EC4688C' ] = {
	"$": {
		"name": "Tokyo Pachi Slot Adventure",
		"altname": "東京パチスロアドベンチャー",
		"class": "Licensed",
		"catalog": "CDS-83",
		"publisher": "Coconuts",
		"developer": "Soft Machine",
		"region": "Japan",
		"players": "1",
		"date": "1991-12-13"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"revision": "A",
				"crc": "162CCBD0",
				"sha1": "18F71B0084F8CF65BD24CC3573B28ED65EC4688C",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-04-28"
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
								"name": "CDS-83-1 PRG",
								"size": "128k",
								"crc": "84DB1813",
								"sha1": "1505DBE1DEE870E5FB6664F3CD011A5DD9329EFA"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "CDS-83-0 CHR",
								"size": "128k",
								"crc": "92F6EE7F",
								"sha1": "2EC29131C4193BA8E6930E55B97052BA313A2019"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1B3"
							}
						}
					]
				}
			]
		}
	]
};
