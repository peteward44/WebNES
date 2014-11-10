this.NesDb = this.NesDb || {};

NesDb[ 'BFE87FACFA2222D9E4984B8A893E033BD5796A8E' ] = {
	"$": {
		"name": "Magic Johnson's Fast Break",
		"class": "Licensed",
		"catalog": "NES-JF-USA",
		"publisher": "Tradewest",
		"developer": "Software Creations",
		"region": "USA",
		"players": "4",
		"date": "1990-03"
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
				"crc": "C6C2EDB5",
				"sha1": "BFE87FACFA2222D9E4984B8A893E033BD5796A8E",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-02-18"
			},
			"board": [
				{
					"$": {
						"type": "NES-SCROM",
						"pcb": "NES-SCROM-03",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-JF-0 PRG",
								"size": "64k",
								"crc": "3A9DD55C",
								"sha1": "34088D87A91A96E2999D22E0B1C7F51E5A9AB59A"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-JF-0 CHR",
								"size": "128k",
								"crc": "2C8C2D3E",
								"sha1": "A7CF5E449AA57957B39AACB433DCE160A842D161"
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
