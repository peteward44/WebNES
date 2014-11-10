this.NesDb = this.NesDb || {};

NesDb[ '866F2E5DA7E07255E0CEFC8218D972EF93D4D144' ] = {
	"$": {
		"name": "Corvette ZR-1 Challenge",
		"class": "Licensed",
		"catalog": "NES-ZJ-NOE",
		"publisher": "Milton Bradley",
		"developer": "Imagineering",
		"region": "Germany",
		"players": "2",
		"date": "1990"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "14255C57",
				"sha1": "866F2E5DA7E07255E0CEFC8218D972EF93D4D144",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2011-06-19"
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
								"name": "PAL-ZJ-0 PRG",
								"size": "128k",
								"crc": "07637EE4",
								"sha1": "56D7D5A44DD9A05073117D641C9709DABCCA4930"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PAL-ZJ-0 CHR",
								"size": "128k",
								"crc": "598AB78C",
								"sha1": "1E7EB67506F6D537F8709AF21218F139EE6802D8"
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
