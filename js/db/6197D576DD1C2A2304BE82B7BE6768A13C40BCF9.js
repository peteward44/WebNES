this.NesDb = this.NesDb || {};

NesDb[ '6197D576DD1C2A2304BE82B7BE6768A13C40BCF9' ] = {
	"$": {
		"name": "L'Empereur",
		"class": "Licensed",
		"catalog": "NES-QV-USA",
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
				"crc": "9C18762B",
				"sha1": "6197D576DD1C2A2304BE82B7BE6768A13C40BCF9",
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
								"name": "NES-QV-0 PRG",
								"size": "256k",
								"crc": "2F50BD38",
								"sha1": "65A73047A3606433329DD50A52B82E0A75D2CFF6"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-QV-0 CHR",
								"size": "128k",
								"crc": "B2599DB4",
								"sha1": "4F1CB7230665095E79D0D0CC898D952398015E9D"
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
