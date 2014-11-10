this.NesDb = this.NesDb || {};

NesDb[ '2C9F305B818E8B642B9AA2A9D7598F7D38394BC1' ] = {
	"$": {
		"name": "Roundball: 2-on-2 Challenge",
		"class": "Licensed",
		"catalog": "NES-RW-USA",
		"publisher": "Mindscape",
		"developer": "Mindscape",
		"region": "USA",
		"players": "4",
		"date": "1992-05"
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
				"crc": "6E4DCFD2",
				"sha1": "2C9F305B818E8B642B9AA2A9D7598F7D38394BC1",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-04-10"
			},
			"board": [
				{
					"$": {
						"type": "NES-TSROM",
						"pcb": "NES-TSROM-08",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "NES-RW-0 PRG",
								"size": "128k",
								"crc": "279B69C0",
								"sha1": "530FC70DA9962F8CDE4256B560BC469BAE2161BB"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-RW-0 CHR",
								"size": "128k",
								"crc": "60173D62",
								"sha1": "37EB29F28DD643F53B08AC79BF31F847B7307228"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "8k"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC3B"
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
