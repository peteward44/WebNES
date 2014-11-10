this.NesDb = this.NesDb || {};

NesDb[ 'B30062EBE5A4870467B5D30A3AC5E53D682A0813' ] = {
	"$": {
		"name": "Teenage Mutant Hero Turtles II: The Arcade Game",
		"class": "Licensed",
		"catalog": "NES-89-SCN",
		"publisher": "Konami",
		"developer": "Konami",
		"region": "Scandinavia",
		"players": "2",
		"date": "1991-11-14"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "C5657C12",
				"sha1": "B30062EBE5A4870467B5D30A3AC5E53D682A0813",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2008-02-15"
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
								"name": "PAL-89-0 PRG",
								"size": "256k",
								"crc": "355DDEE6",
								"sha1": "3DFC04CA0D6C9ECB3806A3CF532F6FAE18A2FD75"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PAL-89-0 CHR",
								"size": "256k",
								"crc": "26747879",
								"sha1": "4E52DC3A55E9C3DA8FEBB93DBC250EA99C85B8AF"
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
								"type": "3195A"
							}
						}
					]
				}
			]
		}
	]
};
