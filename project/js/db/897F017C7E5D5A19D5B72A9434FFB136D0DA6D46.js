this.NesDb = this.NesDb || {};

NesDb[ '897F017C7E5D5A19D5B72A9434FFB136D0DA6D46' ] = {
	"$": {
		"name": "Pinball Quest",
		"class": "Licensed",
		"catalog": "NES-P9-USA",
		"publisher": "Jaleco",
		"developer": "TOSE Software",
		"region": "USA",
		"players": "1",
		"date": "1990-06"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "2538D860",
				"sha1": "897F017C7E5D5A19D5B72A9434FFB136D0DA6D46",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-11-21"
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
								"name": "NES-P9-0 PRG",
								"size": "128k",
								"crc": "685257A8",
								"sha1": "BC5A8E4D25F10393EDF38E358B76F791BB9926D5"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-P9-0 CHR",
								"size": "128k",
								"crc": "9F3E1ACB",
								"sha1": "FB46EE6D45C0BD04CA23392A6AD9DD4C4946E1A8"
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
