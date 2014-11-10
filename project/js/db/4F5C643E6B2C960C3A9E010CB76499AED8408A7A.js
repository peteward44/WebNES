this.NesDb = this.NesDb || {};

NesDb[ '4F5C643E6B2C960C3A9E010CB76499AED8408A7A' ] = {
	"$": {
		"name": "Dragon Quest IV: Michibikareshi Mono-tachi",
		"altname": "ドラゴンクエストIV 導かれし者たち",
		"class": "Licensed",
		"catalog": "EFC-D4",
		"publisher": "Enix",
		"developer": "Chunsoft",
		"region": "Japan",
		"players": "1",
		"date": "1990-02-11"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"revision": "A",
				"crc": "0794F2A5",
				"sha1": "4F5C643E6B2C960C3A9E010CB76499AED8408A7A",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-04-29"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SUROM",
						"pcb": "HVC-SUROM-01",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "EFC-D4-1 PRG",
								"size": "512k",
								"crc": "0794F2A5",
								"sha1": "4F5C643E6B2C960C3A9E010CB76499AED8408A7A"
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
