this.NesDb = this.NesDb || {};

NesDb[ 'C03A3E92A65C031A1A03036E965EF3048974CA73' ] = {
	"$": {
		"name": "Mahjong Taikai",
		"altname": "麻雀大会",
		"class": "Licensed",
		"catalog": "KOE-IQ",
		"publisher": "Koei",
		"developer": "Koei",
		"region": "Japan",
		"players": "1",
		"date": "1989-10-31"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "F714FAE3",
				"sha1": "C03A3E92A65C031A1A03036E965EF3048974CA73",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-12-06"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SNROM",
						"pcb": "HVC-SNROM-09",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "KOE-IQ-0 PRG",
								"size": "128k",
								"crc": "F714FAE3",
								"sha1": "C03A3E92A65C031A1A03036E965EF3048974CA73"
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
					"vram": [
						{
							"$": {
								"size": "8k"
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
