this.NesDb = this.NesDb || {};

NesDb[ 'E0B5047668E4F04BAC1609D649D78776E793638A' ] = {
	"$": {
		"name": "Mahjong Taisen",
		"altname": "麻雀大戦",
		"class": "Licensed",
		"catalog": "NBF-8J (12)",
		"publisher": "Nichibutsu",
		"developer": "Nichibutsu",
		"region": "Japan",
		"players": "1",
		"date": "1992-05-20"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "59449E3B",
				"sha1": "E0B5047668E4F04BAC1609D649D78776E793638A",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2011-01-22"
			},
			"board": [
				{
					"$": {
						"type": "HVC-TKROM",
						"pcb": "HVC-TKROM-03",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "NBF-8J-0 PRG",
								"size": "256k",
								"crc": "F55CDEF2",
								"sha1": "B33FE15FDF232026C42D81C6D49C90C6FD506A5E"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NBF-8J-0 CHR",
								"size": "128k",
								"crc": "E37A1D57",
								"sha1": "219EAB0DF558F5FBDC5D884808EED2E94B41F7DA"
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
								"type": "MMC3C"
							}
						}
					]
				}
			]
		}
	]
};
