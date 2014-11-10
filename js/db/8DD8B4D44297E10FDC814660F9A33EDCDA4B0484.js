this.NesDb = this.NesDb || {};

NesDb[ '8DD8B4D44297E10FDC814660F9A33EDCDA4B0484' ] = {
	"$": {
		"name": "All-Pro Basketball",
		"class": "Licensed",
		"catalog": "NES-A2-USA",
		"publisher": "Vic Tokai",
		"developer": "Aicom",
		"region": "USA",
		"players": "2",
		"date": "1989-12"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "934DB14A",
				"sha1": "8DD8B4D44297E10FDC814660F9A33EDCDA4B0484",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-01-11"
			},
			"board": [
				{
					"$": {
						"type": "NES-SLROM",
						"pcb": "NES-SLROM-05",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-A2-0 PRG",
								"size": "128k",
								"crc": "50C69602",
								"sha1": "5046BCB93CF130A48AB212003D58AB1E690253FC"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-A2-0 CHR",
								"size": "128k",
								"crc": "22DA6CC5",
								"sha1": "D101D3075ABFCF40F4B5BDA5E378EDF859FCE8D5"
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
