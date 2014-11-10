this.NesDb = this.NesDb || {};

NesDb[ 'ABF9B5A432C2C5439017AEAC15DF6FF64857ECCC' ] = {
	"$": {
		"name": "Stick Hunter: Exciting Ice Hockey Game",
		"altname": "スティックハンター",
		"class": "Licensed",
		"catalog": "KAC-IH",
		"publisher": "KAC",
		"developer": "Micronics / Khaos",
		"region": "Japan",
		"players": "2",
		"date": "1987-12-18"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "5440811C",
				"sha1": "ABF9B5A432C2C5439017AEAC15DF6FF64857ECCC",
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
								"name": "KAC-IH-0 PRG",
								"size": "128k",
								"crc": "5440811C",
								"sha1": "ABF9B5A432C2C5439017AEAC15DF6FF64857ECCC"
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
