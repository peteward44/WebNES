this.NesDb = this.NesDb || {};

NesDb[ '7CF7192C0EEE713C3AAFF84D38D45D1846F1B105' ] = {
	"$": {
		"name": "WWF WrestleMania Challenge",
		"class": "Licensed",
		"catalog": "NES-W9-USA",
		"publisher": "LJN",
		"developer": "Rare",
		"region": "USA",
		"players": "2",
		"date": "1990-11"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "A0230D75",
				"sha1": "7CF7192C0EEE713C3AAFF84D38D45D1846F1B105",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-01-27"
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
								"name": "NES-W9-0 PRG",
								"size": "128k",
								"crc": "A0230D75",
								"sha1": "7CF7192C0EEE713C3AAFF84D38D45D1846F1B105"
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
