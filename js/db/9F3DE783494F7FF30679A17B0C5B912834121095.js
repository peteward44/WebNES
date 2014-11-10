this.NesDb = this.NesDb || {};

NesDb[ '9F3DE783494F7FF30679A17B0C5B912834121095' ] = {
	"$": {
		"name": "Nekketsu Kouha Kunio-kun",
		"altname": "熱血硬派くにおくん",
		"class": "Licensed",
		"catalog": "TJC-KN",
		"publisher": "Technos",
		"developer": "Technos",
		"region": "Japan",
		"players": "2",
		"date": "1987-04-17"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "A7D3635E",
				"sha1": "9F3DE783494F7FF30679A17B0C5B912834121095",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-06-24"
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
								"name": "TJC-KN-0 PRG",
								"size": "128k",
								"crc": "A7D3635E",
								"sha1": "9F3DE783494F7FF30679A17B0C5B912834121095"
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
