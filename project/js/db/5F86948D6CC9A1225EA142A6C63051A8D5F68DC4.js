this.NesDb = this.NesDb || {};

NesDb[ '5F86948D6CC9A1225EA142A6C63051A8D5F68DC4' ] = {
	"$": {
		"name": "Treasure Master",
		"class": "Licensed",
		"catalog": "NES-7U-USA",
		"publisher": "American Softworks",
		"developer": "Software Creations",
		"region": "USA",
		"players": "1",
		"date": "1991-12"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "B918580C",
				"sha1": "5F86948D6CC9A1225EA142A6C63051A8D5F68DC4",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-10-01"
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
								"name": "NES-7U-0 PRG",
								"size": "128k",
								"crc": "592E3567",
								"sha1": "CCBC1B50E23010C3B68E96F4DC4574E8BCC536B3"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-7U-0 CHR",
								"size": "128k",
								"crc": "EDFAD34D",
								"sha1": "503D791DF494F51107C20118B9297632CE24B2DB"
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
