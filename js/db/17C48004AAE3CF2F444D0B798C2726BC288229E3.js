this.NesDb = this.NesDb || {};

NesDb[ '17C48004AAE3CF2F444D0B798C2726BC288229E3' ] = {
	"$": {
		"name": "Fleet Commander",
		"altname": "フリートコマンダー",
		"class": "Licensed",
		"catalog": "HSP-10",
		"publisher": "ASCII",
		"developer": "ASCII",
		"region": "Japan",
		"players": "1",
		"date": "1988-03-29"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "turbofile",
						"name": "TurboFile"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "B811C054",
				"sha1": "17C48004AAE3CF2F444D0B798C2726BC288229E3",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-11-11"
			},
			"board": [
				{
					"$": {
						"type": "HVC-CNROM",
						"pcb": "CN-04B",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"size": "32k",
								"crc": "3A51EB04",
								"sha1": "968251491571AAE23DD99C40166AE53C55E7A778"
							}
						}
					],
					"chr": [
						{
							"$": {
								"size": "32k",
								"crc": "4AD8D0C3",
								"sha1": "1B0DF39C60A1191A030696A6CA7D1084F169F1EF"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx161"
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
