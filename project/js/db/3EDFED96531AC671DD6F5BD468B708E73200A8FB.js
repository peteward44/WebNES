this.NesDb = this.NesDb || {};

NesDb[ '3EDFED96531AC671DD6F5BD468B708E73200A8FB' ] = {
	"$": {
		"name": "Battle Chess",
		"class": "Licensed",
		"catalog": "NES-C6-USA",
		"publisher": "Data East",
		"developer": "Beam Software",
		"region": "USA",
		"players": "2",
		"date": "1990-07"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "2C2DDFB4",
				"sha1": "3EDFED96531AC671DD6F5BD468B708E73200A8FB",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-01-26"
			},
			"board": [
				{
					"$": {
						"type": "NES-SGROM",
						"pcb": "NES-SGROM-04",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-C6-0 PRG",
								"size": "256k",
								"crc": "2C2DDFB4",
								"sha1": "3EDFED96531AC671DD6F5BD468B708E73200A8FB"
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
								"type": "6113B1"
							}
						}
					]
				}
			]
		}
	]
};
