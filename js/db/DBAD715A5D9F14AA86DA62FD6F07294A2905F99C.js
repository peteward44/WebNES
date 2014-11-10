this.NesDb = this.NesDb || {};

NesDb[ 'DBAD715A5D9F14AA86DA62FD6F07294A2905F99C' ] = {
	"$": {
		"name": "Krazy Kreatures",
		"class": "Unlicensed",
		"catalog": "AVE-KK",
		"publisher": "AVE",
		"developer": "Bitmasters",
		"region": "USA",
		"players": "2",
		"date": "1990"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"revision": "1.0",
				"crc": "85323FD6",
				"sha1": "DBAD715A5D9F14AA86DA62FD6F07294A2905F99C",
				"dump": "ok",
				"dumper": "Mark_K",
				"datedumped": "2011-12-18"
			},
			"board": [
				{
					"$": {
						"type": "AVE-NINA-03",
						"pcb": "NINA-03 REV. A",
						"mapper": "79"
					},
					"prg": [
						{
							"$": {
								"name": "FE6E-PGM",
								"size": "32k",
								"crc": "5EB94B11",
								"sha1": "E787A9E00A56A6156C467E410641FAB10611FB67"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "BDED-CHR",
								"size": "32k",
								"crc": "98C888E0",
								"sha1": "AFB8CA33519E1B5729EE0C4C212495BBCDA78E72"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx138"
							}
						},
						{
							"$": {
								"type": "74xx175"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "MX8018"
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
