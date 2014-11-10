this.NesDb = this.NesDb || {};

NesDb[ 'F987C9C26EFA260DA38D38E2130DF7547BB7C557' ] = {
	"$": {
		"name": "Sangokushi",
		"altname": "三國志",
		"class": "Licensed",
		"catalog": "KOE-IS",
		"publisher": "Koei",
		"developer": "Koei",
		"region": "Japan",
		"players": "8",
		"date": "1988-10-30"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "ABBF7217",
				"sha1": "F987C9C26EFA260DA38D38E2130DF7547BB7C557",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-02-18"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SOROM",
						"pcb": "HVC-SOROM-03",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "KOE-IS-0 PRG",
								"size": "256k",
								"crc": "ABBF7217",
								"sha1": "F987C9C26EFA260DA38D38E2130DF7547BB7C557"
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
								"type": "MMC1A"
							}
						}
					]
				}
			]
		}
	]
};
