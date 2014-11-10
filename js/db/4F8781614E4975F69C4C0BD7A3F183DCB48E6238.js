this.NesDb = this.NesDb || {};

NesDb[ '4F8781614E4975F69C4C0BD7A3F183DCB48E6238' ] = {
	"$": {
		"name": "Squashed",
		"class": "Licensed",
		"subclass": "Unreleased",
		"catalog": "NES-JS-USA",
		"publisher": "Jaleco",
		"developer": "Jaleco",
		"region": "USA",
		"players": "2",
		"date": "0000"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"prototype": "1",
				"crc": "F03E6D72",
				"sha1": "4F8781614E4975F69C4C0BD7A3F183DCB48E6238",
				"dump": "ok",
				"dumper": "TheRedEye",
				"datedumped": "2012-04-22"
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
								"name": "JALECO SQUASHED PRG",
								"size": "128k",
								"crc": "BF9A28E1",
								"sha1": "90CBD80E10A0FB0E1C5481D3C96386EA37C46AFF"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "JALECO SQUASHED CHR",
								"size": "128k",
								"crc": "522C8C7F",
								"sha1": "5043A0E00E2ACC01A479073127B831E3E54CECE8"
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
