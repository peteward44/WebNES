this.NesDb = this.NesDb || {};

NesDb[ '9F42C6C9A34E808138EAFDD314BAE359D80E6FF9' ] = {
	"$": {
		"name": "Teenage Mutant Hero Turtles",
		"class": "Licensed",
		"catalog": "NES-88-EEC",
		"publisher": "Palcom",
		"developer": "Konami",
		"region": "Europe",
		"players": "1",
		"date": "1990-08-17"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "00AD1189",
				"sha1": "9F42C6C9A34E808138EAFDD314BAE359D80E6FF9",
				"dump": "ok",
				"dumper": "piteta",
				"datedumped": "2007-08-04"
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
								"name": "PAL-88-0 PRG",
								"size": "128k",
								"crc": "857DBC36",
								"sha1": "EB9E58302128A01D3C5DB97CAB967BB58BC560D2"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PAL-88-0 CHR",
								"size": "128k",
								"crc": "66231389",
								"sha1": "5AF82EFB9146897DE6D76BEDB963F3BA859B7CFA"
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
