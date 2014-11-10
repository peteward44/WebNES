this.NesDb = this.NesDb || {};

NesDb[ '81CB1057C361ACAC0BB19BCC7B3B5E7C30D923FD' ] = {
	"$": {
		"name": "Rygar",
		"class": "Licensed",
		"catalog": "NES-RY-EEC",
		"publisher": "Tecmo",
		"developer": "Tecmo",
		"region": "Europe",
		"players": "1",
		"date": "1990-03-30"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "8F197B0A",
				"sha1": "81CB1057C361ACAC0BB19BCC7B3B5E7C30D923FD",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2008-02-11"
			},
			"board": [
				{
					"$": {
						"type": "NES-UNROM",
						"pcb": "NES-UNROM-09",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-RY-0 PRG",
								"size": "128k",
								"crc": "8F197B0A",
								"sha1": "81CB1057C361ACAC0BB19BCC7B3B5E7C30D923FD"
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
					"cic": [
						{
							"$": {
								"type": "3195A"
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
