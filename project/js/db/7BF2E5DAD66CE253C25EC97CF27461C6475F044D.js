this.NesDb = this.NesDb || {};

NesDb[ '7BF2E5DAD66CE253C25EC97CF27461C6475F044D' ] = {
	"$": {
		"name": "Miracle Piano Teaching System, The",
		"class": "Licensed",
		"catalog": "NES-9M-USA",
		"publisher": "The Software Toolworks",
		"developer": "The Software Toolworks",
		"region": "USA",
		"players": "1",
		"date": "1990"
	},
	"peripherals": [
		{
			"device": [
				{
					"$": {
						"type": "miraclepiano",
						"name": "Miracle Piano"
					}
				}
			]
		}
	],
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "92C138E4",
				"sha1": "7BF2E5DAD66CE253C25EC97CF27461C6475F044D",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-02-19"
			},
			"board": [
				{
					"$": {
						"type": "NES-SJROM",
						"pcb": "NES-SJROM-03",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-9M-0 PRG",
								"size": "256k",
								"crc": "3349BA0E",
								"sha1": "1D0B3AD84248B53025427A688CB38F688D5147C8"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-9M-0 CHR",
								"size": "64k",
								"crc": "DD3C40E8",
								"sha1": "EE843DB41B649B47E9218414437C737BACBF2EE9"
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
