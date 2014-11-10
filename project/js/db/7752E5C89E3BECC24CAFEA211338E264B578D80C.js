this.NesDb = this.NesDb || {};

NesDb[ '7752E5C89E3BECC24CAFEA211338E264B578D80C' ] = {
	"$": {
		"name": "Highway Star",
		"altname": "ハイウェイスター",
		"class": "Licensed",
		"catalog": "SQF-HI",
		"publisher": "Square",
		"developer": "Square",
		"region": "Japan",
		"players": "1",
		"date": "1987-08-07"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "3dglasses",
						"name": "3-D Glasses"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "02589598",
				"sha1": "7752E5C89E3BECC24CAFEA211338E264B578D80C",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-01"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SGROM",
						"pcb": "HVC-SGROM-01",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "SQF-HI-0 PRG",
								"size": "128k",
								"crc": "02589598",
								"sha1": "7752E5C89E3BECC24CAFEA211338E264B578D80C"
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
								"type": "MMC1"
							}
						}
					]
				}
			]
		}
	]
};
