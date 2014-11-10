this.NesDb = this.NesDb || {};

NesDb[ '428B6712065580DF4C0060B83FFA84EAFCE475E6' ] = {
	"$": {
		"name": "Momotarou Dentetsu",
		"altname": "桃太郎電鉄",
		"class": "Licensed",
		"catalog": "HFC-M2",
		"publisher": "Hudson Soft",
		"developer": "Hudson Soft",
		"region": "Japan",
		"players": "1",
		"date": "1988-12-02"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "1027C432",
				"sha1": "428B6712065580DF4C0060B83FFA84EAFCE475E6",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-11-15"
			},
			"board": [
				{
					"$": {
						"type": "HVC-UOROM",
						"pcb": "HVC-UOROM-01",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "HFC-M2-0 PRG",
								"size": "256k",
								"crc": "1027C432",
								"sha1": "428B6712065580DF4C0060B83FFA84EAFCE475E6"
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
