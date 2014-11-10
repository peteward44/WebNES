this.NesDb = this.NesDb || {};

NesDb[ '085D29641DEFC36FABB3D95A1DEA5D1665902104' ] = {
	"$": {
		"name": "Bandai Golf: Challenge Pebble Beach",
		"class": "Licensed",
		"catalog": "NES-PG-USA",
		"publisher": "Bandai",
		"developer": "TOSE Software",
		"region": "USA",
		"players": "2",
		"date": "1989-02"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "6CD46979",
				"sha1": "085D29641DEFC36FABB3D95A1DEA5D1665902104",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-12-26"
			},
			"board": [
				{
					"$": {
						"type": "NES-CNROM",
						"pcb": "NES-CN-ROM-256-05",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"name": "NES-PG-0 PRG",
								"size": "32k",
								"crc": "9FD0F213",
								"sha1": "8A8DC1907D4C4BE83255541ECA7B399DA2AD5742"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-PG-0 CHR",
								"size": "32k",
								"crc": "B0FCD151",
								"sha1": "2A7B205FA7FD7AEC5377CDA0D727A33570B36B1C"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx161"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "6113B1"
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
