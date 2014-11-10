this.NesDb = this.NesDb || {};

NesDb[ 'DC358D47102A7C4E2ACE49121B9DF3E4C771081A' ] = {
	"$": {
		"name": "Final Fantasy II",
		"class": "Licensed",
		"subclass": "Unreleased",
		"catalog": "UNR-FY-USA",
		"publisher": "Square",
		"developer": "Square",
		"region": "USA",
		"players": "1",
		"date": "0000"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"prototype": "1",
				"crc": "93A2EEFB",
				"sha1": "DC358D47102A7C4E2ACE49121B9DF3E4C771081A",
				"dump": "ok",
				"dumper": "TheRedEye",
				"datedumped": "2012-08-27"
			},
			"board": [
				{
					"$": {
						"type": "NES-SNWEPROM",
						"pcb": "NES-SNWEPROM",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"id": "0",
								"name": "FF2 NES FOR CES V12.5 (1)",
								"size": "128k",
								"crc": "BDF606C3",
								"sha1": "49B6504AFD4C54AC91B330E16B00BF1AE18F32F0"
							}
						},
						{
							"$": {
								"id": "1",
								"name": "FF2 NES FOR CES V12.5 (2)",
								"size": "128k",
								"crc": "F12C6CBB",
								"sha1": "4C12AE11228245DDF95023ED80A02243B160BD4C"
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
					"vram": [
						{
							"$": {
								"size": "8k"
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
