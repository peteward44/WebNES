this.NesDb = this.NesDb || {};

NesDb[ '127C038C25AEC70CA1822C92AF6E45169BA3310B' ] = {
	"$": {
		"name": "Black Bass, The",
		"altname": "ザ・ブラックバス",
		"class": "Licensed",
		"catalog": "GAM-BO-01",
		"publisher": "HOT・B",
		"developer": "Another",
		"region": "Japan",
		"players": "1",
		"date": "1987-02-06"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "B04BA659",
				"sha1": "127C038C25AEC70CA1822C92AF6E45169BA3310B",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-05-09"
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
								"name": "GAM-BO-0 PRG",
								"size": "128k",
								"crc": "B04BA659",
								"sha1": "127C038C25AEC70CA1822C92AF6E45169BA3310B"
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
