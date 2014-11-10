this.NesDb = this.NesDb || {};

NesDb[ 'EA2187D4F7A15734F6B5A855421C635F298AAE9E' ] = {
	"$": {
		"name": "Tombs and Treasure",
		"class": "Licensed",
		"catalog": "NES-2T-USA",
		"publisher": "Infocom",
		"developer": "Nihon Falcom",
		"portdeveloper": "Compile",
		"region": "USA",
		"players": "1",
		"date": "1991-06"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "50D296B3",
				"sha1": "EA2187D4F7A15734F6B5A855421C635F298AAE9E",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-03-18"
			},
			"board": [
				{
					"$": {
						"type": "NES-SGROM",
						"pcb": "NES-SGROM-04",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-2T-0 PRG",
								"size": "256k",
								"crc": "50D296B3",
								"sha1": "EA2187D4F7A15734F6B5A855421C635F298AAE9E"
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
								"type": "MMC1B2"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "6113B1"
							}
						}
					]
				}
			]
		}
	]
};
