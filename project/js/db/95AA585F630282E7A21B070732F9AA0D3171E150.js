this.NesDb = this.NesDb || {};

NesDb[ '95AA585F630282E7A21B070732F9AA0D3171E150' ] = {
	"$": {
		"name": "Jordan vs. Bird: One on One",
		"class": "Licensed",
		"catalog": "NES-OE-USA",
		"publisher": "Milton Bradley",
		"developer": "Electronic Arts",
		"portdeveloper": "Rare",
		"region": "USA",
		"players": "2",
		"date": "1989-08"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "303D4371",
				"sha1": "95AA585F630282E7A21B070732F9AA0D3171E150",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-01-21"
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
								"name": "NES-OE-0 PRG",
								"size": "128k",
								"crc": "303D4371",
								"sha1": "95AA585F630282E7A21B070732F9AA0D3171E150"
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
