this.NesDb = this.NesDb || {};

NesDb[ '7E9DC826B6E177FADC699473ABEADDB3405771BD' ] = {
	"$": {
		"name": "Racket Attack",
		"class": "Licensed",
		"catalog": "NES-RE-USA",
		"publisher": "Jaleco",
		"developer": "TOSE Software",
		"region": "USA",
		"players": "2",
		"date": "1988-10"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "ECCD4089",
				"sha1": "7E9DC826B6E177FADC699473ABEADDB3405771BD",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-03-25"
			},
			"board": [
				{
					"$": {
						"type": "NES-SLROM",
						"pcb": "NES-SLROM-03",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-RE-0 PRG",
								"size": "256k",
								"crc": "928361D4",
								"sha1": "DADE19BF4163790C4E3615778E574449266C7661"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-RE-0 CHR",
								"size": "128k",
								"crc": "3374191D",
								"sha1": "F5DC0BA5BAD714281D453B7010983178FB87E36E"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1A"
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
