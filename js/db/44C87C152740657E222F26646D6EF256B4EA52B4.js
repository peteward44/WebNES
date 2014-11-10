this.NesDb = this.NesDb || {};

NesDb[ '44C87C152740657E222F26646D6EF256B4EA52B4' ] = {
	"$": {
		"name": "Stadium Events",
		"class": "Licensed",
		"catalog": "NES-SD-EEC",
		"publisher": "Bandai",
		"developer": "Human Entertainment",
		"region": "Europe",
		"players": "2",
		"date": "1990-02-23"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "familyfunfitness",
						"name": "Family Fun Fitness Mat"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "0DA28A50",
				"sha1": "44C87C152740657E222F26646D6EF256B4EA52B4",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2008-01-23"
			},
			"board": [
				{
					"$": {
						"type": "NES-CNROM",
						"pcb": "NES-CNROM-06",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-SD-0 PRG",
								"size": "32k",
								"crc": "D06CEB9A",
								"sha1": "3D3B8269573666EEF42C0D959D4D54A0C719BA04"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-SD-0 CHR",
								"size": "32k",
								"crc": "36FFC41F",
								"sha1": "BF94E6B28F1E702838838A7F367B54BB6D98FD9A"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx161"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "3195A"
							}
						}
					],
					"pad": [
						{
							"$": {
								"h": "0",
								"v": "1"
							}
						}
					]
				}
			]
		}
	]
};
