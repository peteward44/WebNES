this.NesDb = this.NesDb || {};

NesDb[ '65164022F5F3354B168972CC3FF85F4F01808169' ] = {
	"$": {
		"name": "Pool of Radiance, Advanced Dungeons & Dragons",
		"class": "Licensed",
		"catalog": "NES-QA-USA",
		"publisher": "FCI",
		"developer": "Strategic Simulations",
		"portdeveloper": "Marionette",
		"region": "USA",
		"players": "1",
		"date": "1992-04"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "25952141",
				"sha1": "65164022F5F3354B168972CC3FF85F4F01808169",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-11-05"
			},
			"board": [
				{
					"$": {
						"type": "NES-TKROM",
						"pcb": "NES-TKROM-10",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "NES-QA-0 PRG",
								"size": "512k",
								"crc": "9ACDED0E",
								"sha1": "B888625954DD50E6F03C4D812D04892875193D22"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-QA-0 CHR",
								"size": "128k",
								"crc": "34B0EBC5",
								"sha1": "9B4DFF0FC7AA283BD5608828EA934961D2A1D947"
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
					"chip": [
						{
							"$": {
								"type": "MMC3C"
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
