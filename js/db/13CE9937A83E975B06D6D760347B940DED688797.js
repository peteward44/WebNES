this.NesDb = this.NesDb || {};

NesDb[ '13CE9937A83E975B06D6D760347B940DED688797' ] = {
	"$": {
		"name": "Banana Prince",
		"class": "Licensed",
		"catalog": "NES-BN-NOE",
		"publisher": "Takara",
		"developer": "KID",
		"region": "Germany",
		"players": "1",
		"date": "1992-12-06"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "8A65E57C",
				"sha1": "13CE9937A83E975B06D6D760347B940DED688797",
				"dump": "ok",
				"dumper": "_zane",
				"datedumped": "2008-01-04"
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
								"name": "FRG-BN-0 PRG",
								"size": "128k",
								"crc": "C50826AC",
								"sha1": "0B852BE84C8E5517FA82A403404DB3671A58D998"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "FRG-BN-0 CHR",
								"size": "128k",
								"crc": "596E47A6",
								"sha1": "6DCEAD13489ABDAEC55B882F29A2028A5BECC62B"
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
								"type": "3195A"
							}
						}
					]
				}
			]
		}
	]
};
