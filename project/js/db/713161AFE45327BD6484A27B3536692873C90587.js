this.NesDb = this.NesDb || {};

NesDb[ '713161AFE45327BD6484A27B3536692873C90587' ] = {
	"$": {
		"name": "Lost Word of Jenny",
		"altname": "ロストワード・オブ・ジェニー",
		"class": "Licensed",
		"catalog": "TFC-JN",
		"publisher": "Takara",
		"developer": "TOSE Software",
		"region": "Japan",
		"players": "1",
		"date": "1987-03-25"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "3CD6BB0E",
				"sha1": "713161AFE45327BD6484A27B3536692873C90587",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-11-16"
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
								"name": "TFC-JN-0 PRG",
								"size": "128k",
								"crc": "3CD6BB0E",
								"sha1": "713161AFE45327BD6484A27B3536692873C90587"
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
