this.NesDb = this.NesDb || {};

NesDb[ '2A46E463864E9EFA1F5F1BDEABE30D2A7C24A91D' ] = {
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
				"revision": "A",
				"crc": "F46EF39A",
				"sha1": "2A46E463864E9EFA1F5F1BDEABE30D2A7C24A91D",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2009-07-30"
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
								"crc": "7EEF434C",
								"sha1": "1781381C95EADB7756186A5A52D3FB73E9CF51A6"
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
