this.NesDb = this.NesDb || {};

NesDb[ '1694A65DE6C5EDE691794BB58CC94924CCB698FB' ] = {
	"$": {
		"name": "Palamedes",
		"class": "Licensed",
		"catalog": "NES-JI-USA",
		"publisher": "HOT・B",
		"developer": "HOT・B",
		"region": "USA",
		"players": "2",
		"date": "1990-11"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "6BB6A0CE",
				"sha1": "1694A65DE6C5EDE691794BB58CC94924CCB698FB",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-02-19"
			},
			"board": [
				{
					"$": {
						"type": "NES-SEROM",
						"pcb": "NES-SEROM-04",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-JI-0 PRG",
								"size": "32k",
								"crc": "17C111E0",
								"sha1": "8FD9027566BE30D827F8BC6CF7C6385FEC8FA0DE"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-JI-0 CHR",
								"size": "32k",
								"crc": "2CD6479B",
								"sha1": "FEF31C5E8BAB87C31683BEEF40B05C478C197C51"
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
