this.NesDb = this.NesDb || {};

NesDb[ '6576D3A7F52E509384A043E5230AE2DAB962E977' ] = {
	"$": {
		"name": "Fester's Quest",
		"class": "Licensed",
		"catalog": "NES-EQ-EEC",
		"publisher": "Sunsoft",
		"developer": "Sunsoft",
		"region": "Europe",
		"players": "1",
		"date": "1990-09-14"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "68CF9B78",
				"sha1": "6576D3A7F52E509384A043E5230AE2DAB962E977",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2007-07-28"
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
								"name": "PAL-EQ-0 PRG",
								"size": "128k",
								"crc": "E4430259",
								"sha1": "139DE7E7F515FFD73964DBF7627BFBD296ACF764"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-EQ-0 CHR",
								"size": "128k",
								"crc": "0CA17AB5",
								"sha1": "A8765D6245F64B2D94C454662A24F8D8E277AA5A"
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
								"type": "3195A"
							}
						}
					]
				}
			]
		}
	]
};
