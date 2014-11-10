this.NesDb = this.NesDb || {};

NesDb[ '8A8BBECC77FDF59826257754F357D38A7F825971' ] = {
	"$": {
		"name": "Maniac Mansion",
		"class": "Licensed",
		"catalog": "NES-JM-USA",
		"publisher": "Jaleco",
		"developer": "LucasFilm Games",
		"region": "USA",
		"players": "1",
		"date": "1990-09"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "0D9F5BD1",
				"sha1": "8A8BBECC77FDF59826257754F357D38A7F825971",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-09-05"
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
								"name": "NES-JM-0 PRG",
								"size": "256k",
								"crc": "0D9F5BD1",
								"sha1": "8A8BBECC77FDF59826257754F357D38A7F825971"
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
