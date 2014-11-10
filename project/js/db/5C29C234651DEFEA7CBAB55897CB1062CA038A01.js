this.NesDb = this.NesDb || {};

NesDb[ '5C29C234651DEFEA7CBAB55897CB1062CA038A01' ] = {
	"$": {
		"name": "Mickey's Adventure in Numberland",
		"class": "Licensed",
		"catalog": "NES-NL-USA",
		"publisher": "Hi Tech Expressions",
		"developer": "Beam Software",
		"region": "USA",
		"players": "1",
		"date": "1994-03"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "6FB349E2",
				"sha1": "5C29C234651DEFEA7CBAB55897CB1062CA038A01",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-01-15"
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
								"name": "NES-NL-0 PRG",
								"size": "128k",
								"crc": "6817857D",
								"sha1": "8E6B280B57DF35304E99BB49A4AD8588A1629F88"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-NL-0 CHR",
								"size": "128k",
								"crc": "7AFE5BF4",
								"sha1": "6E57830EC2F92E71E3747168213D53B6C56B5DA3"
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
