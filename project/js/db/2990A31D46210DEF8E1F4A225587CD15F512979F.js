this.NesDb = this.NesDb || {};

NesDb[ '2990A31D46210DEF8E1F4A225587CD15F512979F' ] = {
	"$": {
		"name": "Monster In My Pocket",
		"class": "Licensed",
		"catalog": "NES-1Y-USA",
		"publisher": "Konami",
		"developer": "Konami",
		"region": "USA",
		"players": "2",
		"date": "1992-01"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "E542E3CF",
				"sha1": "2990A31D46210DEF8E1F4A225587CD15F512979F",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-10-02"
			},
			"board": [
				{
					"$": {
						"type": "NES-TLROM",
						"pcb": "NES-TLROM-03",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "NES-1Y-0 PRG",
								"size": "128k",
								"crc": "06CAE67F",
								"sha1": "800FF8AEF18ED08720C26D09DAC6EE3D5DC81A44"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-1Y-0 CHR",
								"size": "128k",
								"crc": "BC9E30BC",
								"sha1": "4C5797DE404E20FBAD6DC863B08C3D5E4FDD623A"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC3B"
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
