this.NesDb = this.NesDb || {};

NesDb[ '899ACEF105506D2DF7D37AB1CC848699500E6499' ] = {
	"$": {
		"name": "Winter Games",
		"class": "Licensed",
		"catalog": "NES-WM-USA",
		"publisher": "Acclaim",
		"developer": "Epyx",
		"portdeveloper": "Atelier Double",
		"region": "USA",
		"players": "2",
		"date": "1987-09"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"revision": "A",
				"crc": "969EF9E4",
				"sha1": "899ACEF105506D2DF7D37AB1CC848699500E6499",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-07-03"
			},
			"board": [
				{
					"$": {
						"type": "NES-UNROM",
						"pcb": "NES-UN-ROM-07",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "NES-WM-1 PRG",
								"size": "128k",
								"crc": "969EF9E4",
								"sha1": "899ACEF105506D2DF7D37AB1CC848699500E6499"
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
								"type": "6113"
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
