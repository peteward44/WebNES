this.NesDb = this.NesDb || {};

NesDb[ '37267833C984F176DB4B0BC9D45DABA0FFF45304' ] = {
	"$": {
		"name": "Uncharted Waters",
		"class": "Licensed",
		"catalog": "NES-QK-USA",
		"publisher": "Koei",
		"developer": "Koei",
		"region": "USA",
		"players": "1",
		"date": "1991-11"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "ACA15643",
				"sha1": "37267833C984F176DB4B0BC9D45DABA0FFF45304",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-09-21"
			},
			"board": [
				{
					"$": {
						"type": "NES-ETROM",
						"pcb": "NES-ETROM-01",
						"mapper": "5"
					},
					"prg": [
						{
							"$": {
								"name": "NES-QK-0 PRG",
								"size": "512k",
								"crc": "CD35E2E9",
								"sha1": "A4B22FE17DC873E09EF54959D7438C8548859FD0"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-QK-0 CHR",
								"size": "128k",
								"crc": "D492AFC8",
								"sha1": "7D8A7881BBFEB4DEA24C3CA7979CC45825E39E87"
							}
						}
					],
					"wram": [
						{
							"$": {
								"id": "0",
								"size": "8k",
								"battery": "1"
							}
						},
						{
							"$": {
								"id": "1",
								"size": "8k"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC5"
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
