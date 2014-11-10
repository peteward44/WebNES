this.NesDb = this.NesDb || {};

NesDb[ '66031E07D25B899EA3175A222C3939568D874883' ] = {
	"$": {
		"name": "Nobunaga's Ambition II",
		"class": "Licensed",
		"catalog": "NES-NU-USA",
		"publisher": "Koei",
		"developer": "Koei",
		"region": "USA",
		"players": "1",
		"date": "1991-04"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "8CE478DB",
				"sha1": "66031E07D25B899EA3175A222C3939568D874883",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-02-14"
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
								"name": "NES-NU-0 PRG",
								"size": "256k",
								"crc": "B56958D1",
								"sha1": "0BE2DF0B062E908CC0492EBECEDB481E94940ABE"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-NU-0 CHR",
								"size": "128k",
								"crc": "A22A8B4F",
								"sha1": "C7D615F728F3E1DBB477A48852C1E3E4C2F9FB52"
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
