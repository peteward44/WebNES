this.NesDb = this.NesDb || {};

NesDb[ 'F110AE847049723DB4AC9213A8EC5BFD23E644F2' ] = {
	"$": {
		"name": "Argos no Senshi: Hachamecha Daishingeki",
		"altname": "アルゴスの戦士 はちゃめちゃ大進撃",
		"class": "Licensed",
		"catalog": "TCF-AH",
		"publisher": "Tecmo",
		"developer": "Tecmo",
		"region": "Japan",
		"players": "1",
		"date": "1987-04-17"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "E1B260DA",
				"sha1": "F110AE847049723DB4AC9213A8EC5BFD23E644F2",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-06-21"
			},
			"board": [
				{
					"$": {
						"type": "HVC-UNROM",
						"pcb": "HVC-UNROM-02",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "TCF-AH-0 PRG",
								"size": "128k",
								"crc": "E1B260DA",
								"sha1": "F110AE847049723DB4AC9213A8EC5BFD23E644F2"
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
								"type": "74xx161"
							}
						},
						{
							"$": {
								"type": "74xx32"
							}
						}
					],
					"pad": [
						{
							"$": {
								"h": "1",
								"v": "0"
							}
						}
					]
				}
			]
		}
	]
};
