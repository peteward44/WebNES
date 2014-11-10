this.NesDb = this.NesDb || {};

NesDb[ '36BAFC566A8DE83CC75EFFC20F69F981F477F6CC' ] = {
	"$": {
		"name": "Bashi Bazook: Morphoid Masher",
		"class": "Licensed",
		"subclass": "Unreleased",
		"catalog": "UNR-14-USA",
		"publisher": "Jaleco",
		"developer": "Atlus",
		"region": "USA",
		"players": "1",
		"date": "0000"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"prototype": "1",
				"crc": "7C7A0A73",
				"sha1": "36BAFC566A8DE83CC75EFFC20F69F981F477F6CC",
				"dump": "ok",
				"dumper": "TheRedEye",
				"datedumped": "2012-04-15"
			},
			"board": [
				{
					"$": {
						"type": "NES-SKEPROM",
						"pcb": "NES-SKEPROM-01",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "DAN USA PRG",
								"size": "128k",
								"crc": "C478AFD6",
								"sha1": "C8DC219CAA958010868C109F3C4FBEE2FA091EB5"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "DAN USA CHR",
								"size": "128k",
								"crc": "A04D270D",
								"sha1": "CBEC04688DD782053D71F51860CA2D5852317274"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1A"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "3193A"
							}
						}
					]
				}
			]
		}
	]
};
