this.NesDb = this.NesDb || {};

NesDb[ 'A369B2A4A468C9E69533709E0DC3495457C9B9B2' ] = {
	"$": {
		"name": "Ghost 'n Goblins",
		"class": "Licensed",
		"catalog": "NES-GG-EEC",
		"publisher": "Capcom",
		"developer": "Capcom",
		"portdeveloper": "Micronics / Khaos",
		"region": "Europe",
		"players": "2",
		"date": "1989-03-23"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "9369A2F8",
				"sha1": "A369B2A4A468C9E69533709E0DC3495457C9B9B2",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2008-02-04"
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
								"name": "PAL-GG-0 PRG",
								"size": "128k",
								"crc": "9369A2F8",
								"sha1": "A369B2A4A468C9E69533709E0DC3495457C9B9B2"
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
