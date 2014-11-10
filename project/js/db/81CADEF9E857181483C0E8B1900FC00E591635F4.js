this.NesDb = this.NesDb || {};

NesDb[ '81CADEF9E857181483C0E8B1900FC00E591635F4' ] = {
	"$": {
		"name": "Hoshi o Miru Hito",
		"altname": "星をみるひと",
		"class": "Licensed",
		"catalog": "GAM-HM-02",
		"publisher": "HOT・B",
		"developer": "Another",
		"region": "Japan",
		"players": "1",
		"date": "1987-10-27"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "3DCADA42",
				"sha1": "81CADEF9E857181483C0E8B1900FC00E591635F4",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-01"
			},
			"board": [
				{
					"$": {
						"type": "HVC-UNROM",
						"pcb": "HVC-UNROM-04",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "GAM-HM-0 PRG",
								"size": "128k",
								"crc": "3DCADA42",
								"sha1": "81CADEF9E857181483C0E8B1900FC00E591635F4"
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
