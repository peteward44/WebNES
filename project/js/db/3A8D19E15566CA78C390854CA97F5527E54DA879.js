this.NesDb = this.NesDb || {};

NesDb[ '3A8D19E15566CA78C390854CA97F5527E54DA879' ] = {
	"$": {
		"name": "Tantei Jinguuji Saburou: Toki no Sugiyuku Mama ni",
		"altname": "探偵神宮寺三郎　時の過ぎゆくままに",
		"class": "Licensed",
		"catalog": "DFC-J4",
		"publisher": "Data East",
		"developer": "Sakata SAS",
		"region": "Japan",
		"players": "1",
		"date": "1990-09-28"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "2061772A",
				"sha1": "3A8D19E15566CA78C390854CA97F5527E54DA879",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-07-22"
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
								"name": "DFC-J4-0 PRG",
								"size": "128k",
								"crc": "2061772A",
								"sha1": "3A8D19E15566CA78C390854CA97F5527E54DA879"
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
