this.NesDb = this.NesDb || {};

NesDb[ '16151504C01A3E89C7893A87567B0F31DC651D96' ] = {
	"$": {
		"name": "Super Mario Bros. / Tetris / Nintendo World Cup",
		"class": "Licensed",
		"subclass": "Multi-cart",
		"catalog": "NES-ZZ-FRG",
		"publisher": "Nintendo",
		"developer": "Nintendo",
		"region": "Germany",
		"players": "4",
		"date": "1988-11"
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
				"system": "NES-PAL-B",
				"crc": "73298C87",
				"sha1": "16151504C01A3E89C7893A87567B0F31DC651D96",
				"dump": "ok",
				"dumper": "Bregalad",
				"datedumped": "2007-04-06"
			},
			"board": [
				{
					"$": {
						"type": "PAL-ZZ",
						"pcb": "ZZ",
						"mapper": "37"
					},
					"prg": [
						{
							"$": {
								"size": "256k",
								"crc": "1808BB59",
								"sha1": "337A456E3C868C3AB2F739F70DEBC0690B1EC8DC"
							}
						}
					],
					"chr": [
						{
							"$": {
								"size": "256k",
								"crc": "BD06932A",
								"sha1": "2DE4136620BA64618592DCBB288C109567D83EC8"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "<74xx00>"
							}
						},
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
