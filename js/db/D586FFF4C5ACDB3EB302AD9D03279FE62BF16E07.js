this.NesDb = this.NesDb || {};

NesDb[ 'D586FFF4C5ACDB3EB302AD9D03279FE62BF16E07' ] = {
	"$": {
		"name": "Touhou Kenbun Roku",
		"altname": "東方見文録",
		"class": "Licensed",
		"catalog": "NAT-N1",
		"publisher": "Natsume",
		"developer": "Natsume",
		"region": "Japan",
		"players": "1",
		"date": "1988-11-10"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "97BC4585",
				"sha1": "D586FFF4C5ACDB3EB302AD9D03279FE62BF16E07",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2011-09-08"
			},
			"board": [
				{
					"$": {
						"type": "HVC-SLROM",
						"pcb": "HVC-SLROM-02",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NAT-N1-0 PRG",
								"size": "128k",
								"crc": "8CEA87C5",
								"sha1": "605DC0CEA4A47FDB80A291239A14EA6504E1EFFD"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NAT-N1-0 CHR",
								"size": "128k",
								"crc": "50C58415",
								"sha1": "89658F81D997A4837C7047AD9D4E52055EB83061"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1A"
							}
						}
					]
				}
			]
		}
	]
};
