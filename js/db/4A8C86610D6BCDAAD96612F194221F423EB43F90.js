this.NesDb = this.NesDb || {};

NesDb[ '4A8C86610D6BCDAAD96612F194221F423EB43F90' ] = {
	"$": {
		"name": "Bases Loaded",
		"class": "Licensed",
		"catalog": "NES-LD-USA",
		"publisher": "Jaleco",
		"developer": "TOSE Software",
		"region": "USA",
		"players": "2",
		"date": "1988-07"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"revision": "B",
				"crc": "6ABAD366",
				"sha1": "4A8C86610D6BCDAAD96612F194221F423EB43F90",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-03-10"
			},
			"board": [
				{
					"$": {
						"type": "NES-SF1ROM",
						"pcb": "NES-SF1ROM-02",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-LD-2 PRG",
								"size": "256k",
								"crc": "F654C73A",
								"sha1": "9AFE37D357C36EC8BD77A92CB4187456BB984A55"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-LD-0 CHR",
								"size": "64k",
								"crc": "E472EC23",
								"sha1": "B87D2C3D851488016FDA181485F1F42D2C2BC477"
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
