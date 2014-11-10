this.NesDb = this.NesDb || {};

NesDb[ '55C7B3672C12CD57E7CCDD30D7A31675C65C7A9D' ] = {
	"$": {
		"name": "Ginga no Sannin",
		"altname": "銀河の三人",
		"class": "Licensed",
		"catalog": "HVC-GT",
		"publisher": "Nintendo",
		"developer": "Nintendo",
		"region": "Japan",
		"players": "1",
		"date": "1987-12-15"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "8A368744",
				"sha1": "55C7B3672C12CD57E7CCDD30D7A31675C65C7A9D",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-11-11"
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
								"name": "HVC-GT-0 PRG",
								"size": "128k",
								"crc": "8A368744",
								"sha1": "55C7B3672C12CD57E7CCDD30D7A31675C65C7A9D"
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
