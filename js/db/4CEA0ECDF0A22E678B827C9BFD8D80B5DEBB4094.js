this.NesDb = this.NesDb || {};

NesDb[ '4CEA0ECDF0A22E678B827C9BFD8D80B5DEBB4094' ] = {
	"$": {
		"name": "Pachinko Daisakusen",
		"altname": "パチンコ大作戦",
		"class": "Licensed",
		"catalog": "CDS-81",
		"publisher": "Coconuts",
		"developer": "Marionette",
		"region": "Japan",
		"players": "1",
		"date": "1991-07-19"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "C22C23AB",
				"sha1": "4CEA0ECDF0A22E678B827C9BFD8D80B5DEBB4094",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-06-21"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SLRROM",
						"pcb": "HVC-SLRROM-01",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "CDS-81-0 PRG",
								"size": "128k",
								"crc": "41F87A9B",
								"sha1": "BD6709F785E9C8E96FC7B0B55F2C26C76FE3F17E"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "CDS-81-0 CHR",
								"size": "128k",
								"crc": "EE01BCF2",
								"sha1": "7D08F4203A023B080A87423608387F69806F3212"
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
