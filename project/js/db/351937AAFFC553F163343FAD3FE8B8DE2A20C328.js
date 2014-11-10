this.NesDb = this.NesDb || {};

NesDb[ '351937AAFFC553F163343FAD3FE8B8DE2A20C328' ] = {
	"$": {
		"name": "NFL",
		"class": "Licensed",
		"catalog": "NES-FN-USA",
		"publisher": "LJN",
		"developer": "Atlus",
		"region": "USA",
		"players": "2",
		"date": "1989-09"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "35B6FEBF",
				"sha1": "351937AAFFC553F163343FAD3FE8B8DE2A20C328",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-02-07"
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
								"name": "NES-FN-0 PRG",
								"size": "128k",
								"crc": "35B6FEBF",
								"sha1": "351937AAFFC553F163343FAD3FE8B8DE2A20C328"
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
								"type": "6113B1"
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
