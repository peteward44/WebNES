this.NesDb = this.NesDb || {};

NesDb[ '80E3F15ACD93C2DB6C2D58A45B39B0E22EF6C334' ] = {
	"$": {
		"name": "Pirates!",
		"class": "Licensed",
		"catalog": "NES-8U-USA",
		"publisher": "Ultra Games",
		"developer": "Microprose",
		"portdeveloper": "Rare",
		"region": "USA",
		"players": "1",
		"date": "1991-10"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "3D0996B2",
				"sha1": "80E3F15ACD93C2DB6C2D58A45B39B0E22EF6C334",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-10-27"
			},
			"board": [
				{
					"$": {
						"type": "NES-SKROM",
						"pcb": "NES-SKROM-04",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-8U-0 PRG",
								"size": "128k",
								"crc": "CD2A73F0",
								"sha1": "AEB86674D511B062B9CB17C9D8CB50DE9EA0C999"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-8U-0 CHR",
								"size": "128k",
								"crc": "F1D51764",
								"sha1": "8730BFC40DA0B643F5DA1A98CE474B321F1CF125"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "8k",
								"battery": "1"
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
