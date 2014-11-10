this.NesDb = this.NesDb || {};

NesDb[ '956A4A32999E39CDACDC146664B87FA96BF0CBD6' ] = {
	"$": {
		"name": "Times of Lore",
		"altname": "タイムズ オブ ロア 失われたメダリオン",
		"class": "Licensed",
		"catalog": "THF-U7",
		"publisher": "Toho",
		"developer": "Origin Systems",
		"portdeveloper": "Toho",
		"region": "Japan",
		"players": "1",
		"date": "1990-12-07"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "2FFDE228",
				"sha1": "956A4A32999E39CDACDC146664B87FA96BF0CBD6",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-01"
			},
			"board": [
				{
					"$": {
						"type": "HVC-UNROM",
						"pcb": "HVC-UNROM-10",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "THF-U7-0 PRG",
								"size": "128k",
								"crc": "2FFDE228",
								"sha1": "956A4A32999E39CDACDC146664B87FA96BF0CBD6"
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
