this.NesDb = this.NesDb || {};

NesDb[ '9666209B62FCF572EA695BAA2B8979AD06E69CFD' ] = {
	"$": {
		"name": "Morita Shougi",
		"altname": "森田将棋",
		"class": "Licensed",
		"catalog": "KKS-MC (02)",
		"publisher": "Seta",
		"developer": "Random House",
		"region": "Japan",
		"players": "1",
		"date": "1987-04-14"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "9E356267",
				"sha1": "9666209B62FCF572EA695BAA2B8979AD06E69CFD",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-05-10"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SNROM",
						"pcb": "HVC-SNROM-01",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "KKS-MC-0 PRG",
								"size": "128k",
								"crc": "EC47296D",
								"sha1": "8A8D9DAE0A48B2BDB4D35E4B7EB2370327BED5B8"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "KKS-MC-0 CHR",
								"size": "8k",
								"crc": "78862947",
								"sha1": "BE02E6E909544F1BADF0224752D247F0DA8A4DEC"
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
								"type": "MMC1"
							}
						}
					]
				}
			]
		}
	]
};
