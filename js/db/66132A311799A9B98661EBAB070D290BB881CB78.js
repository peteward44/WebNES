this.NesDb = this.NesDb || {};

NesDb[ '66132A311799A9B98661EBAB070D290BB881CB78' ] = {
	"$": {
		"name": "Takeshi no Chousenjou",
		"altname": "たけしの挑戦状",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "TFC-TC-5300-09",
		"publisher": "Taito",
		"developer": "Taito",
		"region": "Japan",
		"players": "1",
		"date": "1986-12-10"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "DB196068",
				"sha1": "66132A311799A9B98661EBAB070D290BB881CB78",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-06-29"
			},
			"board": [
				{
					"$": {
						"type": "TAITO-UNROM",
						"pcb": "P3-029B",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "X3-009",
								"size": "128k",
								"crc": "DB196068",
								"sha1": "66132A311799A9B98661EBAB070D290BB881CB78"
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
