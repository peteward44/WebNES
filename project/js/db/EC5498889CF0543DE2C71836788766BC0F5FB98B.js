this.NesDb = this.NesDb || {};

NesDb[ 'EC5498889CF0543DE2C71836788766BC0F5FB98B' ] = {
	"$": {
		"name": "Greg Norman's Golf Power",
		"class": "Licensed",
		"catalog": "NES-GP-USA",
		"publisher": "Virgin Games",
		"developer": "Gremlin",
		"region": "USA",
		"players": "4",
		"date": "1992-07"
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
				"crc": "1352F1B9",
				"sha1": "EC5498889CF0543DE2C71836788766BC0F5FB98B",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-02-19"
			},
			"board": [
				{
					"$": {
						"type": "NES-SNROM",
						"pcb": "NES-SNROM-05",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-GP-0 PRG",
								"size": "128k",
								"crc": "1352F1B9",
								"sha1": "EC5498889CF0543DE2C71836788766BC0F5FB98B"
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
