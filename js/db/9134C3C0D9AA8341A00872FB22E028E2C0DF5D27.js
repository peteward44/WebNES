this.NesDb = this.NesDb || {};

NesDb[ '9134C3C0D9AA8341A00872FB22E028E2C0DF5D27' ] = {
	"$": {
		"name": "MTV's Remote Control",
		"class": "Licensed",
		"catalog": "NES-H6-USA",
		"publisher": "Hi Tech Expressions",
		"developer": "Rocket Science Productions",
		"region": "USA",
		"players": "1",
		"date": "1990-05"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "9F6C119C",
				"sha1": "9134C3C0D9AA8341A00872FB22E028E2C0DF5D27",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-03-10"
			},
			"board": [
				{
					"$": {
						"type": "NES-SLROM",
						"pcb": "NES-SLROM-06",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-H6-0 PRG",
								"size": "128k",
								"crc": "C6C226BF",
								"sha1": "38D7EEE598E820E79AE717D5C5DA19D3D7ED6DC3"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-H6-0 CHR",
								"size": "128k",
								"crc": "556B6145",
								"sha1": "3D608CB9E84011C4FCEF863D468DE123A6E054F9"
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
