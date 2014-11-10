this.NesDb = this.NesDb || {};

NesDb[ '9FB4CFD5F8B1EA4239C38E8A43BC3F657CFCCDCA' ] = {
	"$": {
		"name": "Zoids: Chuuou Tairiku no Tatakai",
		"altname": "ゾイド　中央大陸の戦い",
		"class": "Licensed",
		"catalog": "TFS-ZD",
		"publisher": "Toemiland",
		"developer": "Micronics / Khaos",
		"region": "Japan",
		"players": "1",
		"date": "1987-09-05"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "D0DF726E",
				"sha1": "9FB4CFD5F8B1EA4239C38E8A43BC3F657CFCCDCA",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-01"
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
								"name": "TFS-ZD-0 PRG",
								"size": "128k",
								"crc": "D0DF726E",
								"sha1": "9FB4CFD5F8B1EA4239C38E8A43BC3F657CFCCDCA"
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
