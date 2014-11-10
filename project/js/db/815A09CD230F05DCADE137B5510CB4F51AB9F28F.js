this.NesDb = this.NesDb || {};

NesDb[ '815A09CD230F05DCADE137B5510CB4F51AB9F28F' ] = {
	"$": {
		"name": "Shanghai II",
		"altname": "上海Ⅱ",
		"class": "Licensed",
		"catalog": "TEC-XT",
		"publisher": "Sunsoft",
		"developer": "Sunsoft",
		"region": "Japan",
		"players": "1",
		"date": "1990-08-24"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "38BFC03C",
				"sha1": "815A09CD230F05DCADE137B5510CB4F51AB9F28F",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-06-27"
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
								"name": "TEC-XT-0 PRG",
								"size": "128k",
								"crc": "38BFC03C",
								"sha1": "815A09CD230F05DCADE137B5510CB4F51AB9F28F"
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
