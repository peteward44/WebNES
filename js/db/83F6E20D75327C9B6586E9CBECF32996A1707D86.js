this.NesDb = this.NesDb || {};

NesDb[ '83F6E20D75327C9B6586E9CBECF32996A1707D86' ] = {
	"$": {
		"name": "Pictionary",
		"class": "Licensed",
		"catalog": "NES-P5-USA",
		"publisher": "LJN",
		"developer": "Software Creations",
		"region": "USA",
		"players": "4",
		"date": "1990-07"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "DC02F095",
				"sha1": "83F6E20D75327C9B6586E9CBECF32996A1707D86",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-10-02"
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
								"name": "NES-P5-0 PRG",
								"size": "128k",
								"crc": "82FCADDE",
								"sha1": "C4375F80D020F5435B5BB03032FA50058551ACC3"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-P5-0 CHR",
								"size": "128k",
								"crc": "C280652F",
								"sha1": "3DEF563C14E2D1125D207B1D1D8FAF838F58308A"
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
