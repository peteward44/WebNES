this.NesDb = this.NesDb || {};

NesDb[ '789AD828D2EE2CED8F83E2BB510264360B6424D5' ] = {
	"$": {
		"name": "Double Moon Densetsu",
		"altname": "ダブルムーン伝説",
		"class": "Licensed",
		"catalog": "NCS-1T",
		"publisher": "Masaya",
		"developer": "Masaya",
		"region": "Japan",
		"players": "1",
		"date": "1992-10-30"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "A60FBA51",
				"sha1": "789AD828D2EE2CED8F83E2BB510264360B6424D5",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2012-05-06"
			},
			"board": [
				{
					"$": {
						"type": "HVC-TNROM",
						"pcb": "HVC-TNROM-02",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "NCS-1T-0 PRG",
								"size": "512k",
								"crc": "A60FBA51",
								"sha1": "789AD828D2EE2CED8F83E2BB510264360B6424D5"
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
								"type": "MMC3C"
							}
						}
					]
				}
			]
		}
	]
};
