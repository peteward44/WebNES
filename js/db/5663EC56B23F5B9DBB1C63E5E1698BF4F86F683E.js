this.NesDb = this.NesDb || {};

NesDb[ '5663EC56B23F5B9DBB1C63E5E1698BF4F86F683E' ] = {
	"$": {
		"name": "Super Spike V'Ball",
		"class": "Licensed",
		"catalog": "NES-VJ-USA",
		"publisher": "Nintendo",
		"developer": "Technos",
		"region": "USA",
		"players": "4",
		"date": "1990-02"
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
				"crc": "E840FD21",
				"sha1": "5663EC56B23F5B9DBB1C63E5E1698BF4F86F683E",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-04-10"
			},
			"board": [
				{
					"$": {
						"type": "NES-TLROM",
						"pcb": "NES-TLROM-02",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "NES-VJ-0 PRG",
								"size": "128k",
								"crc": "1E598A14",
								"sha1": "04A4CFC82EBC91AB8D689DF3256C00A160D847AE"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-VJ-0 CHR",
								"size": "128k",
								"crc": "E5F016C4",
								"sha1": "A0A8F23040670BA171306961F481995822A841C0"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC3A"
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
