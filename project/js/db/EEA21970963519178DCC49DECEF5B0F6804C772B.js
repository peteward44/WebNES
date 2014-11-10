this.NesDb = this.NesDb || {};

NesDb[ 'EEA21970963519178DCC49DECEF5B0F6804C772B' ] = {
	"$": {
		"name": "Orb 3-D",
		"class": "Licensed",
		"catalog": "NES-5H-USA",
		"publisher": "Hi Tech Expressions",
		"developer": "The Software Toolworks",
		"region": "USA",
		"players": "1",
		"date": "1990-10"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "3dglasses",
						"name": "3-D Glasses"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "958E4BAE",
				"sha1": "EEA21970963519178DCC49DECEF5B0F6804C772B",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-10-05"
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
								"name": "NES-5H-0 PRG",
								"size": "64k",
								"crc": "84B930A9",
								"sha1": "667CD2A037A7BBBE6C7E8C9C9474244753EF75D5"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-5H-0 CHR",
								"size": "128k",
								"crc": "321F0492",
								"sha1": "07F806A93D5F2F67C96ABAAAF36B653C325603A6"
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
