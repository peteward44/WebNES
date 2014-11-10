this.NesDb = this.NesDb || {};

NesDb[ '84D2B96C2821FDC246DD876932F4E1752DF1CA73' ] = {
	"$": {
		"name": "World Champ",
		"class": "Licensed",
		"catalog": "NES-5E-USA",
		"publisher": "Romstar",
		"developer": "Pixel",
		"region": "USA",
		"players": "2",
		"date": "1991-04"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "8593E5AD",
				"sha1": "84D2B96C2821FDC246DD876932F4E1752DF1CA73",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-02-27"
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
								"name": "NES-5E-0 PRG",
								"size": "128k",
								"crc": "AB6B4794",
								"sha1": "7BA045092C385D21DF78C7D8A39D775AC41FAFB7"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-5E-0 CHR",
								"size": "128k",
								"crc": "6D3DF9C1",
								"sha1": "B0C622B06C09537EE7BD1DC5368FBEC9E400C3E7"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC3B"
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
