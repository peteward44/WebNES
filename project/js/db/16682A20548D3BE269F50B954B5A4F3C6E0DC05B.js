this.NesDb = this.NesDb || {};

NesDb[ '16682A20548D3BE269F50B954B5A4F3C6E0DC05B' ] = {
	"$": {
		"name": "Caveman Games",
		"class": "Licensed",
		"catalog": "NES-UQ-USA",
		"publisher": "Data East",
		"developer": "Dynamix",
		"region": "USA",
		"players": "2",
		"date": "1990-10"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "D1EA84C3",
				"sha1": "16682A20548D3BE269F50B954B5A4F3C6E0DC05B",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-02-07"
			},
			"board": [
				{
					"$": {
						"type": "NES-SLROM",
						"pcb": "NES-SLROM-06",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-UQ-0 PRG",
								"size": "128k",
								"crc": "CF0123D8",
								"sha1": "20E43513B73C7691E7CE7D2C845C55BA629AF00B"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-UQ-0 CHR",
								"size": "128k",
								"crc": "A70889AD",
								"sha1": "7F7EB51930473D88EB84090B13BF30D8115F02B5"
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
