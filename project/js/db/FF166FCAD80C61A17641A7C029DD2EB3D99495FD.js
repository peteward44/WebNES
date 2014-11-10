this.NesDb = this.NesDb || {};

NesDb[ 'FF166FCAD80C61A17641A7C029DD2EB3D99495FD' ] = {
	"$": {
		"name": "Square's Tom Sawyer",
		"altname": "スクウェアのトムソーヤ",
		"class": "Licensed",
		"catalog": "SQF-T4",
		"publisher": "Square",
		"developer": "Square",
		"region": "Japan",
		"players": "1",
		"date": "1989-11-30"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "CB0A76B1",
				"sha1": "FF166FCAD80C61A17641A7C029DD2EB3D99495FD",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-01"
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
								"name": "SQF-T4-0 PRG",
								"size": "256k",
								"crc": "CB0A76B1",
								"sha1": "FF166FCAD80C61A17641A7C029DD2EB3D99495FD"
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
