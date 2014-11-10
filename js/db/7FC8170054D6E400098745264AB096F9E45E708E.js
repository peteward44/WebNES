this.NesDb = this.NesDb || {};

NesDb[ '7FC8170054D6E400098745264AB096F9E45E708E' ] = {
	"$": {
		"name": "Lunar Pool",
		"class": "Licensed",
		"catalog": "NES-LP-UKV",
		"publisher": "FCI",
		"developer": "Compile",
		"region": "United Kingdom",
		"players": "2",
		"date": "1987"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-A",
				"crc": "C3A0A3E0",
				"sha1": "7FC8170054D6E400098745264AB096F9E45E708E",
				"dump": "ok",
				"dumper": "Mark_K",
				"datedumped": "2011-12-05"
			},
			"board": [
				{
					"$": {
						"type": "NES-NROM-256",
						"pcb": "NES-NROM-256-06",
						"mapper": "0"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-LP-0 PRG",
								"size": "32k",
								"crc": "ACE8052D",
								"sha1": "7CA1888232170558B120AEB98FE1B1A129E5EF22"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PAL-LP-0 CHR",
								"size": "8k",
								"crc": "1FFF032B",
								"sha1": "2E6CEA1D1388F00BFDAF55B712F9BBA0D93B941E"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "3197A"
							}
						}
					],
					"pad": [
						{
							"$": {
								"h": "1",
								"v": "0"
							}
						}
					]
				}
			]
		}
	]
};
