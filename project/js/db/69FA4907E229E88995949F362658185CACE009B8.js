this.NesDb = this.NesDb || {};

NesDb[ '69FA4907E229E88995949F362658185CACE009B8' ] = {
	"$": {
		"name": "SWAT: Special Weapons and Tactics",
		"class": "Licensed",
		"catalog": "TDF-SW",
		"publisher": "Toei Animation",
		"developer": "Shouei System",
		"region": "Japan",
		"players": "1",
		"date": "1987-09-11"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "7C3D2EA3",
				"sha1": "69FA4907E229E88995949F362658185CACE009B8",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-10-03"
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
								"name": "TDF-SW-0 PRG",
								"size": "128k",
								"crc": "7C3D2EA3",
								"sha1": "69FA4907E229E88995949F362658185CACE009B8"
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
