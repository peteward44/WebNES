this.NesDb = this.NesDb || {};

NesDb[ 'E9258B877DF77EEA71CDBFDC0691524A34D30F2F' ] = {
	"$": {
		"name": "Tecmo Cup: Football Game",
		"class": "Licensed",
		"catalog": "NES-TP-SCN",
		"publisher": "Tecmo",
		"developer": "Tecmo",
		"region": "Scandinavia",
		"players": "1",
		"date": "1992-09-24"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "60925D08",
				"sha1": "E9258B877DF77EEA71CDBFDC0691524A34D30F2F",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2007-07-29"
			},
			"board": [
				{
					"$": {
						"type": "NES-SLROM",
						"pcb": "NES-SLROM-06",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-TP-0 PRG",
								"size": "128k",
								"crc": "4C392CB7",
								"sha1": "8A223C9EAFBA85BA8041A5D40E65EAC24BB9C9F2"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PAL-TP-0 CHR",
								"size": "128k",
								"crc": "5A722BF7",
								"sha1": "150894F22871465646297395610CA0326F62614F"
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
								"type": "3195A"
							}
						}
					]
				}
			]
		}
	]
};
