this.NesDb = this.NesDb || {};

NesDb[ '84BEF49E92897D4FCB4CA2C2103B7522D624B304' ] = {
	"$": {
		"name": "Artelius",
		"altname": "アルテリオス",
		"class": "Licensed",
		"catalog": "NBF-AU (06)",
		"publisher": "Nichibutsu",
		"developer": "Nichibutsu",
		"region": "Japan",
		"players": "1",
		"date": "1987-11-13"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "093E845F",
				"sha1": "84BEF49E92897D4FCB4CA2C2103B7522D624B304",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-04-29"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SJROM",
						"pcb": "HVC-SJROM-01",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NBF-AU-0 PRG",
								"size": "128k",
								"crc": "EBAC24E9",
								"sha1": "3A13E5F08554652D0DA70524007463D2795B9385"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NBF-AU-0 CHR",
								"size": "32k",
								"crc": "07F2131B",
								"sha1": "D019F6988E9AB4FD4DE5D88D61022C50722B44B9"
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
								"type": "MMC1"
							}
						}
					]
				}
			]
		}
	]
};
