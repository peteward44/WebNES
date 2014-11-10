this.NesDb = this.NesDb || {};

NesDb[ '4F6F7340B707EB50F1BD989157A201FC98A29FED' ] = {
	"$": {
		"name": "Bases Loaded",
		"class": "Licensed",
		"catalog": "NES-LD-USA",
		"publisher": "Jaleco",
		"developer": "TOSE Software",
		"region": "USA",
		"players": "2",
		"date": "1988-07"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "B4241FCC",
				"sha1": "4F6F7340B707EB50F1BD989157A201FC98A29FED",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-04-11"
			},
			"board": [
				{
					"$": {
						"type": "NES-SFROM",
						"pcb": "NES-SFEXPROM-01",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-LD-0 PRG",
								"size": "256k",
								"crc": "43E0D72F",
								"sha1": "013C3BCD1AEAE2954235A04F5A22A9121E52621E"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-LD-0 CHR",
								"size": "64k",
								"crc": "E472EC23",
								"sha1": "B87D2C3D851488016FDA181485F1F42D2C2BC477"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1A"
							}
						},
						{
							"$": {
								"type": "NES-LD-0-EXP"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "6113A"
							}
						}
					]
				}
			]
		}
	]
};
