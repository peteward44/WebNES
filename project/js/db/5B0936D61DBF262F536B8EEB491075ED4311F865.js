this.NesDb = this.NesDb || {};

NesDb[ '5B0936D61DBF262F536B8EEB491075ED4311F865' ] = {
	"$": {
		"name": "Life Force Salamander",
		"class": "Licensed",
		"catalog": "NES-LF-EEC",
		"publisher": "Konami",
		"developer": "Konami",
		"region": "Europe",
		"players": "2",
		"date": "1989-11-22"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "7002FE8D",
				"sha1": "5B0936D61DBF262F536B8EEB491075ED4311F865",
				"dump": "ok",
				"dumper": "Bregalad",
				"datedumped": "2007-04-04"
			},
			"board": [
				{
					"$": {
						"type": "NES-UNROM",
						"pcb": "NES-UNROM-08",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-LF-0 PRG",
								"size": "128k",
								"crc": "7002FE8D",
								"sha1": "5B0936D61DBF262F536B8EEB491075ED4311F865"
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
