this.NesDb = this.NesDb || {};

NesDb[ '9DC376442DB43C7786230AEEB54D5D643A4104E6' ] = {
	"$": {
		"name": "Sensha Senryaku: Sabaku no Kitsune",
		"altname": "戦車戦略 砂漠の狐",
		"class": "Licensed",
		"catalog": "KSC-DF",
		"publisher": "Kemco",
		"developer": "Kemco",
		"region": "Japan",
		"players": "2",
		"date": "1988-04-28"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "828F8F1F",
				"sha1": "9DC376442DB43C7786230AEEB54D5D643A4104E6",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-09-12"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SKROM",
						"pcb": "HVC-SKROM-01",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "KSC-DF-0 PRG",
								"size": "128k",
								"crc": "93DC3C82",
								"sha1": "0BB164DC7EA96F499AB5E18824F1BFFA2E585719"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "KSC-DF-0 CHR",
								"size": "128k",
								"crc": "8FEDD4A7",
								"sha1": "1A88D32B71E6BBFBFDDC0A9384C4D2466F89230E"
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
								"type": "MMC1A"
							}
						}
					]
				}
			]
		}
	]
};
