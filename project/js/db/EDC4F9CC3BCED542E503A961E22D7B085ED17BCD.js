this.NesDb = this.NesDb || {};

NesDb[ 'EDC4F9CC3BCED542E503A961E22D7B085ED17BCD' ] = {
	"$": {
		"name": "Gargoyle's Quest II",
		"class": "Licensed",
		"catalog": "NES-G2-USA",
		"publisher": "Capcom",
		"developer": "Capcom",
		"region": "USA",
		"players": "1",
		"date": "1992-10"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "F0E9971B",
				"sha1": "EDC4F9CC3BCED542E503A961E22D7B085ED17BCD",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-03-25"
			},
			"board": [
				{
					"$": {
						"type": "NES-TLROM",
						"pcb": "NES-TLROM-03",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "NES-G2-0 PRG",
								"size": "128k",
								"crc": "4F50457E",
								"sha1": "7C8A9CD48E359FBBA9967953383809878C39F306"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-G2-0 CHR",
								"size": "128k",
								"crc": "249C887C",
								"sha1": "51598786A26C9C3F746628218E7B74737F6BC097"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC3C"
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
