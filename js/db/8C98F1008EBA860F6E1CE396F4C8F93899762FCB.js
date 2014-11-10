this.NesDb = this.NesDb || {};

NesDb[ '8C98F1008EBA860F6E1CE396F4C8F93899762FCB' ] = {
	"$": {
		"name": "Romance of the Three Kingdoms",
		"class": "Licensed",
		"catalog": "NES-IS-USA",
		"publisher": "Koei",
		"developer": "Koei",
		"region": "USA",
		"players": "8",
		"date": "1989-10"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "C6182024",
				"sha1": "8C98F1008EBA860F6E1CE396F4C8F93899762FCB",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-04-10"
			},
			"board": [
				{
					"$": {
						"type": "NES-SOROM",
						"pcb": "NES-SOROM-01",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-IS-0 PRG",
								"size": "256k",
								"crc": "C6182024",
								"sha1": "8C98F1008EBA860F6E1CE396F4C8F93899762FCB"
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
								"type": "MMC1B2"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "6113B1"
							}
						}
					]
				}
			]
		}
	]
};
