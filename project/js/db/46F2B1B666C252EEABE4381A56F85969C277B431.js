this.NesDb = this.NesDb || {};

NesDb[ '46F2B1B666C252EEABE4381A56F85969C277B431' ] = {
	"$": {
		"name": "Top Players' Tennis, Chris Evert & Ivan Lendl in",
		"class": "Licensed",
		"catalog": "NES-W1-USA",
		"publisher": "Asmik",
		"developer": "Home Data",
		"region": "USA",
		"players": "4",
		"date": "1990-01"
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
				"crc": "F99E37EB",
				"sha1": "46F2B1B666C252EEABE4381A56F85969C277B431",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-12-16"
			},
			"board": [
				{
					"$": {
						"type": "NES-SLROM",
						"pcb": "NES-SLROM-05",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-W1-0 PRG",
								"size": "128k",
								"crc": "DD564975",
								"sha1": "0B239FFEDBAF6EC906367DAAEE98444600CB98BC"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-W1-0 CHR",
								"size": "128k",
								"crc": "DB2AF89D",
								"sha1": "6DF4BC3883607CF48DB5D67C299781A313DA759A"
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
