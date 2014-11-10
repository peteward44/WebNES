this.NesDb = this.NesDb || {};

NesDb[ '8C964BB1CB0586317191AF1E143AEBE245C42B76' ] = {
	"$": {
		"name": "Final Mission",
		"altname": "ファイナルミッション",
		"class": "Licensed",
		"catalog": "NAT-FV",
		"publisher": "Natsume",
		"developer": "Natsume",
		"region": "Japan",
		"players": "2",
		"date": "1990-06-22"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "D5941AA9",
				"sha1": "8C964BB1CB0586317191AF1E143AEBE245C42B76",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-11-01"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SLROM",
						"pcb": "HVC-SLROM-03",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NAT-FV-0 PRG",
								"size": "128k",
								"crc": "0786471D",
								"sha1": "FA4643432D1C7876A4CE38C4BB4DDAE3B7ED3508"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NAT-FV-0 CHR",
								"size": "128k",
								"crc": "DF60D716",
								"sha1": "BE25DE235149B827EBF70DE42AA430B0E717B74B"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1B2"
							}
						}
					]
				}
			]
		}
	]
};
