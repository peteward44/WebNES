this.NesDb = this.NesDb || {};

NesDb[ '50E76171AA106895C745E7A4F8D9852DB72AAD12' ] = {
	"$": {
		"name": "Heroes of the Lance, Advanced Dungeons & Dragons",
		"class": "Licensed",
		"catalog": "NES-LQ-USA",
		"publisher": "FCI",
		"developer": "Strategic Simulations",
		"region": "USA",
		"players": "1",
		"date": "1991-01"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "B17574F3",
				"sha1": "50E76171AA106895C745E7A4F8D9852DB72AAD12",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-07-03"
			},
			"board": [
				{
					"$": {
						"type": "NES-SKROM",
						"pcb": "NES-SKROM-04",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-LQ-0 PRG",
								"size": "128k",
								"crc": "7FB72A2C",
								"sha1": "84B3B90D7A9D186ECC69E5E918E55C8EC6A8689F"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-LQ-0 CHR",
								"size": "128k",
								"crc": "6F6FD1D7",
								"sha1": "63243DC513780288B3E2838C2871C741A9152572"
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
