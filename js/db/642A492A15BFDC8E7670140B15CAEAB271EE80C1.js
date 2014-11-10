this.NesDb = this.NesDb || {};

NesDb[ '642A492A15BFDC8E7670140B15CAEAB271EE80C1' ] = {
	"$": {
		"name": "America Daitouryou Senkyo",
		"altname": "アメリカ大統領選挙",
		"class": "Licensed",
		"catalog": "HCT-AQ/002",
		"publisher": "Hect",
		"developer": "Hect",
		"region": "Japan",
		"players": "1",
		"date": "1988-10-28"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "9273F18E",
				"sha1": "642A492A15BFDC8E7670140B15CAEAB271EE80C1",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2011-09-08"
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
								"name": "HCT-AQ-0 PRG",
								"size": "128k",
								"crc": "7831B2FF",
								"sha1": "84AA44D3DB0495A1A5CF6C24A16508FFE4999829"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "HCT-AQ-0 CHR",
								"size": "128k",
								"crc": "719D68D2",
								"sha1": "2582E6B2195BDF70E5334CF10CB5F4C65A97B9A9"
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
