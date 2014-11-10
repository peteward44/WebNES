this.NesDb = this.NesDb || {};

NesDb[ '62A7B899F2CA01BDBD0C6A0024C34C6F9AFB6228' ] = {
	"$": {
		"name": "Jongbou",
		"altname": "ジャンボウ",
		"class": "Licensed",
		"catalog": "KAC-JB",
		"publisher": "KAC",
		"developer": "SNK",
		"portdeveloper": "Micronics / Khaos",
		"region": "Japan",
		"players": "2",
		"date": "1987-07-18"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "A56208A0",
				"sha1": "62A7B899F2CA01BDBD0C6A0024C34C6F9AFB6228",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-06-21"
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
								"name": "KAC-JB-0 PRG",
								"size": "128k",
								"crc": "A56208A0",
								"sha1": "62A7B899F2CA01BDBD0C6A0024C34C6F9AFB6228"
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
