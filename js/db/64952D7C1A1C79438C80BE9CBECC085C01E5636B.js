this.NesDb = this.NesDb || {};

NesDb[ '64952D7C1A1C79438C80BE9CBECC085C01E5636B' ] = {
	"$": {
		"name": "Elysion",
		"altname": "エリュシオン",
		"class": "Licensed",
		"catalog": "TKS-G4",
		"publisher": "Tokyo Shoseki",
		"developer": "SystemSoft",
		"region": "Japan",
		"players": "1",
		"date": "1988-04-28"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "240C6DE8",
				"sha1": "64952D7C1A1C79438C80BE9CBECC085C01E5636B",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-04-29"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SLROM",
						"pcb": "HVC-SLROM-02",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "TKS-G4-0 PRG",
								"size": "128k",
								"crc": "D2E775D8",
								"sha1": "5CAC1CC22F971D5039218154B0B97390CDEFBB9D"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "TKS-G4-0 CHR",
								"size": "128k",
								"crc": "24A7A376",
								"sha1": "FE47CF2631CBAC9DF5DFE1EF69D7396C3B15E17E"
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
