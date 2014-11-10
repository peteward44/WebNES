this.NesDb = this.NesDb || {};

NesDb[ '900949CDED16D32358E06C05EE5C3478872F54C1' ] = {
	"$": {
		"name": "Hikari no Senshi Photon: The Ultimate Game on Planet Earth",
		"altname": "光の戦士 フォトン 惑星ゾルディアスの戦い",
		"class": "Licensed",
		"catalog": "TFC-PH",
		"publisher": "Takara",
		"developer": "Takara",
		"region": "Japan",
		"players": "1",
		"date": "1987-08-28"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "51BD8336",
				"sha1": "900949CDED16D32358E06C05EE5C3478872F54C1",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-01"
			},
			"board": [
				{
					"$": {
						"type": "HVC-UNROM",
						"pcb": "HVC-UNROM-03",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "TFC-PH-0 PRG",
								"size": "128k",
								"crc": "51BD8336",
								"sha1": "900949CDED16D32358E06C05EE5C3478872F54C1"
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
								"h": "0",
								"v": "1"
							}
						}
					]
				}
			]
		}
	]
};
