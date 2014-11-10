this.NesDb = this.NesDb || {};

NesDb[ '055590BD669F7218B9BA737127AC45CF54C7F297' ] = {
	"$": {
		"name": "Kagerou Densetsu",
		"altname": "影狼伝説",
		"class": "Licensed",
		"catalog": "PIX-XA-01",
		"publisher": "Pixel",
		"developer": "Pixel",
		"region": "Japan",
		"players": "1",
		"date": "1990-05-11"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "C9187B43",
				"sha1": "055590BD669F7218B9BA737127AC45CF54C7F297",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-11-12"
			},
			"board": [
				{
					"$": {
						"type": "HVC-TKROM",
						"pcb": "HVC-TKROM-02",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "PIX-XA-0 PRG",
								"size": "128k",
								"crc": "49E834C3",
								"sha1": "CAD33AB59849D14EE964B47816D6D534166F2D50"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PIX-XA-0 CHR",
								"size": "128k",
								"crc": "6A661390",
								"sha1": "26E220B98C77FA727D2E8EB3019E83BE9764563E"
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
								"type": "MMC3B"
							}
						}
					]
				}
			]
		}
	]
};
