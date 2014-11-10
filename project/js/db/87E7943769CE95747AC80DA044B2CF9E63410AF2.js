this.NesDb = this.NesDb || {};

NesDb[ '87E7943769CE95747AC80DA044B2CF9E63410AF2' ] = {
	"$": {
		"name": "Track & Field II",
		"class": "Licensed",
		"catalog": "NES-F2-USA",
		"publisher": "Konami",
		"developer": "Konami",
		"region": "USA",
		"players": "2",
		"date": "1989-06"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "09C083B7",
				"sha1": "87E7943769CE95747AC80DA044B2CF9E63410AF2",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-01-19"
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
								"name": "NES-F2-0 PRG",
								"size": "128k",
								"crc": "4C25D4F5",
								"sha1": "F71C3CD2C2E961A564C8B434F5721431E0E9A1D1"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-F2-0 CHR",
								"size": "128k",
								"crc": "8F0A4755",
								"sha1": "3B27F049F745ADD015EA0EEDE23034E57ED0F2CF"
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
