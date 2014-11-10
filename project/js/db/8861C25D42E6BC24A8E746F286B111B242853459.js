this.NesDb = this.NesDb || {};

NesDb[ '8861C25D42E6BC24A8E746F286B111B242853459' ] = {
	"$": {
		"name": "International Cricket",
		"class": "Licensed",
		"catalog": "NES-CC-AUS",
		"publisher": "Beam Software",
		"developer": "Beam Software",
		"region": "Australia",
		"players": "2",
		"date": "1992"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-A",
				"prototype": "1",
				"crc": "99C88648",
				"sha1": "8861C25D42E6BC24A8E746F286B111B242853459",
				"dump": "ok",
				"dumper": "Mark_K",
				"datedumped": "2011-12-14"
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
								"name": "CRICKET PRG 24/8/92",
								"size": "128k",
								"crc": "9DB6A3ED",
								"sha1": "1F8FFEF26EAAA4080EF35E8E3E2013067C1F5940"
							}
						}
					],
					"chr": [
						{
							"$": {
								"size": "128k",
								"crc": "F8C1FB2B",
								"sha1": "EF429F90CE81D36CBBDF48499F10ED2118BAFC05"
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
								"type": "3197A"
							}
						}
					]
				}
			]
		}
	]
};
