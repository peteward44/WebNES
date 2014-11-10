this.NesDb = this.NesDb || {};

NesDb[ '259C8F859F63301F5C4D1D6E6C4F3222D467AB49' ] = {
	"$": {
		"name": "Donald Duck",
		"altname": "ドナルドダック",
		"class": "Licensed",
		"catalog": "KSC-WS",
		"publisher": "Kemco",
		"developer": "Kemco",
		"region": "Japan",
		"players": "2",
		"date": "1988-09-22"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "E66BDDCF",
				"sha1": "259C8F859F63301F5C4D1D6E6C4F3222D467AB49",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-06-26"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SLROM",
						"pcb": "HVC-SLROM-02",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "KSC-WS-0 PRG",
								"size": "128k",
								"crc": "B8B2E479",
								"sha1": "7663F8B7AE8AC9D6AE8C0AA3443691910EFC0673"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "KSC-WS-0 CHR",
								"size": "128k",
								"crc": "DB684F71",
								"sha1": "DA5CD2158A875558E41C87968E5AECEA06F7915A"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1A"
							}
						}
					]
				}
			]
		}
	]
};
