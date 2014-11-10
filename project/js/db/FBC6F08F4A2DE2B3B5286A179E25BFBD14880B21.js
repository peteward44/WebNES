this.NesDb = this.NesDb || {};

NesDb[ 'FBC6F08F4A2DE2B3B5286A179E25BFBD14880B21' ] = {
	"$": {
		"name": "Takeda Shingen",
		"altname": "武田信玄",
		"class": "Licensed",
		"catalog": "GAM-HB-03",
		"publisher": "HOT・B",
		"developer": "Another",
		"region": "Japan",
		"players": "1",
		"date": "1988-03-28"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "0A42D84F",
				"sha1": "FBC6F08F4A2DE2B3B5286A179E25BFBD14880B21",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-06-27"
			},
			"board": [
				{
					"$": {
						"type": "HVC-UNROM",
						"pcb": "HVC-UNROM-05",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "GAM-HB-0 PRG",
								"size": "128k",
								"crc": "0A42D84F",
								"sha1": "FBC6F08F4A2DE2B3B5286A179E25BFBD14880B21"
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
