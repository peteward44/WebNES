this.NesDb = this.NesDb || {};

NesDb[ '1CDC08894F9CCE3BF0550CC271390379EC0CF5E6' ] = {
	"$": {
		"name": "Vegas Connection: Casino Kara Ai o Komete",
		"altname": "ベガスコネクション カジノより愛をこめて",
		"class": "Licensed",
		"catalog": "SEI-1B",
		"publisher": "Sigma Enterprises",
		"developer": "Graphic Research",
		"region": "Japan",
		"players": "1",
		"date": "1989-11-24"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "57E9B21C",
				"sha1": "1CDC08894F9CCE3BF0550CC271390379EC0CF5E6",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2011-01-22"
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
								"name": "SEI-1B-0 PRG",
								"size": "256k",
								"crc": "57E9B21C",
								"sha1": "1CDC08894F9CCE3BF0550CC271390379EC0CF5E6"
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
