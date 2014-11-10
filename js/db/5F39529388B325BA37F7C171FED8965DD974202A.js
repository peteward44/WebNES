this.NesDb = this.NesDb || {};

NesDb[ '5F39529388B325BA37F7C171FED8965DD974202A' ] = {
	"$": {
		"name": "Hit the Ice",
		"class": "Licensed",
		"subclass": "Unreleased",
		"catalog": "UNR-93-USA",
		"publisher": "Taito",
		"developer": "Williams Entertainment",
		"portdeveloper": "Taito",
		"region": "USA",
		"players": "1",
		"date": "0000"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "fourplayer",
						"name": "4-Player Adapter"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"prototype": "1",
				"crc": "1CB9A019",
				"sha1": "5F39529388B325BA37F7C171FED8965DD974202A",
				"dump": "ok",
				"dumper": "TheRedEye",
				"datedumped": "2012-04-15"
			},
			"board": [
				{
					"$": {
						"type": "NES-TKEPROM",
						"pcb": "NES-TKEPROM-02",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "HIT P",
								"size": "128k",
								"crc": "A7DAFE3F",
								"sha1": "9E981E8B511BB3178AAA258AFE55258BA880142D"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "HIT C",
								"size": "128k",
								"crc": "2985C976",
								"sha1": "86346858A8360CFD1912163E6B90318C7A509AF7"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx139"
							}
						},
						{
							"$": {
								"type": "MMC3C"
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
