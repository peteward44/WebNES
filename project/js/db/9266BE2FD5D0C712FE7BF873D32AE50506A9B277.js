this.NesDb = this.NesDb || {};

NesDb[ '9266BE2FD5D0C712FE7BF873D32AE50506A9B277' ] = {
	"$": {
		"name": "Pachinko Daisakusen 2",
		"altname": "パチンコ大作戦２",
		"class": "Licensed",
		"catalog": "CDS-82",
		"publisher": "Coconuts",
		"developer": "Marionette",
		"region": "Japan",
		"players": "1",
		"date": "1992-07-10"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "pachinko",
						"name": "Pachinko Controller"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "44F92026",
				"sha1": "9266BE2FD5D0C712FE7BF873D32AE50506A9B277",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2011-01-22"
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
								"name": "CDS-82-0 PRG",
								"size": "128k",
								"crc": "1644C162",
								"sha1": "17F1A1EC7456291122AAEB5431CD4C1C11FE29E3"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "CDS-82-0 CHR",
								"size": "128k",
								"crc": "B1AACEE2",
								"sha1": "0B06BA1BA63A4E166A9678A151B78CBD6259FC53"
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
