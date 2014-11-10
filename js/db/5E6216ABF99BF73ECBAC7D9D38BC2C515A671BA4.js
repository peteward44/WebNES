this.NesDb = this.NesDb || {};

NesDb[ '5E6216ABF99BF73ECBAC7D9D38BC2C515A671BA4' ] = {
	"$": {
		"name": "Legend of the Ghost Lion",
		"class": "Licensed",
		"catalog": "NES-LL-USA",
		"publisher": "Kemco",
		"developer": "Kemco",
		"region": "USA",
		"players": "1",
		"date": "1992-10"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "04766130",
				"sha1": "5E6216ABF99BF73ECBAC7D9D38BC2C515A671BA4",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-02-27"
			},
			"board": [
				{
					"$": {
						"type": "NES-SKROM",
						"pcb": "NES-SKROM-06",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-LL-0 PRG",
								"size": "128k",
								"crc": "8D94797F",
								"sha1": "A2EDEB025285F0CECE6B3B6744E0867EE2D8093E"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-LL-0 CHR",
								"size": "128k",
								"crc": "A73F53AE",
								"sha1": "F49032AF4F31557FE30C37099DFCB715981ACE44"
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
