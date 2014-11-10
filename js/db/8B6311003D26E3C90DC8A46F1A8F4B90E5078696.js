this.NesDb = this.NesDb || {};

NesDb[ '8B6311003D26E3C90DC8A46F1A8F4B90E5078696' ] = {
	"$": {
		"name": "Maniac Mansion",
		"class": "Licensed",
		"catalog": "NES-JM-ESP",
		"publisher": "Jaleco",
		"developer": "LucasFilm Games",
		"region": "Spain",
		"players": "1",
		"date": "1992-08-15"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "F5B2AFCA",
				"sha1": "8B6311003D26E3C90DC8A46F1A8F4B90E5078696",
				"dump": "ok",
				"dumper": "piteta",
				"datedumped": "2007-08-04"
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
								"name": "ESP-JM-0 PRG",
								"size": "256k",
								"crc": "F5B2AFCA",
								"sha1": "8B6311003D26E3C90DC8A46F1A8F4B90E5078696"
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
								"type": "3195A"
							}
						}
					]
				}
			]
		}
	]
};
