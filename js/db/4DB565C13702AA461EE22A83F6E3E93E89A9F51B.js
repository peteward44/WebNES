this.NesDb = this.NesDb || {};

NesDb[ '4DB565C13702AA461EE22A83F6E3E93E89A9F51B' ] = {
	"$": {
		"name": "Super Spike V'Ball / Nintendo World Cup",
		"class": "Licensed",
		"subclass": "Multi-cart",
		"catalog": "NES-QJ-USA",
		"publisher": "Nintendo",
		"developer": "Technos",
		"region": "USA",
		"players": "4",
		"date": "1990-12"
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
				"crc": "407D6FFD",
				"sha1": "4DB565C13702AA461EE22A83F6E3E93E89A9F51B",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-04-12"
			},
			"board": [
				{
					"$": {
						"type": "NES-QJ",
						"pcb": "NES-QJ",
						"mapper": "47"
					},
					"prg": [
						{
							"$": {
								"size": "256k",
								"crc": "35190A3F",
								"sha1": "1FE42062582877928C2F733A83354D0DC0A38E52"
							}
						}
					],
					"chr": [
						{
							"$": {
								"size": "256k",
								"crc": "FE1363D1",
								"sha1": "B16620DEA512F0F79A7726B40F65AFCBB2901491"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "<74xx161>"
							}
						},
						{
							"$": {
								"type": "<MMC3>"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "<EPOXY>"
							}
						}
					]
				}
			]
		}
	]
};
