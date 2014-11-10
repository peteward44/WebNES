this.NesDb = this.NesDb || {};

NesDb[ '394395B825F3D16902DF427E93C2310302A2B9AF' ] = {
	"$": {
		"name": "WWF King of the Ring",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "NES-K6-USA",
		"publisher": "LJN",
		"developer": "Eastridge Technology",
		"region": "USA",
		"players": "2",
		"date": "1993-11"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "7B4ED0BB",
				"sha1": "394395B825F3D16902DF427E93C2310302A2B9AF",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-12-24"
			},
			"board": [
				{
					"$": {
						"type": "ACCLAIM-MC-ACC",
						"pcb": "55741",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "NES-K6 PRG",
								"size": "128k",
								"crc": "CB25A2CA",
								"sha1": "EF6F3B750B539C15F5F0703C88C7FEF5EC8FECCF"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-K6 CHR",
								"size": "256k",
								"crc": "F283F855",
								"sha1": "361353C05E5A37A44073935B638C33EF2BC62EDA"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx08"
							}
						},
						{
							"$": {
								"type": "MC-ACC"
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
