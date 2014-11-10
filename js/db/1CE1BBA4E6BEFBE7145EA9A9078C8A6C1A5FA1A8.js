this.NesDb = this.NesDb || {};

NesDb[ '1CE1BBA4E6BEFBE7145EA9A9078C8A6C1A5FA1A8' ] = {
	"$": {
		"name": "Nantettatte!! Baseball",
		"altname": "なんてったって！！ベースボール",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "SUN-NTB-5900",
		"publisher": "Sunsoft",
		"developer": "Sunsoft",
		"region": "Japan",
		"players": "2",
		"date": "1990-10-26"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "A2623BC1",
				"sha1": "1CE1BBA4E6BEFBE7145EA9A9078C8A6C1A5FA1A8",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-11-27"
			},
			"board": [
				{
					"$": {
						"type": "SUNSOFT-4",
						"pcb": "NTB-ROM-PCB",
						"mapper": "68"
					},
					"prg": [
						{
							"$": {
								"name": "NTB-PRG-0",
								"size": "128k",
								"crc": "BDDBC3B0",
								"sha1": "80E7F8C62084AB267178A121EB7993C5689CABC9"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NTB-CHR-0",
								"size": "128k",
								"crc": "C70A7C8E",
								"sha1": "10D4E0044B95FE8C5D64247B269354806820B15C"
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
								"type": "74xx32"
							}
						},
						{
							"$": {
								"type": "Sunsoft-4"
							}
						}
					]
				}
			]
		}
	]
};
