this.NesDb = this.NesDb || {};

NesDb[ '22EAF03CC4A148EB7F96CCBDB878170B6D117940' ] = {
	"$": {
		"name": "Bird Week",
		"altname": "バード・ウィーク",
		"class": "Licensed",
		"catalog": "TFS-BK",
		"publisher": "Toemiland",
		"developer": "Lenar",
		"region": "Japan",
		"players": "1",
		"date": "1986-06-03"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "A8A9B982",
				"sha1": "22EAF03CC4A148EB7F96CCBDB878170B6D117940",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-12-24"
			},
			"board": [
				{
					"$": {
						"type": "HVC-CNROM+SECURITY",
						"pcb": "HVC-CNROM-256K-01",
						"mapper": "185"
					},
					"prg": [
						{
							"$": {
								"name": "TFS-BK-0 PRG",
								"size": "16k",
								"crc": "2A629F7D",
								"sha1": "BD0B7D6974CE1E3BC0A8AFB55FEBD0C03332361C"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "TFS-BK-0 CHR",
								"size": "8k",
								"crc": "970A934E",
								"sha1": "2307A6DAF73984CA4242A93858CAABF9F86469AD"
							},
							"pin": [
								{
									"$": {
										"number": "26",
										"function": "CE"
									}
								},
								{
									"$": {
										"number": "27",
										"function": "CE"
									}
								}
							]
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx161"
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
